const GAME_W = 960
const GAME_H = 540
const GROUND_Y = 472

let gameState = "title"
let previousTime = 0
let elapsed = 0
let score = 0
let bestScore = 0
let round = 1
let messageTimer = 0
let screenShake = 0
let crashReason = "too fast"

let ship = null
let pad = null
let particles = []
let stars = []

let C_SKY
let C_SKY_LIGHT
let C_GROUND
let C_GROUND_LINE
let C_PANEL
let C_PAPER
let C_MUTED
let C_YELLOW
let C_RED
let C_BLUE
let C_GREEN
let C_DUST
let C_FLAME

let shipNose
let shipLeft
let shipRight
let shipBaseLeft
let shipBaseRight
let shipFinLeft
let shipFinRight
let shipFootLeft
let shipFootRight
let flameTip
let hillA
let hillB
let hillC

const rand = (minimum, maximum) => minimum + Math.random() * (maximum - minimum)
const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value))

const wrapAngle = value => {
  let angle = value
  while (angle > Math.PI) angle -= Math.PI * 2
  while (angle < -Math.PI) angle += Math.PI * 2
  return angle
}

const addParticles = (x, y, color, count, speed, upward) => {
  for (let i = 0; i < count; i += 1) {
    const angle = upward ? rand(Math.PI * 0.15, Math.PI * 0.85) : rand(0, Math.PI * 2)
    const life = rand(0.35, 0.9)
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * rand(speed * 0.35, speed),
      vy: Math.sin(angle) * rand(speed * 0.35, speed),
      life,
      maxLife: life,
      size: rand(2, 5),
      color
    })
  }
}

const resetRound = () => {
  const startOnLeft = round % 2 === 1
  pad = {
    x: startOnLeft ? rand(620, 790) : rand(80, 250),
    width: Math.max(72, 118 - round * 3)
  }

  ship = {
    x: startOnLeft ? 145 : 815,
    y: 105,
    vx: startOnLeft ? 24 : -24,
    vy: 0,
    angle: 0,
    angularVelocity: 0,
    fuel: 100,
    thrusting: false
  }

  particles = []
  messageTimer = 0
  screenShake = 0
  previousTime = 0
  gameState = "playing"
}

const startGame = () => {
  score = 0
  round = 1
  resetRound()
}

const landShip = () => {
  ship.y = GROUND_Y - 15
  ship.vx = 0
  ship.vy = 0
  ship.angularVelocity = 0
  ship.angle = 0
  ship.thrusting = false
  score += Math.round(100 + ship.fuel * 2)
  bestScore = Math.max(bestScore, score)
  messageTimer = 1.65
  gameState = "landed"
  addParticles(ship.x, GROUND_Y - 2, C_DUST, 16, 85, false)
}

const crashShip = reason => {
  crashReason = reason
  bestScore = Math.max(bestScore, score)
  gameState = "over"
  screenShake = 15
  addParticles(ship.x, ship.y, C_RED, 30, 220, false)
  addParticles(ship.x, ship.y, C_YELLOW, 18, 170, false)
}

const updateParticles = dt => {
  for (const particle of particles) {
    particle.x += particle.vx * dt
    particle.y += particle.vy * dt
    particle.vx *= Math.pow(0.18, dt)
    particle.vy = particle.vy * Math.pow(0.3, dt) + 30 * dt
    particle.life -= dt
  }
  particles = particles.filter(particle => particle.life > 0)
}

const updatePlaying = dt => {
  const gravity = 54 + Math.min(round, 8) * 3.5
  const enginePower = 116
  const turnPower = 3.8
  const turnDrag = Math.pow(0.045, dt)

  let turn = 0
  let thrust = false

  if (IsKeyDown(KEY_LEFT) || IsKeyDown(KEY_A)) turn -= 1
  if (IsKeyDown(KEY_RIGHT) || IsKeyDown(KEY_D)) turn += 1
  if (IsKeyDown(KEY_UP) || IsKeyDown(KEY_W) || IsKeyDown(KEY_SPACE)) thrust = true

  if (IsMouseButtonDown(MOUSE_BUTTON_LEFT)) {
    const mouseX = GetMouseX()
    const mouseY = GetMouseY()
    if (mouseX < ship.x - 18) turn -= 1
    if (mouseX > ship.x + 18) turn += 1
    if (mouseY < GROUND_Y) thrust = true
  }

  ship.angularVelocity += turn * turnPower * dt
  ship.angularVelocity *= turnDrag
  ship.angle = wrapAngle(ship.angle + ship.angularVelocity * dt)
  ship.thrusting = thrust && ship.fuel > 0

  if (ship.thrusting) {
    ship.vx += Math.sin(ship.angle) * enginePower * dt
    ship.vy -= Math.cos(ship.angle) * enginePower * dt
    ship.fuel = Math.max(0, ship.fuel - 13 * dt)

    if (Math.random() < 0.7) {
      const exhaustX = ship.x - Math.sin(ship.angle) * 13
      const exhaustY = ship.y + Math.cos(ship.angle) * 13
      particles.push({
        x: exhaustX,
        y: exhaustY,
        vx: -Math.sin(ship.angle) * rand(20, 45) + rand(-10, 10),
        vy: Math.cos(ship.angle) * rand(45, 85) + rand(-8, 8),
        life: rand(0.22, 0.48),
        maxLife: 0.48,
        size: rand(2, 4),
        color: Math.random() > 0.45 ? C_YELLOW : C_FLAME
      })
    }
  }

  const breeze = Math.sin(elapsed * 0.65 + round) * Math.min(round * 0.7, 4)
  ship.vx += breeze * dt
  ship.vy += gravity * dt
  ship.x += ship.vx * dt
  ship.y += ship.vy * dt

  if (ship.x < 13 || ship.x > GAME_W - 13 || ship.y < 14) {
    crashShip("missed the pad")
    return
  }

  if (ship.y + 15 >= GROUND_Y) {
    const onPad = ship.x > pad.x + 8 && ship.x < pad.x + pad.width - 8
    const upright = Math.abs(wrapAngle(ship.angle)) < 0.24
    const slowEnough = Math.abs(ship.vy) < 43 && Math.abs(ship.vx) < 32

    if (onPad && upright && slowEnough) {
      landShip()
    } else if (!onPad) {
      crashShip("missed the pad")
    } else if (!upright) {
      crashShip("a little crooked")
    } else {
      crashShip("too fast")
    }
  }
}

const updateGame = dt => {
  screenShake = Math.max(0, screenShake - dt * 25)
  updateParticles(dt)

  if (gameState === "playing") {
    updatePlaying(dt)
  } else if (gameState === "landed") {
    messageTimer -= dt
    if (messageTimer <= 0) {
      round += 1
      resetRound()
    }
  }
}

const drawCentered = (copy, y, size, color) => {
  DrawText(copy, Math.floor((GAME_W - MeasureText(copy, size)) / 2), y, size, color)
}

const drawHill = (left, peakX, peakY, right, color, shakeX, shakeY) => {
  hillA.x = left + shakeX
  hillA.y = GROUND_Y + shakeY
  hillB.x = peakX + shakeX
  hillB.y = peakY + shakeY
  hillC.x = right + shakeX
  hillC.y = GROUND_Y + shakeY
  DrawTriangle(hillA, hillB, hillC, color)
}

const drawBackground = (shakeX, shakeY) => {
  ClearBackground(C_SKY)
  DrawCircle(785 + Math.floor(shakeX * 0.15), 115 + Math.floor(shakeY * 0.15), 52, C_YELLOW)
  DrawCircle(805 + Math.floor(shakeX * 0.15), 100 + Math.floor(shakeY * 0.15), 52, C_SKY)

  for (const star of stars) {
    const size = 1 + Math.floor((Math.sin(elapsed * star.speed + star.phase) + 1) * 0.5)
    DrawCircle(star.x, star.y, size, star.bright ? C_YELLOW : C_MUTED)
  }

  drawHill(-80, 130, 275, 350, C_SKY_LIGHT, shakeX, shakeY)
  drawHill(180, 420, 245, 690, C_SKY_LIGHT, shakeX, shakeY)
  drawHill(540, 760, 290, 1040, C_SKY_LIGHT, shakeX, shakeY)
  drawHill(-120, 235, 355, 530, C_GROUND_LINE, shakeX, shakeY)
  drawHill(380, 660, 330, 1050, C_GROUND_LINE, shakeX, shakeY)

  DrawRectangle(0, GROUND_Y + shakeY, GAME_W, GAME_H - GROUND_Y, C_GROUND)
  DrawLine(0, GROUND_Y + shakeY, GAME_W, GROUND_Y + shakeY, C_PAPER)

  if (pad) {
    const padX = Math.floor(pad.x + shakeX)
    const padWidth = Math.floor(pad.width)
    DrawRectangle(padX, GROUND_Y - 5 + shakeY, padWidth, 7, C_YELLOW)
    DrawLine(padX, GROUND_Y + 3 + shakeY, padX - 13, GROUND_Y + 13 + shakeY, C_YELLOW)
    DrawLine(padX + padWidth, GROUND_Y + 3 + shakeY, padX + padWidth + 13, GROUND_Y + 13 + shakeY, C_YELLOW)
    DrawText("land here", padX + Math.floor((padWidth - MeasureText("land here", 10)) / 2), GROUND_Y + 13 + shakeY, 10, C_YELLOW)
  }
}

const drawShip = (shakeX, shakeY) => {
  if (!ship) return

  const x = ship.x + shakeX
  const y = ship.y + shakeY
  const upX = Math.sin(ship.angle)
  const upY = -Math.cos(ship.angle)
  const sideX = Math.cos(ship.angle)
  const sideY = Math.sin(ship.angle)

  shipNose.x = x + upX * 20
  shipNose.y = y + upY * 20
  shipLeft.x = x + upX * 6 - sideX * 8
  shipLeft.y = y + upY * 6 - sideY * 8
  shipRight.x = x + upX * 6 + sideX * 8
  shipRight.y = y + upY * 6 + sideY * 8
  shipBaseLeft.x = x - upX * 12 - sideX * 8
  shipBaseLeft.y = y - upY * 12 - sideY * 8
  shipBaseRight.x = x - upX * 12 + sideX * 8
  shipBaseRight.y = y - upY * 12 + sideY * 8
  shipFinLeft.x = x - upX * 12 - sideX * 15
  shipFinLeft.y = y - upY * 12 - sideY * 15
  shipFinRight.x = x - upX * 12 + sideX * 15
  shipFinRight.y = y - upY * 12 + sideY * 15
  shipFootLeft.x = x - upX * 15 - sideX * 12
  shipFootLeft.y = y - upY * 15 - sideY * 12
  shipFootRight.x = x - upX * 15 + sideX * 12
  shipFootRight.y = y - upY * 15 + sideY * 12

  if (ship.thrusting) {
    flameTip.x = x - upX * rand(27, 35)
    flameTip.y = y - upY * rand(27, 35)
    DrawTriangle(shipBaseLeft, flameTip, shipBaseRight, C_FLAME)
    DrawCircle(Math.floor(x - upX * 18), Math.floor(y - upY * 18), 3, C_YELLOW)
  }

  DrawLine(Math.floor(shipBaseLeft.x), Math.floor(shipBaseLeft.y), Math.floor(shipFootLeft.x), Math.floor(shipFootLeft.y), C_PAPER)
  DrawLine(Math.floor(shipBaseRight.x), Math.floor(shipBaseRight.y), Math.floor(shipFootRight.x), Math.floor(shipFootRight.y), C_PAPER)
  DrawLine(Math.floor(shipFootLeft.x - sideX * 3), Math.floor(shipFootLeft.y - sideY * 3), Math.floor(shipFootLeft.x + sideX * 3), Math.floor(shipFootLeft.y + sideY * 3), C_YELLOW)
  DrawLine(Math.floor(shipFootRight.x - sideX * 3), Math.floor(shipFootRight.y - sideY * 3), Math.floor(shipFootRight.x + sideX * 3), Math.floor(shipFootRight.y + sideY * 3), C_YELLOW)

  DrawTriangle(shipLeft, shipFinLeft, shipBaseLeft, C_BLUE)
  DrawTriangle(shipRight, shipBaseRight, shipFinRight, C_BLUE)
  DrawTriangle(shipLeft, shipBaseLeft, shipBaseRight, C_PAPER)
  DrawTriangle(shipLeft, shipBaseRight, shipRight, C_PAPER)
  DrawTriangle(shipNose, shipLeft, shipRight, C_YELLOW)

  DrawLine(Math.floor(shipNose.x), Math.floor(shipNose.y), Math.floor(shipLeft.x), Math.floor(shipLeft.y), C_PAPER)
  DrawLine(Math.floor(shipNose.x), Math.floor(shipNose.y), Math.floor(shipRight.x), Math.floor(shipRight.y), C_PAPER)
  DrawLine(Math.floor(shipLeft.x), Math.floor(shipLeft.y), Math.floor(shipBaseLeft.x), Math.floor(shipBaseLeft.y), C_BLUE)
  DrawLine(Math.floor(shipRight.x), Math.floor(shipRight.y), Math.floor(shipBaseRight.x), Math.floor(shipBaseRight.y), C_BLUE)
  DrawLine(Math.floor(shipBaseLeft.x), Math.floor(shipBaseLeft.y), Math.floor(shipBaseRight.x), Math.floor(shipBaseRight.y), C_YELLOW)

  const windowX = Math.floor(x + upX * 1)
  const windowY = Math.floor(y + upY * 1)
  DrawCircle(windowX, windowY, 5, C_BLUE)
  DrawCircle(windowX, windowY, 2, C_SKY)
  DrawCircleLines(windowX, windowY, 6, C_PAPER)
}

const drawParticles = (shakeX, shakeY) => {
  for (const particle of particles) {
    const amount = clamp(particle.life / particle.maxLife, 0, 1)
    DrawCircle(
      Math.floor(particle.x + shakeX),
      Math.floor(particle.y + shakeY),
      Math.max(1, Math.floor(particle.size * amount)),
      particle.color
    )
  }
}

const drawHud = () => {
  if (!ship) return

  DrawRectangle(0, 0, GAME_W, 58, C_PANEL)
  DrawLine(0, 57, GAME_W, 57, C_GROUND_LINE)
  DrawText("little ship", 18, 15, 20, C_PAPER)
  DrawText("landings", 235, 12, 9, C_MUTED)
  DrawText(String(round - 1).padStart(2, "0"), 235, 27, 20, C_YELLOW)
  DrawText("score", 340, 12, 9, C_MUTED)
  DrawText(String(score).padStart(5, "0"), 340, 27, 20, C_PAPER)

  DrawText("fuel", 485, 12, 9, C_MUTED)
  DrawRectangle(485, 31, 160, 10, C_GROUND_LINE)
  DrawRectangle(485, 31, Math.floor(160 * ship.fuel / 100), 10, ship.fuel > 22 ? C_GREEN : C_RED)
  DrawRectangleLines(485, 31, 160, 10, C_MUTED)

  const speed = Math.hypot(ship.vx, ship.vy)
  DrawText("speed", 690, 12, 9, C_MUTED)
  DrawText(Math.floor(speed).toString().padStart(3, "0"), 690, 27, 20, speed < 43 ? C_GREEN : C_RED)
  DrawText("upright", 817, 12, 9, C_MUTED)
  DrawText(Math.abs(wrapAngle(ship.angle)) < 0.24 ? "yes" : "not yet", 817, 29, 13, Math.abs(wrapAngle(ship.angle)) < 0.24 ? C_GREEN : C_YELLOW)
}

const drawTitle = () => {
  DrawRectangle(0, 0, GAME_W, GAME_H, C_PANEL)
  drawCentered("a small landing game made with raylib", 115, 12, C_YELLOW)
  drawCentered("little ship", 175, 72, C_PAPER)
  drawCentered("land on the yellow pad without coming in too fast", 285, 15, C_MUTED)
  drawCentered("left and right to turn     up or space for thrust", 325, 13, C_PAPER)
  drawCentered("press enter or click to play", 390, 16, C_YELLOW)
}

const drawLanded = () => {
  DrawRectangle(320, 198, 320, 112, C_PANEL)
  DrawRectangleLines(320, 198, 320, 112, C_YELLOW)
  drawCentered("nice landing", 222, 28, C_YELLOW)
  drawCentered("fuel left " + Math.floor(ship.fuel) + "%", 263, 13, C_PAPER)
}

const drawGameOver = () => {
  DrawRectangle(0, 0, GAME_W, GAME_H, C_PANEL)
  drawCentered("bonk.", 155, 58, C_RED)
  drawCentered(crashReason, 228, 16, C_PAPER)
  drawCentered("score " + String(score).padStart(5, "0"), 274, 20, C_YELLOW)
  drawCentered("best  " + String(bestScore).padStart(5, "0"), 306, 13, C_MUTED)
  drawCentered("press enter or click to try again", 374, 16, C_YELLOW)
}

const InitGame = async () => {
  InitWindow(GAME_W, GAME_H, "little ship")
  SetTargetFPS(60)
  SetExitKey(KEY_NULL)

  C_SKY = new Color({ r: 17, g: 23, b: 40, a: 255 })
  C_SKY_LIGHT = new Color({ r: 27, g: 37, b: 60, a: 255 })
  C_GROUND = new Color({ r: 31, g: 38, b: 30, a: 255 })
  C_GROUND_LINE = new Color({ r: 45, g: 58, b: 58, a: 255 })
  C_PANEL = new Color({ r: 10, g: 13, b: 21, a: 232 })
  C_PAPER = new Color({ r: 243, g: 240, b: 226, a: 255 })
  C_MUTED = new Color({ r: 124, g: 139, b: 153, a: 255 })
  C_YELLOW = new Color({ r: 246, g: 217, b: 27, a: 255 })
  C_RED = new Color({ r: 232, g: 74, b: 55, a: 255 })
  C_BLUE = new Color({ r: 75, g: 139, b: 247, a: 255 })
  C_GREEN = new Color({ r: 83, g: 206, b: 126, a: 255 })
  C_DUST = new Color({ r: 178, g: 169, b: 136, a: 255 })
  C_FLAME = new Color({ r: 244, g: 111, b: 52, a: 255 })

  shipNose = new Vector2()
  shipLeft = new Vector2()
  shipRight = new Vector2()
  shipBaseLeft = new Vector2()
  shipBaseRight = new Vector2()
  shipFinLeft = new Vector2()
  shipFinRight = new Vector2()
  shipFootLeft = new Vector2()
  shipFootRight = new Vector2()
  flameTip = new Vector2()
  hillA = new Vector2()
  hillB = new Vector2()
  hillC = new Vector2()

  for (let i = 0; i < 62; i += 1) {
    stars.push({
      x: rand(20, GAME_W - 20),
      y: rand(72, 330),
      speed: rand(0.7, 2.1),
      phase: rand(0, Math.PI * 2),
      bright: Math.random() > 0.84
    })
  }
}

const UpdateGame = timestamp => {
  const now = typeof timestamp === "number" ? timestamp / 1000 : 0
  let dt = previousTime === 0 ? 1 / 60 : now - previousTime
  previousTime = now
  dt = clamp(dt, 0, 0.033)
  elapsed += dt

  const startPressed = IsKeyPressed(KEY_ENTER) || IsMouseButtonPressed(MOUSE_BUTTON_LEFT)
  if ((gameState === "title" || gameState === "over") && startPressed) {
    startGame()
  }

  updateGame(dt)

  const shakeX = screenShake > 0 ? Math.floor(rand(-screenShake, screenShake)) : 0
  const shakeY = screenShake > 0 ? Math.floor(rand(-screenShake, screenShake)) : 0

  BeginDrawing()
  drawBackground(shakeX, shakeY)
  drawParticles(shakeX, shakeY)
  drawShip(shakeX, shakeY)

  if (gameState === "playing" || gameState === "landed") {
    drawHud()
  }
  if (gameState === "title") drawTitle()
  if (gameState === "landed") drawLanded()
  if (gameState === "over") drawGameOver()

  EndDrawing()
}
