import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createGithubSnapshot } from "../github-data.mjs";

const login = process.env.GITHUB_LOGIN || "RobertFlexx";
const token = process.env.GITHUB_TOKEN;
const outputPath = resolve(process.argv[2] || "github-data.json");

if (!token) {
  throw new Error("GITHUB_TOKEN is required to fetch pinned repositories.");
}

const query = `
  query PortfolioSnapshot($login: String!, $after: String) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            primaryLanguage { name }
          }
        }
      }
      publicRepositories: repositories(
        first: 1
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        totalCount
      }
      sourceRepositories: repositories(
        first: 100
        after: $after
        ownerAffiliations: OWNER
        privacy: PUBLIC
        isFork: false
      ) {
        nodes {
          name
          description
          url
          stargazerCount
          primaryLanguage { name }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

async function requestSnapshot(after = null) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "RobertFlexx-Portfolio"
    },
    body: JSON.stringify({ query, variables: { login, after } })
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed (${response.status}).`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    throw new Error(
      `GitHub GraphQL error: ${payload.errors.map(({ message }) => message).join("; ")}`
    );
  }

  if (!payload.data?.user) {
    throw new Error(`GitHub user ${login} was not found.`);
  }

  return payload.data.user;
}

function normalizeRepository(repository) {
  return {
    name: repository.name,
    description: repository.description || "",
    language: repository.primaryLanguage?.name || "Other",
    stars: repository.stargazerCount,
    url: repository.url
  };
}

const firstPage = await requestSnapshot();
const repositories = [...firstPage.sourceRepositories.nodes.filter(Boolean)];
let pageInfo = firstPage.sourceRepositories.pageInfo;

while (pageInfo.hasNextPage) {
  const page = await requestSnapshot(pageInfo.endCursor);
  repositories.push(...page.sourceRepositories.nodes.filter(Boolean));
  pageInfo = page.sourceRepositories.pageInfo;
}

const normalizedRepositories = repositories.map(normalizeRepository);
const snapshot = createGithubSnapshot({
  publicRepoCount: firstPage.publicRepositories.totalCount,
  pinned: firstPage.pinnedItems.nodes.filter(Boolean).map(normalizeRepository),
  repositories: normalizedRepositories
});

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
console.log(
  `Wrote ${snapshot.featured.length} featured projects and ${normalizedRepositories.length} repositories to ${outputPath}`
);
