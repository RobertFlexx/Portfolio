import{raylib_run_string}from'./raylib.js'
export default class RaylibComponent extends HTMLElement{constructor(){super()
this.style.display='none'
this.shadow=this.attachShadow({mode:'open'})
this.canvas=document.createElement('canvas')
window.addEventListener('resize',this.onResize.bind(this))
this.shadow.innerHTML=`
<style>
canvas.landscape {
  width: 100%;
  height: auto;
}
canvas.portrait {
  width: 100%;
  height: auto;
}
canvas {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  object-fit: contain;
  background: #090b12;
  touch-action: none;
}
</style>
`
this.shadow.appendChild(this.canvas)
this.canvas.addEventListener('contextmenu',e=>e.preventDefault())
this.started=false}
connectedCallback(){if(!this.started){this.started=true
this.start(this.getAttribute('src'))}}
onResize(){}
static get observedAttributes(){return['src','fill']}
attributeChangedCallback(name,oldValue,newValue){if(name==='fill'){this.fill=typeof newValue!=='undefined'
this.onResize()}
if(name==='src'){this.src=newValue
if(this.isConnected&&this.started&&oldValue!==newValue){this.start(this.src)}}}
async start(src){let userCode=this.textContent
if(src){userCode=await fetch(src).then(r=>r.text())}
raylib_run_string(this.canvas,userCode)
this.style.display='block'}}
