import Module from'./raylib_emscripten.js'
import RaylibComponent from'./raylib_wc.js'
document.addEventListener('DOMContentLoaded',()=>{window.customElements.define('raylib-game',RaylibComponent)})
const importLocation=document?.location?.toString()
export async function raylib_run(canvas,userInit,userUpdate,wasmBinary){const raylib={}
if(!wasmBinary){wasmBinary=new Uint8Array(await fetch(import.meta.url.replace('raylib.js','raylib.wasm')).then(r=>r.arrayBuffer()))}
const mod=await Module({canvas,wasmBinary})
raylib.mod=mod
raylib.Vector2=class Vector2{constructor(init={},_address){this._size=8
this._address=_address||mod._malloc(this._size)
this.x=init.x||0
this.y=init.y||0}
get x(){return mod.getValue(this._address+0,'float')}
set x(x){mod.setValue(this._address+0,x,'float')}
get y(){return mod.getValue(this._address+4,'float')}
set y(y){mod.setValue(this._address+4,y,'float')}}
raylib.Vector3=class Vector3{constructor(init={},_address){this._size=12
this._address=_address||mod._malloc(this._size)
this.x=init.x||0
this.y=init.y||0
this.z=init.z||0}
get x(){return mod.getValue(this._address+0,'float')}
set x(x){mod.setValue(this._address+0,x,'float')}
get y(){return mod.getValue(this._address+4,'float')}
set y(y){mod.setValue(this._address+4,y,'float')}
get z(){return mod.getValue(this._address+8,'float')}
set z(z){mod.setValue(this._address+8,z,'float')}}
raylib.Vector4=class Vector4{constructor(init={},_address){this._size=16
this._address=_address||mod._malloc(this._size)
this.x=init.x||0
this.y=init.y||0
this.z=init.z||0
this.w=init.w||0}
get x(){return mod.getValue(this._address+0,'float')}
set x(x){mod.setValue(this._address+0,x,'float')}
get y(){return mod.getValue(this._address+4,'float')}
set y(y){mod.setValue(this._address+4,y,'float')}
get z(){return mod.getValue(this._address+8,'float')}
set z(z){mod.setValue(this._address+8,z,'float')}
get w(){return mod.getValue(this._address+12,'float')}
set w(w){mod.setValue(this._address+12,w,'float')}}
raylib.Matrix=class Matrix{constructor(init={},_address){this._size=64
this._address=_address||mod._malloc(this._size)
this.m0=init.m0||0
this.m4=init.m4||0
this.m8=init.m8||0
this.m12=init.m12||0
this.m1=init.m1||0
this.m5=init.m5||0
this.m9=init.m9||0
this.m13=init.m13||0
this.m2=init.m2||0
this.m6=init.m6||0
this.m10=init.m10||0
this.m14=init.m14||0
this.m3=init.m3||0
this.m7=init.m7||0
this.m11=init.m11||0
this.m15=init.m15||0}
get m0(){return mod.getValue(this._address+0,'float')}
set m0(m0){mod.setValue(this._address+0,m0,'float')}
get m4(){return mod.getValue(this._address+4,'float')}
set m4(m4){mod.setValue(this._address+4,m4,'float')}
get m8(){return mod.getValue(this._address+8,'float')}
set m8(m8){mod.setValue(this._address+8,m8,'float')}
get m12(){return mod.getValue(this._address+12,'float')}
set m12(m12){mod.setValue(this._address+12,m12,'float')}
get m1(){return mod.getValue(this._address+16,'float')}
set m1(m1){mod.setValue(this._address+16,m1,'float')}
get m5(){return mod.getValue(this._address+20,'float')}
set m5(m5){mod.setValue(this._address+20,m5,'float')}
get m9(){return mod.getValue(this._address+24,'float')}
set m9(m9){mod.setValue(this._address+24,m9,'float')}
get m13(){return mod.getValue(this._address+28,'float')}
set m13(m13){mod.setValue(this._address+28,m13,'float')}
get m2(){return mod.getValue(this._address+32,'float')}
set m2(m2){mod.setValue(this._address+32,m2,'float')}
get m6(){return mod.getValue(this._address+36,'float')}
set m6(m6){mod.setValue(this._address+36,m6,'float')}
get m10(){return mod.getValue(this._address+40,'float')}
set m10(m10){mod.setValue(this._address+40,m10,'float')}
get m14(){return mod.getValue(this._address+44,'float')}
set m14(m14){mod.setValue(this._address+44,m14,'float')}
get m3(){return mod.getValue(this._address+48,'float')}
set m3(m3){mod.setValue(this._address+48,m3,'float')}
get m7(){return mod.getValue(this._address+52,'float')}
set m7(m7){mod.setValue(this._address+52,m7,'float')}
get m11(){return mod.getValue(this._address+56,'float')}
set m11(m11){mod.setValue(this._address+56,m11,'float')}
get m15(){return mod.getValue(this._address+60,'float')}
set m15(m15){mod.setValue(this._address+60,m15,'float')}}
raylib.Color=class Color{constructor(init={},_address){this._size=4
this._address=_address||mod._malloc(this._size)
this.r=init.r||0
this.g=init.g||0
this.b=init.b||0
this.a=init.a||0}
get r(){return mod.HEAPU8[this._address+0]}
set r(r){mod.HEAPU8[this._address+0]=r}
get g(){return mod.HEAPU8[this._address+1]}
set g(g){mod.HEAPU8[this._address+1]=g}
get b(){return mod.HEAPU8[this._address+2]}
set b(b){mod.HEAPU8[this._address+2]=b}
get a(){return mod.HEAPU8[this._address+3]}
set a(a){mod.HEAPU8[this._address+3]=a}}
raylib.Rectangle=class Rectangle{constructor(init={},_address){this._size=16
this._address=_address||mod._malloc(this._size)
this.x=init.x||0
this.y=init.y||0
this.width=init.width||0
this.height=init.height||0}
get x(){return mod.getValue(this._address+0,'float')}
set x(x){mod.setValue(this._address+0,x,'float')}
get y(){return mod.getValue(this._address+4,'float')}
set y(y){mod.setValue(this._address+4,y,'float')}
get width(){return mod.getValue(this._address+8,'float')}
set width(width){mod.setValue(this._address+8,width,'float')}
get height(){return mod.getValue(this._address+12,'float')}
set height(height){mod.setValue(this._address+12,height,'float')}}
raylib.Image=class Image{constructor(init={},_address){this._size=20
this._address=_address||mod._malloc(this._size)
this.data=init.data||0
this.width=init.width||0
this.height=init.height||0
this.mipmaps=init.mipmaps||0
this.format=init.format||0}
get data(){return mod.getValue(this._address+0,'*')}
set data(data){mod.setValue(this._address+0,data,'*')}
get width(){return mod.getValue(this._address+4,'i32')}
set width(width){mod.setValue(this._address+4,width,'i32')}
get height(){return mod.getValue(this._address+8,'i32')}
set height(height){mod.setValue(this._address+8,height,'i32')}
get mipmaps(){return mod.getValue(this._address+12,'i32')}
set mipmaps(mipmaps){mod.setValue(this._address+12,mipmaps,'i32')}
get format(){return mod.getValue(this._address+16,'i32')}
set format(format){mod.setValue(this._address+16,format,'i32')}}
raylib.Texture=class Texture{constructor(init={},_address){this._size=20
this._address=_address||mod._malloc(this._size)
this.id=init.id||0
this.width=init.width||0
this.height=init.height||0
this.mipmaps=init.mipmaps||0
this.format=init.format||0}
get id(){return mod.HEAPU32[this._address+0]}
set id(id){mod.HEAPU32[this._address+0]=id}
get width(){return mod.getValue(this._address+4,'i32')}
set width(width){mod.setValue(this._address+4,width,'i32')}
get height(){return mod.getValue(this._address+8,'i32')}
set height(height){mod.setValue(this._address+8,height,'i32')}
get mipmaps(){return mod.getValue(this._address+12,'i32')}
set mipmaps(mipmaps){mod.setValue(this._address+12,mipmaps,'i32')}
get format(){return mod.getValue(this._address+16,'i32')}
set format(format){mod.setValue(this._address+16,format,'i32')}}
raylib.RenderTexture=class RenderTexture{constructor(init={},_address){this._size=44
this._address=_address||mod._malloc(this._size)
this.id=init.id||0
this.texture=new raylib.Texture(init.texture||{},this._address+4)
this.depth=new raylib.Texture(init.depth||{},this._address+24)}
get id(){return mod.HEAPU32[this._address+0]}
set id(id){mod.HEAPU32[this._address+0]=id}}
raylib.NPatchInfo=class NPatchInfo{constructor(init={},_address){this._size=36
this._address=_address||mod._malloc(this._size)
this.source=new raylib.Rectangle(init.source||{},this._address+0)
this.left=init.left||0
this.top=init.top||0
this.right=init.right||0
this.bottom=init.bottom||0
this.layout=init.layout||0}
get left(){return mod.getValue(this._address+16,'i32')}
set left(left){mod.setValue(this._address+16,left,'i32')}
get top(){return mod.getValue(this._address+20,'i32')}
set top(top){mod.setValue(this._address+20,top,'i32')}
get right(){return mod.getValue(this._address+24,'i32')}
set right(right){mod.setValue(this._address+24,right,'i32')}
get bottom(){return mod.getValue(this._address+28,'i32')}
set bottom(bottom){mod.setValue(this._address+28,bottom,'i32')}
get layout(){return mod.getValue(this._address+32,'i32')}
set layout(layout){mod.setValue(this._address+32,layout,'i32')}}
raylib.GlyphInfo=class GlyphInfo{constructor(init={},_address){this._size=36
this._address=_address||mod._malloc(this._size)
this.value=init.value||0
this.offsetX=init.offsetX||0
this.offsetY=init.offsetY||0
this.advanceX=init.advanceX||0
this.image=new raylib.Image(init.image||{},this._address+16)}
get value(){return mod.getValue(this._address+0,'i32')}
set value(value){mod.setValue(this._address+0,value,'i32')}
get offsetX(){return mod.getValue(this._address+4,'i32')}
set offsetX(offsetX){mod.setValue(this._address+4,offsetX,'i32')}
get offsetY(){return mod.getValue(this._address+8,'i32')}
set offsetY(offsetY){mod.setValue(this._address+8,offsetY,'i32')}
get advanceX(){return mod.getValue(this._address+12,'i32')}
set advanceX(advanceX){mod.setValue(this._address+12,advanceX,'i32')}}
raylib.Font=class Font{constructor(init={},_address){this._size=40
this._address=_address||mod._malloc(this._size)
this.baseSize=init.baseSize||0
this.glyphCount=init.glyphCount||0
this.glyphPadding=init.glyphPadding||0
this.texture=new raylib.Texture2D(init.texture||{},this._address+12)
this.recs=new raylib.Rectangle(init.recs||{},this._address+32)
this.glyphs=new raylib.GlyphInfo(init.glyphs||{},this._address+36)}
get baseSize(){return mod.getValue(this._address+0,'i32')}
set baseSize(baseSize){mod.setValue(this._address+0,baseSize,'i32')}
get glyphCount(){return mod.getValue(this._address+4,'i32')}
set glyphCount(glyphCount){mod.setValue(this._address+4,glyphCount,'i32')}
get glyphPadding(){return mod.getValue(this._address+8,'i32')}
set glyphPadding(glyphPadding){mod.setValue(this._address+8,glyphPadding,'i32')}}
raylib.Camera3D=class Camera3D{constructor(init={},_address){this._size=44
this._address=_address||mod._malloc(this._size)
this.position=new raylib.Vector3(init.position||{},this._address+0)
this.target=new raylib.Vector3(init.target||{},this._address+12)
this.up=new raylib.Vector3(init.up||{},this._address+24)
this.fovy=init.fovy||0
this.projection=init.projection||0}
get fovy(){return mod.getValue(this._address+36,'float')}
set fovy(fovy){mod.setValue(this._address+36,fovy,'float')}
get projection(){return mod.getValue(this._address+40,'i32')}
set projection(projection){mod.setValue(this._address+40,projection,'i32')}}
raylib.Camera2D=class Camera2D{constructor(init={},_address){this._size=24
this._address=_address||mod._malloc(this._size)
this.offset=new raylib.Vector2(init.offset||{},this._address+0)
this.target=new raylib.Vector2(init.target||{},this._address+8)
this.rotation=init.rotation||0
this.zoom=init.zoom||0}
get rotation(){return mod.getValue(this._address+16,'float')}
set rotation(rotation){mod.setValue(this._address+16,rotation,'float')}
get zoom(){return mod.getValue(this._address+20,'float')}
set zoom(zoom){mod.setValue(this._address+20,zoom,'float')}}
raylib.Mesh=class Mesh{constructor(init={},_address){this._size=68
this._address=_address||mod._malloc(this._size)
this.vertexCount=init.vertexCount||0
this.triangleCount=init.triangleCount||0
this.vertices=init.vertices||0
this.texcoords=init.texcoords||0
this.texcoords2=init.texcoords2||0
this.normals=init.normals||0
this.tangents=init.tangents||0
this.colors=init.colors||0
this.indices=init.indices||0
this.animVertices=init.animVertices||0
this.animNormals=init.animNormals||0
this.boneIds=init.boneIds||0
this.boneWeights=init.boneWeights||0
this.boneMatrices=new raylib.Matrix(init.boneMatrices||{},this._address+52)
this.boneCount=init.boneCount||0
this.vaoId=init.vaoId||0
this.vboId=init.vboId||0}
get vertexCount(){return mod.getValue(this._address+0,'i32')}
set vertexCount(vertexCount){mod.setValue(this._address+0,vertexCount,'i32')}
get triangleCount(){return mod.getValue(this._address+4,'i32')}
set triangleCount(triangleCount){mod.setValue(this._address+4,triangleCount,'i32')}
get vertices(){return mod.getValue(this._address+8,'*')}
set vertices(vertices){mod.setValue(this._address+8,vertices,'*')}
get texcoords(){return mod.getValue(this._address+12,'*')}
set texcoords(texcoords){mod.setValue(this._address+12,texcoords,'*')}
get texcoords2(){return mod.getValue(this._address+16,'*')}
set texcoords2(texcoords2){mod.setValue(this._address+16,texcoords2,'*')}
get normals(){return mod.getValue(this._address+20,'*')}
set normals(normals){mod.setValue(this._address+20,normals,'*')}
get tangents(){return mod.getValue(this._address+24,'*')}
set tangents(tangents){mod.setValue(this._address+24,tangents,'*')}
get colors(){return mod.getValue(this._address+28,'*')}
set colors(colors){mod.setValue(this._address+28,colors,'*')}
get indices(){return mod.getValue(this._address+32,'*')}
set indices(indices){mod.setValue(this._address+32,indices,'*')}
get animVertices(){return mod.getValue(this._address+36,'*')}
set animVertices(animVertices){mod.setValue(this._address+36,animVertices,'*')}
get animNormals(){return mod.getValue(this._address+40,'*')}
set animNormals(animNormals){mod.setValue(this._address+40,animNormals,'*')}
get boneIds(){return mod.getValue(this._address+44,'*')}
set boneIds(boneIds){mod.setValue(this._address+44,boneIds,'*')}
get boneWeights(){return mod.getValue(this._address+48,'*')}
set boneWeights(boneWeights){mod.setValue(this._address+48,boneWeights,'*')}
get boneCount(){return mod.getValue(this._address+56,'i32')}
set boneCount(boneCount){mod.setValue(this._address+56,boneCount,'i32')}
get vaoId(){return mod.HEAPU32[this._address+60]}
set vaoId(vaoId){mod.HEAPU32[this._address+60]=vaoId}
get vboId(){return mod.getValue(this._address+64,'*')}
set vboId(vboId){mod.setValue(this._address+64,vboId,'*')}}
raylib.Shader=class Shader{constructor(init={},_address){this._size=8
this._address=_address||mod._malloc(this._size)
this.id=init.id||0
this.locs=init.locs||0}
get id(){return mod.HEAPU32[this._address+0]}
set id(id){mod.HEAPU32[this._address+0]=id}
get locs(){return mod.getValue(this._address+4,'*')}
set locs(locs){mod.setValue(this._address+4,locs,'*')}}
raylib.MaterialMap=class MaterialMap{constructor(init={},_address){this._size=28
this._address=_address||mod._malloc(this._size)
this.texture=new raylib.Texture2D(init.texture||{},this._address+0)
this.color=new raylib.Color(init.color||{},this._address+20)
this.value=init.value||0}
get value(){return mod.getValue(this._address+24,'float')}
set value(value){mod.setValue(this._address+24,value,'float')}}
raylib.Material=class Material{constructor(init={},_address){this._size=28
this._address=_address||mod._malloc(this._size)
this.shader=new raylib.Shader(init.shader||{},this._address+0)
this.maps=new raylib.MaterialMap(init.maps||{},this._address+8)
this.params=init.params||[0,0,0,0]}
get params(){return mod.getValue(this._address+12,'*')}
set params(params){mod.setValue(this._address+12,params,'*')}}
raylib.Transform=class Transform{constructor(init={},_address){this._size=40
this._address=_address||mod._malloc(this._size)
this.translation=new raylib.Vector3(init.translation||{},this._address+0)
this.rotation=new raylib.Quaternion(init.rotation||{},this._address+12)
this.scale=new raylib.Vector3(init.scale||{},this._address+28)}}
raylib.BoneInfo=class BoneInfo{constructor(init={},_address){this._size=36
this._address=_address||mod._malloc(this._size)
this.name=init.name||''
this.parent=init.parent||0}
get name(){return mod.UTF8ToString(this._address+0)}
set name(name){mod.stringToUTF8(this._address+0,name)}
get parent(){return mod.getValue(this._address+32,'i32')}
set parent(parent){mod.setValue(this._address+32,parent,'i32')}}
raylib.Model=class Model{constructor(init={},_address){this._size=96
this._address=_address||mod._malloc(this._size)
this.transform=new raylib.Matrix(init.transform||{},this._address+0)
this.meshCount=init.meshCount||0
this.materialCount=init.materialCount||0
this.meshes=new raylib.Mesh(init.meshes||{},this._address+72)
this.materials=new raylib.Material(init.materials||{},this._address+76)
this.meshMaterial=init.meshMaterial||0
this.boneCount=init.boneCount||0
this.bones=new raylib.BoneInfo(init.bones||{},this._address+88)
this.bindPose=new raylib.Transform(init.bindPose||{},this._address+92)}
get meshCount(){return mod.getValue(this._address+64,'i32')}
set meshCount(meshCount){mod.setValue(this._address+64,meshCount,'i32')}
get materialCount(){return mod.getValue(this._address+68,'i32')}
set materialCount(materialCount){mod.setValue(this._address+68,materialCount,'i32')}
get meshMaterial(){return mod.getValue(this._address+80,'*')}
set meshMaterial(meshMaterial){mod.setValue(this._address+80,meshMaterial,'*')}
get boneCount(){return mod.getValue(this._address+84,'i32')}
set boneCount(boneCount){mod.setValue(this._address+84,boneCount,'i32')}}
raylib.ModelAnimation=class ModelAnimation{constructor(init={},_address){this._size=48
this._address=_address||mod._malloc(this._size)
this.boneCount=init.boneCount||0
this.frameCount=init.frameCount||0
this.bones=new raylib.BoneInfo(init.bones||{},this._address+8)
this.framePoses=init.framePoses||new raylib.Transform()
this.name=init.name||''}
get boneCount(){return mod.getValue(this._address+0,'i32')}
set boneCount(boneCount){mod.setValue(this._address+0,boneCount,'i32')}
get frameCount(){return mod.getValue(this._address+4,'i32')}
set frameCount(frameCount){mod.setValue(this._address+4,frameCount,'i32')}
get framePoses(){return mod.getValue(this._address+12,'*')}
set framePoses(framePoses){mod.setValue(this._address+12,framePoses,'*')}
get name(){return mod.UTF8ToString(this._address+16)}
set name(name){mod.stringToUTF8(this._address+16,name)}}
raylib.Ray=class Ray{constructor(init={},_address){this._size=24
this._address=_address||mod._malloc(this._size)
this.position=new raylib.Vector3(init.position||{},this._address+0)
this.direction=new raylib.Vector3(init.direction||{},this._address+12)}}
raylib.RayCollision=class RayCollision{constructor(init={},_address){this._size=29
this._address=_address||mod._malloc(this._size)
this.hit=init.hit||0
this.distance=init.distance||0
this.point=new raylib.Vector3(init.point||{},this._address+5)
this.normal=new raylib.Vector3(init.normal||{},this._address+17)}
get hit(){return mod.getValue(this._address+0,'i1')}
set hit(hit){mod.setValue(this._address+0,hit,'i1')}
get distance(){return mod.getValue(this._address+1,'float')}
set distance(distance){mod.setValue(this._address+1,distance,'float')}}
raylib.BoundingBox=class BoundingBox{constructor(init={},_address){this._size=24
this._address=_address||mod._malloc(this._size)
this.min=new raylib.Vector3(init.min||{},this._address+0)
this.max=new raylib.Vector3(init.max||{},this._address+12)}}
raylib.Wave=class Wave{constructor(init={},_address){this._size=20
this._address=_address||mod._malloc(this._size)
this.frameCount=init.frameCount||0
this.sampleRate=init.sampleRate||0
this.sampleSize=init.sampleSize||0
this.channels=init.channels||0
this.data=init.data||0}
get frameCount(){return mod.HEAPU32[this._address+0]}
set frameCount(frameCount){mod.HEAPU32[this._address+0]=frameCount}
get sampleRate(){return mod.HEAPU32[this._address+4]}
set sampleRate(sampleRate){mod.HEAPU32[this._address+4]=sampleRate}
get sampleSize(){return mod.HEAPU32[this._address+8]}
set sampleSize(sampleSize){mod.HEAPU32[this._address+8]=sampleSize}
get channels(){return mod.HEAPU32[this._address+12]}
set channels(channels){mod.HEAPU32[this._address+12]=channels}
get data(){return mod.getValue(this._address+16,'*')}
set data(data){mod.setValue(this._address+16,data,'*')}}
raylib.AudioStream=class AudioStream{constructor(init={},_address){this._size=20
this._address=_address||mod._malloc(this._size)
this.buffer=init.buffer||0
this.processor=init.processor||0
this.sampleRate=init.sampleRate||0
this.sampleSize=init.sampleSize||0
this.channels=init.channels||0}
get buffer(){return mod.getValue(this._address+0,'*')}
set buffer(buffer){mod.setValue(this._address+0,buffer,'*')}
get processor(){return mod.getValue(this._address+4,'*')}
set processor(processor){mod.setValue(this._address+4,processor,'*')}
get sampleRate(){return mod.HEAPU32[this._address+8]}
set sampleRate(sampleRate){mod.HEAPU32[this._address+8]=sampleRate}
get sampleSize(){return mod.HEAPU32[this._address+12]}
set sampleSize(sampleSize){mod.HEAPU32[this._address+12]=sampleSize}
get channels(){return mod.HEAPU32[this._address+16]}
set channels(channels){mod.HEAPU32[this._address+16]=channels}}
raylib.Sound=class Sound{constructor(init={},_address){this._size=24
this._address=_address||mod._malloc(this._size)
this.stream=new raylib.AudioStream(init.stream||{},this._address+0)
this.frameCount=init.frameCount||0}
get frameCount(){return mod.HEAPU32[this._address+20]}
set frameCount(frameCount){mod.HEAPU32[this._address+20]=frameCount}}
raylib.Music=class Music{constructor(init={},_address){this._size=33
this._address=_address||mod._malloc(this._size)
this.stream=new raylib.AudioStream(init.stream||{},this._address+0)
this.frameCount=init.frameCount||0
this.looping=init.looping||0
this.ctxType=init.ctxType||0
this.ctxData=init.ctxData||0}
get frameCount(){return mod.HEAPU32[this._address+20]}
set frameCount(frameCount){mod.HEAPU32[this._address+20]=frameCount}
get looping(){return mod.getValue(this._address+24,'i1')}
set looping(looping){mod.setValue(this._address+24,looping,'i1')}
get ctxType(){return mod.getValue(this._address+25,'i32')}
set ctxType(ctxType){mod.setValue(this._address+25,ctxType,'i32')}
get ctxData(){return mod.getValue(this._address+29,'*')}
set ctxData(ctxData){mod.setValue(this._address+29,ctxData,'*')}}
raylib.VrDeviceInfo=class VrDeviceInfo{constructor(init={},_address){this._size=60
this._address=_address||mod._malloc(this._size)
this.hResolution=init.hResolution||0
this.vResolution=init.vResolution||0
this.hScreenSize=init.hScreenSize||0
this.vScreenSize=init.vScreenSize||0
this.eyeToScreenDistance=init.eyeToScreenDistance||0
this.lensSeparationDistance=init.lensSeparationDistance||0
this.interpupillaryDistance=init.interpupillaryDistance||0
this.lensDistortionValues=init.lensDistortionValues||[0,0,0,0]
this.chromaAbCorrection=init.chromaAbCorrection||[0,0,0,0]}
get hResolution(){return mod.getValue(this._address+0,'i32')}
set hResolution(hResolution){mod.setValue(this._address+0,hResolution,'i32')}
get vResolution(){return mod.getValue(this._address+4,'i32')}
set vResolution(vResolution){mod.setValue(this._address+4,vResolution,'i32')}
get hScreenSize(){return mod.getValue(this._address+8,'float')}
set hScreenSize(hScreenSize){mod.setValue(this._address+8,hScreenSize,'float')}
get vScreenSize(){return mod.getValue(this._address+12,'float')}
set vScreenSize(vScreenSize){mod.setValue(this._address+12,vScreenSize,'float')}
get eyeToScreenDistance(){return mod.getValue(this._address+16,'float')}
set eyeToScreenDistance(eyeToScreenDistance){mod.setValue(this._address+16,eyeToScreenDistance,'float')}
get lensSeparationDistance(){return mod.getValue(this._address+20,'float')}
set lensSeparationDistance(lensSeparationDistance){mod.setValue(this._address+20,lensSeparationDistance,'float')}
get interpupillaryDistance(){return mod.getValue(this._address+24,'float')}
set interpupillaryDistance(interpupillaryDistance){mod.setValue(this._address+24,interpupillaryDistance,'float')}
get lensDistortionValues(){return mod.getValue(this._address+28,'*')}
set lensDistortionValues(lensDistortionValues){mod.setValue(this._address+28,lensDistortionValues,'*')}
get chromaAbCorrection(){return mod.getValue(this._address+44,'*')}
set chromaAbCorrection(chromaAbCorrection){mod.setValue(this._address+44,chromaAbCorrection,'*')}}
raylib.VrStereoConfig=class VrStereoConfig{constructor(init={},_address){this._size=304
this._address=_address||mod._malloc(this._size)
this.projection=init.projection||[new raylib.Matrix(),new raylib.Matrix()]
this.viewOffset=init.viewOffset||[new raylib.Matrix(),new raylib.Matrix()]
this.leftLensCenter=init.leftLensCenter||[0,0]
this.rightLensCenter=init.rightLensCenter||[0,0]
this.leftScreenCenter=init.leftScreenCenter||[0,0]
this.rightScreenCenter=init.rightScreenCenter||[0,0]
this.scale=init.scale||[0,0]
this.scaleIn=init.scaleIn||[0,0]}
get projection(){return mod.getValue(this._address+0,'*')}
set projection(projection){mod.setValue(this._address+0,projection,'*')}
get viewOffset(){return mod.getValue(this._address+128,'*')}
set viewOffset(viewOffset){mod.setValue(this._address+128,viewOffset,'*')}
get leftLensCenter(){return mod.getValue(this._address+256,'*')}
set leftLensCenter(leftLensCenter){mod.setValue(this._address+256,leftLensCenter,'*')}
get rightLensCenter(){return mod.getValue(this._address+264,'*')}
set rightLensCenter(rightLensCenter){mod.setValue(this._address+264,rightLensCenter,'*')}
get leftScreenCenter(){return mod.getValue(this._address+272,'*')}
set leftScreenCenter(leftScreenCenter){mod.setValue(this._address+272,leftScreenCenter,'*')}
get rightScreenCenter(){return mod.getValue(this._address+280,'*')}
set rightScreenCenter(rightScreenCenter){mod.setValue(this._address+280,rightScreenCenter,'*')}
get scale(){return mod.getValue(this._address+288,'*')}
set scale(scale){mod.setValue(this._address+288,scale,'*')}
get scaleIn(){return mod.getValue(this._address+296,'*')}
set scaleIn(scaleIn){mod.setValue(this._address+296,scaleIn,'*')}}
raylib.FilePathList=class FilePathList{constructor(init={},_address){this._size=12
this._address=_address||mod._malloc(this._size)
this.capacity=init.capacity||0
this.count=init.count||0
this.paths=init.paths||0}
get capacity(){return mod.HEAPU32[this._address+0]}
set capacity(capacity){mod.HEAPU32[this._address+0]=capacity}
get count(){return mod.HEAPU32[this._address+4]}
set count(count){mod.HEAPU32[this._address+4]=count}
get paths(){return mod.getValue(this._address+8,'*')}
set paths(paths){mod.setValue(this._address+8,paths,'*')}}
raylib.AutomationEvent=class AutomationEvent{constructor(init={},_address){this._size=24
this._address=_address||mod._malloc(this._size)
this.frame=init.frame||0
this.type=init.type||0
this.params=init.params||[0,0,0,0]}
get frame(){return mod.HEAPU32[this._address+0]}
set frame(frame){mod.HEAPU32[this._address+0]=frame}
get type(){return mod.HEAPU32[this._address+4]}
set type(type){mod.HEAPU32[this._address+4]=type}
get params(){return mod.getValue(this._address+8,'*')}
set params(params){mod.setValue(this._address+8,params,'*')}}
raylib.AutomationEventList=class AutomationEventList{constructor(init={},_address){this._size=12
this._address=_address||mod._malloc(this._size)
this.capacity=init.capacity||0
this.count=init.count||0
this.events=new raylib.AutomationEvent(init.events||{},this._address+8)}
get capacity(){return mod.HEAPU32[this._address+0]}
set capacity(capacity){mod.HEAPU32[this._address+0]=capacity}
get count(){return mod.HEAPU32[this._address+4]}
set count(count){mod.HEAPU32[this._address+4]=count}}
raylib.Texture2D=class Texture2D{constructor(init={},_address){this._size=20
this._address=_address||mod._malloc(this._size)
this.id=init.id||0
this.width=init.width||0
this.height=init.height||0
this.mipmaps=init.mipmaps||0
this.format=init.format||0}
get id(){return mod.HEAPU32[this._address+0]}
set id(id){mod.HEAPU32[this._address+0]=id}
get width(){return mod.getValue(this._address+4,'i32')}
set width(width){mod.setValue(this._address+4,width,'i32')}
get height(){return mod.getValue(this._address+8,'i32')}
set height(height){mod.setValue(this._address+8,height,'i32')}
get mipmaps(){return mod.getValue(this._address+12,'i32')}
set mipmaps(mipmaps){mod.setValue(this._address+12,mipmaps,'i32')}
get format(){return mod.getValue(this._address+16,'i32')}
set format(format){mod.setValue(this._address+16,format,'i32')}}
raylib.GuiStyleProp=class GuiStyleProp{constructor(init={},_address){this._size=4
this._address=_address||mod._malloc(this._size)
this.controlId=init.controlId||0
this.propertyId=init.propertyId||0
this.propertyValue=init.propertyValue||0}
get controlId(){return mod.getValue(this._address+0,'*')}
set controlId(controlId){mod.setValue(this._address+0,controlId,'*')}
get propertyId(){return mod.getValue(this._address+0,'*')}
set propertyId(propertyId){mod.setValue(this._address+0,propertyId,'*')}
get propertyValue(){return mod.getValue(this._address+0,'i32')}
set propertyValue(propertyValue){mod.setValue(this._address+0,propertyValue,'i32')}}
raylib.GuiTextStyle=class GuiTextStyle{constructor(init={},_address){this._size=24
this._address=_address||mod._malloc(this._size)
this.size=init.size||0
this.charSpacing=init.charSpacing||0
this.lineSpacing=init.lineSpacing||0
this.alignmentH=init.alignmentH||0
this.alignmentV=init.alignmentV||0
this.padding=init.padding||0}
get size(){return mod.HEAPU32[this._address+0]}
set size(size){mod.HEAPU32[this._address+0]=size}
get charSpacing(){return mod.getValue(this._address+4,'i32')}
set charSpacing(charSpacing){mod.setValue(this._address+4,charSpacing,'i32')}
get lineSpacing(){return mod.getValue(this._address+8,'i32')}
set lineSpacing(lineSpacing){mod.setValue(this._address+8,lineSpacing,'i32')}
get alignmentH(){return mod.getValue(this._address+12,'i32')}
set alignmentH(alignmentH){mod.setValue(this._address+12,alignmentH,'i32')}
get alignmentV(){return mod.getValue(this._address+16,'i32')}
set alignmentV(alignmentV){mod.setValue(this._address+16,alignmentV,'i32')}
get padding(){return mod.getValue(this._address+20,'i32')}
set padding(padding){mod.setValue(this._address+20,padding,'i32')}}
raylib.Quaternion=class Quaternion{constructor(init={},_address){this._size=16
this._address=_address||mod._malloc(this._size)
this.x=init.x||0
this.y=init.y||0
this.z=init.z||0
this.w=init.w||0}
get x(){return mod.getValue(this._address+0,'float')}
set x(x){mod.setValue(this._address+0,x,'float')}
get y(){return mod.getValue(this._address+4,'float')}
set y(y){mod.setValue(this._address+4,y,'float')}
get z(){return mod.getValue(this._address+8,'float')}
set z(z){mod.setValue(this._address+8,z,'float')}
get w(){return mod.getValue(this._address+12,'float')}
set w(w){mod.setValue(this._address+12,w,'float')}}
raylib.TextureCubemap=class TextureCubemap{constructor(init={},_address){this._size=20
this._address=_address||mod._malloc(this._size)
this.id=init.id||0
this.width=init.width||0
this.height=init.height||0
this.mipmaps=init.mipmaps||0
this.format=init.format||0}
get id(){return mod.HEAPU32[this._address+0]}
set id(id){mod.HEAPU32[this._address+0]=id}
get width(){return mod.getValue(this._address+4,'i32')}
set width(width){mod.setValue(this._address+4,width,'i32')}
get height(){return mod.getValue(this._address+8,'i32')}
set height(height){mod.setValue(this._address+8,height,'i32')}
get mipmaps(){return mod.getValue(this._address+12,'i32')}
set mipmaps(mipmaps){mod.setValue(this._address+12,mipmaps,'i32')}
get format(){return mod.getValue(this._address+16,'i32')}
set format(format){mod.setValue(this._address+16,format,'i32')}}
raylib.RenderTexture2D=class RenderTexture2D{constructor(init={},_address){this._size=44
this._address=_address||mod._malloc(this._size)
this.id=init.id||0
this.texture=new raylib.Texture(init.texture||{},this._address+4)
this.depth=new raylib.Texture(init.depth||{},this._address+24)}
get id(){return mod.HEAPU32[this._address+0]}
set id(id){mod.HEAPU32[this._address+0]=id}}
raylib.Camera=class Camera{constructor(init={},_address){this._size=44
this._address=_address||mod._malloc(this._size)
this.position=new raylib.Vector3(init.position||{},this._address+0)
this.target=new raylib.Vector3(init.target||{},this._address+12)
this.up=new raylib.Vector3(init.up||{},this._address+24)
this.fovy=init.fovy||0
this.projection=init.projection||0}
get fovy(){return mod.getValue(this._address+36,'float')}
set fovy(fovy){mod.setValue(this._address+36,fovy,'float')}
get projection(){return mod.getValue(this._address+40,'i32')}
set projection(projection){mod.setValue(this._address+40,projection,'i32')}}
raylib.FLAG_VSYNC_HINT=64
raylib.FLAG_FULLSCREEN_MODE=2
raylib.FLAG_WINDOW_RESIZABLE=4
raylib.FLAG_WINDOW_UNDECORATED=8
raylib.FLAG_WINDOW_HIDDEN=128
raylib.FLAG_WINDOW_MINIMIZED=512
raylib.FLAG_WINDOW_MAXIMIZED=1024
raylib.FLAG_WINDOW_UNFOCUSED=2048
raylib.FLAG_WINDOW_TOPMOST=4096
raylib.FLAG_WINDOW_ALWAYS_RUN=256
raylib.FLAG_WINDOW_TRANSPARENT=16
raylib.FLAG_WINDOW_HIGHDPI=8192
raylib.FLAG_WINDOW_MOUSE_PASSTHROUGH=16384
raylib.FLAG_BORDERLESS_WINDOWED_MODE=32768
raylib.FLAG_MSAA_4X_HINT=32
raylib.FLAG_INTERLACED_HINT=65536
raylib.LOG_ALL=0
raylib.LOG_TRACE=1
raylib.LOG_DEBUG=2
raylib.LOG_INFO=3
raylib.LOG_WARNING=4
raylib.LOG_ERROR=5
raylib.LOG_FATAL=6
raylib.LOG_NONE=7
raylib.KEY_NULL=0
raylib.KEY_APOSTROPHE=39
raylib.KEY_COMMA=44
raylib.KEY_MINUS=45
raylib.KEY_PERIOD=46
raylib.KEY_SLASH=47
raylib.KEY_ZERO=48
raylib.KEY_ONE=49
raylib.KEY_TWO=50
raylib.KEY_THREE=51
raylib.KEY_FOUR=52
raylib.KEY_FIVE=53
raylib.KEY_SIX=54
raylib.KEY_SEVEN=55
raylib.KEY_EIGHT=56
raylib.KEY_NINE=57
raylib.KEY_SEMICOLON=59
raylib.KEY_EQUAL=61
raylib.KEY_A=65
raylib.KEY_B=66
raylib.KEY_C=67
raylib.KEY_D=68
raylib.KEY_E=69
raylib.KEY_F=70
raylib.KEY_G=71
raylib.KEY_H=72
raylib.KEY_I=73
raylib.KEY_J=74
raylib.KEY_K=75
raylib.KEY_L=76
raylib.KEY_M=77
raylib.KEY_N=78
raylib.KEY_O=79
raylib.KEY_P=80
raylib.KEY_Q=81
raylib.KEY_R=82
raylib.KEY_S=83
raylib.KEY_T=84
raylib.KEY_U=85
raylib.KEY_V=86
raylib.KEY_W=87
raylib.KEY_X=88
raylib.KEY_Y=89
raylib.KEY_Z=90
raylib.KEY_LEFT_BRACKET=91
raylib.KEY_BACKSLASH=92
raylib.KEY_RIGHT_BRACKET=93
raylib.KEY_GRAVE=96
raylib.KEY_SPACE=32
raylib.KEY_ESCAPE=256
raylib.KEY_ENTER=257
raylib.KEY_TAB=258
raylib.KEY_BACKSPACE=259
raylib.KEY_INSERT=260
raylib.KEY_DELETE=261
raylib.KEY_RIGHT=262
raylib.KEY_LEFT=263
raylib.KEY_DOWN=264
raylib.KEY_UP=265
raylib.KEY_PAGE_UP=266
raylib.KEY_PAGE_DOWN=267
raylib.KEY_HOME=268
raylib.KEY_END=269
raylib.KEY_CAPS_LOCK=280
raylib.KEY_SCROLL_LOCK=281
raylib.KEY_NUM_LOCK=282
raylib.KEY_PRINT_SCREEN=283
raylib.KEY_PAUSE=284
raylib.KEY_F1=290
raylib.KEY_F2=291
raylib.KEY_F3=292
raylib.KEY_F4=293
raylib.KEY_F5=294
raylib.KEY_F6=295
raylib.KEY_F7=296
raylib.KEY_F8=297
raylib.KEY_F9=298
raylib.KEY_F10=299
raylib.KEY_F11=300
raylib.KEY_F12=301
raylib.KEY_LEFT_SHIFT=340
raylib.KEY_LEFT_CONTROL=341
raylib.KEY_LEFT_ALT=342
raylib.KEY_LEFT_SUPER=343
raylib.KEY_RIGHT_SHIFT=344
raylib.KEY_RIGHT_CONTROL=345
raylib.KEY_RIGHT_ALT=346
raylib.KEY_RIGHT_SUPER=347
raylib.KEY_KB_MENU=348
raylib.KEY_KP_0=320
raylib.KEY_KP_1=321
raylib.KEY_KP_2=322
raylib.KEY_KP_3=323
raylib.KEY_KP_4=324
raylib.KEY_KP_5=325
raylib.KEY_KP_6=326
raylib.KEY_KP_7=327
raylib.KEY_KP_8=328
raylib.KEY_KP_9=329
raylib.KEY_KP_DECIMAL=330
raylib.KEY_KP_DIVIDE=331
raylib.KEY_KP_MULTIPLY=332
raylib.KEY_KP_SUBTRACT=333
raylib.KEY_KP_ADD=334
raylib.KEY_KP_ENTER=335
raylib.KEY_KP_EQUAL=336
raylib.KEY_BACK=4
raylib.KEY_MENU=5
raylib.KEY_VOLUME_UP=24
raylib.KEY_VOLUME_DOWN=25
raylib.MOUSE_BUTTON_LEFT=0
raylib.MOUSE_BUTTON_RIGHT=1
raylib.MOUSE_BUTTON_MIDDLE=2
raylib.MOUSE_BUTTON_SIDE=3
raylib.MOUSE_BUTTON_EXTRA=4
raylib.MOUSE_BUTTON_FORWARD=5
raylib.MOUSE_BUTTON_BACK=6
raylib.MOUSE_CURSOR_DEFAULT=0
raylib.MOUSE_CURSOR_ARROW=1
raylib.MOUSE_CURSOR_IBEAM=2
raylib.MOUSE_CURSOR_CROSSHAIR=3
raylib.MOUSE_CURSOR_POINTING_HAND=4
raylib.MOUSE_CURSOR_RESIZE_EW=5
raylib.MOUSE_CURSOR_RESIZE_NS=6
raylib.MOUSE_CURSOR_RESIZE_NWSE=7
raylib.MOUSE_CURSOR_RESIZE_NESW=8
raylib.MOUSE_CURSOR_RESIZE_ALL=9
raylib.MOUSE_CURSOR_NOT_ALLOWED=10
raylib.GAMEPAD_BUTTON_UNKNOWN=0
raylib.GAMEPAD_BUTTON_LEFT_FACE_UP=1
raylib.GAMEPAD_BUTTON_LEFT_FACE_RIGHT=2
raylib.GAMEPAD_BUTTON_LEFT_FACE_DOWN=3
raylib.GAMEPAD_BUTTON_LEFT_FACE_LEFT=4
raylib.GAMEPAD_BUTTON_RIGHT_FACE_UP=5
raylib.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT=6
raylib.GAMEPAD_BUTTON_RIGHT_FACE_DOWN=7
raylib.GAMEPAD_BUTTON_RIGHT_FACE_LEFT=8
raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_1=9
raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_2=10
raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_1=11
raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_2=12
raylib.GAMEPAD_BUTTON_MIDDLE_LEFT=13
raylib.GAMEPAD_BUTTON_MIDDLE=14
raylib.GAMEPAD_BUTTON_MIDDLE_RIGHT=15
raylib.GAMEPAD_BUTTON_LEFT_THUMB=16
raylib.GAMEPAD_BUTTON_RIGHT_THUMB=17
raylib.GAMEPAD_AXIS_LEFT_X=0
raylib.GAMEPAD_AXIS_LEFT_Y=1
raylib.GAMEPAD_AXIS_RIGHT_X=2
raylib.GAMEPAD_AXIS_RIGHT_Y=3
raylib.GAMEPAD_AXIS_LEFT_TRIGGER=4
raylib.GAMEPAD_AXIS_RIGHT_TRIGGER=5
raylib.MATERIAL_MAP_ALBEDO=0
raylib.MATERIAL_MAP_METALNESS=1
raylib.MATERIAL_MAP_NORMAL=2
raylib.MATERIAL_MAP_ROUGHNESS=3
raylib.MATERIAL_MAP_OCCLUSION=4
raylib.MATERIAL_MAP_EMISSION=5
raylib.MATERIAL_MAP_HEIGHT=6
raylib.MATERIAL_MAP_CUBEMAP=7
raylib.MATERIAL_MAP_IRRADIANCE=8
raylib.MATERIAL_MAP_PREFILTER=9
raylib.MATERIAL_MAP_BRDF=10
raylib.SHADER_LOC_VERTEX_POSITION=0
raylib.SHADER_LOC_VERTEX_TEXCOORD01=1
raylib.SHADER_LOC_VERTEX_TEXCOORD02=2
raylib.SHADER_LOC_VERTEX_NORMAL=3
raylib.SHADER_LOC_VERTEX_TANGENT=4
raylib.SHADER_LOC_VERTEX_COLOR=5
raylib.SHADER_LOC_MATRIX_MVP=6
raylib.SHADER_LOC_MATRIX_VIEW=7
raylib.SHADER_LOC_MATRIX_PROJECTION=8
raylib.SHADER_LOC_MATRIX_MODEL=9
raylib.SHADER_LOC_MATRIX_NORMAL=10
raylib.SHADER_LOC_VECTOR_VIEW=11
raylib.SHADER_LOC_COLOR_DIFFUSE=12
raylib.SHADER_LOC_COLOR_SPECULAR=13
raylib.SHADER_LOC_COLOR_AMBIENT=14
raylib.SHADER_LOC_MAP_ALBEDO=15
raylib.SHADER_LOC_MAP_METALNESS=16
raylib.SHADER_LOC_MAP_NORMAL=17
raylib.SHADER_LOC_MAP_ROUGHNESS=18
raylib.SHADER_LOC_MAP_OCCLUSION=19
raylib.SHADER_LOC_MAP_EMISSION=20
raylib.SHADER_LOC_MAP_HEIGHT=21
raylib.SHADER_LOC_MAP_CUBEMAP=22
raylib.SHADER_LOC_MAP_IRRADIANCE=23
raylib.SHADER_LOC_MAP_PREFILTER=24
raylib.SHADER_LOC_MAP_BRDF=25
raylib.SHADER_LOC_VERTEX_BONEIDS=26
raylib.SHADER_LOC_VERTEX_BONEWEIGHTS=27
raylib.SHADER_LOC_BONE_MATRICES=28
raylib.SHADER_UNIFORM_FLOAT=0
raylib.SHADER_UNIFORM_VEC2=1
raylib.SHADER_UNIFORM_VEC3=2
raylib.SHADER_UNIFORM_VEC4=3
raylib.SHADER_UNIFORM_INT=4
raylib.SHADER_UNIFORM_IVEC2=5
raylib.SHADER_UNIFORM_IVEC3=6
raylib.SHADER_UNIFORM_IVEC4=7
raylib.SHADER_UNIFORM_SAMPLER2D=8
raylib.SHADER_ATTRIB_FLOAT=0
raylib.SHADER_ATTRIB_VEC2=1
raylib.SHADER_ATTRIB_VEC3=2
raylib.SHADER_ATTRIB_VEC4=3
raylib.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE=1
raylib.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA=2
raylib.PIXELFORMAT_UNCOMPRESSED_R5G6B5=3
raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8=4
raylib.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1=5
raylib.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4=6
raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8=7
raylib.PIXELFORMAT_UNCOMPRESSED_R32=8
raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32=9
raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32=10
raylib.PIXELFORMAT_UNCOMPRESSED_R16=11
raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16=12
raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16A16=13
raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB=14
raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA=15
raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA=16
raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA=17
raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB=18
raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB=19
raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA=20
raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB=21
raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA=22
raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA=23
raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA=24
raylib.TEXTURE_FILTER_POINT=0
raylib.TEXTURE_FILTER_BILINEAR=1
raylib.TEXTURE_FILTER_TRILINEAR=2
raylib.TEXTURE_FILTER_ANISOTROPIC_4X=3
raylib.TEXTURE_FILTER_ANISOTROPIC_8X=4
raylib.TEXTURE_FILTER_ANISOTROPIC_16X=5
raylib.TEXTURE_WRAP_REPEAT=0
raylib.TEXTURE_WRAP_CLAMP=1
raylib.TEXTURE_WRAP_MIRROR_REPEAT=2
raylib.TEXTURE_WRAP_MIRROR_CLAMP=3
raylib.CUBEMAP_LAYOUT_AUTO_DETECT=0
raylib.CUBEMAP_LAYOUT_LINE_VERTICAL=1
raylib.CUBEMAP_LAYOUT_LINE_HORIZONTAL=2
raylib.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR=3
raylib.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE=4
raylib.FONT_DEFAULT=0
raylib.FONT_BITMAP=1
raylib.FONT_SDF=2
raylib.BLEND_ALPHA=0
raylib.BLEND_ADDITIVE=1
raylib.BLEND_MULTIPLIED=2
raylib.BLEND_ADD_COLORS=3
raylib.BLEND_SUBTRACT_COLORS=4
raylib.BLEND_ALPHA_PREMULTIPLY=5
raylib.BLEND_CUSTOM=6
raylib.BLEND_CUSTOM_SEPARATE=7
raylib.GESTURE_NONE=0
raylib.GESTURE_TAP=1
raylib.GESTURE_DOUBLETAP=2
raylib.GESTURE_HOLD=4
raylib.GESTURE_DRAG=8
raylib.GESTURE_SWIPE_RIGHT=16
raylib.GESTURE_SWIPE_LEFT=32
raylib.GESTURE_SWIPE_UP=64
raylib.GESTURE_SWIPE_DOWN=128
raylib.GESTURE_PINCH_IN=256
raylib.GESTURE_PINCH_OUT=512
raylib.CAMERA_CUSTOM=0
raylib.CAMERA_FREE=1
raylib.CAMERA_ORBITAL=2
raylib.CAMERA_FIRST_PERSON=3
raylib.CAMERA_THIRD_PERSON=4
raylib.CAMERA_PERSPECTIVE=0
raylib.CAMERA_ORTHOGRAPHIC=1
raylib.NPATCH_NINE_PATCH=0
raylib.NPATCH_THREE_PATCH_VERTICAL=1
raylib.NPATCH_THREE_PATCH_HORIZONTAL=2
raylib.STATE_NORMAL=0
raylib.STATE_FOCUSED=1
raylib.STATE_PRESSED=2
raylib.STATE_DISABLED=3
raylib.TEXT_ALIGN_LEFT=0
raylib.TEXT_ALIGN_CENTER=1
raylib.TEXT_ALIGN_RIGHT=2
raylib.TEXT_ALIGN_TOP=0
raylib.TEXT_ALIGN_MIDDLE=1
raylib.TEXT_ALIGN_BOTTOM=2
raylib.TEXT_WRAP_NONE=0
raylib.TEXT_WRAP_CHAR=1
raylib.TEXT_WRAP_WORD=2
raylib.DEFAULT=0
raylib.LABEL=1
raylib.BUTTON=2
raylib.TOGGLE=3
raylib.SLIDER=4
raylib.PROGRESSBAR=5
raylib.CHECKBOX=6
raylib.COMBOBOX=7
raylib.DROPDOWNBOX=8
raylib.TEXTBOX=9
raylib.VALUEBOX=10
raylib.SPINNER=11
raylib.LISTVIEW=12
raylib.COLORPICKER=13
raylib.SCROLLBAR=14
raylib.STATUSBAR=15
raylib.BORDER_COLOR_NORMAL=0
raylib.BASE_COLOR_NORMAL=1
raylib.TEXT_COLOR_NORMAL=2
raylib.BORDER_COLOR_FOCUSED=3
raylib.BASE_COLOR_FOCUSED=4
raylib.TEXT_COLOR_FOCUSED=5
raylib.BORDER_COLOR_PRESSED=6
raylib.BASE_COLOR_PRESSED=7
raylib.TEXT_COLOR_PRESSED=8
raylib.BORDER_COLOR_DISABLED=9
raylib.BASE_COLOR_DISABLED=10
raylib.TEXT_COLOR_DISABLED=11
raylib.BORDER_WIDTH=12
raylib.TEXT_PADDING=13
raylib.TEXT_ALIGNMENT=14
raylib.TEXT_SIZE=16
raylib.TEXT_SPACING=17
raylib.LINE_COLOR=18
raylib.BACKGROUND_COLOR=19
raylib.TEXT_LINE_SPACING=20
raylib.TEXT_ALIGNMENT_VERTICAL=21
raylib.TEXT_WRAP_MODE=22
raylib.GROUP_PADDING=16
raylib.SLIDER_WIDTH=16
raylib.SLIDER_PADDING=17
raylib.PROGRESS_PADDING=16
raylib.ARROWS_SIZE=16
raylib.ARROWS_VISIBLE=17
raylib.SCROLL_SLIDER_PADDING=18
raylib.SCROLL_SLIDER_SIZE=19
raylib.SCROLL_PADDING=20
raylib.SCROLL_SPEED=21
raylib.CHECK_PADDING=16
raylib.COMBO_BUTTON_WIDTH=16
raylib.COMBO_BUTTON_SPACING=17
raylib.ARROW_PADDING=16
raylib.DROPDOWN_ITEMS_SPACING=17
raylib.TEXT_READONLY=16
raylib.SPIN_BUTTON_WIDTH=16
raylib.SPIN_BUTTON_SPACING=17
raylib.LIST_ITEMS_HEIGHT=16
raylib.LIST_ITEMS_SPACING=17
raylib.SCROLLBAR_WIDTH=18
raylib.SCROLLBAR_SIDE=19
raylib.COLOR_SELECTOR_SIZE=16
raylib.HUEBAR_WIDTH=17
raylib.HUEBAR_PADDING=18
raylib.HUEBAR_SELECTOR_HEIGHT=19
raylib.HUEBAR_SELECTOR_OVERFLOW=20
raylib.ICON_NONE=0
raylib.ICON_FOLDER_FILE_OPEN=1
raylib.ICON_FILE_SAVE_CLASSIC=2
raylib.ICON_FOLDER_OPEN=3
raylib.ICON_FOLDER_SAVE=4
raylib.ICON_FILE_OPEN=5
raylib.ICON_FILE_SAVE=6
raylib.ICON_FILE_EXPORT=7
raylib.ICON_FILE_ADD=8
raylib.ICON_FILE_DELETE=9
raylib.ICON_FILETYPE_TEXT=10
raylib.ICON_FILETYPE_AUDIO=11
raylib.ICON_FILETYPE_IMAGE=12
raylib.ICON_FILETYPE_PLAY=13
raylib.ICON_FILETYPE_VIDEO=14
raylib.ICON_FILETYPE_INFO=15
raylib.ICON_FILE_COPY=16
raylib.ICON_FILE_CUT=17
raylib.ICON_FILE_PASTE=18
raylib.ICON_CURSOR_HAND=19
raylib.ICON_CURSOR_POINTER=20
raylib.ICON_CURSOR_CLASSIC=21
raylib.ICON_PENCIL=22
raylib.ICON_PENCIL_BIG=23
raylib.ICON_BRUSH_CLASSIC=24
raylib.ICON_BRUSH_PAINTER=25
raylib.ICON_WATER_DROP=26
raylib.ICON_COLOR_PICKER=27
raylib.ICON_RUBBER=28
raylib.ICON_COLOR_BUCKET=29
raylib.ICON_TEXT_T=30
raylib.ICON_TEXT_A=31
raylib.ICON_SCALE=32
raylib.ICON_RESIZE=33
raylib.ICON_FILTER_POINT=34
raylib.ICON_FILTER_BILINEAR=35
raylib.ICON_CROP=36
raylib.ICON_CROP_ALPHA=37
raylib.ICON_SQUARE_TOGGLE=38
raylib.ICON_SYMMETRY=39
raylib.ICON_SYMMETRY_HORIZONTAL=40
raylib.ICON_SYMMETRY_VERTICAL=41
raylib.ICON_LENS=42
raylib.ICON_LENS_BIG=43
raylib.ICON_EYE_ON=44
raylib.ICON_EYE_OFF=45
raylib.ICON_FILTER_TOP=46
raylib.ICON_FILTER=47
raylib.ICON_TARGET_POINT=48
raylib.ICON_TARGET_SMALL=49
raylib.ICON_TARGET_BIG=50
raylib.ICON_TARGET_MOVE=51
raylib.ICON_CURSOR_MOVE=52
raylib.ICON_CURSOR_SCALE=53
raylib.ICON_CURSOR_SCALE_RIGHT=54
raylib.ICON_CURSOR_SCALE_LEFT=55
raylib.ICON_UNDO=56
raylib.ICON_REDO=57
raylib.ICON_REREDO=58
raylib.ICON_MUTATE=59
raylib.ICON_ROTATE=60
raylib.ICON_REPEAT=61
raylib.ICON_SHUFFLE=62
raylib.ICON_EMPTYBOX=63
raylib.ICON_TARGET=64
raylib.ICON_TARGET_SMALL_FILL=65
raylib.ICON_TARGET_BIG_FILL=66
raylib.ICON_TARGET_MOVE_FILL=67
raylib.ICON_CURSOR_MOVE_FILL=68
raylib.ICON_CURSOR_SCALE_FILL=69
raylib.ICON_CURSOR_SCALE_RIGHT_FILL=70
raylib.ICON_CURSOR_SCALE_LEFT_FILL=71
raylib.ICON_UNDO_FILL=72
raylib.ICON_REDO_FILL=73
raylib.ICON_REREDO_FILL=74
raylib.ICON_MUTATE_FILL=75
raylib.ICON_ROTATE_FILL=76
raylib.ICON_REPEAT_FILL=77
raylib.ICON_SHUFFLE_FILL=78
raylib.ICON_EMPTYBOX_SMALL=79
raylib.ICON_BOX=80
raylib.ICON_BOX_TOP=81
raylib.ICON_BOX_TOP_RIGHT=82
raylib.ICON_BOX_RIGHT=83
raylib.ICON_BOX_BOTTOM_RIGHT=84
raylib.ICON_BOX_BOTTOM=85
raylib.ICON_BOX_BOTTOM_LEFT=86
raylib.ICON_BOX_LEFT=87
raylib.ICON_BOX_TOP_LEFT=88
raylib.ICON_BOX_CENTER=89
raylib.ICON_BOX_CIRCLE_MASK=90
raylib.ICON_POT=91
raylib.ICON_ALPHA_MULTIPLY=92
raylib.ICON_ALPHA_CLEAR=93
raylib.ICON_DITHERING=94
raylib.ICON_MIPMAPS=95
raylib.ICON_BOX_GRID=96
raylib.ICON_GRID=97
raylib.ICON_BOX_CORNERS_SMALL=98
raylib.ICON_BOX_CORNERS_BIG=99
raylib.ICON_FOUR_BOXES=100
raylib.ICON_GRID_FILL=101
raylib.ICON_BOX_MULTISIZE=102
raylib.ICON_ZOOM_SMALL=103
raylib.ICON_ZOOM_MEDIUM=104
raylib.ICON_ZOOM_BIG=105
raylib.ICON_ZOOM_ALL=106
raylib.ICON_ZOOM_CENTER=107
raylib.ICON_BOX_DOTS_SMALL=108
raylib.ICON_BOX_DOTS_BIG=109
raylib.ICON_BOX_CONCENTRIC=110
raylib.ICON_BOX_GRID_BIG=111
raylib.ICON_OK_TICK=112
raylib.ICON_CROSS=113
raylib.ICON_ARROW_LEFT=114
raylib.ICON_ARROW_RIGHT=115
raylib.ICON_ARROW_DOWN=116
raylib.ICON_ARROW_UP=117
raylib.ICON_ARROW_LEFT_FILL=118
raylib.ICON_ARROW_RIGHT_FILL=119
raylib.ICON_ARROW_DOWN_FILL=120
raylib.ICON_ARROW_UP_FILL=121
raylib.ICON_AUDIO=122
raylib.ICON_FX=123
raylib.ICON_WAVE=124
raylib.ICON_WAVE_SINUS=125
raylib.ICON_WAVE_SQUARE=126
raylib.ICON_WAVE_TRIANGULAR=127
raylib.ICON_CROSS_SMALL=128
raylib.ICON_PLAYER_PREVIOUS=129
raylib.ICON_PLAYER_PLAY_BACK=130
raylib.ICON_PLAYER_PLAY=131
raylib.ICON_PLAYER_PAUSE=132
raylib.ICON_PLAYER_STOP=133
raylib.ICON_PLAYER_NEXT=134
raylib.ICON_PLAYER_RECORD=135
raylib.ICON_MAGNET=136
raylib.ICON_LOCK_CLOSE=137
raylib.ICON_LOCK_OPEN=138
raylib.ICON_CLOCK=139
raylib.ICON_TOOLS=140
raylib.ICON_GEAR=141
raylib.ICON_GEAR_BIG=142
raylib.ICON_BIN=143
raylib.ICON_HAND_POINTER=144
raylib.ICON_LASER=145
raylib.ICON_COIN=146
raylib.ICON_EXPLOSION=147
raylib.ICON_1UP=148
raylib.ICON_PLAYER=149
raylib.ICON_PLAYER_JUMP=150
raylib.ICON_KEY=151
raylib.ICON_DEMON=152
raylib.ICON_TEXT_POPUP=153
raylib.ICON_GEAR_EX=154
raylib.ICON_CRACK=155
raylib.ICON_CRACK_POINTS=156
raylib.ICON_STAR=157
raylib.ICON_DOOR=158
raylib.ICON_EXIT=159
raylib.ICON_MODE_2D=160
raylib.ICON_MODE_3D=161
raylib.ICON_CUBE=162
raylib.ICON_CUBE_FACE_TOP=163
raylib.ICON_CUBE_FACE_LEFT=164
raylib.ICON_CUBE_FACE_FRONT=165
raylib.ICON_CUBE_FACE_BOTTOM=166
raylib.ICON_CUBE_FACE_RIGHT=167
raylib.ICON_CUBE_FACE_BACK=168
raylib.ICON_CAMERA=169
raylib.ICON_SPECIAL=170
raylib.ICON_LINK_NET=171
raylib.ICON_LINK_BOXES=172
raylib.ICON_LINK_MULTI=173
raylib.ICON_LINK=174
raylib.ICON_LINK_BROKE=175
raylib.ICON_TEXT_NOTES=176
raylib.ICON_NOTEBOOK=177
raylib.ICON_SUITCASE=178
raylib.ICON_SUITCASE_ZIP=179
raylib.ICON_MAILBOX=180
raylib.ICON_MONITOR=181
raylib.ICON_PRINTER=182
raylib.ICON_PHOTO_CAMERA=183
raylib.ICON_PHOTO_CAMERA_FLASH=184
raylib.ICON_HOUSE=185
raylib.ICON_HEART=186
raylib.ICON_CORNER=187
raylib.ICON_VERTICAL_BARS=188
raylib.ICON_VERTICAL_BARS_FILL=189
raylib.ICON_LIFE_BARS=190
raylib.ICON_INFO=191
raylib.ICON_CROSSLINE=192
raylib.ICON_HELP=193
raylib.ICON_FILETYPE_ALPHA=194
raylib.ICON_FILETYPE_HOME=195
raylib.ICON_LAYERS_VISIBLE=196
raylib.ICON_LAYERS=197
raylib.ICON_WINDOW=198
raylib.ICON_HIDPI=199
raylib.ICON_FILETYPE_BINARY=200
raylib.ICON_HEX=201
raylib.ICON_SHIELD=202
raylib.ICON_FILE_NEW=203
raylib.ICON_FOLDER_ADD=204
raylib.ICON_ALARM=205
raylib.ICON_CPU=206
raylib.ICON_ROM=207
raylib.ICON_STEP_OVER=208
raylib.ICON_STEP_INTO=209
raylib.ICON_STEP_OUT=210
raylib.ICON_RESTART=211
raylib.ICON_BREAKPOINT_ON=212
raylib.ICON_BREAKPOINT_OFF=213
raylib.ICON_BURGER_MENU=214
raylib.ICON_CASE_SENSITIVE=215
raylib.ICON_REG_EXP=216
raylib.ICON_FOLDER=217
raylib.ICON_FILE=218
raylib.ICON_SAND_TIMER=219
raylib.ICON_220=220
raylib.ICON_221=221
raylib.ICON_222=222
raylib.ICON_223=223
raylib.ICON_224=224
raylib.ICON_225=225
raylib.ICON_226=226
raylib.ICON_227=227
raylib.ICON_228=228
raylib.ICON_229=229
raylib.ICON_230=230
raylib.ICON_231=231
raylib.ICON_232=232
raylib.ICON_233=233
raylib.ICON_234=234
raylib.ICON_235=235
raylib.ICON_236=236
raylib.ICON_237=237
raylib.ICON_238=238
raylib.ICON_239=239
raylib.ICON_240=240
raylib.ICON_241=241
raylib.ICON_242=242
raylib.ICON_243=243
raylib.ICON_244=244
raylib.ICON_245=245
raylib.ICON_246=246
raylib.ICON_247=247
raylib.ICON_248=248
raylib.ICON_249=249
raylib.ICON_250=250
raylib.ICON_251=251
raylib.ICON_252=252
raylib.ICON_253=253
raylib.ICON_254=254
raylib.ICON_255=255
raylib.LIGHTGRAY=new raylib.Color({r:200,g:200,b:200,a:255})
raylib.GRAY=new raylib.Color({r:130,g:130,b:130,a:255})
raylib.DARKGRAY=new raylib.Color({r:80,g:80,b:80,a:255})
raylib.YELLOW=new raylib.Color({r:253,g:249,b:0,a:255})
raylib.GOLD=new raylib.Color({r:255,g:203,b:0,a:255})
raylib.ORANGE=new raylib.Color({r:255,g:161,b:0,a:255})
raylib.PINK=new raylib.Color({r:255,g:109,b:194,a:255})
raylib.RED=new raylib.Color({r:230,g:41,b:55,a:255})
raylib.MAROON=new raylib.Color({r:190,g:33,b:55,a:255})
raylib.GREEN=new raylib.Color({r:0,g:228,b:48,a:255})
raylib.LIME=new raylib.Color({r:0,g:158,b:47,a:255})
raylib.DARKGREEN=new raylib.Color({r:0,g:117,b:44,a:255})
raylib.SKYBLUE=new raylib.Color({r:102,g:191,b:255,a:255})
raylib.BLUE=new raylib.Color({r:0,g:121,b:241,a:255})
raylib.DARKBLUE=new raylib.Color({r:0,g:82,b:172,a:255})
raylib.PURPLE=new raylib.Color({r:200,g:122,b:255,a:255})
raylib.VIOLET=new raylib.Color({r:135,g:60,b:190,a:255})
raylib.DARKPURPLE=new raylib.Color({r:112,g:31,b:126,a:255})
raylib.BEIGE=new raylib.Color({r:211,g:176,b:131,a:255})
raylib.BROWN=new raylib.Color({r:127,g:106,b:79,a:255})
raylib.DARKBROWN=new raylib.Color({r:76,g:63,b:47,a:255})
raylib.WHITE=new raylib.Color({r:255,g:255,b:255,a:255})
raylib.BLACK=new raylib.Color({r:0,g:0,b:0,a:255})
raylib.BLANK=new raylib.Color({r:0,g:0,b:0,a:0})
raylib.MAGENTA=new raylib.Color({r:255,g:0,b:255,a:255})
raylib.RAYWHITE=new raylib.Color({r:245,g:245,b:245,a:255})
const _InitWindow=mod.cwrap('InitWindow','pointer',['number','number','string'])
raylib.InitWindow=(width,height,title)=>_InitWindow(width,height,title)
const _CloseWindow=mod.cwrap('CloseWindow','pointer',[])
raylib.CloseWindow=()=>_CloseWindow()
const _WindowShouldClose=mod.cwrap('WindowShouldClose','boolean',[])
raylib.WindowShouldClose=()=>_WindowShouldClose()
const _IsWindowReady=mod.cwrap('IsWindowReady','boolean',[])
raylib.IsWindowReady=()=>_IsWindowReady()
const _IsWindowFullscreen=mod.cwrap('IsWindowFullscreen','boolean',[])
raylib.IsWindowFullscreen=()=>_IsWindowFullscreen()
const _IsWindowHidden=mod.cwrap('IsWindowHidden','boolean',[])
raylib.IsWindowHidden=()=>_IsWindowHidden()
const _IsWindowMinimized=mod.cwrap('IsWindowMinimized','boolean',[])
raylib.IsWindowMinimized=()=>_IsWindowMinimized()
const _IsWindowMaximized=mod.cwrap('IsWindowMaximized','boolean',[])
raylib.IsWindowMaximized=()=>_IsWindowMaximized()
const _IsWindowFocused=mod.cwrap('IsWindowFocused','boolean',[])
raylib.IsWindowFocused=()=>_IsWindowFocused()
const _IsWindowResized=mod.cwrap('IsWindowResized','boolean',[])
raylib.IsWindowResized=()=>_IsWindowResized()
const _IsWindowState=mod.cwrap('IsWindowState','boolean',['number'])
raylib.IsWindowState=(flag)=>_IsWindowState(flag)
const _SetWindowState=mod.cwrap('SetWindowState','pointer',['number'])
raylib.SetWindowState=(flags)=>_SetWindowState(flags)
const _ClearWindowState=mod.cwrap('ClearWindowState','pointer',['number'])
raylib.ClearWindowState=(flags)=>_ClearWindowState(flags)
const _ToggleFullscreen=mod.cwrap('ToggleFullscreen','pointer',[])
raylib.ToggleFullscreen=()=>_ToggleFullscreen()
const _ToggleBorderlessWindowed=mod.cwrap('ToggleBorderlessWindowed','pointer',[])
raylib.ToggleBorderlessWindowed=()=>_ToggleBorderlessWindowed()
const _MaximizeWindow=mod.cwrap('MaximizeWindow','pointer',[])
raylib.MaximizeWindow=()=>_MaximizeWindow()
const _MinimizeWindow=mod.cwrap('MinimizeWindow','pointer',[])
raylib.MinimizeWindow=()=>_MinimizeWindow()
const _RestoreWindow=mod.cwrap('RestoreWindow','pointer',[])
raylib.RestoreWindow=()=>_RestoreWindow()
const _SetWindowIcon=mod.cwrap('SetWindowIcon','pointer',['pointer'])
raylib.SetWindowIcon=(image)=>_SetWindowIcon(image._address)
const _SetWindowIcons=mod.cwrap('SetWindowIcons','pointer',['pointer','number'])
raylib.SetWindowIcons=(images,count)=>_SetWindowIcons(images._address,count)
const _SetWindowTitle=mod.cwrap('SetWindowTitle','pointer',['string'])
raylib.SetWindowTitle=(title)=>_SetWindowTitle(title)
const _SetWindowPosition=mod.cwrap('SetWindowPosition','pointer',['number','number'])
raylib.SetWindowPosition=(x,y)=>_SetWindowPosition(x,y)
const _SetWindowMonitor=mod.cwrap('SetWindowMonitor','pointer',['number'])
raylib.SetWindowMonitor=(monitor)=>_SetWindowMonitor(monitor)
const _SetWindowMinSize=mod.cwrap('SetWindowMinSize','pointer',['number','number'])
raylib.SetWindowMinSize=(width,height)=>_SetWindowMinSize(width,height)
const _SetWindowMaxSize=mod.cwrap('SetWindowMaxSize','pointer',['number','number'])
raylib.SetWindowMaxSize=(width,height)=>_SetWindowMaxSize(width,height)
const _SetWindowSize=mod.cwrap('SetWindowSize','pointer',['number','number'])
raylib.SetWindowSize=(width,height)=>_SetWindowSize(width,height)
const _SetWindowOpacity=mod.cwrap('SetWindowOpacity','pointer',['number'])
raylib.SetWindowOpacity=(opacity)=>_SetWindowOpacity(opacity)
const _SetWindowFocused=mod.cwrap('SetWindowFocused','pointer',[])
raylib.SetWindowFocused=()=>_SetWindowFocused()
const _GetWindowHandle=mod.cwrap('GetWindowHandle','pointer',[])
raylib.GetWindowHandle=()=>_GetWindowHandle()
const _GetScreenWidth=mod.cwrap('GetScreenWidth','number',[])
raylib.GetScreenWidth=()=>_GetScreenWidth()
const _GetScreenHeight=mod.cwrap('GetScreenHeight','number',[])
raylib.GetScreenHeight=()=>_GetScreenHeight()
const _GetRenderWidth=mod.cwrap('GetRenderWidth','number',[])
raylib.GetRenderWidth=()=>_GetRenderWidth()
const _GetRenderHeight=mod.cwrap('GetRenderHeight','number',[])
raylib.GetRenderHeight=()=>_GetRenderHeight()
const _GetMonitorCount=mod.cwrap('GetMonitorCount','number',[])
raylib.GetMonitorCount=()=>_GetMonitorCount()
const _GetCurrentMonitor=mod.cwrap('GetCurrentMonitor','number',[])
raylib.GetCurrentMonitor=()=>_GetCurrentMonitor()
const _GetMonitorPosition=mod.cwrap('GetMonitorPosition','void',['pointer','number'])
raylib.GetMonitorPosition=(monitor)=>{const _ret=new raylib.Vector2()
_GetMonitorPosition(_ret._address,monitor)
return _ret}
const _GetMonitorWidth=mod.cwrap('GetMonitorWidth','number',['number'])
raylib.GetMonitorWidth=(monitor)=>_GetMonitorWidth(monitor)
const _GetMonitorHeight=mod.cwrap('GetMonitorHeight','number',['number'])
raylib.GetMonitorHeight=(monitor)=>_GetMonitorHeight(monitor)
const _GetMonitorPhysicalWidth=mod.cwrap('GetMonitorPhysicalWidth','number',['number'])
raylib.GetMonitorPhysicalWidth=(monitor)=>_GetMonitorPhysicalWidth(monitor)
const _GetMonitorPhysicalHeight=mod.cwrap('GetMonitorPhysicalHeight','number',['number'])
raylib.GetMonitorPhysicalHeight=(monitor)=>_GetMonitorPhysicalHeight(monitor)
const _GetMonitorRefreshRate=mod.cwrap('GetMonitorRefreshRate','number',['number'])
raylib.GetMonitorRefreshRate=(monitor)=>_GetMonitorRefreshRate(monitor)
const _GetWindowPosition=mod.cwrap('GetWindowPosition','void',['pointer'])
raylib.GetWindowPosition=()=>{const _ret=new raylib.Vector2()
_GetWindowPosition(_ret._address)
return _ret}
const _GetWindowScaleDPI=mod.cwrap('GetWindowScaleDPI','void',['pointer'])
raylib.GetWindowScaleDPI=()=>{const _ret=new raylib.Vector2()
_GetWindowScaleDPI(_ret._address)
return _ret}
const _GetMonitorName=mod.cwrap('GetMonitorName','string',['number'])
raylib.GetMonitorName=(monitor)=>_GetMonitorName(monitor)
const _SetClipboardText=mod.cwrap('SetClipboardText','pointer',['string'])
raylib.SetClipboardText=(text)=>_SetClipboardText(text)
const _GetClipboardText=mod.cwrap('GetClipboardText','string',[])
raylib.GetClipboardText=()=>_GetClipboardText()
const _EnableEventWaiting=mod.cwrap('EnableEventWaiting','pointer',[])
raylib.EnableEventWaiting=()=>_EnableEventWaiting()
const _DisableEventWaiting=mod.cwrap('DisableEventWaiting','pointer',[])
raylib.DisableEventWaiting=()=>_DisableEventWaiting()
const _ShowCursor=mod.cwrap('ShowCursor','pointer',[])
raylib.ShowCursor=()=>_ShowCursor()
const _HideCursor=mod.cwrap('HideCursor','pointer',[])
raylib.HideCursor=()=>_HideCursor()
const _IsCursorHidden=mod.cwrap('IsCursorHidden','boolean',[])
raylib.IsCursorHidden=()=>_IsCursorHidden()
const _EnableCursor=mod.cwrap('EnableCursor','pointer',[])
raylib.EnableCursor=()=>_EnableCursor()
const _DisableCursor=mod.cwrap('DisableCursor','pointer',[])
raylib.DisableCursor=()=>_DisableCursor()
const _IsCursorOnScreen=mod.cwrap('IsCursorOnScreen','boolean',[])
raylib.IsCursorOnScreen=()=>_IsCursorOnScreen()
const _ClearBackground=mod.cwrap('ClearBackground','pointer',['pointer'])
raylib.ClearBackground=(color)=>_ClearBackground(color._address)
const _BeginDrawing=mod.cwrap('BeginDrawing','pointer',[])
raylib.BeginDrawing=()=>_BeginDrawing()
const _EndDrawing=mod.cwrap('EndDrawing','pointer',[])
raylib.EndDrawing=()=>_EndDrawing()
const _BeginMode2D=mod.cwrap('BeginMode2D','pointer',['pointer'])
raylib.BeginMode2D=(camera)=>_BeginMode2D(camera._address)
const _EndMode2D=mod.cwrap('EndMode2D','pointer',[])
raylib.EndMode2D=()=>_EndMode2D()
const _BeginMode3D=mod.cwrap('BeginMode3D','pointer',['pointer'])
raylib.BeginMode3D=(camera)=>_BeginMode3D(camera._address)
const _EndMode3D=mod.cwrap('EndMode3D','pointer',[])
raylib.EndMode3D=()=>_EndMode3D()
const _BeginTextureMode=mod.cwrap('BeginTextureMode','pointer',['pointer'])
raylib.BeginTextureMode=(target)=>_BeginTextureMode(target._address)
const _EndTextureMode=mod.cwrap('EndTextureMode','pointer',[])
raylib.EndTextureMode=()=>_EndTextureMode()
const _BeginShaderMode=mod.cwrap('BeginShaderMode','pointer',['pointer'])
raylib.BeginShaderMode=(shader)=>_BeginShaderMode(shader._address)
const _EndShaderMode=mod.cwrap('EndShaderMode','pointer',[])
raylib.EndShaderMode=()=>_EndShaderMode()
const _BeginBlendMode=mod.cwrap('BeginBlendMode','pointer',['number'])
raylib.BeginBlendMode=(mode)=>_BeginBlendMode(mode)
const _EndBlendMode=mod.cwrap('EndBlendMode','pointer',[])
raylib.EndBlendMode=()=>_EndBlendMode()
const _BeginScissorMode=mod.cwrap('BeginScissorMode','pointer',['number','number','number','number'])
raylib.BeginScissorMode=(x,y,width,height)=>_BeginScissorMode(x,y,width,height)
const _EndScissorMode=mod.cwrap('EndScissorMode','pointer',[])
raylib.EndScissorMode=()=>_EndScissorMode()
const _BeginVrStereoMode=mod.cwrap('BeginVrStereoMode','pointer',['pointer'])
raylib.BeginVrStereoMode=(config)=>_BeginVrStereoMode(config._address)
const _EndVrStereoMode=mod.cwrap('EndVrStereoMode','pointer',[])
raylib.EndVrStereoMode=()=>_EndVrStereoMode()
const _LoadVrStereoConfig=mod.cwrap('LoadVrStereoConfig','void',['pointer','pointer'])
raylib.LoadVrStereoConfig=(device)=>{const _ret=new raylib.VrStereoConfig()
_LoadVrStereoConfig(_ret._address,device._address)
return _ret}
const _UnloadVrStereoConfig=mod.cwrap('UnloadVrStereoConfig','pointer',['pointer'])
raylib.UnloadVrStereoConfig=(config)=>_UnloadVrStereoConfig(config._address)
const _LoadShader=mod.cwrap('LoadShader','void',['pointer','string','string'])
raylib.LoadShader=(vsFileName,fsFileName)=>{const _ret=new raylib.Shader()
_LoadShader(_ret._address,vsFileName,fsFileName)
return _ret}
const _LoadShaderFromMemory=mod.cwrap('LoadShaderFromMemory','void',['pointer','string','string'])
raylib.LoadShaderFromMemory=(vsCode,fsCode)=>{const _ret=new raylib.Shader()
_LoadShaderFromMemory(_ret._address,vsCode,fsCode)
return _ret}
const _IsShaderValid=mod.cwrap('IsShaderValid','boolean',['pointer'])
raylib.IsShaderValid=(shader)=>_IsShaderValid(shader._address)
const _GetShaderLocation=mod.cwrap('GetShaderLocation','number',['pointer','string'])
raylib.GetShaderLocation=(shader,uniformName)=>_GetShaderLocation(shader._address,uniformName)
const _GetShaderLocationAttrib=mod.cwrap('GetShaderLocationAttrib','number',['pointer','string'])
raylib.GetShaderLocationAttrib=(shader,attribName)=>_GetShaderLocationAttrib(shader._address,attribName)
const _SetShaderValue=mod.cwrap('SetShaderValue','pointer',['pointer','number','pointer','number'])
raylib.SetShaderValue=(shader,locIndex,value,uniformType)=>_SetShaderValue(shader._address,locIndex,value._address,uniformType)
const _SetShaderValueV=mod.cwrap('SetShaderValueV','pointer',['pointer','number','pointer','number','number'])
raylib.SetShaderValueV=(shader,locIndex,value,uniformType,count)=>_SetShaderValueV(shader._address,locIndex,value._address,uniformType,count)
const _SetShaderValueMatrix=mod.cwrap('SetShaderValueMatrix','pointer',['pointer','number','pointer'])
raylib.SetShaderValueMatrix=(shader,locIndex,mat)=>_SetShaderValueMatrix(shader._address,locIndex,mat._address)
const _SetShaderValueTexture=mod.cwrap('SetShaderValueTexture','pointer',['pointer','number','pointer'])
raylib.SetShaderValueTexture=(shader,locIndex,texture)=>_SetShaderValueTexture(shader._address,locIndex,texture._address)
const _UnloadShader=mod.cwrap('UnloadShader','pointer',['pointer'])
raylib.UnloadShader=(shader)=>_UnloadShader(shader._address)
const _GetScreenToWorldRay=mod.cwrap('GetScreenToWorldRay','void',['pointer','pointer','pointer'])
raylib.GetScreenToWorldRay=(position,camera)=>{const _ret=new raylib.Ray()
_GetScreenToWorldRay(_ret._address,position._address,camera._address)
return _ret}
const _GetScreenToWorldRayEx=mod.cwrap('GetScreenToWorldRayEx','void',['pointer','pointer','pointer','number','number'])
raylib.GetScreenToWorldRayEx=(position,camera,width,height)=>{const _ret=new raylib.Ray()
_GetScreenToWorldRayEx(_ret._address,position._address,camera._address,width,height)
return _ret}
const _GetWorldToScreen=mod.cwrap('GetWorldToScreen','void',['pointer','pointer','pointer'])
raylib.GetWorldToScreen=(position,camera)=>{const _ret=new raylib.Vector2()
_GetWorldToScreen(_ret._address,position._address,camera._address)
return _ret}
const _GetWorldToScreenEx=mod.cwrap('GetWorldToScreenEx','void',['pointer','pointer','pointer','number','number'])
raylib.GetWorldToScreenEx=(position,camera,width,height)=>{const _ret=new raylib.Vector2()
_GetWorldToScreenEx(_ret._address,position._address,camera._address,width,height)
return _ret}
const _GetWorldToScreen2D=mod.cwrap('GetWorldToScreen2D','void',['pointer','pointer','pointer'])
raylib.GetWorldToScreen2D=(position,camera)=>{const _ret=new raylib.Vector2()
_GetWorldToScreen2D(_ret._address,position._address,camera._address)
return _ret}
const _GetScreenToWorld2D=mod.cwrap('GetScreenToWorld2D','void',['pointer','pointer','pointer'])
raylib.GetScreenToWorld2D=(position,camera)=>{const _ret=new raylib.Vector2()
_GetScreenToWorld2D(_ret._address,position._address,camera._address)
return _ret}
const _GetCameraMatrix=mod.cwrap('GetCameraMatrix','void',['pointer','pointer'])
raylib.GetCameraMatrix=(camera)=>{const _ret=new raylib.Matrix()
_GetCameraMatrix(_ret._address,camera._address)
return _ret}
const _GetCameraMatrix2D=mod.cwrap('GetCameraMatrix2D','void',['pointer','pointer'])
raylib.GetCameraMatrix2D=(camera)=>{const _ret=new raylib.Matrix()
_GetCameraMatrix2D(_ret._address,camera._address)
return _ret}
const _SetTargetFPS=mod.cwrap('SetTargetFPS','pointer',['number'])
raylib.SetTargetFPS=(fps)=>_SetTargetFPS(fps)
const _GetFrameTime=mod.cwrap('GetFrameTime','number',[])
raylib.GetFrameTime=()=>_GetFrameTime()
const _GetTime=mod.cwrap('GetTime','number',[])
raylib.GetTime=()=>_GetTime()
const _GetFPS=mod.cwrap('GetFPS','number',[])
raylib.GetFPS=()=>_GetFPS()
const _SwapScreenBuffer=mod.cwrap('SwapScreenBuffer','pointer',[])
raylib.SwapScreenBuffer=()=>_SwapScreenBuffer()
const _PollInputEvents=mod.cwrap('PollInputEvents','pointer',[])
raylib.PollInputEvents=()=>_PollInputEvents()
const _WaitTime=mod.cwrap('WaitTime','pointer',['number'])
raylib.WaitTime=(seconds)=>_WaitTime(seconds)
const _SetRandomSeed=mod.cwrap('SetRandomSeed','pointer',['number'])
raylib.SetRandomSeed=(seed)=>_SetRandomSeed(seed)
const _GetRandomValue=mod.cwrap('GetRandomValue','number',['number','number'])
raylib.GetRandomValue=(min,max)=>_GetRandomValue(min,max)
const _LoadRandomSequence=mod.cwrap('LoadRandomSequence','pointer',['number','number','number'])
raylib.LoadRandomSequence=(count,min,max)=>_LoadRandomSequence(count,min,max)
const _UnloadRandomSequence=mod.cwrap('UnloadRandomSequence','pointer',['pointer'])
raylib.UnloadRandomSequence=(sequence)=>_UnloadRandomSequence(sequence._address)
const _TakeScreenshot=mod.cwrap('TakeScreenshot','pointer',['string'])
raylib.TakeScreenshot=(fileName)=>_TakeScreenshot(fileName)
const _SetConfigFlags=mod.cwrap('SetConfigFlags','pointer',['number'])
raylib.SetConfigFlags=(flags)=>_SetConfigFlags(flags)
const _OpenURL=mod.cwrap('OpenURL','pointer',['string'])
raylib.OpenURL=(url)=>_OpenURL(url)
const _TraceLog=mod.cwrap('TraceLog','pointer',['number','string','pointer'])
raylib.TraceLog=(logLevel,text,args)=>_TraceLog(logLevel,text,args._address)
const _SetTraceLogLevel=mod.cwrap('SetTraceLogLevel','pointer',['number'])
raylib.SetTraceLogLevel=(logLevel)=>_SetTraceLogLevel(logLevel)
const _MemAlloc=mod.cwrap('MemAlloc','pointer',['number'])
raylib.MemAlloc=(size)=>_MemAlloc(size)
const _MemRealloc=mod.cwrap('MemRealloc','pointer',['pointer','number'])
raylib.MemRealloc=(ptr,size)=>_MemRealloc(ptr._address,size)
const _MemFree=mod.cwrap('MemFree','pointer',['pointer'])
raylib.MemFree=(ptr)=>_MemFree(ptr._address)
const _SetTraceLogCallback=mod.cwrap('SetTraceLogCallback','pointer',['pointer'])
raylib.SetTraceLogCallback=(callback)=>_SetTraceLogCallback(callback._address)
const _SetLoadFileDataCallback=mod.cwrap('SetLoadFileDataCallback','pointer',['pointer'])
raylib.SetLoadFileDataCallback=(callback)=>_SetLoadFileDataCallback(callback._address)
const _SetSaveFileDataCallback=mod.cwrap('SetSaveFileDataCallback','pointer',['pointer'])
raylib.SetSaveFileDataCallback=(callback)=>_SetSaveFileDataCallback(callback._address)
const _SetLoadFileTextCallback=mod.cwrap('SetLoadFileTextCallback','pointer',['pointer'])
raylib.SetLoadFileTextCallback=(callback)=>_SetLoadFileTextCallback(callback._address)
const _SetSaveFileTextCallback=mod.cwrap('SetSaveFileTextCallback','pointer',['pointer'])
raylib.SetSaveFileTextCallback=(callback)=>_SetSaveFileTextCallback(callback._address)
const _LoadFileData=mod.cwrap('LoadFileData','pointer',['string','pointer'])
raylib.LoadFileData=async(fileName,dataSize)=>{await raylib.addFile(fileName)
return _LoadFileData(fileName,dataSize._address)}
const _UnloadFileData=mod.cwrap('UnloadFileData','pointer',['pointer'])
raylib.UnloadFileData=(data)=>_UnloadFileData(data._address)
const _SaveFileData=mod.cwrap('SaveFileData','boolean',['string','pointer','number'])
raylib.SaveFileData=(fileName,data,dataSize)=>_SaveFileData(fileName,data._address,dataSize)
const _ExportDataAsCode=mod.cwrap('ExportDataAsCode','boolean',['pointer','number','string'])
raylib.ExportDataAsCode=(data,dataSize,fileName)=>_ExportDataAsCode(data._address,dataSize,fileName)
const _LoadFileText=mod.cwrap('LoadFileText','string',['string'])
raylib.LoadFileText=async(fileName)=>{await raylib.addFile(fileName)
return _LoadFileText(fileName)}
const _UnloadFileText=mod.cwrap('UnloadFileText','pointer',['string'])
raylib.UnloadFileText=(text)=>_UnloadFileText(text)
const _SaveFileText=mod.cwrap('SaveFileText','boolean',['string','string'])
raylib.SaveFileText=(fileName,text)=>_SaveFileText(fileName,text)
const _FileExists=mod.cwrap('FileExists','boolean',['string'])
raylib.FileExists=(fileName)=>_FileExists(fileName)
const _DirectoryExists=mod.cwrap('DirectoryExists','boolean',['string'])
raylib.DirectoryExists=(dirPath)=>_DirectoryExists(dirPath)
const _IsFileExtension=mod.cwrap('IsFileExtension','boolean',['string','string'])
raylib.IsFileExtension=(fileName,ext)=>_IsFileExtension(fileName,ext)
const _GetFileLength=mod.cwrap('GetFileLength','number',['string'])
raylib.GetFileLength=(fileName)=>_GetFileLength(fileName)
const _GetFileExtension=mod.cwrap('GetFileExtension','string',['string'])
raylib.GetFileExtension=(fileName)=>_GetFileExtension(fileName)
const _GetFileName=mod.cwrap('GetFileName','string',['string'])
raylib.GetFileName=(filePath)=>_GetFileName(filePath)
const _GetFileNameWithoutExt=mod.cwrap('GetFileNameWithoutExt','string',['string'])
raylib.GetFileNameWithoutExt=(filePath)=>_GetFileNameWithoutExt(filePath)
const _GetDirectoryPath=mod.cwrap('GetDirectoryPath','string',['string'])
raylib.GetDirectoryPath=(filePath)=>_GetDirectoryPath(filePath)
const _GetPrevDirectoryPath=mod.cwrap('GetPrevDirectoryPath','string',['string'])
raylib.GetPrevDirectoryPath=(dirPath)=>_GetPrevDirectoryPath(dirPath)
const _GetWorkingDirectory=mod.cwrap('GetWorkingDirectory','string',[])
raylib.GetWorkingDirectory=()=>_GetWorkingDirectory()
const _GetApplicationDirectory=mod.cwrap('GetApplicationDirectory','string',[])
raylib.GetApplicationDirectory=()=>_GetApplicationDirectory()
const _MakeDirectory=mod.cwrap('MakeDirectory','number',['string'])
raylib.MakeDirectory=(dirPath)=>_MakeDirectory(dirPath)
const _ChangeDirectory=mod.cwrap('ChangeDirectory','boolean',['string'])
raylib.ChangeDirectory=(dir)=>_ChangeDirectory(dir)
const _IsPathFile=mod.cwrap('IsPathFile','boolean',['string'])
raylib.IsPathFile=(path)=>_IsPathFile(path)
const _IsFileNameValid=mod.cwrap('IsFileNameValid','boolean',['string'])
raylib.IsFileNameValid=(fileName)=>_IsFileNameValid(fileName)
const _LoadDirectoryFiles=mod.cwrap('LoadDirectoryFiles','void',['pointer','string'])
raylib.LoadDirectoryFiles=(dirPath)=>{const _ret=new raylib.FilePathList()
_LoadDirectoryFiles(_ret._address,dirPath)
return _ret}
const _LoadDirectoryFilesEx=mod.cwrap('LoadDirectoryFilesEx','void',['pointer','string','string','boolean'])
raylib.LoadDirectoryFilesEx=(basePath,filter,scanSubdirs)=>{const _ret=new raylib.FilePathList()
_LoadDirectoryFilesEx(_ret._address,basePath,filter,scanSubdirs)
return _ret}
const _UnloadDirectoryFiles=mod.cwrap('UnloadDirectoryFiles','pointer',['pointer'])
raylib.UnloadDirectoryFiles=(files)=>_UnloadDirectoryFiles(files._address)
const _IsFileDropped=mod.cwrap('IsFileDropped','boolean',[])
raylib.IsFileDropped=()=>_IsFileDropped()
const _LoadDroppedFiles=mod.cwrap('LoadDroppedFiles','void',['pointer'])
raylib.LoadDroppedFiles=()=>{const _ret=new raylib.FilePathList()
_LoadDroppedFiles(_ret._address)
return _ret}
const _UnloadDroppedFiles=mod.cwrap('UnloadDroppedFiles','pointer',['pointer'])
raylib.UnloadDroppedFiles=(files)=>_UnloadDroppedFiles(files._address)
const _GetFileModTime=mod.cwrap('GetFileModTime','number',['string'])
raylib.GetFileModTime=(fileName)=>_GetFileModTime(fileName)
const _CompressData=mod.cwrap('CompressData','pointer',['pointer','number','pointer'])
raylib.CompressData=(data,dataSize,compDataSize)=>_CompressData(data._address,dataSize,compDataSize._address)
const _DecompressData=mod.cwrap('DecompressData','pointer',['pointer','number','pointer'])
raylib.DecompressData=(compData,compDataSize,dataSize)=>_DecompressData(compData._address,compDataSize,dataSize._address)
const _EncodeDataBase64=mod.cwrap('EncodeDataBase64','string',['pointer','number','pointer'])
raylib.EncodeDataBase64=(data,dataSize,outputSize)=>_EncodeDataBase64(data._address,dataSize,outputSize._address)
const _DecodeDataBase64=mod.cwrap('DecodeDataBase64','pointer',['pointer','pointer'])
raylib.DecodeDataBase64=(data,outputSize)=>_DecodeDataBase64(data._address,outputSize._address)
const _ComputeCRC32=mod.cwrap('ComputeCRC32','number',['pointer','number'])
raylib.ComputeCRC32=(data,dataSize)=>_ComputeCRC32(data._address,dataSize)
const _ComputeMD5=mod.cwrap('ComputeMD5','pointer',['pointer','number'])
raylib.ComputeMD5=(data,dataSize)=>_ComputeMD5(data._address,dataSize)
const _ComputeSHA1=mod.cwrap('ComputeSHA1','pointer',['pointer','number'])
raylib.ComputeSHA1=(data,dataSize)=>_ComputeSHA1(data._address,dataSize)
const _LoadAutomationEventList=mod.cwrap('LoadAutomationEventList','void',['pointer','string'])
raylib.LoadAutomationEventList=(fileName)=>{const _ret=new raylib.AutomationEventList()
_LoadAutomationEventList(_ret._address,fileName)
return _ret}
const _UnloadAutomationEventList=mod.cwrap('UnloadAutomationEventList','pointer',['pointer'])
raylib.UnloadAutomationEventList=(list)=>_UnloadAutomationEventList(list._address)
const _ExportAutomationEventList=mod.cwrap('ExportAutomationEventList','boolean',['pointer','string'])
raylib.ExportAutomationEventList=(list,fileName)=>_ExportAutomationEventList(list._address,fileName)
const _SetAutomationEventList=mod.cwrap('SetAutomationEventList','pointer',['pointer'])
raylib.SetAutomationEventList=(list)=>_SetAutomationEventList(list._address)
const _SetAutomationEventBaseFrame=mod.cwrap('SetAutomationEventBaseFrame','pointer',['number'])
raylib.SetAutomationEventBaseFrame=(frame)=>_SetAutomationEventBaseFrame(frame)
const _StartAutomationEventRecording=mod.cwrap('StartAutomationEventRecording','pointer',[])
raylib.StartAutomationEventRecording=()=>_StartAutomationEventRecording()
const _StopAutomationEventRecording=mod.cwrap('StopAutomationEventRecording','pointer',[])
raylib.StopAutomationEventRecording=()=>_StopAutomationEventRecording()
const _PlayAutomationEvent=mod.cwrap('PlayAutomationEvent','pointer',['pointer'])
raylib.PlayAutomationEvent=(event)=>_PlayAutomationEvent(event._address)
const _IsKeyPressed=mod.cwrap('IsKeyPressed','boolean',['number'])
raylib.IsKeyPressed=(key)=>_IsKeyPressed(key)
const _IsKeyPressedRepeat=mod.cwrap('IsKeyPressedRepeat','boolean',['number'])
raylib.IsKeyPressedRepeat=(key)=>_IsKeyPressedRepeat(key)
const _IsKeyDown=mod.cwrap('IsKeyDown','boolean',['number'])
raylib.IsKeyDown=(key)=>_IsKeyDown(key)
const _IsKeyReleased=mod.cwrap('IsKeyReleased','boolean',['number'])
raylib.IsKeyReleased=(key)=>_IsKeyReleased(key)
const _IsKeyUp=mod.cwrap('IsKeyUp','boolean',['number'])
raylib.IsKeyUp=(key)=>_IsKeyUp(key)
const _GetKeyPressed=mod.cwrap('GetKeyPressed','number',[])
raylib.GetKeyPressed=()=>_GetKeyPressed()
const _GetCharPressed=mod.cwrap('GetCharPressed','number',[])
raylib.GetCharPressed=()=>_GetCharPressed()
const _SetExitKey=mod.cwrap('SetExitKey','pointer',['number'])
raylib.SetExitKey=(key)=>_SetExitKey(key)
const _IsGamepadAvailable=mod.cwrap('IsGamepadAvailable','boolean',['number'])
raylib.IsGamepadAvailable=(gamepad)=>_IsGamepadAvailable(gamepad)
const _GetGamepadName=mod.cwrap('GetGamepadName','string',['number'])
raylib.GetGamepadName=(gamepad)=>_GetGamepadName(gamepad)
const _IsGamepadButtonPressed=mod.cwrap('IsGamepadButtonPressed','boolean',['number','number'])
raylib.IsGamepadButtonPressed=(gamepad,button)=>_IsGamepadButtonPressed(gamepad,button)
const _IsGamepadButtonDown=mod.cwrap('IsGamepadButtonDown','boolean',['number','number'])
raylib.IsGamepadButtonDown=(gamepad,button)=>_IsGamepadButtonDown(gamepad,button)
const _IsGamepadButtonReleased=mod.cwrap('IsGamepadButtonReleased','boolean',['number','number'])
raylib.IsGamepadButtonReleased=(gamepad,button)=>_IsGamepadButtonReleased(gamepad,button)
const _IsGamepadButtonUp=mod.cwrap('IsGamepadButtonUp','boolean',['number','number'])
raylib.IsGamepadButtonUp=(gamepad,button)=>_IsGamepadButtonUp(gamepad,button)
const _GetGamepadButtonPressed=mod.cwrap('GetGamepadButtonPressed','number',[])
raylib.GetGamepadButtonPressed=()=>_GetGamepadButtonPressed()
const _GetGamepadAxisCount=mod.cwrap('GetGamepadAxisCount','number',['number'])
raylib.GetGamepadAxisCount=(gamepad)=>_GetGamepadAxisCount(gamepad)
const _GetGamepadAxisMovement=mod.cwrap('GetGamepadAxisMovement','number',['number','number'])
raylib.GetGamepadAxisMovement=(gamepad,axis)=>_GetGamepadAxisMovement(gamepad,axis)
const _SetGamepadMappings=mod.cwrap('SetGamepadMappings','number',['string'])
raylib.SetGamepadMappings=(mappings)=>_SetGamepadMappings(mappings)
const _SetGamepadVibration=mod.cwrap('SetGamepadVibration','pointer',['number','number','number','number'])
raylib.SetGamepadVibration=(gamepad,leftMotor,rightMotor,duration)=>_SetGamepadVibration(gamepad,leftMotor,rightMotor,duration)
const _IsMouseButtonPressed=mod.cwrap('IsMouseButtonPressed','boolean',['number'])
raylib.IsMouseButtonPressed=(button)=>_IsMouseButtonPressed(button)
const _IsMouseButtonDown=mod.cwrap('IsMouseButtonDown','boolean',['number'])
raylib.IsMouseButtonDown=(button)=>_IsMouseButtonDown(button)
const _IsMouseButtonReleased=mod.cwrap('IsMouseButtonReleased','boolean',['number'])
raylib.IsMouseButtonReleased=(button)=>_IsMouseButtonReleased(button)
const _IsMouseButtonUp=mod.cwrap('IsMouseButtonUp','boolean',['number'])
raylib.IsMouseButtonUp=(button)=>_IsMouseButtonUp(button)
const _GetMouseX=mod.cwrap('GetMouseX','number',[])
raylib.GetMouseX=()=>_GetMouseX()
const _GetMouseY=mod.cwrap('GetMouseY','number',[])
raylib.GetMouseY=()=>_GetMouseY()
const _GetMousePosition=mod.cwrap('GetMousePosition','void',['pointer'])
raylib.GetMousePosition=()=>{const _ret=new raylib.Vector2()
_GetMousePosition(_ret._address)
return _ret}
const _GetMouseDelta=mod.cwrap('GetMouseDelta','void',['pointer'])
raylib.GetMouseDelta=()=>{const _ret=new raylib.Vector2()
_GetMouseDelta(_ret._address)
return _ret}
const _SetMousePosition=mod.cwrap('SetMousePosition','pointer',['number','number'])
raylib.SetMousePosition=(x,y)=>_SetMousePosition(x,y)
const _SetMouseOffset=mod.cwrap('SetMouseOffset','pointer',['number','number'])
raylib.SetMouseOffset=(offsetX,offsetY)=>_SetMouseOffset(offsetX,offsetY)
const _SetMouseScale=mod.cwrap('SetMouseScale','pointer',['number','number'])
raylib.SetMouseScale=(scaleX,scaleY)=>_SetMouseScale(scaleX,scaleY)
const _GetMouseWheelMove=mod.cwrap('GetMouseWheelMove','number',[])
raylib.GetMouseWheelMove=()=>_GetMouseWheelMove()
const _GetMouseWheelMoveV=mod.cwrap('GetMouseWheelMoveV','void',['pointer'])
raylib.GetMouseWheelMoveV=()=>{const _ret=new raylib.Vector2()
_GetMouseWheelMoveV(_ret._address)
return _ret}
const _SetMouseCursor=mod.cwrap('SetMouseCursor','pointer',['number'])
raylib.SetMouseCursor=(cursor)=>_SetMouseCursor(cursor)
const _GetTouchX=mod.cwrap('GetTouchX','number',[])
raylib.GetTouchX=()=>_GetTouchX()
const _GetTouchY=mod.cwrap('GetTouchY','number',[])
raylib.GetTouchY=()=>_GetTouchY()
const _GetTouchPosition=mod.cwrap('GetTouchPosition','void',['pointer','number'])
raylib.GetTouchPosition=(index)=>{const _ret=new raylib.Vector2()
_GetTouchPosition(_ret._address,index)
return _ret}
const _GetTouchPointId=mod.cwrap('GetTouchPointId','number',['number'])
raylib.GetTouchPointId=(index)=>_GetTouchPointId(index)
const _GetTouchPointCount=mod.cwrap('GetTouchPointCount','number',[])
raylib.GetTouchPointCount=()=>_GetTouchPointCount()
const _SetGesturesEnabled=mod.cwrap('SetGesturesEnabled','pointer',['number'])
raylib.SetGesturesEnabled=(flags)=>_SetGesturesEnabled(flags)
const _IsGestureDetected=mod.cwrap('IsGestureDetected','boolean',['number'])
raylib.IsGestureDetected=(gesture)=>_IsGestureDetected(gesture)
const _GetGestureDetected=mod.cwrap('GetGestureDetected','number',[])
raylib.GetGestureDetected=()=>_GetGestureDetected()
const _GetGestureHoldDuration=mod.cwrap('GetGestureHoldDuration','number',[])
raylib.GetGestureHoldDuration=()=>_GetGestureHoldDuration()
const _GetGestureDragVector=mod.cwrap('GetGestureDragVector','void',['pointer'])
raylib.GetGestureDragVector=()=>{const _ret=new raylib.Vector2()
_GetGestureDragVector(_ret._address)
return _ret}
const _GetGestureDragAngle=mod.cwrap('GetGestureDragAngle','number',[])
raylib.GetGestureDragAngle=()=>_GetGestureDragAngle()
const _GetGesturePinchVector=mod.cwrap('GetGesturePinchVector','void',['pointer'])
raylib.GetGesturePinchVector=()=>{const _ret=new raylib.Vector2()
_GetGesturePinchVector(_ret._address)
return _ret}
const _GetGesturePinchAngle=mod.cwrap('GetGesturePinchAngle','number',[])
raylib.GetGesturePinchAngle=()=>_GetGesturePinchAngle()
const _UpdateCamera=mod.cwrap('UpdateCamera','pointer',['pointer','number'])
raylib.UpdateCamera=(camera,mode)=>_UpdateCamera(camera._address,mode)
const _UpdateCameraPro=mod.cwrap('UpdateCameraPro','pointer',['pointer','pointer','pointer','number'])
raylib.UpdateCameraPro=(camera,movement,rotation,zoom)=>_UpdateCameraPro(camera._address,movement._address,rotation._address,zoom)
const _SetShapesTexture=mod.cwrap('SetShapesTexture','pointer',['pointer','pointer'])
raylib.SetShapesTexture=(texture,source)=>_SetShapesTexture(texture._address,source._address)
const _GetShapesTexture=mod.cwrap('GetShapesTexture','void',['pointer'])
raylib.GetShapesTexture=()=>{const _ret=new raylib.Texture2D()
_GetShapesTexture(_ret._address)
return _ret}
const _GetShapesTextureRectangle=mod.cwrap('GetShapesTextureRectangle','void',['pointer'])
raylib.GetShapesTextureRectangle=()=>{const _ret=new raylib.Rectangle()
_GetShapesTextureRectangle(_ret._address)
return _ret}
const _DrawPixel=mod.cwrap('DrawPixel','pointer',['number','number','pointer'])
raylib.DrawPixel=(posX,posY,color)=>_DrawPixel(posX,posY,color._address)
const _DrawPixelV=mod.cwrap('DrawPixelV','pointer',['pointer','pointer'])
raylib.DrawPixelV=(position,color)=>_DrawPixelV(position._address,color._address)
const _DrawLine=mod.cwrap('DrawLine','pointer',['number','number','number','number','pointer'])
raylib.DrawLine=(startPosX,startPosY,endPosX,endPosY,color)=>_DrawLine(startPosX,startPosY,endPosX,endPosY,color._address)
const _DrawLineV=mod.cwrap('DrawLineV','pointer',['pointer','pointer','pointer'])
raylib.DrawLineV=(startPos,endPos,color)=>_DrawLineV(startPos._address,endPos._address,color._address)
const _DrawLineEx=mod.cwrap('DrawLineEx','pointer',['pointer','pointer','number','pointer'])
raylib.DrawLineEx=(startPos,endPos,thick,color)=>_DrawLineEx(startPos._address,endPos._address,thick,color._address)
const _DrawLineStrip=mod.cwrap('DrawLineStrip','pointer',['pointer','number','pointer'])
raylib.DrawLineStrip=(points,pointCount,color)=>_DrawLineStrip(points._address,pointCount,color._address)
const _DrawLineBezier=mod.cwrap('DrawLineBezier','pointer',['pointer','pointer','number','pointer'])
raylib.DrawLineBezier=(startPos,endPos,thick,color)=>_DrawLineBezier(startPos._address,endPos._address,thick,color._address)
const _DrawCircle=mod.cwrap('DrawCircle','pointer',['number','number','number','pointer'])
raylib.DrawCircle=(centerX,centerY,radius,color)=>_DrawCircle(centerX,centerY,radius,color._address)
const _DrawCircleSector=mod.cwrap('DrawCircleSector','pointer',['pointer','number','number','number','number','pointer'])
raylib.DrawCircleSector=(center,radius,startAngle,endAngle,segments,color)=>_DrawCircleSector(center._address,radius,startAngle,endAngle,segments,color._address)
const _DrawCircleSectorLines=mod.cwrap('DrawCircleSectorLines','pointer',['pointer','number','number','number','number','pointer'])
raylib.DrawCircleSectorLines=(center,radius,startAngle,endAngle,segments,color)=>_DrawCircleSectorLines(center._address,radius,startAngle,endAngle,segments,color._address)
const _DrawCircleGradient=mod.cwrap('DrawCircleGradient','pointer',['number','number','number','pointer','pointer'])
raylib.DrawCircleGradient=(centerX,centerY,radius,inner,outer)=>_DrawCircleGradient(centerX,centerY,radius,inner._address,outer._address)
const _DrawCircleV=mod.cwrap('DrawCircleV','pointer',['pointer','number','pointer'])
raylib.DrawCircleV=(center,radius,color)=>_DrawCircleV(center._address,radius,color._address)
const _DrawCircleLines=mod.cwrap('DrawCircleLines','pointer',['number','number','number','pointer'])
raylib.DrawCircleLines=(centerX,centerY,radius,color)=>_DrawCircleLines(centerX,centerY,radius,color._address)
const _DrawCircleLinesV=mod.cwrap('DrawCircleLinesV','pointer',['pointer','number','pointer'])
raylib.DrawCircleLinesV=(center,radius,color)=>_DrawCircleLinesV(center._address,radius,color._address)
const _DrawEllipse=mod.cwrap('DrawEllipse','pointer',['number','number','number','number','pointer'])
raylib.DrawEllipse=(centerX,centerY,radiusH,radiusV,color)=>_DrawEllipse(centerX,centerY,radiusH,radiusV,color._address)
const _DrawEllipseLines=mod.cwrap('DrawEllipseLines','pointer',['number','number','number','number','pointer'])
raylib.DrawEllipseLines=(centerX,centerY,radiusH,radiusV,color)=>_DrawEllipseLines(centerX,centerY,radiusH,radiusV,color._address)
const _DrawRing=mod.cwrap('DrawRing','pointer',['pointer','number','number','number','number','number','pointer'])
raylib.DrawRing=(center,innerRadius,outerRadius,startAngle,endAngle,segments,color)=>_DrawRing(center._address,innerRadius,outerRadius,startAngle,endAngle,segments,color._address)
const _DrawRingLines=mod.cwrap('DrawRingLines','pointer',['pointer','number','number','number','number','number','pointer'])
raylib.DrawRingLines=(center,innerRadius,outerRadius,startAngle,endAngle,segments,color)=>_DrawRingLines(center._address,innerRadius,outerRadius,startAngle,endAngle,segments,color._address)
const _DrawRectangle=mod.cwrap('DrawRectangle','pointer',['number','number','number','number','pointer'])
raylib.DrawRectangle=(posX,posY,width,height,color)=>_DrawRectangle(posX,posY,width,height,color._address)
const _DrawRectangleV=mod.cwrap('DrawRectangleV','pointer',['pointer','pointer','pointer'])
raylib.DrawRectangleV=(position,size,color)=>_DrawRectangleV(position._address,size._address,color._address)
const _DrawRectangleRec=mod.cwrap('DrawRectangleRec','pointer',['pointer','pointer'])
raylib.DrawRectangleRec=(rec,color)=>_DrawRectangleRec(rec._address,color._address)
const _DrawRectanglePro=mod.cwrap('DrawRectanglePro','pointer',['pointer','pointer','number','pointer'])
raylib.DrawRectanglePro=(rec,origin,rotation,color)=>_DrawRectanglePro(rec._address,origin._address,rotation,color._address)
const _DrawRectangleGradientV=mod.cwrap('DrawRectangleGradientV','pointer',['number','number','number','number','pointer','pointer'])
raylib.DrawRectangleGradientV=(posX,posY,width,height,top,bottom)=>_DrawRectangleGradientV(posX,posY,width,height,top._address,bottom._address)
const _DrawRectangleGradientH=mod.cwrap('DrawRectangleGradientH','pointer',['number','number','number','number','pointer','pointer'])
raylib.DrawRectangleGradientH=(posX,posY,width,height,left,right)=>_DrawRectangleGradientH(posX,posY,width,height,left._address,right._address)
const _DrawRectangleGradientEx=mod.cwrap('DrawRectangleGradientEx','pointer',['pointer','pointer','pointer','pointer','pointer'])
raylib.DrawRectangleGradientEx=(rec,topLeft,bottomLeft,topRight,bottomRight)=>_DrawRectangleGradientEx(rec._address,topLeft._address,bottomLeft._address,topRight._address,bottomRight._address)
const _DrawRectangleLines=mod.cwrap('DrawRectangleLines','pointer',['number','number','number','number','pointer'])
raylib.DrawRectangleLines=(posX,posY,width,height,color)=>_DrawRectangleLines(posX,posY,width,height,color._address)
const _DrawRectangleLinesEx=mod.cwrap('DrawRectangleLinesEx','pointer',['pointer','number','pointer'])
raylib.DrawRectangleLinesEx=(rec,lineThick,color)=>_DrawRectangleLinesEx(rec._address,lineThick,color._address)
const _DrawRectangleRounded=mod.cwrap('DrawRectangleRounded','pointer',['pointer','number','number','pointer'])
raylib.DrawRectangleRounded=(rec,roundness,segments,color)=>_DrawRectangleRounded(rec._address,roundness,segments,color._address)
const _DrawRectangleRoundedLines=mod.cwrap('DrawRectangleRoundedLines','pointer',['pointer','number','number','pointer'])
raylib.DrawRectangleRoundedLines=(rec,roundness,segments,color)=>_DrawRectangleRoundedLines(rec._address,roundness,segments,color._address)
const _DrawRectangleRoundedLinesEx=mod.cwrap('DrawRectangleRoundedLinesEx','pointer',['pointer','number','number','number','pointer'])
raylib.DrawRectangleRoundedLinesEx=(rec,roundness,segments,lineThick,color)=>_DrawRectangleRoundedLinesEx(rec._address,roundness,segments,lineThick,color._address)
const _DrawTriangle=mod.cwrap('DrawTriangle','pointer',['pointer','pointer','pointer','pointer'])
raylib.DrawTriangle=(v1,v2,v3,color)=>_DrawTriangle(v1._address,v2._address,v3._address,color._address)
const _DrawTriangleLines=mod.cwrap('DrawTriangleLines','pointer',['pointer','pointer','pointer','pointer'])
raylib.DrawTriangleLines=(v1,v2,v3,color)=>_DrawTriangleLines(v1._address,v2._address,v3._address,color._address)
const _DrawTriangleFan=mod.cwrap('DrawTriangleFan','pointer',['pointer','number','pointer'])
raylib.DrawTriangleFan=(points,pointCount,color)=>_DrawTriangleFan(points._address,pointCount,color._address)
const _DrawTriangleStrip=mod.cwrap('DrawTriangleStrip','pointer',['pointer','number','pointer'])
raylib.DrawTriangleStrip=(points,pointCount,color)=>_DrawTriangleStrip(points._address,pointCount,color._address)
const _DrawPoly=mod.cwrap('DrawPoly','pointer',['pointer','number','number','number','pointer'])
raylib.DrawPoly=(center,sides,radius,rotation,color)=>_DrawPoly(center._address,sides,radius,rotation,color._address)
const _DrawPolyLines=mod.cwrap('DrawPolyLines','pointer',['pointer','number','number','number','pointer'])
raylib.DrawPolyLines=(center,sides,radius,rotation,color)=>_DrawPolyLines(center._address,sides,radius,rotation,color._address)
const _DrawPolyLinesEx=mod.cwrap('DrawPolyLinesEx','pointer',['pointer','number','number','number','number','pointer'])
raylib.DrawPolyLinesEx=(center,sides,radius,rotation,lineThick,color)=>_DrawPolyLinesEx(center._address,sides,radius,rotation,lineThick,color._address)
const _DrawSplineLinear=mod.cwrap('DrawSplineLinear','pointer',['pointer','number','number','pointer'])
raylib.DrawSplineLinear=(points,pointCount,thick,color)=>_DrawSplineLinear(points._address,pointCount,thick,color._address)
const _DrawSplineBasis=mod.cwrap('DrawSplineBasis','pointer',['pointer','number','number','pointer'])
raylib.DrawSplineBasis=(points,pointCount,thick,color)=>_DrawSplineBasis(points._address,pointCount,thick,color._address)
const _DrawSplineCatmullRom=mod.cwrap('DrawSplineCatmullRom','pointer',['pointer','number','number','pointer'])
raylib.DrawSplineCatmullRom=(points,pointCount,thick,color)=>_DrawSplineCatmullRom(points._address,pointCount,thick,color._address)
const _DrawSplineBezierQuadratic=mod.cwrap('DrawSplineBezierQuadratic','pointer',['pointer','number','number','pointer'])
raylib.DrawSplineBezierQuadratic=(points,pointCount,thick,color)=>_DrawSplineBezierQuadratic(points._address,pointCount,thick,color._address)
const _DrawSplineBezierCubic=mod.cwrap('DrawSplineBezierCubic','pointer',['pointer','number','number','pointer'])
raylib.DrawSplineBezierCubic=(points,pointCount,thick,color)=>_DrawSplineBezierCubic(points._address,pointCount,thick,color._address)
const _DrawSplineSegmentLinear=mod.cwrap('DrawSplineSegmentLinear','pointer',['pointer','pointer','number','pointer'])
raylib.DrawSplineSegmentLinear=(p1,p2,thick,color)=>_DrawSplineSegmentLinear(p1._address,p2._address,thick,color._address)
const _DrawSplineSegmentBasis=mod.cwrap('DrawSplineSegmentBasis','pointer',['pointer','pointer','pointer','pointer','number','pointer'])
raylib.DrawSplineSegmentBasis=(p1,p2,p3,p4,thick,color)=>_DrawSplineSegmentBasis(p1._address,p2._address,p3._address,p4._address,thick,color._address)
const _DrawSplineSegmentCatmullRom=mod.cwrap('DrawSplineSegmentCatmullRom','pointer',['pointer','pointer','pointer','pointer','number','pointer'])
raylib.DrawSplineSegmentCatmullRom=(p1,p2,p3,p4,thick,color)=>_DrawSplineSegmentCatmullRom(p1._address,p2._address,p3._address,p4._address,thick,color._address)
const _DrawSplineSegmentBezierQuadratic=mod.cwrap('DrawSplineSegmentBezierQuadratic','pointer',['pointer','pointer','pointer','number','pointer'])
raylib.DrawSplineSegmentBezierQuadratic=(p1,c2,p3,thick,color)=>_DrawSplineSegmentBezierQuadratic(p1._address,c2._address,p3._address,thick,color._address)
const _DrawSplineSegmentBezierCubic=mod.cwrap('DrawSplineSegmentBezierCubic','pointer',['pointer','pointer','pointer','pointer','number','pointer'])
raylib.DrawSplineSegmentBezierCubic=(p1,c2,c3,p4,thick,color)=>_DrawSplineSegmentBezierCubic(p1._address,c2._address,c3._address,p4._address,thick,color._address)
const _GetSplinePointLinear=mod.cwrap('GetSplinePointLinear','void',['pointer','pointer','pointer','number'])
raylib.GetSplinePointLinear=(startPos,endPos,t)=>{const _ret=new raylib.Vector2()
_GetSplinePointLinear(_ret._address,startPos._address,endPos._address,t)
return _ret}
const _GetSplinePointBasis=mod.cwrap('GetSplinePointBasis','void',['pointer','pointer','pointer','pointer','pointer','number'])
raylib.GetSplinePointBasis=(p1,p2,p3,p4,t)=>{const _ret=new raylib.Vector2()
_GetSplinePointBasis(_ret._address,p1._address,p2._address,p3._address,p4._address,t)
return _ret}
const _GetSplinePointCatmullRom=mod.cwrap('GetSplinePointCatmullRom','void',['pointer','pointer','pointer','pointer','pointer','number'])
raylib.GetSplinePointCatmullRom=(p1,p2,p3,p4,t)=>{const _ret=new raylib.Vector2()
_GetSplinePointCatmullRom(_ret._address,p1._address,p2._address,p3._address,p4._address,t)
return _ret}
const _GetSplinePointBezierQuad=mod.cwrap('GetSplinePointBezierQuad','void',['pointer','pointer','pointer','pointer','number'])
raylib.GetSplinePointBezierQuad=(p1,c2,p3,t)=>{const _ret=new raylib.Vector2()
_GetSplinePointBezierQuad(_ret._address,p1._address,c2._address,p3._address,t)
return _ret}
const _GetSplinePointBezierCubic=mod.cwrap('GetSplinePointBezierCubic','void',['pointer','pointer','pointer','pointer','pointer','number'])
raylib.GetSplinePointBezierCubic=(p1,c2,c3,p4,t)=>{const _ret=new raylib.Vector2()
_GetSplinePointBezierCubic(_ret._address,p1._address,c2._address,c3._address,p4._address,t)
return _ret}
const _CheckCollisionRecs=mod.cwrap('CheckCollisionRecs','boolean',['pointer','pointer'])
raylib.CheckCollisionRecs=(rec1,rec2)=>_CheckCollisionRecs(rec1._address,rec2._address)
const _CheckCollisionCircles=mod.cwrap('CheckCollisionCircles','boolean',['pointer','number','pointer','number'])
raylib.CheckCollisionCircles=(center1,radius1,center2,radius2)=>_CheckCollisionCircles(center1._address,radius1,center2._address,radius2)
const _CheckCollisionCircleRec=mod.cwrap('CheckCollisionCircleRec','boolean',['pointer','number','pointer'])
raylib.CheckCollisionCircleRec=(center,radius,rec)=>_CheckCollisionCircleRec(center._address,radius,rec._address)
const _CheckCollisionCircleLine=mod.cwrap('CheckCollisionCircleLine','boolean',['pointer','number','pointer','pointer'])
raylib.CheckCollisionCircleLine=(center,radius,p1,p2)=>_CheckCollisionCircleLine(center._address,radius,p1._address,p2._address)
const _CheckCollisionPointRec=mod.cwrap('CheckCollisionPointRec','boolean',['pointer','pointer'])
raylib.CheckCollisionPointRec=(point,rec)=>_CheckCollisionPointRec(point._address,rec._address)
const _CheckCollisionPointCircle=mod.cwrap('CheckCollisionPointCircle','boolean',['pointer','pointer','number'])
raylib.CheckCollisionPointCircle=(point,center,radius)=>_CheckCollisionPointCircle(point._address,center._address,radius)
const _CheckCollisionPointTriangle=mod.cwrap('CheckCollisionPointTriangle','boolean',['pointer','pointer','pointer','pointer'])
raylib.CheckCollisionPointTriangle=(point,p1,p2,p3)=>_CheckCollisionPointTriangle(point._address,p1._address,p2._address,p3._address)
const _CheckCollisionPointLine=mod.cwrap('CheckCollisionPointLine','boolean',['pointer','pointer','pointer','number'])
raylib.CheckCollisionPointLine=(point,p1,p2,threshold)=>_CheckCollisionPointLine(point._address,p1._address,p2._address,threshold)
const _CheckCollisionPointPoly=mod.cwrap('CheckCollisionPointPoly','boolean',['pointer','pointer','number'])
raylib.CheckCollisionPointPoly=(point,points,pointCount)=>_CheckCollisionPointPoly(point._address,points._address,pointCount)
const _CheckCollisionLines=mod.cwrap('CheckCollisionLines','boolean',['pointer','pointer','pointer','pointer','pointer'])
raylib.CheckCollisionLines=(startPos1,endPos1,startPos2,endPos2,collisionPoint)=>_CheckCollisionLines(startPos1._address,endPos1._address,startPos2._address,endPos2._address,collisionPoint._address)
const _GetCollisionRec=mod.cwrap('GetCollisionRec','void',['pointer','pointer','pointer'])
raylib.GetCollisionRec=(rec1,rec2)=>{const _ret=new raylib.Rectangle()
_GetCollisionRec(_ret._address,rec1._address,rec2._address)
return _ret}
const _LoadImage=mod.cwrap('LoadImage','void',['pointer','string'])
raylib.LoadImage=async(fileName,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Image()
_LoadImage(_ret._address,fileName)
return _ret}
const _LoadImageRaw=mod.cwrap('LoadImageRaw','void',['pointer','string','number','number','number','number'])
raylib.LoadImageRaw=async(fileName,width,height,format,headerSize,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Image()
_LoadImageRaw(_ret._address,fileName,width,height,format,headerSize)
return _ret}
const _LoadImageAnim=mod.cwrap('LoadImageAnim','void',['pointer','string','pointer'])
raylib.LoadImageAnim=async(fileName,frames,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Image()
_LoadImageAnim(_ret._address,fileName,frames._address)
return _ret}
const _LoadImageAnimFromMemory=mod.cwrap('LoadImageAnimFromMemory','void',['pointer','string','pointer','number','pointer'])
raylib.LoadImageAnimFromMemory=(fileType,fileData,dataSize,frames)=>{const _ret=new raylib.Image()
_LoadImageAnimFromMemory(_ret._address,fileType,fileData._address,dataSize,frames._address)
return _ret}
const _LoadImageFromMemory=mod.cwrap('LoadImageFromMemory','void',['pointer','string','pointer','number'])
raylib.LoadImageFromMemory=(fileType,fileData,dataSize)=>{const _ret=new raylib.Image()
_LoadImageFromMemory(_ret._address,fileType,fileData._address,dataSize)
return _ret}
const _LoadImageFromTexture=mod.cwrap('LoadImageFromTexture','void',['pointer','pointer'])
raylib.LoadImageFromTexture=(texture)=>{const _ret=new raylib.Image()
_LoadImageFromTexture(_ret._address,texture._address)
return _ret}
const _LoadImageFromScreen=mod.cwrap('LoadImageFromScreen','void',['pointer'])
raylib.LoadImageFromScreen=()=>{const _ret=new raylib.Image()
_LoadImageFromScreen(_ret._address)
return _ret}
const _IsImageValid=mod.cwrap('IsImageValid','boolean',['pointer'])
raylib.IsImageValid=(image)=>_IsImageValid(image._address)
const _UnloadImage=mod.cwrap('UnloadImage','pointer',['pointer'])
raylib.UnloadImage=(image)=>_UnloadImage(image._address)
const _ExportImage=mod.cwrap('ExportImage','boolean',['pointer','string'])
raylib.ExportImage=(image,fileName)=>_ExportImage(image._address,fileName)
const _ExportImageToMemory=mod.cwrap('ExportImageToMemory','pointer',['pointer','string','pointer'])
raylib.ExportImageToMemory=(image,fileType,fileSize)=>_ExportImageToMemory(image._address,fileType,fileSize._address)
const _ExportImageAsCode=mod.cwrap('ExportImageAsCode','boolean',['pointer','string'])
raylib.ExportImageAsCode=(image,fileName)=>_ExportImageAsCode(image._address,fileName)
const _GenImageColor=mod.cwrap('GenImageColor','void',['pointer','number','number','pointer'])
raylib.GenImageColor=(width,height,color)=>{const _ret=new raylib.Image()
_GenImageColor(_ret._address,width,height,color._address)
return _ret}
const _GenImageGradientLinear=mod.cwrap('GenImageGradientLinear','void',['pointer','number','number','number','pointer','pointer'])
raylib.GenImageGradientLinear=(width,height,direction,start,end)=>{const _ret=new raylib.Image()
_GenImageGradientLinear(_ret._address,width,height,direction,start._address,end._address)
return _ret}
const _GenImageGradientRadial=mod.cwrap('GenImageGradientRadial','void',['pointer','number','number','number','pointer','pointer'])
raylib.GenImageGradientRadial=(width,height,density,inner,outer)=>{const _ret=new raylib.Image()
_GenImageGradientRadial(_ret._address,width,height,density,inner._address,outer._address)
return _ret}
const _GenImageGradientSquare=mod.cwrap('GenImageGradientSquare','void',['pointer','number','number','number','pointer','pointer'])
raylib.GenImageGradientSquare=(width,height,density,inner,outer)=>{const _ret=new raylib.Image()
_GenImageGradientSquare(_ret._address,width,height,density,inner._address,outer._address)
return _ret}
const _GenImageChecked=mod.cwrap('GenImageChecked','void',['pointer','number','number','number','number','pointer','pointer'])
raylib.GenImageChecked=(width,height,checksX,checksY,col1,col2)=>{const _ret=new raylib.Image()
_GenImageChecked(_ret._address,width,height,checksX,checksY,col1._address,col2._address)
return _ret}
const _GenImageWhiteNoise=mod.cwrap('GenImageWhiteNoise','void',['pointer','number','number','number'])
raylib.GenImageWhiteNoise=(width,height,factor)=>{const _ret=new raylib.Image()
_GenImageWhiteNoise(_ret._address,width,height,factor)
return _ret}
const _GenImagePerlinNoise=mod.cwrap('GenImagePerlinNoise','void',['pointer','number','number','number','number','number'])
raylib.GenImagePerlinNoise=(width,height,offsetX,offsetY,scale)=>{const _ret=new raylib.Image()
_GenImagePerlinNoise(_ret._address,width,height,offsetX,offsetY,scale)
return _ret}
const _GenImageCellular=mod.cwrap('GenImageCellular','void',['pointer','number','number','number'])
raylib.GenImageCellular=(width,height,tileSize)=>{const _ret=new raylib.Image()
_GenImageCellular(_ret._address,width,height,tileSize)
return _ret}
const _GenImageText=mod.cwrap('GenImageText','void',['pointer','number','number','string'])
raylib.GenImageText=(width,height,text)=>{const _ret=new raylib.Image()
_GenImageText(_ret._address,width,height,text)
return _ret}
const _ImageCopy=mod.cwrap('ImageCopy','void',['pointer','pointer'])
raylib.ImageCopy=(image)=>{const _ret=new raylib.Image()
_ImageCopy(_ret._address,image._address)
return _ret}
const _ImageFromImage=mod.cwrap('ImageFromImage','void',['pointer','pointer','pointer'])
raylib.ImageFromImage=(image,rec)=>{const _ret=new raylib.Image()
_ImageFromImage(_ret._address,image._address,rec._address)
return _ret}
const _ImageFromChannel=mod.cwrap('ImageFromChannel','void',['pointer','pointer','number'])
raylib.ImageFromChannel=(image,selectedChannel)=>{const _ret=new raylib.Image()
_ImageFromChannel(_ret._address,image._address,selectedChannel)
return _ret}
const _ImageText=mod.cwrap('ImageText','void',['pointer','string','number','pointer'])
raylib.ImageText=(text,fontSize,color)=>{const _ret=new raylib.Image()
_ImageText(_ret._address,text,fontSize,color._address)
return _ret}
const _ImageTextEx=mod.cwrap('ImageTextEx','void',['pointer','pointer','string','number','number','pointer'])
raylib.ImageTextEx=(font,text,fontSize,spacing,tint)=>{const _ret=new raylib.Image()
_ImageTextEx(_ret._address,font._address,text,fontSize,spacing,tint._address)
return _ret}
const _ImageFormat=mod.cwrap('ImageFormat','pointer',['pointer','number'])
raylib.ImageFormat=(image,newFormat)=>_ImageFormat(image._address,newFormat)
const _ImageToPOT=mod.cwrap('ImageToPOT','pointer',['pointer','pointer'])
raylib.ImageToPOT=(image,fill)=>_ImageToPOT(image._address,fill._address)
const _ImageCrop=mod.cwrap('ImageCrop','pointer',['pointer','pointer'])
raylib.ImageCrop=(image,crop)=>_ImageCrop(image._address,crop._address)
const _ImageAlphaCrop=mod.cwrap('ImageAlphaCrop','pointer',['pointer','number'])
raylib.ImageAlphaCrop=(image,threshold)=>_ImageAlphaCrop(image._address,threshold)
const _ImageAlphaClear=mod.cwrap('ImageAlphaClear','pointer',['pointer','pointer','number'])
raylib.ImageAlphaClear=(image,color,threshold)=>_ImageAlphaClear(image._address,color._address,threshold)
const _ImageAlphaMask=mod.cwrap('ImageAlphaMask','pointer',['pointer','pointer'])
raylib.ImageAlphaMask=(image,alphaMask)=>_ImageAlphaMask(image._address,alphaMask._address)
const _ImageAlphaPremultiply=mod.cwrap('ImageAlphaPremultiply','pointer',['pointer'])
raylib.ImageAlphaPremultiply=(image)=>_ImageAlphaPremultiply(image._address)
const _ImageBlurGaussian=mod.cwrap('ImageBlurGaussian','pointer',['pointer','number'])
raylib.ImageBlurGaussian=(image,blurSize)=>_ImageBlurGaussian(image._address,blurSize)
const _ImageKernelConvolution=mod.cwrap('ImageKernelConvolution','pointer',['pointer','pointer','number'])
raylib.ImageKernelConvolution=(image,kernel,kernelSize)=>_ImageKernelConvolution(image._address,kernel._address,kernelSize)
const _ImageResize=mod.cwrap('ImageResize','pointer',['pointer','number','number'])
raylib.ImageResize=(image,newWidth,newHeight)=>_ImageResize(image._address,newWidth,newHeight)
const _ImageResizeNN=mod.cwrap('ImageResizeNN','pointer',['pointer','number','number'])
raylib.ImageResizeNN=(image,newWidth,newHeight)=>_ImageResizeNN(image._address,newWidth,newHeight)
const _ImageResizeCanvas=mod.cwrap('ImageResizeCanvas','pointer',['pointer','number','number','number','number','pointer'])
raylib.ImageResizeCanvas=(image,newWidth,newHeight,offsetX,offsetY,fill)=>_ImageResizeCanvas(image._address,newWidth,newHeight,offsetX,offsetY,fill._address)
const _ImageMipmaps=mod.cwrap('ImageMipmaps','pointer',['pointer'])
raylib.ImageMipmaps=(image)=>_ImageMipmaps(image._address)
const _ImageDither=mod.cwrap('ImageDither','pointer',['pointer','number','number','number','number'])
raylib.ImageDither=(image,rBpp,gBpp,bBpp,aBpp)=>_ImageDither(image._address,rBpp,gBpp,bBpp,aBpp)
const _ImageFlipVertical=mod.cwrap('ImageFlipVertical','pointer',['pointer'])
raylib.ImageFlipVertical=(image)=>_ImageFlipVertical(image._address)
const _ImageFlipHorizontal=mod.cwrap('ImageFlipHorizontal','pointer',['pointer'])
raylib.ImageFlipHorizontal=(image)=>_ImageFlipHorizontal(image._address)
const _ImageRotate=mod.cwrap('ImageRotate','pointer',['pointer','number'])
raylib.ImageRotate=(image,degrees)=>_ImageRotate(image._address,degrees)
const _ImageRotateCW=mod.cwrap('ImageRotateCW','pointer',['pointer'])
raylib.ImageRotateCW=(image)=>_ImageRotateCW(image._address)
const _ImageRotateCCW=mod.cwrap('ImageRotateCCW','pointer',['pointer'])
raylib.ImageRotateCCW=(image)=>_ImageRotateCCW(image._address)
const _ImageColorTint=mod.cwrap('ImageColorTint','pointer',['pointer','pointer'])
raylib.ImageColorTint=(image,color)=>_ImageColorTint(image._address,color._address)
const _ImageColorInvert=mod.cwrap('ImageColorInvert','pointer',['pointer'])
raylib.ImageColorInvert=(image)=>_ImageColorInvert(image._address)
const _ImageColorGrayscale=mod.cwrap('ImageColorGrayscale','pointer',['pointer'])
raylib.ImageColorGrayscale=(image)=>_ImageColorGrayscale(image._address)
const _ImageColorContrast=mod.cwrap('ImageColorContrast','pointer',['pointer','number'])
raylib.ImageColorContrast=(image,contrast)=>_ImageColorContrast(image._address,contrast)
const _ImageColorBrightness=mod.cwrap('ImageColorBrightness','pointer',['pointer','number'])
raylib.ImageColorBrightness=(image,brightness)=>_ImageColorBrightness(image._address,brightness)
const _ImageColorReplace=mod.cwrap('ImageColorReplace','pointer',['pointer','pointer','pointer'])
raylib.ImageColorReplace=(image,color,replace)=>_ImageColorReplace(image._address,color._address,replace._address)
const _LoadImageColors=mod.cwrap('LoadImageColors','void',['pointer','pointer'])
raylib.LoadImageColors=(image)=>{const _ret=new raylib.Color()
_LoadImageColors(_ret._address,image._address)
return _ret}
const _LoadImagePalette=mod.cwrap('LoadImagePalette','void',['pointer','pointer','number','pointer'])
raylib.LoadImagePalette=(image,maxPaletteSize,colorCount)=>{const _ret=new raylib.Color()
_LoadImagePalette(_ret._address,image._address,maxPaletteSize,colorCount._address)
return _ret}
const _UnloadImageColors=mod.cwrap('UnloadImageColors','pointer',['pointer'])
raylib.UnloadImageColors=(colors)=>_UnloadImageColors(colors._address)
const _UnloadImagePalette=mod.cwrap('UnloadImagePalette','pointer',['pointer'])
raylib.UnloadImagePalette=(colors)=>_UnloadImagePalette(colors._address)
const _GetImageAlphaBorder=mod.cwrap('GetImageAlphaBorder','void',['pointer','pointer','number'])
raylib.GetImageAlphaBorder=(image,threshold)=>{const _ret=new raylib.Rectangle()
_GetImageAlphaBorder(_ret._address,image._address,threshold)
return _ret}
const _GetImageColor=mod.cwrap('GetImageColor','void',['pointer','pointer','number','number'])
raylib.GetImageColor=(image,x,y)=>{const _ret=new raylib.Color()
_GetImageColor(_ret._address,image._address,x,y)
return _ret}
const _ImageClearBackground=mod.cwrap('ImageClearBackground','pointer',['pointer','pointer'])
raylib.ImageClearBackground=(dst,color)=>_ImageClearBackground(dst._address,color._address)
const _ImageDrawPixel=mod.cwrap('ImageDrawPixel','pointer',['pointer','number','number','pointer'])
raylib.ImageDrawPixel=(dst,posX,posY,color)=>_ImageDrawPixel(dst._address,posX,posY,color._address)
const _ImageDrawPixelV=mod.cwrap('ImageDrawPixelV','pointer',['pointer','pointer','pointer'])
raylib.ImageDrawPixelV=(dst,position,color)=>_ImageDrawPixelV(dst._address,position._address,color._address)
const _ImageDrawLine=mod.cwrap('ImageDrawLine','pointer',['pointer','number','number','number','number','pointer'])
raylib.ImageDrawLine=(dst,startPosX,startPosY,endPosX,endPosY,color)=>_ImageDrawLine(dst._address,startPosX,startPosY,endPosX,endPosY,color._address)
const _ImageDrawLineV=mod.cwrap('ImageDrawLineV','pointer',['pointer','pointer','pointer','pointer'])
raylib.ImageDrawLineV=(dst,start,end,color)=>_ImageDrawLineV(dst._address,start._address,end._address,color._address)
const _ImageDrawLineEx=mod.cwrap('ImageDrawLineEx','pointer',['pointer','pointer','pointer','number','pointer'])
raylib.ImageDrawLineEx=(dst,start,end,thick,color)=>_ImageDrawLineEx(dst._address,start._address,end._address,thick,color._address)
const _ImageDrawCircle=mod.cwrap('ImageDrawCircle','pointer',['pointer','number','number','number','pointer'])
raylib.ImageDrawCircle=(dst,centerX,centerY,radius,color)=>_ImageDrawCircle(dst._address,centerX,centerY,radius,color._address)
const _ImageDrawCircleV=mod.cwrap('ImageDrawCircleV','pointer',['pointer','pointer','number','pointer'])
raylib.ImageDrawCircleV=(dst,center,radius,color)=>_ImageDrawCircleV(dst._address,center._address,radius,color._address)
const _ImageDrawCircleLines=mod.cwrap('ImageDrawCircleLines','pointer',['pointer','number','number','number','pointer'])
raylib.ImageDrawCircleLines=(dst,centerX,centerY,radius,color)=>_ImageDrawCircleLines(dst._address,centerX,centerY,radius,color._address)
const _ImageDrawCircleLinesV=mod.cwrap('ImageDrawCircleLinesV','pointer',['pointer','pointer','number','pointer'])
raylib.ImageDrawCircleLinesV=(dst,center,radius,color)=>_ImageDrawCircleLinesV(dst._address,center._address,radius,color._address)
const _ImageDrawRectangle=mod.cwrap('ImageDrawRectangle','pointer',['pointer','number','number','number','number','pointer'])
raylib.ImageDrawRectangle=(dst,posX,posY,width,height,color)=>_ImageDrawRectangle(dst._address,posX,posY,width,height,color._address)
const _ImageDrawRectangleV=mod.cwrap('ImageDrawRectangleV','pointer',['pointer','pointer','pointer','pointer'])
raylib.ImageDrawRectangleV=(dst,position,size,color)=>_ImageDrawRectangleV(dst._address,position._address,size._address,color._address)
const _ImageDrawRectangleRec=mod.cwrap('ImageDrawRectangleRec','pointer',['pointer','pointer','pointer'])
raylib.ImageDrawRectangleRec=(dst,rec,color)=>_ImageDrawRectangleRec(dst._address,rec._address,color._address)
const _ImageDrawRectangleLines=mod.cwrap('ImageDrawRectangleLines','pointer',['pointer','pointer','number','pointer'])
raylib.ImageDrawRectangleLines=(dst,rec,thick,color)=>_ImageDrawRectangleLines(dst._address,rec._address,thick,color._address)
const _ImageDrawTriangle=mod.cwrap('ImageDrawTriangle','pointer',['pointer','pointer','pointer','pointer','pointer'])
raylib.ImageDrawTriangle=(dst,v1,v2,v3,color)=>_ImageDrawTriangle(dst._address,v1._address,v2._address,v3._address,color._address)
const _ImageDrawTriangleEx=mod.cwrap('ImageDrawTriangleEx','pointer',['pointer','pointer','pointer','pointer','pointer','pointer','pointer'])
raylib.ImageDrawTriangleEx=(dst,v1,v2,v3,c1,c2,c3)=>_ImageDrawTriangleEx(dst._address,v1._address,v2._address,v3._address,c1._address,c2._address,c3._address)
const _ImageDrawTriangleLines=mod.cwrap('ImageDrawTriangleLines','pointer',['pointer','pointer','pointer','pointer','pointer'])
raylib.ImageDrawTriangleLines=(dst,v1,v2,v3,color)=>_ImageDrawTriangleLines(dst._address,v1._address,v2._address,v3._address,color._address)
const _ImageDrawTriangleFan=mod.cwrap('ImageDrawTriangleFan','pointer',['pointer','pointer','number','pointer'])
raylib.ImageDrawTriangleFan=(dst,points,pointCount,color)=>_ImageDrawTriangleFan(dst._address,points._address,pointCount,color._address)
const _ImageDrawTriangleStrip=mod.cwrap('ImageDrawTriangleStrip','pointer',['pointer','pointer','number','pointer'])
raylib.ImageDrawTriangleStrip=(dst,points,pointCount,color)=>_ImageDrawTriangleStrip(dst._address,points._address,pointCount,color._address)
const _ImageDraw=mod.cwrap('ImageDraw','pointer',['pointer','pointer','pointer','pointer','pointer'])
raylib.ImageDraw=(dst,src,srcRec,dstRec,tint)=>_ImageDraw(dst._address,src._address,srcRec._address,dstRec._address,tint._address)
const _ImageDrawText=mod.cwrap('ImageDrawText','pointer',['pointer','string','number','number','number','pointer'])
raylib.ImageDrawText=(dst,text,posX,posY,fontSize,color)=>_ImageDrawText(dst._address,text,posX,posY,fontSize,color._address)
const _ImageDrawTextEx=mod.cwrap('ImageDrawTextEx','pointer',['pointer','pointer','string','pointer','number','number','pointer'])
raylib.ImageDrawTextEx=(dst,font,text,position,fontSize,spacing,tint)=>_ImageDrawTextEx(dst._address,font._address,text,position._address,fontSize,spacing,tint._address)
const _LoadTexture=mod.cwrap('LoadTexture','void',['pointer','string'])
raylib.LoadTexture=async(fileName,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Texture2D()
_LoadTexture(_ret._address,fileName)
return _ret}
const _LoadTextureFromImage=mod.cwrap('LoadTextureFromImage','void',['pointer','pointer'])
raylib.LoadTextureFromImage=(image)=>{const _ret=new raylib.Texture2D()
_LoadTextureFromImage(_ret._address,image._address)
return _ret}
const _LoadTextureCubemap=mod.cwrap('LoadTextureCubemap','void',['pointer','pointer','number'])
raylib.LoadTextureCubemap=(image,layout)=>{const _ret=new raylib.TextureCubemap()
_LoadTextureCubemap(_ret._address,image._address,layout)
return _ret}
const _LoadRenderTexture=mod.cwrap('LoadRenderTexture','void',['pointer','number','number'])
raylib.LoadRenderTexture=(width,height)=>{const _ret=new raylib.RenderTexture2D()
_LoadRenderTexture(_ret._address,width,height)
return _ret}
const _IsTextureValid=mod.cwrap('IsTextureValid','boolean',['pointer'])
raylib.IsTextureValid=(texture)=>_IsTextureValid(texture._address)
const _UnloadTexture=mod.cwrap('UnloadTexture','pointer',['pointer'])
raylib.UnloadTexture=(texture)=>_UnloadTexture(texture._address)
const _IsRenderTextureValid=mod.cwrap('IsRenderTextureValid','boolean',['pointer'])
raylib.IsRenderTextureValid=(target)=>_IsRenderTextureValid(target._address)
const _UnloadRenderTexture=mod.cwrap('UnloadRenderTexture','pointer',['pointer'])
raylib.UnloadRenderTexture=(target)=>_UnloadRenderTexture(target._address)
const _UpdateTexture=mod.cwrap('UpdateTexture','pointer',['pointer','pointer'])
raylib.UpdateTexture=(texture,pixels)=>_UpdateTexture(texture._address,pixels._address)
const _UpdateTextureRec=mod.cwrap('UpdateTextureRec','pointer',['pointer','pointer','pointer'])
raylib.UpdateTextureRec=(texture,rec,pixels)=>_UpdateTextureRec(texture._address,rec._address,pixels._address)
const _GenTextureMipmaps=mod.cwrap('GenTextureMipmaps','pointer',['pointer'])
raylib.GenTextureMipmaps=(texture)=>_GenTextureMipmaps(texture._address)
const _SetTextureFilter=mod.cwrap('SetTextureFilter','pointer',['pointer','number'])
raylib.SetTextureFilter=(texture,filter)=>_SetTextureFilter(texture._address,filter)
const _SetTextureWrap=mod.cwrap('SetTextureWrap','pointer',['pointer','number'])
raylib.SetTextureWrap=(texture,wrap)=>_SetTextureWrap(texture._address,wrap)
const _DrawTexture=mod.cwrap('DrawTexture','pointer',['pointer','number','number','pointer'])
raylib.DrawTexture=(texture,posX,posY,tint)=>_DrawTexture(texture._address,posX,posY,tint._address)
const _DrawTextureV=mod.cwrap('DrawTextureV','pointer',['pointer','pointer','pointer'])
raylib.DrawTextureV=(texture,position,tint)=>_DrawTextureV(texture._address,position._address,tint._address)
const _DrawTextureEx=mod.cwrap('DrawTextureEx','pointer',['pointer','pointer','number','number','pointer'])
raylib.DrawTextureEx=(texture,position,rotation,scale,tint)=>_DrawTextureEx(texture._address,position._address,rotation,scale,tint._address)
const _DrawTextureRec=mod.cwrap('DrawTextureRec','pointer',['pointer','pointer','pointer','pointer'])
raylib.DrawTextureRec=(texture,source,position,tint)=>_DrawTextureRec(texture._address,source._address,position._address,tint._address)
const _DrawTexturePro=mod.cwrap('DrawTexturePro','pointer',['pointer','pointer','pointer','pointer','number','pointer'])
raylib.DrawTexturePro=(texture,source,dest,origin,rotation,tint)=>_DrawTexturePro(texture._address,source._address,dest._address,origin._address,rotation,tint._address)
const _DrawTextureNPatch=mod.cwrap('DrawTextureNPatch','pointer',['pointer','pointer','pointer','pointer','number','pointer'])
raylib.DrawTextureNPatch=(texture,nPatchInfo,dest,origin,rotation,tint)=>_DrawTextureNPatch(texture._address,nPatchInfo._address,dest._address,origin._address,rotation,tint._address)
const _ColorIsEqual=mod.cwrap('ColorIsEqual','boolean',['pointer','pointer'])
raylib.ColorIsEqual=(col1,col2)=>_ColorIsEqual(col1._address,col2._address)
const _Fade=mod.cwrap('Fade','void',['pointer','pointer','number'])
raylib.Fade=(color,alpha)=>{const _ret=new raylib.Color()
_Fade(_ret._address,color._address,alpha)
return _ret}
const _ColorToInt=mod.cwrap('ColorToInt','number',['pointer'])
raylib.ColorToInt=(color)=>_ColorToInt(color._address)
const _ColorNormalize=mod.cwrap('ColorNormalize','void',['pointer','pointer'])
raylib.ColorNormalize=(color)=>{const _ret=new raylib.Vector4()
_ColorNormalize(_ret._address,color._address)
return _ret}
const _ColorFromNormalized=mod.cwrap('ColorFromNormalized','void',['pointer','pointer'])
raylib.ColorFromNormalized=(normalized)=>{const _ret=new raylib.Color()
_ColorFromNormalized(_ret._address,normalized._address)
return _ret}
const _ColorToHSV=mod.cwrap('ColorToHSV','void',['pointer','pointer'])
raylib.ColorToHSV=(color)=>{const _ret=new raylib.Vector3()
_ColorToHSV(_ret._address,color._address)
return _ret}
const _ColorFromHSV=mod.cwrap('ColorFromHSV','void',['pointer','number','number','number'])
raylib.ColorFromHSV=(hue,saturation,value)=>{const _ret=new raylib.Color()
_ColorFromHSV(_ret._address,hue,saturation,value)
return _ret}
const _ColorTint=mod.cwrap('ColorTint','void',['pointer','pointer','pointer'])
raylib.ColorTint=(color,tint)=>{const _ret=new raylib.Color()
_ColorTint(_ret._address,color._address,tint._address)
return _ret}
const _ColorBrightness=mod.cwrap('ColorBrightness','void',['pointer','pointer','number'])
raylib.ColorBrightness=(color,factor)=>{const _ret=new raylib.Color()
_ColorBrightness(_ret._address,color._address,factor)
return _ret}
const _ColorContrast=mod.cwrap('ColorContrast','void',['pointer','pointer','number'])
raylib.ColorContrast=(color,contrast)=>{const _ret=new raylib.Color()
_ColorContrast(_ret._address,color._address,contrast)
return _ret}
const _ColorAlpha=mod.cwrap('ColorAlpha','void',['pointer','pointer','number'])
raylib.ColorAlpha=(color,alpha)=>{const _ret=new raylib.Color()
_ColorAlpha(_ret._address,color._address,alpha)
return _ret}
const _ColorAlphaBlend=mod.cwrap('ColorAlphaBlend','void',['pointer','pointer','pointer','pointer'])
raylib.ColorAlphaBlend=(dst,src,tint)=>{const _ret=new raylib.Color()
_ColorAlphaBlend(_ret._address,dst._address,src._address,tint._address)
return _ret}
const _ColorLerp=mod.cwrap('ColorLerp','void',['pointer','pointer','pointer','number'])
raylib.ColorLerp=(color1,color2,factor)=>{const _ret=new raylib.Color()
_ColorLerp(_ret._address,color1._address,color2._address,factor)
return _ret}
const _GetColor=mod.cwrap('GetColor','void',['pointer','number'])
raylib.GetColor=(hexValue)=>{const _ret=new raylib.Color()
_GetColor(_ret._address,hexValue)
return _ret}
const _GetPixelColor=mod.cwrap('GetPixelColor','void',['pointer','pointer','number'])
raylib.GetPixelColor=(srcPtr,format)=>{const _ret=new raylib.Color()
_GetPixelColor(_ret._address,srcPtr._address,format)
return _ret}
const _SetPixelColor=mod.cwrap('SetPixelColor','pointer',['pointer','pointer','number'])
raylib.SetPixelColor=(dstPtr,color,format)=>_SetPixelColor(dstPtr._address,color._address,format)
const _GetPixelDataSize=mod.cwrap('GetPixelDataSize','number',['number','number','number'])
raylib.GetPixelDataSize=(width,height,format)=>_GetPixelDataSize(width,height,format)
const _GetFontDefault=mod.cwrap('GetFontDefault','void',['pointer'])
raylib.GetFontDefault=()=>{const _ret=new raylib.Font()
_GetFontDefault(_ret._address)
return _ret}
const _LoadFont=mod.cwrap('LoadFont','void',['pointer','string'])
raylib.LoadFont=async(fileName,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Font()
_LoadFont(_ret._address,fileName)
return _ret}
const _LoadFontEx=mod.cwrap('LoadFontEx','void',['pointer','string','number','pointer','number'])
raylib.LoadFontEx=async(fileName,fontSize,codepoints,codepointCount,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Font()
_LoadFontEx(_ret._address,fileName,fontSize,codepoints._address,codepointCount)
return _ret}
const _LoadFontFromImage=mod.cwrap('LoadFontFromImage','void',['pointer','pointer','pointer','number'])
raylib.LoadFontFromImage=(image,key,firstChar)=>{const _ret=new raylib.Font()
_LoadFontFromImage(_ret._address,image._address,key._address,firstChar)
return _ret}
const _LoadFontFromMemory=mod.cwrap('LoadFontFromMemory','void',['pointer','string','pointer','number','number','pointer','number'])
raylib.LoadFontFromMemory=(fileType,fileData,dataSize,fontSize,codepoints,codepointCount)=>{const _ret=new raylib.Font()
_LoadFontFromMemory(_ret._address,fileType,fileData._address,dataSize,fontSize,codepoints._address,codepointCount)
return _ret}
const _IsFontValid=mod.cwrap('IsFontValid','boolean',['pointer'])
raylib.IsFontValid=(font)=>_IsFontValid(font._address)
const _LoadFontData=mod.cwrap('LoadFontData','void',['pointer','pointer','number','number','pointer','number','number'])
raylib.LoadFontData=(fileData,dataSize,fontSize,codepoints,codepointCount,type)=>{const _ret=new raylib.GlyphInfo()
_LoadFontData(_ret._address,fileData._address,dataSize,fontSize,codepoints._address,codepointCount,type)
return _ret}
const _GenImageFontAtlas=mod.cwrap('GenImageFontAtlas','void',['pointer','pointer','pointer','number','number','number','number'])
raylib.GenImageFontAtlas=(glyphs,glyphRecs,glyphCount,fontSize,padding,packMethod)=>{const _ret=new raylib.Image()
_GenImageFontAtlas(_ret._address,glyphs._address,glyphRecs._address,glyphCount,fontSize,padding,packMethod)
return _ret}
const _UnloadFontData=mod.cwrap('UnloadFontData','pointer',['pointer','number'])
raylib.UnloadFontData=(glyphs,glyphCount)=>_UnloadFontData(glyphs._address,glyphCount)
const _UnloadFont=mod.cwrap('UnloadFont','pointer',['pointer'])
raylib.UnloadFont=(font)=>_UnloadFont(font._address)
const _ExportFontAsCode=mod.cwrap('ExportFontAsCode','boolean',['pointer','string'])
raylib.ExportFontAsCode=(font,fileName)=>_ExportFontAsCode(font._address,fileName)
const _DrawFPS=mod.cwrap('DrawFPS','pointer',['number','number'])
raylib.DrawFPS=(posX,posY)=>_DrawFPS(posX,posY)
const _DrawText=mod.cwrap('DrawText','pointer',['string','number','number','number','pointer'])
raylib.DrawText=(text,posX,posY,fontSize,color)=>_DrawText(text,posX,posY,fontSize,color._address)
const _DrawTextEx=mod.cwrap('DrawTextEx','pointer',['pointer','string','pointer','number','number','pointer'])
raylib.DrawTextEx=(font,text,position,fontSize,spacing,tint)=>_DrawTextEx(font._address,text,position._address,fontSize,spacing,tint._address)
const _DrawTextPro=mod.cwrap('DrawTextPro','pointer',['pointer','string','pointer','pointer','number','number','number','pointer'])
raylib.DrawTextPro=(font,text,position,origin,rotation,fontSize,spacing,tint)=>_DrawTextPro(font._address,text,position._address,origin._address,rotation,fontSize,spacing,tint._address)
const _DrawTextCodepoint=mod.cwrap('DrawTextCodepoint','pointer',['pointer','number','pointer','number','pointer'])
raylib.DrawTextCodepoint=(font,codepoint,position,fontSize,tint)=>_DrawTextCodepoint(font._address,codepoint,position._address,fontSize,tint._address)
const _DrawTextCodepoints=mod.cwrap('DrawTextCodepoints','pointer',['pointer','pointer','number','pointer','number','number','pointer'])
raylib.DrawTextCodepoints=(font,codepoints,codepointCount,position,fontSize,spacing,tint)=>_DrawTextCodepoints(font._address,codepoints._address,codepointCount,position._address,fontSize,spacing,tint._address)
const _SetTextLineSpacing=mod.cwrap('SetTextLineSpacing','pointer',['number'])
raylib.SetTextLineSpacing=(spacing)=>_SetTextLineSpacing(spacing)
const _MeasureText=mod.cwrap('MeasureText','number',['string','number'])
raylib.MeasureText=(text,fontSize)=>_MeasureText(text,fontSize)
const _MeasureTextEx=mod.cwrap('MeasureTextEx','void',['pointer','pointer','string','number','number'])
raylib.MeasureTextEx=(font,text,fontSize,spacing)=>{const _ret=new raylib.Vector2()
_MeasureTextEx(_ret._address,font._address,text,fontSize,spacing)
return _ret}
const _GetGlyphIndex=mod.cwrap('GetGlyphIndex','number',['pointer','number'])
raylib.GetGlyphIndex=(font,codepoint)=>_GetGlyphIndex(font._address,codepoint)
const _GetGlyphInfo=mod.cwrap('GetGlyphInfo','void',['pointer','pointer','number'])
raylib.GetGlyphInfo=(font,codepoint)=>{const _ret=new raylib.GlyphInfo()
_GetGlyphInfo(_ret._address,font._address,codepoint)
return _ret}
const _GetGlyphAtlasRec=mod.cwrap('GetGlyphAtlasRec','void',['pointer','pointer','number'])
raylib.GetGlyphAtlasRec=(font,codepoint)=>{const _ret=new raylib.Rectangle()
_GetGlyphAtlasRec(_ret._address,font._address,codepoint)
return _ret}
const _LoadUTF8=mod.cwrap('LoadUTF8','string',['pointer','number'])
raylib.LoadUTF8=(codepoints,length)=>_LoadUTF8(codepoints._address,length)
const _UnloadUTF8=mod.cwrap('UnloadUTF8','pointer',['string'])
raylib.UnloadUTF8=(text)=>_UnloadUTF8(text)
const _LoadCodepoints=mod.cwrap('LoadCodepoints','pointer',['string','pointer'])
raylib.LoadCodepoints=(text,count)=>_LoadCodepoints(text,count._address)
const _UnloadCodepoints=mod.cwrap('UnloadCodepoints','pointer',['pointer'])
raylib.UnloadCodepoints=(codepoints)=>_UnloadCodepoints(codepoints._address)
const _GetCodepointCount=mod.cwrap('GetCodepointCount','number',['string'])
raylib.GetCodepointCount=(text)=>_GetCodepointCount(text)
const _GetCodepoint=mod.cwrap('GetCodepoint','number',['string','pointer'])
raylib.GetCodepoint=(text,codepointSize)=>_GetCodepoint(text,codepointSize._address)
const _GetCodepointNext=mod.cwrap('GetCodepointNext','number',['string','pointer'])
raylib.GetCodepointNext=(text,codepointSize)=>_GetCodepointNext(text,codepointSize._address)
const _GetCodepointPrevious=mod.cwrap('GetCodepointPrevious','number',['string','pointer'])
raylib.GetCodepointPrevious=(text,codepointSize)=>_GetCodepointPrevious(text,codepointSize._address)
const _CodepointToUTF8=mod.cwrap('CodepointToUTF8','string',['number','pointer'])
raylib.CodepointToUTF8=(codepoint,utf8Size)=>_CodepointToUTF8(codepoint,utf8Size._address)
const _TextCopy=mod.cwrap('TextCopy','number',['string','string'])
raylib.TextCopy=(dst,src)=>_TextCopy(dst,src)
const _TextIsEqual=mod.cwrap('TextIsEqual','boolean',['string','string'])
raylib.TextIsEqual=(text1,text2)=>_TextIsEqual(text1,text2)
const _TextLength=mod.cwrap('TextLength','number',['string'])
raylib.TextLength=(text)=>_TextLength(text)
const _TextFormat=mod.cwrap('TextFormat','string',['string','pointer'])
raylib.TextFormat=(text,args)=>_TextFormat(text,args._address)
const _TextSubtext=mod.cwrap('TextSubtext','string',['string','number','number'])
raylib.TextSubtext=(text,position,length)=>_TextSubtext(text,position,length)
const _TextReplace=mod.cwrap('TextReplace','string',['string','string','string'])
raylib.TextReplace=(text,replace,by)=>_TextReplace(text,replace,by)
const _TextInsert=mod.cwrap('TextInsert','string',['string','string','number'])
raylib.TextInsert=(text,insert,position)=>_TextInsert(text,insert,position)
const _TextJoin=mod.cwrap('TextJoin','string',['pointer','number','string'])
raylib.TextJoin=(textList,count,delimiter)=>_TextJoin(textList._address,count,delimiter)
const _TextSplit=mod.cwrap('TextSplit','pointer',['string','number','pointer'])
raylib.TextSplit=(text,delimiter,count)=>_TextSplit(text,delimiter,count._address)
const _TextAppend=mod.cwrap('TextAppend','pointer',['string','string','pointer'])
raylib.TextAppend=(text,append,position)=>_TextAppend(text,append,position._address)
const _TextFindIndex=mod.cwrap('TextFindIndex','number',['string','string'])
raylib.TextFindIndex=(text,find)=>_TextFindIndex(text,find)
const _TextToUpper=mod.cwrap('TextToUpper','string',['string'])
raylib.TextToUpper=(text)=>_TextToUpper(text)
const _TextToLower=mod.cwrap('TextToLower','string',['string'])
raylib.TextToLower=(text)=>_TextToLower(text)
const _TextToPascal=mod.cwrap('TextToPascal','string',['string'])
raylib.TextToPascal=(text)=>_TextToPascal(text)
const _TextToSnake=mod.cwrap('TextToSnake','string',['string'])
raylib.TextToSnake=(text)=>_TextToSnake(text)
const _TextToCamel=mod.cwrap('TextToCamel','string',['string'])
raylib.TextToCamel=(text)=>_TextToCamel(text)
const _TextToInteger=mod.cwrap('TextToInteger','number',['string'])
raylib.TextToInteger=(text)=>_TextToInteger(text)
const _TextToFloat=mod.cwrap('TextToFloat','number',['string'])
raylib.TextToFloat=(text)=>_TextToFloat(text)
const _DrawLine3D=mod.cwrap('DrawLine3D','pointer',['pointer','pointer','pointer'])
raylib.DrawLine3D=(startPos,endPos,color)=>_DrawLine3D(startPos._address,endPos._address,color._address)
const _DrawPoint3D=mod.cwrap('DrawPoint3D','pointer',['pointer','pointer'])
raylib.DrawPoint3D=(position,color)=>_DrawPoint3D(position._address,color._address)
const _DrawCircle3D=mod.cwrap('DrawCircle3D','pointer',['pointer','number','pointer','number','pointer'])
raylib.DrawCircle3D=(center,radius,rotationAxis,rotationAngle,color)=>_DrawCircle3D(center._address,radius,rotationAxis._address,rotationAngle,color._address)
const _DrawTriangle3D=mod.cwrap('DrawTriangle3D','pointer',['pointer','pointer','pointer','pointer'])
raylib.DrawTriangle3D=(v1,v2,v3,color)=>_DrawTriangle3D(v1._address,v2._address,v3._address,color._address)
const _DrawTriangleStrip3D=mod.cwrap('DrawTriangleStrip3D','pointer',['pointer','number','pointer'])
raylib.DrawTriangleStrip3D=(points,pointCount,color)=>_DrawTriangleStrip3D(points._address,pointCount,color._address)
const _DrawCube=mod.cwrap('DrawCube','pointer',['pointer','number','number','number','pointer'])
raylib.DrawCube=(position,width,height,length,color)=>_DrawCube(position._address,width,height,length,color._address)
const _DrawCubeV=mod.cwrap('DrawCubeV','pointer',['pointer','pointer','pointer'])
raylib.DrawCubeV=(position,size,color)=>_DrawCubeV(position._address,size._address,color._address)
const _DrawCubeWires=mod.cwrap('DrawCubeWires','pointer',['pointer','number','number','number','pointer'])
raylib.DrawCubeWires=(position,width,height,length,color)=>_DrawCubeWires(position._address,width,height,length,color._address)
const _DrawCubeWiresV=mod.cwrap('DrawCubeWiresV','pointer',['pointer','pointer','pointer'])
raylib.DrawCubeWiresV=(position,size,color)=>_DrawCubeWiresV(position._address,size._address,color._address)
const _DrawSphere=mod.cwrap('DrawSphere','pointer',['pointer','number','pointer'])
raylib.DrawSphere=(centerPos,radius,color)=>_DrawSphere(centerPos._address,radius,color._address)
const _DrawSphereEx=mod.cwrap('DrawSphereEx','pointer',['pointer','number','number','number','pointer'])
raylib.DrawSphereEx=(centerPos,radius,rings,slices,color)=>_DrawSphereEx(centerPos._address,radius,rings,slices,color._address)
const _DrawSphereWires=mod.cwrap('DrawSphereWires','pointer',['pointer','number','number','number','pointer'])
raylib.DrawSphereWires=(centerPos,radius,rings,slices,color)=>_DrawSphereWires(centerPos._address,radius,rings,slices,color._address)
const _DrawCylinder=mod.cwrap('DrawCylinder','pointer',['pointer','number','number','number','number','pointer'])
raylib.DrawCylinder=(position,radiusTop,radiusBottom,height,slices,color)=>_DrawCylinder(position._address,radiusTop,radiusBottom,height,slices,color._address)
const _DrawCylinderEx=mod.cwrap('DrawCylinderEx','pointer',['pointer','pointer','number','number','number','pointer'])
raylib.DrawCylinderEx=(startPos,endPos,startRadius,endRadius,sides,color)=>_DrawCylinderEx(startPos._address,endPos._address,startRadius,endRadius,sides,color._address)
const _DrawCylinderWires=mod.cwrap('DrawCylinderWires','pointer',['pointer','number','number','number','number','pointer'])
raylib.DrawCylinderWires=(position,radiusTop,radiusBottom,height,slices,color)=>_DrawCylinderWires(position._address,radiusTop,radiusBottom,height,slices,color._address)
const _DrawCylinderWiresEx=mod.cwrap('DrawCylinderWiresEx','pointer',['pointer','pointer','number','number','number','pointer'])
raylib.DrawCylinderWiresEx=(startPos,endPos,startRadius,endRadius,sides,color)=>_DrawCylinderWiresEx(startPos._address,endPos._address,startRadius,endRadius,sides,color._address)
const _DrawCapsule=mod.cwrap('DrawCapsule','pointer',['pointer','pointer','number','number','number','pointer'])
raylib.DrawCapsule=(startPos,endPos,radius,slices,rings,color)=>_DrawCapsule(startPos._address,endPos._address,radius,slices,rings,color._address)
const _DrawCapsuleWires=mod.cwrap('DrawCapsuleWires','pointer',['pointer','pointer','number','number','number','pointer'])
raylib.DrawCapsuleWires=(startPos,endPos,radius,slices,rings,color)=>_DrawCapsuleWires(startPos._address,endPos._address,radius,slices,rings,color._address)
const _DrawPlane=mod.cwrap('DrawPlane','pointer',['pointer','pointer','pointer'])
raylib.DrawPlane=(centerPos,size,color)=>_DrawPlane(centerPos._address,size._address,color._address)
const _DrawRay=mod.cwrap('DrawRay','pointer',['pointer','pointer'])
raylib.DrawRay=(ray,color)=>_DrawRay(ray._address,color._address)
const _DrawGrid=mod.cwrap('DrawGrid','pointer',['number','number'])
raylib.DrawGrid=(slices,spacing)=>_DrawGrid(slices,spacing)
const _LoadModel=mod.cwrap('LoadModel','void',['pointer','string'])
raylib.LoadModel=async(fileName,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Model()
_LoadModel(_ret._address,fileName)
return _ret}
const _LoadModelFromMesh=mod.cwrap('LoadModelFromMesh','void',['pointer','pointer'])
raylib.LoadModelFromMesh=(mesh)=>{const _ret=new raylib.Model()
_LoadModelFromMesh(_ret._address,mesh._address)
return _ret}
const _IsModelValid=mod.cwrap('IsModelValid','boolean',['pointer'])
raylib.IsModelValid=(model)=>_IsModelValid(model._address)
const _UnloadModel=mod.cwrap('UnloadModel','pointer',['pointer'])
raylib.UnloadModel=(model)=>_UnloadModel(model._address)
const _GetModelBoundingBox=mod.cwrap('GetModelBoundingBox','void',['pointer','pointer'])
raylib.GetModelBoundingBox=(model)=>{const _ret=new raylib.BoundingBox()
_GetModelBoundingBox(_ret._address,model._address)
return _ret}
const _DrawModel=mod.cwrap('DrawModel','pointer',['pointer','pointer','number','pointer'])
raylib.DrawModel=(model,position,scale,tint)=>_DrawModel(model._address,position._address,scale,tint._address)
const _DrawModelEx=mod.cwrap('DrawModelEx','pointer',['pointer','pointer','pointer','number','pointer','pointer'])
raylib.DrawModelEx=(model,position,rotationAxis,rotationAngle,scale,tint)=>_DrawModelEx(model._address,position._address,rotationAxis._address,rotationAngle,scale._address,tint._address)
const _DrawModelWires=mod.cwrap('DrawModelWires','pointer',['pointer','pointer','number','pointer'])
raylib.DrawModelWires=(model,position,scale,tint)=>_DrawModelWires(model._address,position._address,scale,tint._address)
const _DrawModelWiresEx=mod.cwrap('DrawModelWiresEx','pointer',['pointer','pointer','pointer','number','pointer','pointer'])
raylib.DrawModelWiresEx=(model,position,rotationAxis,rotationAngle,scale,tint)=>_DrawModelWiresEx(model._address,position._address,rotationAxis._address,rotationAngle,scale._address,tint._address)
const _DrawModelPoints=mod.cwrap('DrawModelPoints','pointer',['pointer','pointer','number','pointer'])
raylib.DrawModelPoints=(model,position,scale,tint)=>_DrawModelPoints(model._address,position._address,scale,tint._address)
const _DrawModelPointsEx=mod.cwrap('DrawModelPointsEx','pointer',['pointer','pointer','pointer','number','pointer','pointer'])
raylib.DrawModelPointsEx=(model,position,rotationAxis,rotationAngle,scale,tint)=>_DrawModelPointsEx(model._address,position._address,rotationAxis._address,rotationAngle,scale._address,tint._address)
const _DrawBoundingBox=mod.cwrap('DrawBoundingBox','pointer',['pointer','pointer'])
raylib.DrawBoundingBox=(box,color)=>_DrawBoundingBox(box._address,color._address)
const _DrawBillboard=mod.cwrap('DrawBillboard','pointer',['pointer','pointer','pointer','number','pointer'])
raylib.DrawBillboard=(camera,texture,position,scale,tint)=>_DrawBillboard(camera._address,texture._address,position._address,scale,tint._address)
const _DrawBillboardRec=mod.cwrap('DrawBillboardRec','pointer',['pointer','pointer','pointer','pointer','pointer','pointer'])
raylib.DrawBillboardRec=(camera,texture,source,position,size,tint)=>_DrawBillboardRec(camera._address,texture._address,source._address,position._address,size._address,tint._address)
const _DrawBillboardPro=mod.cwrap('DrawBillboardPro','pointer',['pointer','pointer','pointer','pointer','pointer','pointer','pointer','number','pointer'])
raylib.DrawBillboardPro=(camera,texture,source,position,up,size,origin,rotation,tint)=>_DrawBillboardPro(camera._address,texture._address,source._address,position._address,up._address,size._address,origin._address,rotation,tint._address)
const _UploadMesh=mod.cwrap('UploadMesh','pointer',['pointer','boolean'])
raylib.UploadMesh=(mesh,dynamic)=>_UploadMesh(mesh._address,dynamic)
const _UpdateMeshBuffer=mod.cwrap('UpdateMeshBuffer','pointer',['pointer','number','pointer','number','number'])
raylib.UpdateMeshBuffer=(mesh,index,data,dataSize,offset)=>_UpdateMeshBuffer(mesh._address,index,data._address,dataSize,offset)
const _UnloadMesh=mod.cwrap('UnloadMesh','pointer',['pointer'])
raylib.UnloadMesh=(mesh)=>_UnloadMesh(mesh._address)
const _DrawMesh=mod.cwrap('DrawMesh','pointer',['pointer','pointer','pointer'])
raylib.DrawMesh=(mesh,material,transform)=>_DrawMesh(mesh._address,material._address,transform._address)
const _DrawMeshInstanced=mod.cwrap('DrawMeshInstanced','pointer',['pointer','pointer','pointer','number'])
raylib.DrawMeshInstanced=(mesh,material,transforms,instances)=>_DrawMeshInstanced(mesh._address,material._address,transforms._address,instances)
const _GetMeshBoundingBox=mod.cwrap('GetMeshBoundingBox','void',['pointer','pointer'])
raylib.GetMeshBoundingBox=(mesh)=>{const _ret=new raylib.BoundingBox()
_GetMeshBoundingBox(_ret._address,mesh._address)
return _ret}
const _GenMeshTangents=mod.cwrap('GenMeshTangents','pointer',['pointer'])
raylib.GenMeshTangents=(mesh)=>_GenMeshTangents(mesh._address)
const _ExportMesh=mod.cwrap('ExportMesh','boolean',['pointer','string'])
raylib.ExportMesh=(mesh,fileName)=>_ExportMesh(mesh._address,fileName)
const _ExportMeshAsCode=mod.cwrap('ExportMeshAsCode','boolean',['pointer','string'])
raylib.ExportMeshAsCode=(mesh,fileName)=>_ExportMeshAsCode(mesh._address,fileName)
const _GenMeshPoly=mod.cwrap('GenMeshPoly','void',['pointer','number','number'])
raylib.GenMeshPoly=(sides,radius)=>{const _ret=new raylib.Mesh()
_GenMeshPoly(_ret._address,sides,radius)
return _ret}
const _GenMeshPlane=mod.cwrap('GenMeshPlane','void',['pointer','number','number','number','number'])
raylib.GenMeshPlane=(width,length,resX,resZ)=>{const _ret=new raylib.Mesh()
_GenMeshPlane(_ret._address,width,length,resX,resZ)
return _ret}
const _GenMeshCube=mod.cwrap('GenMeshCube','void',['pointer','number','number','number'])
raylib.GenMeshCube=(width,height,length)=>{const _ret=new raylib.Mesh()
_GenMeshCube(_ret._address,width,height,length)
return _ret}
const _GenMeshSphere=mod.cwrap('GenMeshSphere','void',['pointer','number','number','number'])
raylib.GenMeshSphere=(radius,rings,slices)=>{const _ret=new raylib.Mesh()
_GenMeshSphere(_ret._address,radius,rings,slices)
return _ret}
const _GenMeshHemiSphere=mod.cwrap('GenMeshHemiSphere','void',['pointer','number','number','number'])
raylib.GenMeshHemiSphere=(radius,rings,slices)=>{const _ret=new raylib.Mesh()
_GenMeshHemiSphere(_ret._address,radius,rings,slices)
return _ret}
const _GenMeshCylinder=mod.cwrap('GenMeshCylinder','void',['pointer','number','number','number'])
raylib.GenMeshCylinder=(radius,height,slices)=>{const _ret=new raylib.Mesh()
_GenMeshCylinder(_ret._address,radius,height,slices)
return _ret}
const _GenMeshCone=mod.cwrap('GenMeshCone','void',['pointer','number','number','number'])
raylib.GenMeshCone=(radius,height,slices)=>{const _ret=new raylib.Mesh()
_GenMeshCone(_ret._address,radius,height,slices)
return _ret}
const _GenMeshTorus=mod.cwrap('GenMeshTorus','void',['pointer','number','number','number','number'])
raylib.GenMeshTorus=(radius,size,radSeg,sides)=>{const _ret=new raylib.Mesh()
_GenMeshTorus(_ret._address,radius,size,radSeg,sides)
return _ret}
const _GenMeshKnot=mod.cwrap('GenMeshKnot','void',['pointer','number','number','number','number'])
raylib.GenMeshKnot=(radius,size,radSeg,sides)=>{const _ret=new raylib.Mesh()
_GenMeshKnot(_ret._address,radius,size,radSeg,sides)
return _ret}
const _GenMeshHeightmap=mod.cwrap('GenMeshHeightmap','void',['pointer','pointer','pointer'])
raylib.GenMeshHeightmap=(heightmap,size)=>{const _ret=new raylib.Mesh()
_GenMeshHeightmap(_ret._address,heightmap._address,size._address)
return _ret}
const _GenMeshCubicmap=mod.cwrap('GenMeshCubicmap','void',['pointer','pointer','pointer'])
raylib.GenMeshCubicmap=(cubicmap,cubeSize)=>{const _ret=new raylib.Mesh()
_GenMeshCubicmap(_ret._address,cubicmap._address,cubeSize._address)
return _ret}
const _LoadMaterials=mod.cwrap('LoadMaterials','void',['pointer','string','pointer'])
raylib.LoadMaterials=async(fileName,materialCount,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Material()
_LoadMaterials(_ret._address,fileName,materialCount._address)
return _ret}
const _LoadMaterialDefault=mod.cwrap('LoadMaterialDefault','void',['pointer'])
raylib.LoadMaterialDefault=()=>{const _ret=new raylib.Material()
_LoadMaterialDefault(_ret._address)
return _ret}
const _IsMaterialValid=mod.cwrap('IsMaterialValid','boolean',['pointer'])
raylib.IsMaterialValid=(material)=>_IsMaterialValid(material._address)
const _UnloadMaterial=mod.cwrap('UnloadMaterial','pointer',['pointer'])
raylib.UnloadMaterial=(material)=>_UnloadMaterial(material._address)
const _SetMaterialTexture=mod.cwrap('SetMaterialTexture','pointer',['pointer','number','pointer'])
raylib.SetMaterialTexture=(material,mapType,texture)=>_SetMaterialTexture(material._address,mapType,texture._address)
const _SetModelMeshMaterial=mod.cwrap('SetModelMeshMaterial','pointer',['pointer','number','number'])
raylib.SetModelMeshMaterial=(model,meshId,materialId)=>_SetModelMeshMaterial(model._address,meshId,materialId)
const _LoadModelAnimations=mod.cwrap('LoadModelAnimations','void',['pointer','string','pointer'])
raylib.LoadModelAnimations=async(fileName,animCount,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.ModelAnimation()
_LoadModelAnimations(_ret._address,fileName,animCount._address)
return _ret}
const _UpdateModelAnimation=mod.cwrap('UpdateModelAnimation','pointer',['pointer','pointer','number'])
raylib.UpdateModelAnimation=(model,anim,frame)=>_UpdateModelAnimation(model._address,anim._address,frame)
const _UpdateModelAnimationBones=mod.cwrap('UpdateModelAnimationBones','pointer',['pointer','pointer','number'])
raylib.UpdateModelAnimationBones=(model,anim,frame)=>_UpdateModelAnimationBones(model._address,anim._address,frame)
const _UnloadModelAnimation=mod.cwrap('UnloadModelAnimation','pointer',['pointer'])
raylib.UnloadModelAnimation=(anim)=>_UnloadModelAnimation(anim._address)
const _UnloadModelAnimations=mod.cwrap('UnloadModelAnimations','pointer',['pointer','number'])
raylib.UnloadModelAnimations=(animations,animCount)=>_UnloadModelAnimations(animations._address,animCount)
const _IsModelAnimationValid=mod.cwrap('IsModelAnimationValid','boolean',['pointer','pointer'])
raylib.IsModelAnimationValid=(model,anim)=>_IsModelAnimationValid(model._address,anim._address)
const _CheckCollisionSpheres=mod.cwrap('CheckCollisionSpheres','boolean',['pointer','number','pointer','number'])
raylib.CheckCollisionSpheres=(center1,radius1,center2,radius2)=>_CheckCollisionSpheres(center1._address,radius1,center2._address,radius2)
const _CheckCollisionBoxes=mod.cwrap('CheckCollisionBoxes','boolean',['pointer','pointer'])
raylib.CheckCollisionBoxes=(box1,box2)=>_CheckCollisionBoxes(box1._address,box2._address)
const _CheckCollisionBoxSphere=mod.cwrap('CheckCollisionBoxSphere','boolean',['pointer','pointer','number'])
raylib.CheckCollisionBoxSphere=(box,center,radius)=>_CheckCollisionBoxSphere(box._address,center._address,radius)
const _GetRayCollisionSphere=mod.cwrap('GetRayCollisionSphere','void',['pointer','pointer','pointer','number'])
raylib.GetRayCollisionSphere=(ray,center,radius)=>{const _ret=new raylib.RayCollision()
_GetRayCollisionSphere(_ret._address,ray._address,center._address,radius)
return _ret}
const _GetRayCollisionBox=mod.cwrap('GetRayCollisionBox','void',['pointer','pointer','pointer'])
raylib.GetRayCollisionBox=(ray,box)=>{const _ret=new raylib.RayCollision()
_GetRayCollisionBox(_ret._address,ray._address,box._address)
return _ret}
const _GetRayCollisionMesh=mod.cwrap('GetRayCollisionMesh','void',['pointer','pointer','pointer','pointer'])
raylib.GetRayCollisionMesh=(ray,mesh,transform)=>{const _ret=new raylib.RayCollision()
_GetRayCollisionMesh(_ret._address,ray._address,mesh._address,transform._address)
return _ret}
const _GetRayCollisionTriangle=mod.cwrap('GetRayCollisionTriangle','void',['pointer','pointer','pointer','pointer','pointer'])
raylib.GetRayCollisionTriangle=(ray,p1,p2,p3)=>{const _ret=new raylib.RayCollision()
_GetRayCollisionTriangle(_ret._address,ray._address,p1._address,p2._address,p3._address)
return _ret}
const _GetRayCollisionQuad=mod.cwrap('GetRayCollisionQuad','void',['pointer','pointer','pointer','pointer','pointer','pointer'])
raylib.GetRayCollisionQuad=(ray,p1,p2,p3,p4)=>{const _ret=new raylib.RayCollision()
_GetRayCollisionQuad(_ret._address,ray._address,p1._address,p2._address,p3._address,p4._address)
return _ret}
const _InitAudioDevice=mod.cwrap('InitAudioDevice','pointer',[])
raylib.InitAudioDevice=()=>_InitAudioDevice()
const _CloseAudioDevice=mod.cwrap('CloseAudioDevice','pointer',[])
raylib.CloseAudioDevice=()=>_CloseAudioDevice()
const _IsAudioDeviceReady=mod.cwrap('IsAudioDeviceReady','boolean',[])
raylib.IsAudioDeviceReady=()=>_IsAudioDeviceReady()
const _SetMasterVolume=mod.cwrap('SetMasterVolume','pointer',['number'])
raylib.SetMasterVolume=(volume)=>_SetMasterVolume(volume)
const _GetMasterVolume=mod.cwrap('GetMasterVolume','number',[])
raylib.GetMasterVolume=()=>_GetMasterVolume()
const _LoadWave=mod.cwrap('LoadWave','void',['pointer','string'])
raylib.LoadWave=async(fileName,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Wave()
_LoadWave(_ret._address,fileName)
return _ret}
const _LoadWaveFromMemory=mod.cwrap('LoadWaveFromMemory','void',['pointer','string','pointer','number'])
raylib.LoadWaveFromMemory=(fileType,fileData,dataSize)=>{const _ret=new raylib.Wave()
_LoadWaveFromMemory(_ret._address,fileType,fileData._address,dataSize)
return _ret}
const _IsWaveValid=mod.cwrap('IsWaveValid','boolean',['pointer'])
raylib.IsWaveValid=(wave)=>_IsWaveValid(wave._address)
const _LoadSound=mod.cwrap('LoadSound','void',['pointer','string'])
raylib.LoadSound=async(fileName,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Sound()
_LoadSound(_ret._address,fileName)
return _ret}
const _LoadSoundFromWave=mod.cwrap('LoadSoundFromWave','void',['pointer','pointer'])
raylib.LoadSoundFromWave=(wave)=>{const _ret=new raylib.Sound()
_LoadSoundFromWave(_ret._address,wave._address)
return _ret}
const _LoadSoundAlias=mod.cwrap('LoadSoundAlias','void',['pointer','pointer'])
raylib.LoadSoundAlias=(source)=>{const _ret=new raylib.Sound()
_LoadSoundAlias(_ret._address,source._address)
return _ret}
const _IsSoundValid=mod.cwrap('IsSoundValid','boolean',['pointer'])
raylib.IsSoundValid=(sound)=>_IsSoundValid(sound._address)
const _UpdateSound=mod.cwrap('UpdateSound','pointer',['pointer','pointer','number'])
raylib.UpdateSound=(sound,data,sampleCount)=>_UpdateSound(sound._address,data._address,sampleCount)
const _UnloadWave=mod.cwrap('UnloadWave','pointer',['pointer'])
raylib.UnloadWave=(wave)=>_UnloadWave(wave._address)
const _UnloadSound=mod.cwrap('UnloadSound','pointer',['pointer'])
raylib.UnloadSound=(sound)=>_UnloadSound(sound._address)
const _UnloadSoundAlias=mod.cwrap('UnloadSoundAlias','pointer',['pointer'])
raylib.UnloadSoundAlias=(alias)=>_UnloadSoundAlias(alias._address)
const _ExportWave=mod.cwrap('ExportWave','boolean',['pointer','string'])
raylib.ExportWave=(wave,fileName)=>_ExportWave(wave._address,fileName)
const _ExportWaveAsCode=mod.cwrap('ExportWaveAsCode','boolean',['pointer','string'])
raylib.ExportWaveAsCode=(wave,fileName)=>_ExportWaveAsCode(wave._address,fileName)
const _PlaySound=mod.cwrap('PlaySound','pointer',['pointer'])
raylib.PlaySound=(sound)=>_PlaySound(sound._address)
const _StopSound=mod.cwrap('StopSound','pointer',['pointer'])
raylib.StopSound=(sound)=>_StopSound(sound._address)
const _PauseSound=mod.cwrap('PauseSound','pointer',['pointer'])
raylib.PauseSound=(sound)=>_PauseSound(sound._address)
const _ResumeSound=mod.cwrap('ResumeSound','pointer',['pointer'])
raylib.ResumeSound=(sound)=>_ResumeSound(sound._address)
const _IsSoundPlaying=mod.cwrap('IsSoundPlaying','boolean',['pointer'])
raylib.IsSoundPlaying=(sound)=>_IsSoundPlaying(sound._address)
const _SetSoundVolume=mod.cwrap('SetSoundVolume','pointer',['pointer','number'])
raylib.SetSoundVolume=(sound,volume)=>_SetSoundVolume(sound._address,volume)
const _SetSoundPitch=mod.cwrap('SetSoundPitch','pointer',['pointer','number'])
raylib.SetSoundPitch=(sound,pitch)=>_SetSoundPitch(sound._address,pitch)
const _SetSoundPan=mod.cwrap('SetSoundPan','pointer',['pointer','number'])
raylib.SetSoundPan=(sound,pan)=>_SetSoundPan(sound._address,pan)
const _WaveCopy=mod.cwrap('WaveCopy','void',['pointer','pointer'])
raylib.WaveCopy=(wave)=>{const _ret=new raylib.Wave()
_WaveCopy(_ret._address,wave._address)
return _ret}
const _WaveCrop=mod.cwrap('WaveCrop','pointer',['pointer','number','number'])
raylib.WaveCrop=(wave,initFrame,finalFrame)=>_WaveCrop(wave._address,initFrame,finalFrame)
const _WaveFormat=mod.cwrap('WaveFormat','pointer',['pointer','number','number','number'])
raylib.WaveFormat=(wave,sampleRate,sampleSize,channels)=>_WaveFormat(wave._address,sampleRate,sampleSize,channels)
const _LoadWaveSamples=mod.cwrap('LoadWaveSamples','pointer',['pointer'])
raylib.LoadWaveSamples=(wave)=>_LoadWaveSamples(wave._address)
const _UnloadWaveSamples=mod.cwrap('UnloadWaveSamples','pointer',['pointer'])
raylib.UnloadWaveSamples=(samples)=>_UnloadWaveSamples(samples._address)
const _LoadMusicStream=mod.cwrap('LoadMusicStream','void',['pointer','string'])
raylib.LoadMusicStream=async(fileName,skipLoad)=>{!skipLoad&&await raylib.addFile(fileName)
const _ret=new raylib.Music()
_LoadMusicStream(_ret._address,fileName)
return _ret}
const _LoadMusicStreamFromMemory=mod.cwrap('LoadMusicStreamFromMemory','void',['pointer','string','pointer','number'])
raylib.LoadMusicStreamFromMemory=(fileType,data,dataSize)=>{const _ret=new raylib.Music()
_LoadMusicStreamFromMemory(_ret._address,fileType,data._address,dataSize)
return _ret}
const _IsMusicValid=mod.cwrap('IsMusicValid','boolean',['pointer'])
raylib.IsMusicValid=(music)=>_IsMusicValid(music._address)
const _UnloadMusicStream=mod.cwrap('UnloadMusicStream','pointer',['pointer'])
raylib.UnloadMusicStream=(music)=>_UnloadMusicStream(music._address)
const _PlayMusicStream=mod.cwrap('PlayMusicStream','pointer',['pointer'])
raylib.PlayMusicStream=(music)=>_PlayMusicStream(music._address)
const _IsMusicStreamPlaying=mod.cwrap('IsMusicStreamPlaying','boolean',['pointer'])
raylib.IsMusicStreamPlaying=(music)=>_IsMusicStreamPlaying(music._address)
const _UpdateMusicStream=mod.cwrap('UpdateMusicStream','pointer',['pointer'])
raylib.UpdateMusicStream=(music)=>_UpdateMusicStream(music._address)
const _StopMusicStream=mod.cwrap('StopMusicStream','pointer',['pointer'])
raylib.StopMusicStream=(music)=>_StopMusicStream(music._address)
const _PauseMusicStream=mod.cwrap('PauseMusicStream','pointer',['pointer'])
raylib.PauseMusicStream=(music)=>_PauseMusicStream(music._address)
const _ResumeMusicStream=mod.cwrap('ResumeMusicStream','pointer',['pointer'])
raylib.ResumeMusicStream=(music)=>_ResumeMusicStream(music._address)
const _SeekMusicStream=mod.cwrap('SeekMusicStream','pointer',['pointer','number'])
raylib.SeekMusicStream=(music,position)=>_SeekMusicStream(music._address,position)
const _SetMusicVolume=mod.cwrap('SetMusicVolume','pointer',['pointer','number'])
raylib.SetMusicVolume=(music,volume)=>_SetMusicVolume(music._address,volume)
const _SetMusicPitch=mod.cwrap('SetMusicPitch','pointer',['pointer','number'])
raylib.SetMusicPitch=(music,pitch)=>_SetMusicPitch(music._address,pitch)
const _SetMusicPan=mod.cwrap('SetMusicPan','pointer',['pointer','number'])
raylib.SetMusicPan=(music,pan)=>_SetMusicPan(music._address,pan)
const _GetMusicTimeLength=mod.cwrap('GetMusicTimeLength','number',['pointer'])
raylib.GetMusicTimeLength=(music)=>_GetMusicTimeLength(music._address)
const _GetMusicTimePlayed=mod.cwrap('GetMusicTimePlayed','number',['pointer'])
raylib.GetMusicTimePlayed=(music)=>_GetMusicTimePlayed(music._address)
const _LoadAudioStream=mod.cwrap('LoadAudioStream','void',['pointer','number','number','number'])
raylib.LoadAudioStream=(sampleRate,sampleSize,channels)=>{const _ret=new raylib.AudioStream()
_LoadAudioStream(_ret._address,sampleRate,sampleSize,channels)
return _ret}
const _IsAudioStreamValid=mod.cwrap('IsAudioStreamValid','boolean',['pointer'])
raylib.IsAudioStreamValid=(stream)=>_IsAudioStreamValid(stream._address)
const _UnloadAudioStream=mod.cwrap('UnloadAudioStream','pointer',['pointer'])
raylib.UnloadAudioStream=(stream)=>_UnloadAudioStream(stream._address)
const _UpdateAudioStream=mod.cwrap('UpdateAudioStream','pointer',['pointer','pointer','number'])
raylib.UpdateAudioStream=(stream,data,frameCount)=>_UpdateAudioStream(stream._address,data._address,frameCount)
const _IsAudioStreamProcessed=mod.cwrap('IsAudioStreamProcessed','boolean',['pointer'])
raylib.IsAudioStreamProcessed=(stream)=>_IsAudioStreamProcessed(stream._address)
const _PlayAudioStream=mod.cwrap('PlayAudioStream','pointer',['pointer'])
raylib.PlayAudioStream=(stream)=>_PlayAudioStream(stream._address)
const _PauseAudioStream=mod.cwrap('PauseAudioStream','pointer',['pointer'])
raylib.PauseAudioStream=(stream)=>_PauseAudioStream(stream._address)
const _ResumeAudioStream=mod.cwrap('ResumeAudioStream','pointer',['pointer'])
raylib.ResumeAudioStream=(stream)=>_ResumeAudioStream(stream._address)
const _IsAudioStreamPlaying=mod.cwrap('IsAudioStreamPlaying','boolean',['pointer'])
raylib.IsAudioStreamPlaying=(stream)=>_IsAudioStreamPlaying(stream._address)
const _StopAudioStream=mod.cwrap('StopAudioStream','pointer',['pointer'])
raylib.StopAudioStream=(stream)=>_StopAudioStream(stream._address)
const _SetAudioStreamVolume=mod.cwrap('SetAudioStreamVolume','pointer',['pointer','number'])
raylib.SetAudioStreamVolume=(stream,volume)=>_SetAudioStreamVolume(stream._address,volume)
const _SetAudioStreamPitch=mod.cwrap('SetAudioStreamPitch','pointer',['pointer','number'])
raylib.SetAudioStreamPitch=(stream,pitch)=>_SetAudioStreamPitch(stream._address,pitch)
const _SetAudioStreamPan=mod.cwrap('SetAudioStreamPan','pointer',['pointer','number'])
raylib.SetAudioStreamPan=(stream,pan)=>_SetAudioStreamPan(stream._address,pan)
const _SetAudioStreamBufferSizeDefault=mod.cwrap('SetAudioStreamBufferSizeDefault','pointer',['number'])
raylib.SetAudioStreamBufferSizeDefault=(size)=>_SetAudioStreamBufferSizeDefault(size)
const _SetAudioStreamCallback=mod.cwrap('SetAudioStreamCallback','pointer',['pointer','pointer'])
raylib.SetAudioStreamCallback=(stream,callback)=>_SetAudioStreamCallback(stream._address,callback._address)
const _AttachAudioStreamProcessor=mod.cwrap('AttachAudioStreamProcessor','pointer',['pointer','pointer'])
raylib.AttachAudioStreamProcessor=(stream,processor)=>_AttachAudioStreamProcessor(stream._address,processor._address)
const _DetachAudioStreamProcessor=mod.cwrap('DetachAudioStreamProcessor','pointer',['pointer','pointer'])
raylib.DetachAudioStreamProcessor=(stream,processor)=>_DetachAudioStreamProcessor(stream._address,processor._address)
const _AttachAudioMixedProcessor=mod.cwrap('AttachAudioMixedProcessor','pointer',['pointer'])
raylib.AttachAudioMixedProcessor=(processor)=>_AttachAudioMixedProcessor(processor._address)
const _DetachAudioMixedProcessor=mod.cwrap('DetachAudioMixedProcessor','pointer',['pointer'])
raylib.DetachAudioMixedProcessor=(processor)=>_DetachAudioMixedProcessor(processor._address)
const _GuiEnable=mod.cwrap('GuiEnable','pointer',[])
raylib.GuiEnable=()=>_GuiEnable()
const _GuiDisable=mod.cwrap('GuiDisable','pointer',[])
raylib.GuiDisable=()=>_GuiDisable()
const _GuiLock=mod.cwrap('GuiLock','pointer',[])
raylib.GuiLock=()=>_GuiLock()
const _GuiUnlock=mod.cwrap('GuiUnlock','pointer',[])
raylib.GuiUnlock=()=>_GuiUnlock()
const _GuiIsLocked=mod.cwrap('GuiIsLocked','boolean',[])
raylib.GuiIsLocked=()=>_GuiIsLocked()
const _GuiSetAlpha=mod.cwrap('GuiSetAlpha','pointer',['number'])
raylib.GuiSetAlpha=(alpha)=>_GuiSetAlpha(alpha)
const _GuiSetState=mod.cwrap('GuiSetState','pointer',['number'])
raylib.GuiSetState=(state)=>_GuiSetState(state)
const _GuiGetState=mod.cwrap('GuiGetState','number',[])
raylib.GuiGetState=()=>_GuiGetState()
const _GuiSetFont=mod.cwrap('GuiSetFont','pointer',['pointer'])
raylib.GuiSetFont=(font)=>_GuiSetFont(font._address)
const _GuiGetFont=mod.cwrap('GuiGetFont','void',['pointer'])
raylib.GuiGetFont=()=>{const _ret=new raylib.Font()
_GuiGetFont(_ret._address)
return _ret}
const _GuiSetStyle=mod.cwrap('GuiSetStyle','pointer',['number','number','number'])
raylib.GuiSetStyle=(control,property,value)=>_GuiSetStyle(control,property,value)
const _GuiGetStyle=mod.cwrap('GuiGetStyle','number',['number','number'])
raylib.GuiGetStyle=(control,property)=>_GuiGetStyle(control,property)
const _GuiLoadStyle=mod.cwrap('GuiLoadStyle','pointer',['string'])
raylib.GuiLoadStyle=(fileName)=>_GuiLoadStyle(fileName)
const _GuiLoadStyleDefault=mod.cwrap('GuiLoadStyleDefault','pointer',[])
raylib.GuiLoadStyleDefault=()=>_GuiLoadStyleDefault()
const _GuiEnableTooltip=mod.cwrap('GuiEnableTooltip','pointer',[])
raylib.GuiEnableTooltip=()=>_GuiEnableTooltip()
const _GuiDisableTooltip=mod.cwrap('GuiDisableTooltip','pointer',[])
raylib.GuiDisableTooltip=()=>_GuiDisableTooltip()
const _GuiSetTooltip=mod.cwrap('GuiSetTooltip','pointer',['string'])
raylib.GuiSetTooltip=(tooltip)=>_GuiSetTooltip(tooltip)
const _GuiIconText=mod.cwrap('GuiIconText','string',['number','string'])
raylib.GuiIconText=(iconId,text)=>_GuiIconText(iconId,text)
const _GuiSetIconScale=mod.cwrap('GuiSetIconScale','pointer',['number'])
raylib.GuiSetIconScale=(scale)=>_GuiSetIconScale(scale)
const _GuiGetIcons=mod.cwrap('GuiGetIcons','pointer',[])
raylib.GuiGetIcons=()=>_GuiGetIcons()
const _GuiLoadIcons=mod.cwrap('GuiLoadIcons','pointer',['string','boolean'])
raylib.GuiLoadIcons=(fileName,loadIconsName)=>_GuiLoadIcons(fileName,loadIconsName)
const _GuiDrawIcon=mod.cwrap('GuiDrawIcon','pointer',['number','number','number','number','pointer'])
raylib.GuiDrawIcon=(iconId,posX,posY,pixelSize,color)=>_GuiDrawIcon(iconId,posX,posY,pixelSize,color._address)
const _GuiWindowBox=mod.cwrap('GuiWindowBox','number',['pointer','string'])
raylib.GuiWindowBox=(bounds,title)=>_GuiWindowBox(bounds._address,title)
const _GuiGroupBox=mod.cwrap('GuiGroupBox','number',['pointer','string'])
raylib.GuiGroupBox=(bounds,text)=>_GuiGroupBox(bounds._address,text)
const _GuiLine=mod.cwrap('GuiLine','number',['pointer','string'])
raylib.GuiLine=(bounds,text)=>_GuiLine(bounds._address,text)
const _GuiPanel=mod.cwrap('GuiPanel','number',['pointer','string'])
raylib.GuiPanel=(bounds,text)=>_GuiPanel(bounds._address,text)
const _GuiTabBar=mod.cwrap('GuiTabBar','number',['pointer','pointer','number','pointer'])
raylib.GuiTabBar=(bounds,text,count,active)=>_GuiTabBar(bounds._address,text._address,count,active._address)
const _GuiScrollPanel=mod.cwrap('GuiScrollPanel','number',['pointer','string','pointer','pointer','pointer'])
raylib.GuiScrollPanel=(bounds,text,content,scroll,view)=>_GuiScrollPanel(bounds._address,text,content._address,scroll._address,view._address)
const _GuiLabel=mod.cwrap('GuiLabel','number',['pointer','string'])
raylib.GuiLabel=(bounds,text)=>_GuiLabel(bounds._address,text)
const _GuiButton=mod.cwrap('GuiButton','number',['pointer','string'])
raylib.GuiButton=(bounds,text)=>_GuiButton(bounds._address,text)
const _GuiLabelButton=mod.cwrap('GuiLabelButton','number',['pointer','string'])
raylib.GuiLabelButton=(bounds,text)=>_GuiLabelButton(bounds._address,text)
const _GuiToggle=mod.cwrap('GuiToggle','number',['pointer','string','pointer'])
raylib.GuiToggle=(bounds,text,active)=>_GuiToggle(bounds._address,text,active._address)
const _GuiToggleGroup=mod.cwrap('GuiToggleGroup','number',['pointer','string','pointer'])
raylib.GuiToggleGroup=(bounds,text,active)=>_GuiToggleGroup(bounds._address,text,active._address)
const _GuiToggleSlider=mod.cwrap('GuiToggleSlider','number',['pointer','string','pointer'])
raylib.GuiToggleSlider=(bounds,text,active)=>_GuiToggleSlider(bounds._address,text,active._address)
const _GuiCheckBox=mod.cwrap('GuiCheckBox','number',['pointer','string','pointer'])
raylib.GuiCheckBox=(bounds,text,checked)=>_GuiCheckBox(bounds._address,text,checked._address)
const _GuiComboBox=mod.cwrap('GuiComboBox','number',['pointer','string','pointer'])
raylib.GuiComboBox=(bounds,text,active)=>_GuiComboBox(bounds._address,text,active._address)
const _GuiDropdownBox=mod.cwrap('GuiDropdownBox','number',['pointer','string','pointer','boolean'])
raylib.GuiDropdownBox=(bounds,text,active,editMode)=>_GuiDropdownBox(bounds._address,text,active._address,editMode)
const _GuiSpinner=mod.cwrap('GuiSpinner','number',['pointer','string','pointer','number','number','boolean'])
raylib.GuiSpinner=(bounds,text,value,minValue,maxValue,editMode)=>_GuiSpinner(bounds._address,text,value._address,minValue,maxValue,editMode)
const _GuiValueBox=mod.cwrap('GuiValueBox','number',['pointer','string','pointer','number','number','boolean'])
raylib.GuiValueBox=(bounds,text,value,minValue,maxValue,editMode)=>_GuiValueBox(bounds._address,text,value._address,minValue,maxValue,editMode)
const _GuiTextBox=mod.cwrap('GuiTextBox','number',['pointer','string','number','boolean'])
raylib.GuiTextBox=(bounds,text,textSize,editMode)=>_GuiTextBox(bounds._address,text,textSize,editMode)
const _GuiSlider=mod.cwrap('GuiSlider','number',['pointer','string','string','pointer','number','number'])
raylib.GuiSlider=(bounds,textLeft,textRight,value,minValue,maxValue)=>_GuiSlider(bounds._address,textLeft,textRight,value._address,minValue,maxValue)
const _GuiSliderBar=mod.cwrap('GuiSliderBar','number',['pointer','string','string','pointer','number','number'])
raylib.GuiSliderBar=(bounds,textLeft,textRight,value,minValue,maxValue)=>_GuiSliderBar(bounds._address,textLeft,textRight,value._address,minValue,maxValue)
const _GuiProgressBar=mod.cwrap('GuiProgressBar','number',['pointer','string','string','pointer','number','number'])
raylib.GuiProgressBar=(bounds,textLeft,textRight,value,minValue,maxValue)=>_GuiProgressBar(bounds._address,textLeft,textRight,value._address,minValue,maxValue)
const _GuiStatusBar=mod.cwrap('GuiStatusBar','number',['pointer','string'])
raylib.GuiStatusBar=(bounds,text)=>_GuiStatusBar(bounds._address,text)
const _GuiDummyRec=mod.cwrap('GuiDummyRec','number',['pointer','string'])
raylib.GuiDummyRec=(bounds,text)=>_GuiDummyRec(bounds._address,text)
const _GuiGrid=mod.cwrap('GuiGrid','number',['pointer','string','number','number','pointer'])
raylib.GuiGrid=(bounds,text,spacing,subdivs,mouseCell)=>_GuiGrid(bounds._address,text,spacing,subdivs,mouseCell._address)
const _GuiListView=mod.cwrap('GuiListView','number',['pointer','string','pointer','pointer'])
raylib.GuiListView=(bounds,text,scrollIndex,active)=>_GuiListView(bounds._address,text,scrollIndex._address,active._address)
const _GuiListViewEx=mod.cwrap('GuiListViewEx','number',['pointer','pointer','number','pointer','pointer','pointer'])
raylib.GuiListViewEx=(bounds,text,count,scrollIndex,active,focus)=>_GuiListViewEx(bounds._address,text._address,count,scrollIndex._address,active._address,focus._address)
const _GuiMessageBox=mod.cwrap('GuiMessageBox','number',['pointer','string','string','string'])
raylib.GuiMessageBox=(bounds,title,message,buttons)=>_GuiMessageBox(bounds._address,title,message,buttons)
const _GuiTextInputBox=mod.cwrap('GuiTextInputBox','number',['pointer','string','string','string','string','number','pointer'])
raylib.GuiTextInputBox=(bounds,title,message,buttons,text,textMaxSize,secretViewActive)=>_GuiTextInputBox(bounds._address,title,message,buttons,text,textMaxSize,secretViewActive._address)
const _GuiColorPicker=mod.cwrap('GuiColorPicker','number',['pointer','string','pointer'])
raylib.GuiColorPicker=(bounds,text,color)=>_GuiColorPicker(bounds._address,text,color._address)
const _GuiColorPanel=mod.cwrap('GuiColorPanel','number',['pointer','string','pointer'])
raylib.GuiColorPanel=(bounds,text,color)=>_GuiColorPanel(bounds._address,text,color._address)
const _GuiColorBarAlpha=mod.cwrap('GuiColorBarAlpha','number',['pointer','string','pointer'])
raylib.GuiColorBarAlpha=(bounds,text,alpha)=>_GuiColorBarAlpha(bounds._address,text,alpha._address)
const _GuiColorBarHue=mod.cwrap('GuiColorBarHue','number',['pointer','string','pointer'])
raylib.GuiColorBarHue=(bounds,text,value)=>_GuiColorBarHue(bounds._address,text,value._address)
const _GuiColorPickerHSV=mod.cwrap('GuiColorPickerHSV','number',['pointer','string','pointer'])
raylib.GuiColorPickerHSV=(bounds,text,colorHsv)=>_GuiColorPickerHSV(bounds._address,text,colorHsv._address)
const _GuiColorPanelHSV=mod.cwrap('GuiColorPanelHSV','number',['pointer','string','pointer'])
raylib.GuiColorPanelHSV=(bounds,text,colorHsv)=>_GuiColorPanelHSV(bounds._address,text,colorHsv._address)
const _EaseLinearNone=mod.cwrap('EaseLinearNone','number',['number','number','number','number'])
raylib.EaseLinearNone=(t,b,c,d)=>_EaseLinearNone(t,b,c,d)
const _EaseLinearIn=mod.cwrap('EaseLinearIn','number',['number','number','number','number'])
raylib.EaseLinearIn=(t,b,c,d)=>_EaseLinearIn(t,b,c,d)
const _EaseLinearOut=mod.cwrap('EaseLinearOut','number',['number','number','number','number'])
raylib.EaseLinearOut=(t,b,c,d)=>_EaseLinearOut(t,b,c,d)
const _EaseLinearInOut=mod.cwrap('EaseLinearInOut','number',['number','number','number','number'])
raylib.EaseLinearInOut=(t,b,c,d)=>_EaseLinearInOut(t,b,c,d)
const _EaseSineIn=mod.cwrap('EaseSineIn','number',['number','number','number','number'])
raylib.EaseSineIn=(t,b,c,d)=>_EaseSineIn(t,b,c,d)
const _EaseSineOut=mod.cwrap('EaseSineOut','number',['number','number','number','number'])
raylib.EaseSineOut=(t,b,c,d)=>_EaseSineOut(t,b,c,d)
const _EaseSineInOut=mod.cwrap('EaseSineInOut','number',['number','number','number','number'])
raylib.EaseSineInOut=(t,b,c,d)=>_EaseSineInOut(t,b,c,d)
const _EaseCircIn=mod.cwrap('EaseCircIn','number',['number','number','number','number'])
raylib.EaseCircIn=(t,b,c,d)=>_EaseCircIn(t,b,c,d)
const _EaseCircOut=mod.cwrap('EaseCircOut','number',['number','number','number','number'])
raylib.EaseCircOut=(t,b,c,d)=>_EaseCircOut(t,b,c,d)
const _EaseCircInOut=mod.cwrap('EaseCircInOut','number',['number','number','number','number'])
raylib.EaseCircInOut=(t,b,c,d)=>_EaseCircInOut(t,b,c,d)
const _EaseCubicIn=mod.cwrap('EaseCubicIn','number',['number','number','number','number'])
raylib.EaseCubicIn=(t,b,c,d)=>_EaseCubicIn(t,b,c,d)
const _EaseCubicOut=mod.cwrap('EaseCubicOut','number',['number','number','number','number'])
raylib.EaseCubicOut=(t,b,c,d)=>_EaseCubicOut(t,b,c,d)
const _EaseCubicInOut=mod.cwrap('EaseCubicInOut','number',['number','number','number','number'])
raylib.EaseCubicInOut=(t,b,c,d)=>_EaseCubicInOut(t,b,c,d)
const _EaseQuadIn=mod.cwrap('EaseQuadIn','number',['number','number','number','number'])
raylib.EaseQuadIn=(t,b,c,d)=>_EaseQuadIn(t,b,c,d)
const _EaseQuadOut=mod.cwrap('EaseQuadOut','number',['number','number','number','number'])
raylib.EaseQuadOut=(t,b,c,d)=>_EaseQuadOut(t,b,c,d)
const _EaseQuadInOut=mod.cwrap('EaseQuadInOut','number',['number','number','number','number'])
raylib.EaseQuadInOut=(t,b,c,d)=>_EaseQuadInOut(t,b,c,d)
const _EaseExpoIn=mod.cwrap('EaseExpoIn','number',['number','number','number','number'])
raylib.EaseExpoIn=(t,b,c,d)=>_EaseExpoIn(t,b,c,d)
const _EaseExpoOut=mod.cwrap('EaseExpoOut','number',['number','number','number','number'])
raylib.EaseExpoOut=(t,b,c,d)=>_EaseExpoOut(t,b,c,d)
const _EaseExpoInOut=mod.cwrap('EaseExpoInOut','number',['number','number','number','number'])
raylib.EaseExpoInOut=(t,b,c,d)=>_EaseExpoInOut(t,b,c,d)
const _EaseBackIn=mod.cwrap('EaseBackIn','number',['number','number','number','number'])
raylib.EaseBackIn=(t,b,c,d)=>_EaseBackIn(t,b,c,d)
const _EaseBackOut=mod.cwrap('EaseBackOut','number',['number','number','number','number'])
raylib.EaseBackOut=(t,b,c,d)=>_EaseBackOut(t,b,c,d)
const _EaseBackInOut=mod.cwrap('EaseBackInOut','number',['number','number','number','number'])
raylib.EaseBackInOut=(t,b,c,d)=>_EaseBackInOut(t,b,c,d)
const _EaseBounceOut=mod.cwrap('EaseBounceOut','number',['number','number','number','number'])
raylib.EaseBounceOut=(t,b,c,d)=>_EaseBounceOut(t,b,c,d)
const _EaseBounceIn=mod.cwrap('EaseBounceIn','number',['number','number','number','number'])
raylib.EaseBounceIn=(t,b,c,d)=>_EaseBounceIn(t,b,c,d)
const _EaseBounceInOut=mod.cwrap('EaseBounceInOut','number',['number','number','number','number'])
raylib.EaseBounceInOut=(t,b,c,d)=>_EaseBounceInOut(t,b,c,d)
const _EaseElasticIn=mod.cwrap('EaseElasticIn','number',['number','number','number','number'])
raylib.EaseElasticIn=(t,b,c,d)=>_EaseElasticIn(t,b,c,d)
const _EaseElasticOut=mod.cwrap('EaseElasticOut','number',['number','number','number','number'])
raylib.EaseElasticOut=(t,b,c,d)=>_EaseElasticOut(t,b,c,d)
const _EaseElasticInOut=mod.cwrap('EaseElasticInOut','number',['number','number','number','number'])
raylib.EaseElasticInOut=(t,b,c,d)=>_EaseElasticInOut(t,b,c,d)
const _GetCameraForward=mod.cwrap('GetCameraForward','void',['pointer','pointer'])
raylib.GetCameraForward=(camera)=>{const _ret=new raylib.Vector3()
_GetCameraForward(_ret._address,camera._address)
return _ret}
const _GetCameraUp=mod.cwrap('GetCameraUp','void',['pointer','pointer'])
raylib.GetCameraUp=(camera)=>{const _ret=new raylib.Vector3()
_GetCameraUp(_ret._address,camera._address)
return _ret}
const _GetCameraRight=mod.cwrap('GetCameraRight','void',['pointer','pointer'])
raylib.GetCameraRight=(camera)=>{const _ret=new raylib.Vector3()
_GetCameraRight(_ret._address,camera._address)
return _ret}
const _CameraMoveForward=mod.cwrap('CameraMoveForward','pointer',['pointer','number','boolean'])
raylib.CameraMoveForward=(camera,distance,moveInWorldPlane)=>_CameraMoveForward(camera._address,distance,moveInWorldPlane)
const _CameraMoveUp=mod.cwrap('CameraMoveUp','pointer',['pointer','number'])
raylib.CameraMoveUp=(camera,distance)=>_CameraMoveUp(camera._address,distance)
const _CameraMoveRight=mod.cwrap('CameraMoveRight','pointer',['pointer','number','boolean'])
raylib.CameraMoveRight=(camera,distance,moveInWorldPlane)=>_CameraMoveRight(camera._address,distance,moveInWorldPlane)
const _CameraMoveToTarget=mod.cwrap('CameraMoveToTarget','pointer',['pointer','number'])
raylib.CameraMoveToTarget=(camera,delta)=>_CameraMoveToTarget(camera._address,delta)
const _CameraYaw=mod.cwrap('CameraYaw','pointer',['pointer','number','boolean'])
raylib.CameraYaw=(camera,angle,rotateAroundTarget)=>_CameraYaw(camera._address,angle,rotateAroundTarget)
const _CameraPitch=mod.cwrap('CameraPitch','pointer',['pointer','number','boolean','boolean','boolean'])
raylib.CameraPitch=(camera,angle,lockView,rotateAroundTarget,rotateUp)=>_CameraPitch(camera._address,angle,lockView,rotateAroundTarget,rotateUp)
const _CameraRoll=mod.cwrap('CameraRoll','pointer',['pointer','number'])
raylib.CameraRoll=(camera,angle)=>_CameraRoll(camera._address,angle)
const _GetCameraViewMatrix=mod.cwrap('GetCameraViewMatrix','void',['pointer','pointer'])
raylib.GetCameraViewMatrix=(camera)=>{const _ret=new raylib.Matrix()
_GetCameraViewMatrix(_ret._address,camera._address)
return _ret}
const _GetCameraProjectionMatrix=mod.cwrap('GetCameraProjectionMatrix','void',['pointer','pointer','number'])
raylib.GetCameraProjectionMatrix=(camera,aspect)=>{const _ret=new raylib.Matrix()
_GetCameraProjectionMatrix(_ret._address,camera._address,aspect)
return _ret}
const _DrawTextBoxed=mod.cwrap('DrawTextBoxed','pointer',['pointer','string','pointer','number','number','boolean','pointer'])
raylib.DrawTextBoxed=(font,text,rec,fontSize,spacing,wordWrap,tint)=>_DrawTextBoxed(font._address,text,rec._address,fontSize,spacing,wordWrap,tint._address)
const _DrawTextBoxedSelectable=mod.cwrap('DrawTextBoxedSelectable','pointer',['pointer','string','pointer','number','number','boolean','pointer','number','number','pointer','pointer'])
raylib.DrawTextBoxedSelectable=(font,text,rec,fontSize,spacing,wordWrap,tint,selectStart,selectLength,selectTint,selectBackTint)=>_DrawTextBoxedSelectable(font._address,text,rec._address,fontSize,spacing,wordWrap,tint._address,selectStart,selectLength,selectTint._address,selectBackTint._address)
raylib.UniformFloat=class UniformFloat{constructor(shader,name,address){this._shader=shader
this._size=4
this._address=address||mod._malloc(this._size)
this._loc=raylib.GetShaderLocation(shader,name)}
get value(){return mod.HEAPF32[this._address/4]}
set value(v){mod.HEAPF32[this._address/4]=v
raylib.SetShaderValue(this._shader,this._loc,this,raylib.SHADER_UNIFORM_FLOAT)}}
raylib.UniformVector2=class UniformVector2{constructor(shader,name,address){this._shader=shader
this._val=new raylib.Vector2({},address)
this._loc=raylib.GetShaderLocation(shader,name)}
get x(){return this._val.x}
set x(v){this._val.x=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC2)}
get y(){return this._val.y}
set y(v){this._val.y=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC2)}}
raylib.UniformVector3=class UniformVector3{constructor(shader,name,address){this._shader=shader
this._val=new raylib.Vector3({},address)
this._loc=raylib.GetShaderLocation(shader,name)}
get x(){return this._val.x}
set x(v){this._val.x=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC3)}
get y(){return this._val.y}
set y(v){this._val.y=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC3)}
get z(){return this._val.z}
set y(v){this._val.z=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC3)}}
raylib.UniformVector4=class UniformVector4{constructor(shader,name,address){this._shader=shader
this._val=new raylib.Vector4({},address)
this._loc=raylib.GetShaderLocation(shader,name)}
get x(){return this._val.x}
set x(v){this._val.x=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC4)}
get y(){return this._val.y}
set y(v){this._val.y=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC4)}
get z(){return this._val.z}
set y(v){this._val.z=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC4)}
get w(){return this._val.w}
set w(v){this._val.w=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC4)}}
raylib.UniformColor=class UniformColor{constructor(shader,name,address){this._shader=shader
this._val=new raylib.Vector4({},address)
this._loc=raylib.GetShaderLocation(shader,name)}
get r(){return this._val.x}
set r(v){this._val.x=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC4)}
get g(){return this._val.y}
set g(v){this._val.y=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC4)}
get b(){return this._val.z}
set b(v){this._val.z=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC4)}
get a(){return this._val.w}
set a(v){this._val.w=v
raylib.SetShaderValue(this._shader,this._loc,this._val,raylib.SHADER_UNIFORM_VEC4)}}
raylib.UniformInt=class UniformInt{constructor(shader,name,address){this._shader=shader
this._size=4
this._address=address||mod._malloc(this._size)
this._loc=raylib.GetShaderLocation(shader,name)}
get value(){return mod.HEAP32[this._address/4]}
set value(v){mod.HEAP32[this._address/4]=v
raylib.SetShaderValue(this._shader,this._loc,this,raylib.SHADER_UNIFORM_INT)}}
raylib.UniformTexture=class UniformTexture{constructor(shader,name,address){this._shader=shader
this._loc=raylib.GetShaderLocation(shader,name)}
set texture(t){raylib.SetShaderValueTexture(this._shader,this._loc,t)}}
raylib.addFile=async(filename,target)=>{if(!target){target=filename}
const p=target.split('/').slice(0,-1)
let dir=''
for(const d of p){dir=dir+'/'+d
try{mod.FS.mkdir(dir)}catch(e){}}
mod.FS.writeFile(target,new Uint8Array(await fetch(filename).then(r=>r.arrayBuffer())))}
raylib.free=ptr=>ptr._address?mod._free(ptr._address):mod._free(ptr)
raylib.globalize=()=>{for(const k of Object.keys(raylib)){window[k]=raylib[k]}}
if(userInit){await userInit(raylib)}
if(userUpdate){const updateLoop=(timeStamp)=>{userUpdate(timeStamp,raylib)
requestAnimationFrame(updateLoop)}
updateLoop()}
return raylib}
export function raylib_run_string(canvas,userCode){const f=new Function(['runGame','canvas'],userCode+'\n'+`
    if (typeof InitGame === 'undefined') {
      console.error('Make sure to add InitGame() to your raylib-game.')
      return
    }
    if (typeof UpdateGame === 'undefined') {
      console.error('Make sure to add UpdateGame() to your raylib-game.')
      return
    }

    let free,addFile,globalize,mod,Vector2,Vector3,Vector4,Matrix,Color,Rectangle,Image,Texture,RenderTexture,NPatchInfo,GlyphInfo,Font,Camera3D,Camera2D,Mesh,Shader,MaterialMap,Material,Transform,BoneInfo,Model,ModelAnimation,Ray,RayCollision,BoundingBox,Wave,AudioStream,Sound,Music,VrDeviceInfo,VrStereoConfig,FilePathList,AutomationEvent,AutomationEventList,Texture2D,GuiStyleProp,GuiTextStyle,Quaternion,TextureCubemap,RenderTexture2D,Camera,FLAG_VSYNC_HINT,FLAG_FULLSCREEN_MODE,FLAG_WINDOW_RESIZABLE,FLAG_WINDOW_UNDECORATED,FLAG_WINDOW_HIDDEN,FLAG_WINDOW_MINIMIZED,FLAG_WINDOW_MAXIMIZED,FLAG_WINDOW_UNFOCUSED,FLAG_WINDOW_TOPMOST,FLAG_WINDOW_ALWAYS_RUN,FLAG_WINDOW_TRANSPARENT,FLAG_WINDOW_HIGHDPI,FLAG_WINDOW_MOUSE_PASSTHROUGH,FLAG_BORDERLESS_WINDOWED_MODE,FLAG_MSAA_4X_HINT,FLAG_INTERLACED_HINT,LOG_ALL,LOG_TRACE,LOG_DEBUG,LOG_INFO,LOG_WARNING,LOG_ERROR,LOG_FATAL,LOG_NONE,KEY_NULL,KEY_APOSTROPHE,KEY_COMMA,KEY_MINUS,KEY_PERIOD,KEY_SLASH,KEY_ZERO,KEY_ONE,KEY_TWO,KEY_THREE,KEY_FOUR,KEY_FIVE,KEY_SIX,KEY_SEVEN,KEY_EIGHT,KEY_NINE,KEY_SEMICOLON,KEY_EQUAL,KEY_A,KEY_B,KEY_C,KEY_D,KEY_E,KEY_F,KEY_G,KEY_H,KEY_I,KEY_J,KEY_K,KEY_L,KEY_M,KEY_N,KEY_O,KEY_P,KEY_Q,KEY_R,KEY_S,KEY_T,KEY_U,KEY_V,KEY_W,KEY_X,KEY_Y,KEY_Z,KEY_LEFT_BRACKET,KEY_BACKSLASH,KEY_RIGHT_BRACKET,KEY_GRAVE,KEY_SPACE,KEY_ESCAPE,KEY_ENTER,KEY_TAB,KEY_BACKSPACE,KEY_INSERT,KEY_DELETE,KEY_RIGHT,KEY_LEFT,KEY_DOWN,KEY_UP,KEY_PAGE_UP,KEY_PAGE_DOWN,KEY_HOME,KEY_END,KEY_CAPS_LOCK,KEY_SCROLL_LOCK,KEY_NUM_LOCK,KEY_PRINT_SCREEN,KEY_PAUSE,KEY_F1,KEY_F2,KEY_F3,KEY_F4,KEY_F5,KEY_F6,KEY_F7,KEY_F8,KEY_F9,KEY_F10,KEY_F11,KEY_F12,KEY_LEFT_SHIFT,KEY_LEFT_CONTROL,KEY_LEFT_ALT,KEY_LEFT_SUPER,KEY_RIGHT_SHIFT,KEY_RIGHT_CONTROL,KEY_RIGHT_ALT,KEY_RIGHT_SUPER,KEY_KB_MENU,KEY_KP_0,KEY_KP_1,KEY_KP_2,KEY_KP_3,KEY_KP_4,KEY_KP_5,KEY_KP_6,KEY_KP_7,KEY_KP_8,KEY_KP_9,KEY_KP_DECIMAL,KEY_KP_DIVIDE,KEY_KP_MULTIPLY,KEY_KP_SUBTRACT,KEY_KP_ADD,KEY_KP_ENTER,KEY_KP_EQUAL,KEY_BACK,KEY_MENU,KEY_VOLUME_UP,KEY_VOLUME_DOWN,MOUSE_BUTTON_LEFT,MOUSE_BUTTON_RIGHT,MOUSE_BUTTON_MIDDLE,MOUSE_BUTTON_SIDE,MOUSE_BUTTON_EXTRA,MOUSE_BUTTON_FORWARD,MOUSE_BUTTON_BACK,MOUSE_CURSOR_DEFAULT,MOUSE_CURSOR_ARROW,MOUSE_CURSOR_IBEAM,MOUSE_CURSOR_CROSSHAIR,MOUSE_CURSOR_POINTING_HAND,MOUSE_CURSOR_RESIZE_EW,MOUSE_CURSOR_RESIZE_NS,MOUSE_CURSOR_RESIZE_NWSE,MOUSE_CURSOR_RESIZE_NESW,MOUSE_CURSOR_RESIZE_ALL,MOUSE_CURSOR_NOT_ALLOWED,GAMEPAD_BUTTON_UNKNOWN,GAMEPAD_BUTTON_LEFT_FACE_UP,GAMEPAD_BUTTON_LEFT_FACE_RIGHT,GAMEPAD_BUTTON_LEFT_FACE_DOWN,GAMEPAD_BUTTON_LEFT_FACE_LEFT,GAMEPAD_BUTTON_RIGHT_FACE_UP,GAMEPAD_BUTTON_RIGHT_FACE_RIGHT,GAMEPAD_BUTTON_RIGHT_FACE_DOWN,GAMEPAD_BUTTON_RIGHT_FACE_LEFT,GAMEPAD_BUTTON_LEFT_TRIGGER_1,GAMEPAD_BUTTON_LEFT_TRIGGER_2,GAMEPAD_BUTTON_RIGHT_TRIGGER_1,GAMEPAD_BUTTON_RIGHT_TRIGGER_2,GAMEPAD_BUTTON_MIDDLE_LEFT,GAMEPAD_BUTTON_MIDDLE,GAMEPAD_BUTTON_MIDDLE_RIGHT,GAMEPAD_BUTTON_LEFT_THUMB,GAMEPAD_BUTTON_RIGHT_THUMB,GAMEPAD_AXIS_LEFT_X,GAMEPAD_AXIS_LEFT_Y,GAMEPAD_AXIS_RIGHT_X,GAMEPAD_AXIS_RIGHT_Y,GAMEPAD_AXIS_LEFT_TRIGGER,GAMEPAD_AXIS_RIGHT_TRIGGER,MATERIAL_MAP_ALBEDO,MATERIAL_MAP_METALNESS,MATERIAL_MAP_NORMAL,MATERIAL_MAP_ROUGHNESS,MATERIAL_MAP_OCCLUSION,MATERIAL_MAP_EMISSION,MATERIAL_MAP_HEIGHT,MATERIAL_MAP_CUBEMAP,MATERIAL_MAP_IRRADIANCE,MATERIAL_MAP_PREFILTER,MATERIAL_MAP_BRDF,SHADER_LOC_VERTEX_POSITION,SHADER_LOC_VERTEX_TEXCOORD01,SHADER_LOC_VERTEX_TEXCOORD02,SHADER_LOC_VERTEX_NORMAL,SHADER_LOC_VERTEX_TANGENT,SHADER_LOC_VERTEX_COLOR,SHADER_LOC_MATRIX_MVP,SHADER_LOC_MATRIX_VIEW,SHADER_LOC_MATRIX_PROJECTION,SHADER_LOC_MATRIX_MODEL,SHADER_LOC_MATRIX_NORMAL,SHADER_LOC_VECTOR_VIEW,SHADER_LOC_COLOR_DIFFUSE,SHADER_LOC_COLOR_SPECULAR,SHADER_LOC_COLOR_AMBIENT,SHADER_LOC_MAP_ALBEDO,SHADER_LOC_MAP_METALNESS,SHADER_LOC_MAP_NORMAL,SHADER_LOC_MAP_ROUGHNESS,SHADER_LOC_MAP_OCCLUSION,SHADER_LOC_MAP_EMISSION,SHADER_LOC_MAP_HEIGHT,SHADER_LOC_MAP_CUBEMAP,SHADER_LOC_MAP_IRRADIANCE,SHADER_LOC_MAP_PREFILTER,SHADER_LOC_MAP_BRDF,SHADER_LOC_VERTEX_BONEIDS,SHADER_LOC_VERTEX_BONEWEIGHTS,SHADER_LOC_BONE_MATRICES,SHADER_UNIFORM_FLOAT,SHADER_UNIFORM_VEC2,SHADER_UNIFORM_VEC3,SHADER_UNIFORM_VEC4,SHADER_UNIFORM_INT,SHADER_UNIFORM_IVEC2,SHADER_UNIFORM_IVEC3,SHADER_UNIFORM_IVEC4,SHADER_UNIFORM_SAMPLER2D,SHADER_ATTRIB_FLOAT,SHADER_ATTRIB_VEC2,SHADER_ATTRIB_VEC3,SHADER_ATTRIB_VEC4,PIXELFORMAT_UNCOMPRESSED_GRAYSCALE,PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA,PIXELFORMAT_UNCOMPRESSED_R5G6B5,PIXELFORMAT_UNCOMPRESSED_R8G8B8,PIXELFORMAT_UNCOMPRESSED_R5G5B5A1,PIXELFORMAT_UNCOMPRESSED_R4G4B4A4,PIXELFORMAT_UNCOMPRESSED_R8G8B8A8,PIXELFORMAT_UNCOMPRESSED_R32,PIXELFORMAT_UNCOMPRESSED_R32G32B32,PIXELFORMAT_UNCOMPRESSED_R32G32B32A32,PIXELFORMAT_UNCOMPRESSED_R16,PIXELFORMAT_UNCOMPRESSED_R16G16B16,PIXELFORMAT_UNCOMPRESSED_R16G16B16A16,PIXELFORMAT_COMPRESSED_DXT1_RGB,PIXELFORMAT_COMPRESSED_DXT1_RGBA,PIXELFORMAT_COMPRESSED_DXT3_RGBA,PIXELFORMAT_COMPRESSED_DXT5_RGBA,PIXELFORMAT_COMPRESSED_ETC1_RGB,PIXELFORMAT_COMPRESSED_ETC2_RGB,PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA,PIXELFORMAT_COMPRESSED_PVRT_RGB,PIXELFORMAT_COMPRESSED_PVRT_RGBA,PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA,PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA,TEXTURE_FILTER_POINT,TEXTURE_FILTER_BILINEAR,TEXTURE_FILTER_TRILINEAR,TEXTURE_FILTER_ANISOTROPIC_4X,TEXTURE_FILTER_ANISOTROPIC_8X,TEXTURE_FILTER_ANISOTROPIC_16X,TEXTURE_WRAP_REPEAT,TEXTURE_WRAP_CLAMP,TEXTURE_WRAP_MIRROR_REPEAT,TEXTURE_WRAP_MIRROR_CLAMP,CUBEMAP_LAYOUT_AUTO_DETECT,CUBEMAP_LAYOUT_LINE_VERTICAL,CUBEMAP_LAYOUT_LINE_HORIZONTAL,CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR,CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE,FONT_DEFAULT,FONT_BITMAP,FONT_SDF,BLEND_ALPHA,BLEND_ADDITIVE,BLEND_MULTIPLIED,BLEND_ADD_COLORS,BLEND_SUBTRACT_COLORS,BLEND_ALPHA_PREMULTIPLY,BLEND_CUSTOM,BLEND_CUSTOM_SEPARATE,GESTURE_NONE,GESTURE_TAP,GESTURE_DOUBLETAP,GESTURE_HOLD,GESTURE_DRAG,GESTURE_SWIPE_RIGHT,GESTURE_SWIPE_LEFT,GESTURE_SWIPE_UP,GESTURE_SWIPE_DOWN,GESTURE_PINCH_IN,GESTURE_PINCH_OUT,CAMERA_CUSTOM,CAMERA_FREE,CAMERA_ORBITAL,CAMERA_FIRST_PERSON,CAMERA_THIRD_PERSON,CAMERA_PERSPECTIVE,CAMERA_ORTHOGRAPHIC,NPATCH_NINE_PATCH,NPATCH_THREE_PATCH_VERTICAL,NPATCH_THREE_PATCH_HORIZONTAL,STATE_NORMAL,STATE_FOCUSED,STATE_PRESSED,STATE_DISABLED,TEXT_ALIGN_LEFT,TEXT_ALIGN_CENTER,TEXT_ALIGN_RIGHT,TEXT_ALIGN_TOP,TEXT_ALIGN_MIDDLE,TEXT_ALIGN_BOTTOM,TEXT_WRAP_NONE,TEXT_WRAP_CHAR,TEXT_WRAP_WORD,DEFAULT,LABEL,BUTTON,TOGGLE,SLIDER,PROGRESSBAR,CHECKBOX,COMBOBOX,DROPDOWNBOX,TEXTBOX,VALUEBOX,SPINNER,LISTVIEW,COLORPICKER,SCROLLBAR,STATUSBAR,BORDER_COLOR_NORMAL,BASE_COLOR_NORMAL,TEXT_COLOR_NORMAL,BORDER_COLOR_FOCUSED,BASE_COLOR_FOCUSED,TEXT_COLOR_FOCUSED,BORDER_COLOR_PRESSED,BASE_COLOR_PRESSED,TEXT_COLOR_PRESSED,BORDER_COLOR_DISABLED,BASE_COLOR_DISABLED,TEXT_COLOR_DISABLED,BORDER_WIDTH,TEXT_PADDING,TEXT_ALIGNMENT,TEXT_SIZE,TEXT_SPACING,LINE_COLOR,BACKGROUND_COLOR,TEXT_LINE_SPACING,TEXT_ALIGNMENT_VERTICAL,TEXT_WRAP_MODE,GROUP_PADDING,SLIDER_WIDTH,SLIDER_PADDING,PROGRESS_PADDING,ARROWS_SIZE,ARROWS_VISIBLE,SCROLL_SLIDER_PADDING,SCROLL_SLIDER_SIZE,SCROLL_PADDING,SCROLL_SPEED,CHECK_PADDING,COMBO_BUTTON_WIDTH,COMBO_BUTTON_SPACING,ARROW_PADDING,DROPDOWN_ITEMS_SPACING,TEXT_READONLY,SPIN_BUTTON_WIDTH,SPIN_BUTTON_SPACING,LIST_ITEMS_HEIGHT,LIST_ITEMS_SPACING,SCROLLBAR_WIDTH,SCROLLBAR_SIDE,COLOR_SELECTOR_SIZE,HUEBAR_WIDTH,HUEBAR_PADDING,HUEBAR_SELECTOR_HEIGHT,HUEBAR_SELECTOR_OVERFLOW,ICON_NONE,ICON_FOLDER_FILE_OPEN,ICON_FILE_SAVE_CLASSIC,ICON_FOLDER_OPEN,ICON_FOLDER_SAVE,ICON_FILE_OPEN,ICON_FILE_SAVE,ICON_FILE_EXPORT,ICON_FILE_ADD,ICON_FILE_DELETE,ICON_FILETYPE_TEXT,ICON_FILETYPE_AUDIO,ICON_FILETYPE_IMAGE,ICON_FILETYPE_PLAY,ICON_FILETYPE_VIDEO,ICON_FILETYPE_INFO,ICON_FILE_COPY,ICON_FILE_CUT,ICON_FILE_PASTE,ICON_CURSOR_HAND,ICON_CURSOR_POINTER,ICON_CURSOR_CLASSIC,ICON_PENCIL,ICON_PENCIL_BIG,ICON_BRUSH_CLASSIC,ICON_BRUSH_PAINTER,ICON_WATER_DROP,ICON_COLOR_PICKER,ICON_RUBBER,ICON_COLOR_BUCKET,ICON_TEXT_T,ICON_TEXT_A,ICON_SCALE,ICON_RESIZE,ICON_FILTER_POINT,ICON_FILTER_BILINEAR,ICON_CROP,ICON_CROP_ALPHA,ICON_SQUARE_TOGGLE,ICON_SYMMETRY,ICON_SYMMETRY_HORIZONTAL,ICON_SYMMETRY_VERTICAL,ICON_LENS,ICON_LENS_BIG,ICON_EYE_ON,ICON_EYE_OFF,ICON_FILTER_TOP,ICON_FILTER,ICON_TARGET_POINT,ICON_TARGET_SMALL,ICON_TARGET_BIG,ICON_TARGET_MOVE,ICON_CURSOR_MOVE,ICON_CURSOR_SCALE,ICON_CURSOR_SCALE_RIGHT,ICON_CURSOR_SCALE_LEFT,ICON_UNDO,ICON_REDO,ICON_REREDO,ICON_MUTATE,ICON_ROTATE,ICON_REPEAT,ICON_SHUFFLE,ICON_EMPTYBOX,ICON_TARGET,ICON_TARGET_SMALL_FILL,ICON_TARGET_BIG_FILL,ICON_TARGET_MOVE_FILL,ICON_CURSOR_MOVE_FILL,ICON_CURSOR_SCALE_FILL,ICON_CURSOR_SCALE_RIGHT_FILL,ICON_CURSOR_SCALE_LEFT_FILL,ICON_UNDO_FILL,ICON_REDO_FILL,ICON_REREDO_FILL,ICON_MUTATE_FILL,ICON_ROTATE_FILL,ICON_REPEAT_FILL,ICON_SHUFFLE_FILL,ICON_EMPTYBOX_SMALL,ICON_BOX,ICON_BOX_TOP,ICON_BOX_TOP_RIGHT,ICON_BOX_RIGHT,ICON_BOX_BOTTOM_RIGHT,ICON_BOX_BOTTOM,ICON_BOX_BOTTOM_LEFT,ICON_BOX_LEFT,ICON_BOX_TOP_LEFT,ICON_BOX_CENTER,ICON_BOX_CIRCLE_MASK,ICON_POT,ICON_ALPHA_MULTIPLY,ICON_ALPHA_CLEAR,ICON_DITHERING,ICON_MIPMAPS,ICON_BOX_GRID,ICON_GRID,ICON_BOX_CORNERS_SMALL,ICON_BOX_CORNERS_BIG,ICON_FOUR_BOXES,ICON_GRID_FILL,ICON_BOX_MULTISIZE,ICON_ZOOM_SMALL,ICON_ZOOM_MEDIUM,ICON_ZOOM_BIG,ICON_ZOOM_ALL,ICON_ZOOM_CENTER,ICON_BOX_DOTS_SMALL,ICON_BOX_DOTS_BIG,ICON_BOX_CONCENTRIC,ICON_BOX_GRID_BIG,ICON_OK_TICK,ICON_CROSS,ICON_ARROW_LEFT,ICON_ARROW_RIGHT,ICON_ARROW_DOWN,ICON_ARROW_UP,ICON_ARROW_LEFT_FILL,ICON_ARROW_RIGHT_FILL,ICON_ARROW_DOWN_FILL,ICON_ARROW_UP_FILL,ICON_AUDIO,ICON_FX,ICON_WAVE,ICON_WAVE_SINUS,ICON_WAVE_SQUARE,ICON_WAVE_TRIANGULAR,ICON_CROSS_SMALL,ICON_PLAYER_PREVIOUS,ICON_PLAYER_PLAY_BACK,ICON_PLAYER_PLAY,ICON_PLAYER_PAUSE,ICON_PLAYER_STOP,ICON_PLAYER_NEXT,ICON_PLAYER_RECORD,ICON_MAGNET,ICON_LOCK_CLOSE,ICON_LOCK_OPEN,ICON_CLOCK,ICON_TOOLS,ICON_GEAR,ICON_GEAR_BIG,ICON_BIN,ICON_HAND_POINTER,ICON_LASER,ICON_COIN,ICON_EXPLOSION,ICON_1UP,ICON_PLAYER,ICON_PLAYER_JUMP,ICON_KEY,ICON_DEMON,ICON_TEXT_POPUP,ICON_GEAR_EX,ICON_CRACK,ICON_CRACK_POINTS,ICON_STAR,ICON_DOOR,ICON_EXIT,ICON_MODE_2D,ICON_MODE_3D,ICON_CUBE,ICON_CUBE_FACE_TOP,ICON_CUBE_FACE_LEFT,ICON_CUBE_FACE_FRONT,ICON_CUBE_FACE_BOTTOM,ICON_CUBE_FACE_RIGHT,ICON_CUBE_FACE_BACK,ICON_CAMERA,ICON_SPECIAL,ICON_LINK_NET,ICON_LINK_BOXES,ICON_LINK_MULTI,ICON_LINK,ICON_LINK_BROKE,ICON_TEXT_NOTES,ICON_NOTEBOOK,ICON_SUITCASE,ICON_SUITCASE_ZIP,ICON_MAILBOX,ICON_MONITOR,ICON_PRINTER,ICON_PHOTO_CAMERA,ICON_PHOTO_CAMERA_FLASH,ICON_HOUSE,ICON_HEART,ICON_CORNER,ICON_VERTICAL_BARS,ICON_VERTICAL_BARS_FILL,ICON_LIFE_BARS,ICON_INFO,ICON_CROSSLINE,ICON_HELP,ICON_FILETYPE_ALPHA,ICON_FILETYPE_HOME,ICON_LAYERS_VISIBLE,ICON_LAYERS,ICON_WINDOW,ICON_HIDPI,ICON_FILETYPE_BINARY,ICON_HEX,ICON_SHIELD,ICON_FILE_NEW,ICON_FOLDER_ADD,ICON_ALARM,ICON_CPU,ICON_ROM,ICON_STEP_OVER,ICON_STEP_INTO,ICON_STEP_OUT,ICON_RESTART,ICON_BREAKPOINT_ON,ICON_BREAKPOINT_OFF,ICON_BURGER_MENU,ICON_CASE_SENSITIVE,ICON_REG_EXP,ICON_FOLDER,ICON_FILE,ICON_SAND_TIMER,ICON_220,ICON_221,ICON_222,ICON_223,ICON_224,ICON_225,ICON_226,ICON_227,ICON_228,ICON_229,ICON_230,ICON_231,ICON_232,ICON_233,ICON_234,ICON_235,ICON_236,ICON_237,ICON_238,ICON_239,ICON_240,ICON_241,ICON_242,ICON_243,ICON_244,ICON_245,ICON_246,ICON_247,ICON_248,ICON_249,ICON_250,ICON_251,ICON_252,ICON_253,ICON_254,ICON_255,LIGHTGRAY,GRAY,DARKGRAY,YELLOW,GOLD,ORANGE,PINK,RED,MAROON,GREEN,LIME,DARKGREEN,SKYBLUE,BLUE,DARKBLUE,PURPLE,VIOLET,DARKPURPLE,BEIGE,BROWN,DARKBROWN,WHITE,BLACK,BLANK,MAGENTA,RAYWHITE,InitWindow,CloseWindow,WindowShouldClose,IsWindowReady,IsWindowFullscreen,IsWindowHidden,IsWindowMinimized,IsWindowMaximized,IsWindowFocused,IsWindowResized,IsWindowState,SetWindowState,ClearWindowState,ToggleFullscreen,ToggleBorderlessWindowed,MaximizeWindow,MinimizeWindow,RestoreWindow,SetWindowIcon,SetWindowIcons,SetWindowTitle,SetWindowPosition,SetWindowMonitor,SetWindowMinSize,SetWindowMaxSize,SetWindowSize,SetWindowOpacity,SetWindowFocused,GetWindowHandle,GetScreenWidth,GetScreenHeight,GetRenderWidth,GetRenderHeight,GetMonitorCount,GetCurrentMonitor,GetMonitorPosition,GetMonitorWidth,GetMonitorHeight,GetMonitorPhysicalWidth,GetMonitorPhysicalHeight,GetMonitorRefreshRate,GetWindowPosition,GetWindowScaleDPI,GetMonitorName,SetClipboardText,GetClipboardText,EnableEventWaiting,DisableEventWaiting,ShowCursor,HideCursor,IsCursorHidden,EnableCursor,DisableCursor,IsCursorOnScreen,ClearBackground,BeginDrawing,EndDrawing,BeginMode2D,EndMode2D,BeginMode3D,EndMode3D,BeginTextureMode,EndTextureMode,BeginShaderMode,EndShaderMode,BeginBlendMode,EndBlendMode,BeginScissorMode,EndScissorMode,BeginVrStereoMode,EndVrStereoMode,LoadVrStereoConfig,UnloadVrStereoConfig,LoadShader,LoadShaderFromMemory,IsShaderValid,GetShaderLocation,GetShaderLocationAttrib,SetShaderValue,SetShaderValueV,SetShaderValueMatrix,SetShaderValueTexture,UnloadShader,GetScreenToWorldRay,GetScreenToWorldRayEx,GetWorldToScreen,GetWorldToScreenEx,GetWorldToScreen2D,GetScreenToWorld2D,GetCameraMatrix,GetCameraMatrix2D,SetTargetFPS,GetFrameTime,GetTime,GetFPS,SwapScreenBuffer,PollInputEvents,WaitTime,SetRandomSeed,GetRandomValue,LoadRandomSequence,UnloadRandomSequence,TakeScreenshot,SetConfigFlags,OpenURL,TraceLog,SetTraceLogLevel,MemAlloc,MemRealloc,MemFree,SetTraceLogCallback,SetLoadFileDataCallback,SetSaveFileDataCallback,SetLoadFileTextCallback,SetSaveFileTextCallback,LoadFileData,UnloadFileData,SaveFileData,ExportDataAsCode,LoadFileText,UnloadFileText,SaveFileText,FileExists,DirectoryExists,IsFileExtension,GetFileLength,GetFileExtension,GetFileName,GetFileNameWithoutExt,GetDirectoryPath,GetPrevDirectoryPath,GetWorkingDirectory,GetApplicationDirectory,MakeDirectory,ChangeDirectory,IsPathFile,IsFileNameValid,LoadDirectoryFiles,LoadDirectoryFilesEx,UnloadDirectoryFiles,IsFileDropped,LoadDroppedFiles,UnloadDroppedFiles,GetFileModTime,CompressData,DecompressData,EncodeDataBase64,DecodeDataBase64,ComputeCRC32,ComputeMD5,ComputeSHA1,LoadAutomationEventList,UnloadAutomationEventList,ExportAutomationEventList,SetAutomationEventList,SetAutomationEventBaseFrame,StartAutomationEventRecording,StopAutomationEventRecording,PlayAutomationEvent,IsKeyPressed,IsKeyPressedRepeat,IsKeyDown,IsKeyReleased,IsKeyUp,GetKeyPressed,GetCharPressed,SetExitKey,IsGamepadAvailable,GetGamepadName,IsGamepadButtonPressed,IsGamepadButtonDown,IsGamepadButtonReleased,IsGamepadButtonUp,GetGamepadButtonPressed,GetGamepadAxisCount,GetGamepadAxisMovement,SetGamepadMappings,SetGamepadVibration,IsMouseButtonPressed,IsMouseButtonDown,IsMouseButtonReleased,IsMouseButtonUp,GetMouseX,GetMouseY,GetMousePosition,GetMouseDelta,SetMousePosition,SetMouseOffset,SetMouseScale,GetMouseWheelMove,GetMouseWheelMoveV,SetMouseCursor,GetTouchX,GetTouchY,GetTouchPosition,GetTouchPointId,GetTouchPointCount,SetGesturesEnabled,IsGestureDetected,GetGestureDetected,GetGestureHoldDuration,GetGestureDragVector,GetGestureDragAngle,GetGesturePinchVector,GetGesturePinchAngle,UpdateCamera,UpdateCameraPro,SetShapesTexture,GetShapesTexture,GetShapesTextureRectangle,DrawPixel,DrawPixelV,DrawLine,DrawLineV,DrawLineEx,DrawLineStrip,DrawLineBezier,DrawCircle,DrawCircleSector,DrawCircleSectorLines,DrawCircleGradient,DrawCircleV,DrawCircleLines,DrawCircleLinesV,DrawEllipse,DrawEllipseLines,DrawRing,DrawRingLines,DrawRectangle,DrawRectangleV,DrawRectangleRec,DrawRectanglePro,DrawRectangleGradientV,DrawRectangleGradientH,DrawRectangleGradientEx,DrawRectangleLines,DrawRectangleLinesEx,DrawRectangleRounded,DrawRectangleRoundedLines,DrawRectangleRoundedLinesEx,DrawTriangle,DrawTriangleLines,DrawTriangleFan,DrawTriangleStrip,DrawPoly,DrawPolyLines,DrawPolyLinesEx,DrawSplineLinear,DrawSplineBasis,DrawSplineCatmullRom,DrawSplineBezierQuadratic,DrawSplineBezierCubic,DrawSplineSegmentLinear,DrawSplineSegmentBasis,DrawSplineSegmentCatmullRom,DrawSplineSegmentBezierQuadratic,DrawSplineSegmentBezierCubic,GetSplinePointLinear,GetSplinePointBasis,GetSplinePointCatmullRom,GetSplinePointBezierQuad,GetSplinePointBezierCubic,CheckCollisionRecs,CheckCollisionCircles,CheckCollisionCircleRec,CheckCollisionCircleLine,CheckCollisionPointRec,CheckCollisionPointCircle,CheckCollisionPointTriangle,CheckCollisionPointLine,CheckCollisionPointPoly,CheckCollisionLines,GetCollisionRec,LoadImage,LoadImageRaw,LoadImageAnim,LoadImageAnimFromMemory,LoadImageFromMemory,LoadImageFromTexture,LoadImageFromScreen,IsImageValid,UnloadImage,ExportImage,ExportImageToMemory,ExportImageAsCode,GenImageColor,GenImageGradientLinear,GenImageGradientRadial,GenImageGradientSquare,GenImageChecked,GenImageWhiteNoise,GenImagePerlinNoise,GenImageCellular,GenImageText,ImageCopy,ImageFromImage,ImageFromChannel,ImageText,ImageTextEx,ImageFormat,ImageToPOT,ImageCrop,ImageAlphaCrop,ImageAlphaClear,ImageAlphaMask,ImageAlphaPremultiply,ImageBlurGaussian,ImageKernelConvolution,ImageResize,ImageResizeNN,ImageResizeCanvas,ImageMipmaps,ImageDither,ImageFlipVertical,ImageFlipHorizontal,ImageRotate,ImageRotateCW,ImageRotateCCW,ImageColorTint,ImageColorInvert,ImageColorGrayscale,ImageColorContrast,ImageColorBrightness,ImageColorReplace,LoadImageColors,LoadImagePalette,UnloadImageColors,UnloadImagePalette,GetImageAlphaBorder,GetImageColor,ImageClearBackground,ImageDrawPixel,ImageDrawPixelV,ImageDrawLine,ImageDrawLineV,ImageDrawLineEx,ImageDrawCircle,ImageDrawCircleV,ImageDrawCircleLines,ImageDrawCircleLinesV,ImageDrawRectangle,ImageDrawRectangleV,ImageDrawRectangleRec,ImageDrawRectangleLines,ImageDrawTriangle,ImageDrawTriangleEx,ImageDrawTriangleLines,ImageDrawTriangleFan,ImageDrawTriangleStrip,ImageDraw,ImageDrawText,ImageDrawTextEx,LoadTexture,LoadTextureFromImage,LoadTextureCubemap,LoadRenderTexture,IsTextureValid,UnloadTexture,IsRenderTextureValid,UnloadRenderTexture,UpdateTexture,UpdateTextureRec,GenTextureMipmaps,SetTextureFilter,SetTextureWrap,DrawTexture,DrawTextureV,DrawTextureEx,DrawTextureRec,DrawTexturePro,DrawTextureNPatch,ColorIsEqual,Fade,ColorToInt,ColorNormalize,ColorFromNormalized,ColorToHSV,ColorFromHSV,ColorTint,ColorBrightness,ColorContrast,ColorAlpha,ColorAlphaBlend,ColorLerp,GetColor,GetPixelColor,SetPixelColor,GetPixelDataSize,GetFontDefault,LoadFont,LoadFontEx,LoadFontFromImage,LoadFontFromMemory,IsFontValid,LoadFontData,GenImageFontAtlas,UnloadFontData,UnloadFont,ExportFontAsCode,DrawFPS,DrawText,DrawTextEx,DrawTextPro,DrawTextCodepoint,DrawTextCodepoints,SetTextLineSpacing,MeasureText,MeasureTextEx,GetGlyphIndex,GetGlyphInfo,GetGlyphAtlasRec,LoadUTF8,UnloadUTF8,LoadCodepoints,UnloadCodepoints,GetCodepointCount,GetCodepoint,GetCodepointNext,GetCodepointPrevious,CodepointToUTF8,TextCopy,TextIsEqual,TextLength,TextFormat,TextSubtext,TextReplace,TextInsert,TextJoin,TextSplit,TextAppend,TextFindIndex,TextToUpper,TextToLower,TextToPascal,TextToSnake,TextToCamel,TextToInteger,TextToFloat,DrawLine3D,DrawPoint3D,DrawCircle3D,DrawTriangle3D,DrawTriangleStrip3D,DrawCube,DrawCubeV,DrawCubeWires,DrawCubeWiresV,DrawSphere,DrawSphereEx,DrawSphereWires,DrawCylinder,DrawCylinderEx,DrawCylinderWires,DrawCylinderWiresEx,DrawCapsule,DrawCapsuleWires,DrawPlane,DrawRay,DrawGrid,LoadModel,LoadModelFromMesh,IsModelValid,UnloadModel,GetModelBoundingBox,DrawModel,DrawModelEx,DrawModelWires,DrawModelWiresEx,DrawModelPoints,DrawModelPointsEx,DrawBoundingBox,DrawBillboard,DrawBillboardRec,DrawBillboardPro,UploadMesh,UpdateMeshBuffer,UnloadMesh,DrawMesh,DrawMeshInstanced,GetMeshBoundingBox,GenMeshTangents,ExportMesh,ExportMeshAsCode,GenMeshPoly,GenMeshPlane,GenMeshCube,GenMeshSphere,GenMeshHemiSphere,GenMeshCylinder,GenMeshCone,GenMeshTorus,GenMeshKnot,GenMeshHeightmap,GenMeshCubicmap,LoadMaterials,LoadMaterialDefault,IsMaterialValid,UnloadMaterial,SetMaterialTexture,SetModelMeshMaterial,LoadModelAnimations,UpdateModelAnimation,UpdateModelAnimationBones,UnloadModelAnimation,UnloadModelAnimations,IsModelAnimationValid,CheckCollisionSpheres,CheckCollisionBoxes,CheckCollisionBoxSphere,GetRayCollisionSphere,GetRayCollisionBox,GetRayCollisionMesh,GetRayCollisionTriangle,GetRayCollisionQuad,InitAudioDevice,CloseAudioDevice,IsAudioDeviceReady,SetMasterVolume,GetMasterVolume,LoadWave,LoadWaveFromMemory,IsWaveValid,LoadSound,LoadSoundFromWave,LoadSoundAlias,IsSoundValid,UpdateSound,UnloadWave,UnloadSound,UnloadSoundAlias,ExportWave,ExportWaveAsCode,PlaySound,StopSound,PauseSound,ResumeSound,IsSoundPlaying,SetSoundVolume,SetSoundPitch,SetSoundPan,WaveCopy,WaveCrop,WaveFormat,LoadWaveSamples,UnloadWaveSamples,LoadMusicStream,LoadMusicStreamFromMemory,IsMusicValid,UnloadMusicStream,PlayMusicStream,IsMusicStreamPlaying,UpdateMusicStream,StopMusicStream,PauseMusicStream,ResumeMusicStream,SeekMusicStream,SetMusicVolume,SetMusicPitch,SetMusicPan,GetMusicTimeLength,GetMusicTimePlayed,LoadAudioStream,IsAudioStreamValid,UnloadAudioStream,UpdateAudioStream,IsAudioStreamProcessed,PlayAudioStream,PauseAudioStream,ResumeAudioStream,IsAudioStreamPlaying,StopAudioStream,SetAudioStreamVolume,SetAudioStreamPitch,SetAudioStreamPan,SetAudioStreamBufferSizeDefault,SetAudioStreamCallback,AttachAudioStreamProcessor,DetachAudioStreamProcessor,AttachAudioMixedProcessor,DetachAudioMixedProcessor,GuiEnable,GuiDisable,GuiLock,GuiUnlock,GuiIsLocked,GuiSetAlpha,GuiSetState,GuiGetState,GuiSetFont,GuiGetFont,GuiSetStyle,GuiGetStyle,GuiLoadStyle,GuiLoadStyleDefault,GuiEnableTooltip,GuiDisableTooltip,GuiSetTooltip,GuiIconText,GuiSetIconScale,GuiGetIcons,GuiLoadIcons,GuiDrawIcon,GuiWindowBox,GuiGroupBox,GuiLine,GuiPanel,GuiTabBar,GuiScrollPanel,GuiLabel,GuiButton,GuiLabelButton,GuiToggle,GuiToggleGroup,GuiToggleSlider,GuiCheckBox,GuiComboBox,GuiDropdownBox,GuiSpinner,GuiValueBox,GuiTextBox,GuiSlider,GuiSliderBar,GuiProgressBar,GuiStatusBar,GuiDummyRec,GuiGrid,GuiListView,GuiListViewEx,GuiMessageBox,GuiTextInputBox,GuiColorPicker,GuiColorPanel,GuiColorBarAlpha,GuiColorBarHue,GuiColorPickerHSV,GuiColorPanelHSV,EaseLinearNone,EaseLinearIn,EaseLinearOut,EaseLinearInOut,EaseSineIn,EaseSineOut,EaseSineInOut,EaseCircIn,EaseCircOut,EaseCircInOut,EaseCubicIn,EaseCubicOut,EaseCubicInOut,EaseQuadIn,EaseQuadOut,EaseQuadInOut,EaseExpoIn,EaseExpoOut,EaseExpoInOut,EaseBackIn,EaseBackOut,EaseBackInOut,EaseBounceOut,EaseBounceIn,EaseBounceInOut,EaseElasticIn,EaseElasticOut,EaseElasticInOut,GetCameraForward,GetCameraUp,GetCameraRight,CameraMoveForward,CameraMoveUp,CameraMoveRight,CameraMoveToTarget,CameraYaw,CameraPitch,CameraRoll,GetCameraViewMatrix,GetCameraProjectionMatrix,DrawTextBoxed,DrawTextBoxedSelectable,UniformFloat,UniformVector2,UniformVector3,UniformVector4,UniformColor,UniformInt,UniformTexture

    runGame(canvas, async raylib => {
      free = raylib.free
  addFile = raylib.addFile
  globalize = raylib.globalize
  mod = raylib.mod
  Vector2 = raylib.Vector2
  Vector3 = raylib.Vector3
  Vector4 = raylib.Vector4
  Matrix = raylib.Matrix
  Color = raylib.Color
  Rectangle = raylib.Rectangle
  Image = raylib.Image
  Texture = raylib.Texture
  RenderTexture = raylib.RenderTexture
  NPatchInfo = raylib.NPatchInfo
  GlyphInfo = raylib.GlyphInfo
  Font = raylib.Font
  Camera3D = raylib.Camera3D
  Camera2D = raylib.Camera2D
  Mesh = raylib.Mesh
  Shader = raylib.Shader
  MaterialMap = raylib.MaterialMap
  Material = raylib.Material
  Transform = raylib.Transform
  BoneInfo = raylib.BoneInfo
  Model = raylib.Model
  ModelAnimation = raylib.ModelAnimation
  Ray = raylib.Ray
  RayCollision = raylib.RayCollision
  BoundingBox = raylib.BoundingBox
  Wave = raylib.Wave
  AudioStream = raylib.AudioStream
  Sound = raylib.Sound
  Music = raylib.Music
  VrDeviceInfo = raylib.VrDeviceInfo
  VrStereoConfig = raylib.VrStereoConfig
  FilePathList = raylib.FilePathList
  AutomationEvent = raylib.AutomationEvent
  AutomationEventList = raylib.AutomationEventList
  Texture2D = raylib.Texture2D
  GuiStyleProp = raylib.GuiStyleProp
  GuiTextStyle = raylib.GuiTextStyle
  Quaternion = raylib.Quaternion
  TextureCubemap = raylib.TextureCubemap
  RenderTexture2D = raylib.RenderTexture2D
  Camera = raylib.Camera
  FLAG_VSYNC_HINT = raylib.FLAG_VSYNC_HINT
  FLAG_FULLSCREEN_MODE = raylib.FLAG_FULLSCREEN_MODE
  FLAG_WINDOW_RESIZABLE = raylib.FLAG_WINDOW_RESIZABLE
  FLAG_WINDOW_UNDECORATED = raylib.FLAG_WINDOW_UNDECORATED
  FLAG_WINDOW_HIDDEN = raylib.FLAG_WINDOW_HIDDEN
  FLAG_WINDOW_MINIMIZED = raylib.FLAG_WINDOW_MINIMIZED
  FLAG_WINDOW_MAXIMIZED = raylib.FLAG_WINDOW_MAXIMIZED
  FLAG_WINDOW_UNFOCUSED = raylib.FLAG_WINDOW_UNFOCUSED
  FLAG_WINDOW_TOPMOST = raylib.FLAG_WINDOW_TOPMOST
  FLAG_WINDOW_ALWAYS_RUN = raylib.FLAG_WINDOW_ALWAYS_RUN
  FLAG_WINDOW_TRANSPARENT = raylib.FLAG_WINDOW_TRANSPARENT
  FLAG_WINDOW_HIGHDPI = raylib.FLAG_WINDOW_HIGHDPI
  FLAG_WINDOW_MOUSE_PASSTHROUGH = raylib.FLAG_WINDOW_MOUSE_PASSTHROUGH
  FLAG_BORDERLESS_WINDOWED_MODE = raylib.FLAG_BORDERLESS_WINDOWED_MODE
  FLAG_MSAA_4X_HINT = raylib.FLAG_MSAA_4X_HINT
  FLAG_INTERLACED_HINT = raylib.FLAG_INTERLACED_HINT
  LOG_ALL = raylib.LOG_ALL
  LOG_TRACE = raylib.LOG_TRACE
  LOG_DEBUG = raylib.LOG_DEBUG
  LOG_INFO = raylib.LOG_INFO
  LOG_WARNING = raylib.LOG_WARNING
  LOG_ERROR = raylib.LOG_ERROR
  LOG_FATAL = raylib.LOG_FATAL
  LOG_NONE = raylib.LOG_NONE
  KEY_NULL = raylib.KEY_NULL
  KEY_APOSTROPHE = raylib.KEY_APOSTROPHE
  KEY_COMMA = raylib.KEY_COMMA
  KEY_MINUS = raylib.KEY_MINUS
  KEY_PERIOD = raylib.KEY_PERIOD
  KEY_SLASH = raylib.KEY_SLASH
  KEY_ZERO = raylib.KEY_ZERO
  KEY_ONE = raylib.KEY_ONE
  KEY_TWO = raylib.KEY_TWO
  KEY_THREE = raylib.KEY_THREE
  KEY_FOUR = raylib.KEY_FOUR
  KEY_FIVE = raylib.KEY_FIVE
  KEY_SIX = raylib.KEY_SIX
  KEY_SEVEN = raylib.KEY_SEVEN
  KEY_EIGHT = raylib.KEY_EIGHT
  KEY_NINE = raylib.KEY_NINE
  KEY_SEMICOLON = raylib.KEY_SEMICOLON
  KEY_EQUAL = raylib.KEY_EQUAL
  KEY_A = raylib.KEY_A
  KEY_B = raylib.KEY_B
  KEY_C = raylib.KEY_C
  KEY_D = raylib.KEY_D
  KEY_E = raylib.KEY_E
  KEY_F = raylib.KEY_F
  KEY_G = raylib.KEY_G
  KEY_H = raylib.KEY_H
  KEY_I = raylib.KEY_I
  KEY_J = raylib.KEY_J
  KEY_K = raylib.KEY_K
  KEY_L = raylib.KEY_L
  KEY_M = raylib.KEY_M
  KEY_N = raylib.KEY_N
  KEY_O = raylib.KEY_O
  KEY_P = raylib.KEY_P
  KEY_Q = raylib.KEY_Q
  KEY_R = raylib.KEY_R
  KEY_S = raylib.KEY_S
  KEY_T = raylib.KEY_T
  KEY_U = raylib.KEY_U
  KEY_V = raylib.KEY_V
  KEY_W = raylib.KEY_W
  KEY_X = raylib.KEY_X
  KEY_Y = raylib.KEY_Y
  KEY_Z = raylib.KEY_Z
  KEY_LEFT_BRACKET = raylib.KEY_LEFT_BRACKET
  KEY_BACKSLASH = raylib.KEY_BACKSLASH
  KEY_RIGHT_BRACKET = raylib.KEY_RIGHT_BRACKET
  KEY_GRAVE = raylib.KEY_GRAVE
  KEY_SPACE = raylib.KEY_SPACE
  KEY_ESCAPE = raylib.KEY_ESCAPE
  KEY_ENTER = raylib.KEY_ENTER
  KEY_TAB = raylib.KEY_TAB
  KEY_BACKSPACE = raylib.KEY_BACKSPACE
  KEY_INSERT = raylib.KEY_INSERT
  KEY_DELETE = raylib.KEY_DELETE
  KEY_RIGHT = raylib.KEY_RIGHT
  KEY_LEFT = raylib.KEY_LEFT
  KEY_DOWN = raylib.KEY_DOWN
  KEY_UP = raylib.KEY_UP
  KEY_PAGE_UP = raylib.KEY_PAGE_UP
  KEY_PAGE_DOWN = raylib.KEY_PAGE_DOWN
  KEY_HOME = raylib.KEY_HOME
  KEY_END = raylib.KEY_END
  KEY_CAPS_LOCK = raylib.KEY_CAPS_LOCK
  KEY_SCROLL_LOCK = raylib.KEY_SCROLL_LOCK
  KEY_NUM_LOCK = raylib.KEY_NUM_LOCK
  KEY_PRINT_SCREEN = raylib.KEY_PRINT_SCREEN
  KEY_PAUSE = raylib.KEY_PAUSE
  KEY_F1 = raylib.KEY_F1
  KEY_F2 = raylib.KEY_F2
  KEY_F3 = raylib.KEY_F3
  KEY_F4 = raylib.KEY_F4
  KEY_F5 = raylib.KEY_F5
  KEY_F6 = raylib.KEY_F6
  KEY_F7 = raylib.KEY_F7
  KEY_F8 = raylib.KEY_F8
  KEY_F9 = raylib.KEY_F9
  KEY_F10 = raylib.KEY_F10
  KEY_F11 = raylib.KEY_F11
  KEY_F12 = raylib.KEY_F12
  KEY_LEFT_SHIFT = raylib.KEY_LEFT_SHIFT
  KEY_LEFT_CONTROL = raylib.KEY_LEFT_CONTROL
  KEY_LEFT_ALT = raylib.KEY_LEFT_ALT
  KEY_LEFT_SUPER = raylib.KEY_LEFT_SUPER
  KEY_RIGHT_SHIFT = raylib.KEY_RIGHT_SHIFT
  KEY_RIGHT_CONTROL = raylib.KEY_RIGHT_CONTROL
  KEY_RIGHT_ALT = raylib.KEY_RIGHT_ALT
  KEY_RIGHT_SUPER = raylib.KEY_RIGHT_SUPER
  KEY_KB_MENU = raylib.KEY_KB_MENU
  KEY_KP_0 = raylib.KEY_KP_0
  KEY_KP_1 = raylib.KEY_KP_1
  KEY_KP_2 = raylib.KEY_KP_2
  KEY_KP_3 = raylib.KEY_KP_3
  KEY_KP_4 = raylib.KEY_KP_4
  KEY_KP_5 = raylib.KEY_KP_5
  KEY_KP_6 = raylib.KEY_KP_6
  KEY_KP_7 = raylib.KEY_KP_7
  KEY_KP_8 = raylib.KEY_KP_8
  KEY_KP_9 = raylib.KEY_KP_9
  KEY_KP_DECIMAL = raylib.KEY_KP_DECIMAL
  KEY_KP_DIVIDE = raylib.KEY_KP_DIVIDE
  KEY_KP_MULTIPLY = raylib.KEY_KP_MULTIPLY
  KEY_KP_SUBTRACT = raylib.KEY_KP_SUBTRACT
  KEY_KP_ADD = raylib.KEY_KP_ADD
  KEY_KP_ENTER = raylib.KEY_KP_ENTER
  KEY_KP_EQUAL = raylib.KEY_KP_EQUAL
  KEY_BACK = raylib.KEY_BACK
  KEY_MENU = raylib.KEY_MENU
  KEY_VOLUME_UP = raylib.KEY_VOLUME_UP
  KEY_VOLUME_DOWN = raylib.KEY_VOLUME_DOWN
  MOUSE_BUTTON_LEFT = raylib.MOUSE_BUTTON_LEFT
  MOUSE_BUTTON_RIGHT = raylib.MOUSE_BUTTON_RIGHT
  MOUSE_BUTTON_MIDDLE = raylib.MOUSE_BUTTON_MIDDLE
  MOUSE_BUTTON_SIDE = raylib.MOUSE_BUTTON_SIDE
  MOUSE_BUTTON_EXTRA = raylib.MOUSE_BUTTON_EXTRA
  MOUSE_BUTTON_FORWARD = raylib.MOUSE_BUTTON_FORWARD
  MOUSE_BUTTON_BACK = raylib.MOUSE_BUTTON_BACK
  MOUSE_CURSOR_DEFAULT = raylib.MOUSE_CURSOR_DEFAULT
  MOUSE_CURSOR_ARROW = raylib.MOUSE_CURSOR_ARROW
  MOUSE_CURSOR_IBEAM = raylib.MOUSE_CURSOR_IBEAM
  MOUSE_CURSOR_CROSSHAIR = raylib.MOUSE_CURSOR_CROSSHAIR
  MOUSE_CURSOR_POINTING_HAND = raylib.MOUSE_CURSOR_POINTING_HAND
  MOUSE_CURSOR_RESIZE_EW = raylib.MOUSE_CURSOR_RESIZE_EW
  MOUSE_CURSOR_RESIZE_NS = raylib.MOUSE_CURSOR_RESIZE_NS
  MOUSE_CURSOR_RESIZE_NWSE = raylib.MOUSE_CURSOR_RESIZE_NWSE
  MOUSE_CURSOR_RESIZE_NESW = raylib.MOUSE_CURSOR_RESIZE_NESW
  MOUSE_CURSOR_RESIZE_ALL = raylib.MOUSE_CURSOR_RESIZE_ALL
  MOUSE_CURSOR_NOT_ALLOWED = raylib.MOUSE_CURSOR_NOT_ALLOWED
  GAMEPAD_BUTTON_UNKNOWN = raylib.GAMEPAD_BUTTON_UNKNOWN
  GAMEPAD_BUTTON_LEFT_FACE_UP = raylib.GAMEPAD_BUTTON_LEFT_FACE_UP
  GAMEPAD_BUTTON_LEFT_FACE_RIGHT = raylib.GAMEPAD_BUTTON_LEFT_FACE_RIGHT
  GAMEPAD_BUTTON_LEFT_FACE_DOWN = raylib.GAMEPAD_BUTTON_LEFT_FACE_DOWN
  GAMEPAD_BUTTON_LEFT_FACE_LEFT = raylib.GAMEPAD_BUTTON_LEFT_FACE_LEFT
  GAMEPAD_BUTTON_RIGHT_FACE_UP = raylib.GAMEPAD_BUTTON_RIGHT_FACE_UP
  GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = raylib.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT
  GAMEPAD_BUTTON_RIGHT_FACE_DOWN = raylib.GAMEPAD_BUTTON_RIGHT_FACE_DOWN
  GAMEPAD_BUTTON_RIGHT_FACE_LEFT = raylib.GAMEPAD_BUTTON_RIGHT_FACE_LEFT
  GAMEPAD_BUTTON_LEFT_TRIGGER_1 = raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_1
  GAMEPAD_BUTTON_LEFT_TRIGGER_2 = raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_2
  GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_1
  GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_2
  GAMEPAD_BUTTON_MIDDLE_LEFT = raylib.GAMEPAD_BUTTON_MIDDLE_LEFT
  GAMEPAD_BUTTON_MIDDLE = raylib.GAMEPAD_BUTTON_MIDDLE
  GAMEPAD_BUTTON_MIDDLE_RIGHT = raylib.GAMEPAD_BUTTON_MIDDLE_RIGHT
  GAMEPAD_BUTTON_LEFT_THUMB = raylib.GAMEPAD_BUTTON_LEFT_THUMB
  GAMEPAD_BUTTON_RIGHT_THUMB = raylib.GAMEPAD_BUTTON_RIGHT_THUMB
  GAMEPAD_AXIS_LEFT_X = raylib.GAMEPAD_AXIS_LEFT_X
  GAMEPAD_AXIS_LEFT_Y = raylib.GAMEPAD_AXIS_LEFT_Y
  GAMEPAD_AXIS_RIGHT_X = raylib.GAMEPAD_AXIS_RIGHT_X
  GAMEPAD_AXIS_RIGHT_Y = raylib.GAMEPAD_AXIS_RIGHT_Y
  GAMEPAD_AXIS_LEFT_TRIGGER = raylib.GAMEPAD_AXIS_LEFT_TRIGGER
  GAMEPAD_AXIS_RIGHT_TRIGGER = raylib.GAMEPAD_AXIS_RIGHT_TRIGGER
  MATERIAL_MAP_ALBEDO = raylib.MATERIAL_MAP_ALBEDO
  MATERIAL_MAP_METALNESS = raylib.MATERIAL_MAP_METALNESS
  MATERIAL_MAP_NORMAL = raylib.MATERIAL_MAP_NORMAL
  MATERIAL_MAP_ROUGHNESS = raylib.MATERIAL_MAP_ROUGHNESS
  MATERIAL_MAP_OCCLUSION = raylib.MATERIAL_MAP_OCCLUSION
  MATERIAL_MAP_EMISSION = raylib.MATERIAL_MAP_EMISSION
  MATERIAL_MAP_HEIGHT = raylib.MATERIAL_MAP_HEIGHT
  MATERIAL_MAP_CUBEMAP = raylib.MATERIAL_MAP_CUBEMAP
  MATERIAL_MAP_IRRADIANCE = raylib.MATERIAL_MAP_IRRADIANCE
  MATERIAL_MAP_PREFILTER = raylib.MATERIAL_MAP_PREFILTER
  MATERIAL_MAP_BRDF = raylib.MATERIAL_MAP_BRDF
  SHADER_LOC_VERTEX_POSITION = raylib.SHADER_LOC_VERTEX_POSITION
  SHADER_LOC_VERTEX_TEXCOORD01 = raylib.SHADER_LOC_VERTEX_TEXCOORD01
  SHADER_LOC_VERTEX_TEXCOORD02 = raylib.SHADER_LOC_VERTEX_TEXCOORD02
  SHADER_LOC_VERTEX_NORMAL = raylib.SHADER_LOC_VERTEX_NORMAL
  SHADER_LOC_VERTEX_TANGENT = raylib.SHADER_LOC_VERTEX_TANGENT
  SHADER_LOC_VERTEX_COLOR = raylib.SHADER_LOC_VERTEX_COLOR
  SHADER_LOC_MATRIX_MVP = raylib.SHADER_LOC_MATRIX_MVP
  SHADER_LOC_MATRIX_VIEW = raylib.SHADER_LOC_MATRIX_VIEW
  SHADER_LOC_MATRIX_PROJECTION = raylib.SHADER_LOC_MATRIX_PROJECTION
  SHADER_LOC_MATRIX_MODEL = raylib.SHADER_LOC_MATRIX_MODEL
  SHADER_LOC_MATRIX_NORMAL = raylib.SHADER_LOC_MATRIX_NORMAL
  SHADER_LOC_VECTOR_VIEW = raylib.SHADER_LOC_VECTOR_VIEW
  SHADER_LOC_COLOR_DIFFUSE = raylib.SHADER_LOC_COLOR_DIFFUSE
  SHADER_LOC_COLOR_SPECULAR = raylib.SHADER_LOC_COLOR_SPECULAR
  SHADER_LOC_COLOR_AMBIENT = raylib.SHADER_LOC_COLOR_AMBIENT
  SHADER_LOC_MAP_ALBEDO = raylib.SHADER_LOC_MAP_ALBEDO
  SHADER_LOC_MAP_METALNESS = raylib.SHADER_LOC_MAP_METALNESS
  SHADER_LOC_MAP_NORMAL = raylib.SHADER_LOC_MAP_NORMAL
  SHADER_LOC_MAP_ROUGHNESS = raylib.SHADER_LOC_MAP_ROUGHNESS
  SHADER_LOC_MAP_OCCLUSION = raylib.SHADER_LOC_MAP_OCCLUSION
  SHADER_LOC_MAP_EMISSION = raylib.SHADER_LOC_MAP_EMISSION
  SHADER_LOC_MAP_HEIGHT = raylib.SHADER_LOC_MAP_HEIGHT
  SHADER_LOC_MAP_CUBEMAP = raylib.SHADER_LOC_MAP_CUBEMAP
  SHADER_LOC_MAP_IRRADIANCE = raylib.SHADER_LOC_MAP_IRRADIANCE
  SHADER_LOC_MAP_PREFILTER = raylib.SHADER_LOC_MAP_PREFILTER
  SHADER_LOC_MAP_BRDF = raylib.SHADER_LOC_MAP_BRDF
  SHADER_LOC_VERTEX_BONEIDS = raylib.SHADER_LOC_VERTEX_BONEIDS
  SHADER_LOC_VERTEX_BONEWEIGHTS = raylib.SHADER_LOC_VERTEX_BONEWEIGHTS
  SHADER_LOC_BONE_MATRICES = raylib.SHADER_LOC_BONE_MATRICES
  SHADER_UNIFORM_FLOAT = raylib.SHADER_UNIFORM_FLOAT
  SHADER_UNIFORM_VEC2 = raylib.SHADER_UNIFORM_VEC2
  SHADER_UNIFORM_VEC3 = raylib.SHADER_UNIFORM_VEC3
  SHADER_UNIFORM_VEC4 = raylib.SHADER_UNIFORM_VEC4
  SHADER_UNIFORM_INT = raylib.SHADER_UNIFORM_INT
  SHADER_UNIFORM_IVEC2 = raylib.SHADER_UNIFORM_IVEC2
  SHADER_UNIFORM_IVEC3 = raylib.SHADER_UNIFORM_IVEC3
  SHADER_UNIFORM_IVEC4 = raylib.SHADER_UNIFORM_IVEC4
  SHADER_UNIFORM_SAMPLER2D = raylib.SHADER_UNIFORM_SAMPLER2D
  SHADER_ATTRIB_FLOAT = raylib.SHADER_ATTRIB_FLOAT
  SHADER_ATTRIB_VEC2 = raylib.SHADER_ATTRIB_VEC2
  SHADER_ATTRIB_VEC3 = raylib.SHADER_ATTRIB_VEC3
  SHADER_ATTRIB_VEC4 = raylib.SHADER_ATTRIB_VEC4
  PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = raylib.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE
  PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = raylib.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA
  PIXELFORMAT_UNCOMPRESSED_R5G6B5 = raylib.PIXELFORMAT_UNCOMPRESSED_R5G6B5
  PIXELFORMAT_UNCOMPRESSED_R8G8B8 = raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8
  PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = raylib.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1
  PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = raylib.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4
  PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8
  PIXELFORMAT_UNCOMPRESSED_R32 = raylib.PIXELFORMAT_UNCOMPRESSED_R32
  PIXELFORMAT_UNCOMPRESSED_R32G32B32 = raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32
  PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32
  PIXELFORMAT_UNCOMPRESSED_R16 = raylib.PIXELFORMAT_UNCOMPRESSED_R16
  PIXELFORMAT_UNCOMPRESSED_R16G16B16 = raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16
  PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16A16
  PIXELFORMAT_COMPRESSED_DXT1_RGB = raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB
  PIXELFORMAT_COMPRESSED_DXT1_RGBA = raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA
  PIXELFORMAT_COMPRESSED_DXT3_RGBA = raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA
  PIXELFORMAT_COMPRESSED_DXT5_RGBA = raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA
  PIXELFORMAT_COMPRESSED_ETC1_RGB = raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB
  PIXELFORMAT_COMPRESSED_ETC2_RGB = raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB
  PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA
  PIXELFORMAT_COMPRESSED_PVRT_RGB = raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB
  PIXELFORMAT_COMPRESSED_PVRT_RGBA = raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA
  PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA
  PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA
  TEXTURE_FILTER_POINT = raylib.TEXTURE_FILTER_POINT
  TEXTURE_FILTER_BILINEAR = raylib.TEXTURE_FILTER_BILINEAR
  TEXTURE_FILTER_TRILINEAR = raylib.TEXTURE_FILTER_TRILINEAR
  TEXTURE_FILTER_ANISOTROPIC_4X = raylib.TEXTURE_FILTER_ANISOTROPIC_4X
  TEXTURE_FILTER_ANISOTROPIC_8X = raylib.TEXTURE_FILTER_ANISOTROPIC_8X
  TEXTURE_FILTER_ANISOTROPIC_16X = raylib.TEXTURE_FILTER_ANISOTROPIC_16X
  TEXTURE_WRAP_REPEAT = raylib.TEXTURE_WRAP_REPEAT
  TEXTURE_WRAP_CLAMP = raylib.TEXTURE_WRAP_CLAMP
  TEXTURE_WRAP_MIRROR_REPEAT = raylib.TEXTURE_WRAP_MIRROR_REPEAT
  TEXTURE_WRAP_MIRROR_CLAMP = raylib.TEXTURE_WRAP_MIRROR_CLAMP
  CUBEMAP_LAYOUT_AUTO_DETECT = raylib.CUBEMAP_LAYOUT_AUTO_DETECT
  CUBEMAP_LAYOUT_LINE_VERTICAL = raylib.CUBEMAP_LAYOUT_LINE_VERTICAL
  CUBEMAP_LAYOUT_LINE_HORIZONTAL = raylib.CUBEMAP_LAYOUT_LINE_HORIZONTAL
  CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = raylib.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR
  CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = raylib.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE
  FONT_DEFAULT = raylib.FONT_DEFAULT
  FONT_BITMAP = raylib.FONT_BITMAP
  FONT_SDF = raylib.FONT_SDF
  BLEND_ALPHA = raylib.BLEND_ALPHA
  BLEND_ADDITIVE = raylib.BLEND_ADDITIVE
  BLEND_MULTIPLIED = raylib.BLEND_MULTIPLIED
  BLEND_ADD_COLORS = raylib.BLEND_ADD_COLORS
  BLEND_SUBTRACT_COLORS = raylib.BLEND_SUBTRACT_COLORS
  BLEND_ALPHA_PREMULTIPLY = raylib.BLEND_ALPHA_PREMULTIPLY
  BLEND_CUSTOM = raylib.BLEND_CUSTOM
  BLEND_CUSTOM_SEPARATE = raylib.BLEND_CUSTOM_SEPARATE
  GESTURE_NONE = raylib.GESTURE_NONE
  GESTURE_TAP = raylib.GESTURE_TAP
  GESTURE_DOUBLETAP = raylib.GESTURE_DOUBLETAP
  GESTURE_HOLD = raylib.GESTURE_HOLD
  GESTURE_DRAG = raylib.GESTURE_DRAG
  GESTURE_SWIPE_RIGHT = raylib.GESTURE_SWIPE_RIGHT
  GESTURE_SWIPE_LEFT = raylib.GESTURE_SWIPE_LEFT
  GESTURE_SWIPE_UP = raylib.GESTURE_SWIPE_UP
  GESTURE_SWIPE_DOWN = raylib.GESTURE_SWIPE_DOWN
  GESTURE_PINCH_IN = raylib.GESTURE_PINCH_IN
  GESTURE_PINCH_OUT = raylib.GESTURE_PINCH_OUT
  CAMERA_CUSTOM = raylib.CAMERA_CUSTOM
  CAMERA_FREE = raylib.CAMERA_FREE
  CAMERA_ORBITAL = raylib.CAMERA_ORBITAL
  CAMERA_FIRST_PERSON = raylib.CAMERA_FIRST_PERSON
  CAMERA_THIRD_PERSON = raylib.CAMERA_THIRD_PERSON
  CAMERA_PERSPECTIVE = raylib.CAMERA_PERSPECTIVE
  CAMERA_ORTHOGRAPHIC = raylib.CAMERA_ORTHOGRAPHIC
  NPATCH_NINE_PATCH = raylib.NPATCH_NINE_PATCH
  NPATCH_THREE_PATCH_VERTICAL = raylib.NPATCH_THREE_PATCH_VERTICAL
  NPATCH_THREE_PATCH_HORIZONTAL = raylib.NPATCH_THREE_PATCH_HORIZONTAL
  STATE_NORMAL = raylib.STATE_NORMAL
  STATE_FOCUSED = raylib.STATE_FOCUSED
  STATE_PRESSED = raylib.STATE_PRESSED
  STATE_DISABLED = raylib.STATE_DISABLED
  TEXT_ALIGN_LEFT = raylib.TEXT_ALIGN_LEFT
  TEXT_ALIGN_CENTER = raylib.TEXT_ALIGN_CENTER
  TEXT_ALIGN_RIGHT = raylib.TEXT_ALIGN_RIGHT
  TEXT_ALIGN_TOP = raylib.TEXT_ALIGN_TOP
  TEXT_ALIGN_MIDDLE = raylib.TEXT_ALIGN_MIDDLE
  TEXT_ALIGN_BOTTOM = raylib.TEXT_ALIGN_BOTTOM
  TEXT_WRAP_NONE = raylib.TEXT_WRAP_NONE
  TEXT_WRAP_CHAR = raylib.TEXT_WRAP_CHAR
  TEXT_WRAP_WORD = raylib.TEXT_WRAP_WORD
  DEFAULT = raylib.DEFAULT
  LABEL = raylib.LABEL
  BUTTON = raylib.BUTTON
  TOGGLE = raylib.TOGGLE
  SLIDER = raylib.SLIDER
  PROGRESSBAR = raylib.PROGRESSBAR
  CHECKBOX = raylib.CHECKBOX
  COMBOBOX = raylib.COMBOBOX
  DROPDOWNBOX = raylib.DROPDOWNBOX
  TEXTBOX = raylib.TEXTBOX
  VALUEBOX = raylib.VALUEBOX
  SPINNER = raylib.SPINNER
  LISTVIEW = raylib.LISTVIEW
  COLORPICKER = raylib.COLORPICKER
  SCROLLBAR = raylib.SCROLLBAR
  STATUSBAR = raylib.STATUSBAR
  BORDER_COLOR_NORMAL = raylib.BORDER_COLOR_NORMAL
  BASE_COLOR_NORMAL = raylib.BASE_COLOR_NORMAL
  TEXT_COLOR_NORMAL = raylib.TEXT_COLOR_NORMAL
  BORDER_COLOR_FOCUSED = raylib.BORDER_COLOR_FOCUSED
  BASE_COLOR_FOCUSED = raylib.BASE_COLOR_FOCUSED
  TEXT_COLOR_FOCUSED = raylib.TEXT_COLOR_FOCUSED
  BORDER_COLOR_PRESSED = raylib.BORDER_COLOR_PRESSED
  BASE_COLOR_PRESSED = raylib.BASE_COLOR_PRESSED
  TEXT_COLOR_PRESSED = raylib.TEXT_COLOR_PRESSED
  BORDER_COLOR_DISABLED = raylib.BORDER_COLOR_DISABLED
  BASE_COLOR_DISABLED = raylib.BASE_COLOR_DISABLED
  TEXT_COLOR_DISABLED = raylib.TEXT_COLOR_DISABLED
  BORDER_WIDTH = raylib.BORDER_WIDTH
  TEXT_PADDING = raylib.TEXT_PADDING
  TEXT_ALIGNMENT = raylib.TEXT_ALIGNMENT
  TEXT_SIZE = raylib.TEXT_SIZE
  TEXT_SPACING = raylib.TEXT_SPACING
  LINE_COLOR = raylib.LINE_COLOR
  BACKGROUND_COLOR = raylib.BACKGROUND_COLOR
  TEXT_LINE_SPACING = raylib.TEXT_LINE_SPACING
  TEXT_ALIGNMENT_VERTICAL = raylib.TEXT_ALIGNMENT_VERTICAL
  TEXT_WRAP_MODE = raylib.TEXT_WRAP_MODE
  GROUP_PADDING = raylib.GROUP_PADDING
  SLIDER_WIDTH = raylib.SLIDER_WIDTH
  SLIDER_PADDING = raylib.SLIDER_PADDING
  PROGRESS_PADDING = raylib.PROGRESS_PADDING
  ARROWS_SIZE = raylib.ARROWS_SIZE
  ARROWS_VISIBLE = raylib.ARROWS_VISIBLE
  SCROLL_SLIDER_PADDING = raylib.SCROLL_SLIDER_PADDING
  SCROLL_SLIDER_SIZE = raylib.SCROLL_SLIDER_SIZE
  SCROLL_PADDING = raylib.SCROLL_PADDING
  SCROLL_SPEED = raylib.SCROLL_SPEED
  CHECK_PADDING = raylib.CHECK_PADDING
  COMBO_BUTTON_WIDTH = raylib.COMBO_BUTTON_WIDTH
  COMBO_BUTTON_SPACING = raylib.COMBO_BUTTON_SPACING
  ARROW_PADDING = raylib.ARROW_PADDING
  DROPDOWN_ITEMS_SPACING = raylib.DROPDOWN_ITEMS_SPACING
  TEXT_READONLY = raylib.TEXT_READONLY
  SPIN_BUTTON_WIDTH = raylib.SPIN_BUTTON_WIDTH
  SPIN_BUTTON_SPACING = raylib.SPIN_BUTTON_SPACING
  LIST_ITEMS_HEIGHT = raylib.LIST_ITEMS_HEIGHT
  LIST_ITEMS_SPACING = raylib.LIST_ITEMS_SPACING
  SCROLLBAR_WIDTH = raylib.SCROLLBAR_WIDTH
  SCROLLBAR_SIDE = raylib.SCROLLBAR_SIDE
  COLOR_SELECTOR_SIZE = raylib.COLOR_SELECTOR_SIZE
  HUEBAR_WIDTH = raylib.HUEBAR_WIDTH
  HUEBAR_PADDING = raylib.HUEBAR_PADDING
  HUEBAR_SELECTOR_HEIGHT = raylib.HUEBAR_SELECTOR_HEIGHT
  HUEBAR_SELECTOR_OVERFLOW = raylib.HUEBAR_SELECTOR_OVERFLOW
  ICON_NONE = raylib.ICON_NONE
  ICON_FOLDER_FILE_OPEN = raylib.ICON_FOLDER_FILE_OPEN
  ICON_FILE_SAVE_CLASSIC = raylib.ICON_FILE_SAVE_CLASSIC
  ICON_FOLDER_OPEN = raylib.ICON_FOLDER_OPEN
  ICON_FOLDER_SAVE = raylib.ICON_FOLDER_SAVE
  ICON_FILE_OPEN = raylib.ICON_FILE_OPEN
  ICON_FILE_SAVE = raylib.ICON_FILE_SAVE
  ICON_FILE_EXPORT = raylib.ICON_FILE_EXPORT
  ICON_FILE_ADD = raylib.ICON_FILE_ADD
  ICON_FILE_DELETE = raylib.ICON_FILE_DELETE
  ICON_FILETYPE_TEXT = raylib.ICON_FILETYPE_TEXT
  ICON_FILETYPE_AUDIO = raylib.ICON_FILETYPE_AUDIO
  ICON_FILETYPE_IMAGE = raylib.ICON_FILETYPE_IMAGE
  ICON_FILETYPE_PLAY = raylib.ICON_FILETYPE_PLAY
  ICON_FILETYPE_VIDEO = raylib.ICON_FILETYPE_VIDEO
  ICON_FILETYPE_INFO = raylib.ICON_FILETYPE_INFO
  ICON_FILE_COPY = raylib.ICON_FILE_COPY
  ICON_FILE_CUT = raylib.ICON_FILE_CUT
  ICON_FILE_PASTE = raylib.ICON_FILE_PASTE
  ICON_CURSOR_HAND = raylib.ICON_CURSOR_HAND
  ICON_CURSOR_POINTER = raylib.ICON_CURSOR_POINTER
  ICON_CURSOR_CLASSIC = raylib.ICON_CURSOR_CLASSIC
  ICON_PENCIL = raylib.ICON_PENCIL
  ICON_PENCIL_BIG = raylib.ICON_PENCIL_BIG
  ICON_BRUSH_CLASSIC = raylib.ICON_BRUSH_CLASSIC
  ICON_BRUSH_PAINTER = raylib.ICON_BRUSH_PAINTER
  ICON_WATER_DROP = raylib.ICON_WATER_DROP
  ICON_COLOR_PICKER = raylib.ICON_COLOR_PICKER
  ICON_RUBBER = raylib.ICON_RUBBER
  ICON_COLOR_BUCKET = raylib.ICON_COLOR_BUCKET
  ICON_TEXT_T = raylib.ICON_TEXT_T
  ICON_TEXT_A = raylib.ICON_TEXT_A
  ICON_SCALE = raylib.ICON_SCALE
  ICON_RESIZE = raylib.ICON_RESIZE
  ICON_FILTER_POINT = raylib.ICON_FILTER_POINT
  ICON_FILTER_BILINEAR = raylib.ICON_FILTER_BILINEAR
  ICON_CROP = raylib.ICON_CROP
  ICON_CROP_ALPHA = raylib.ICON_CROP_ALPHA
  ICON_SQUARE_TOGGLE = raylib.ICON_SQUARE_TOGGLE
  ICON_SYMMETRY = raylib.ICON_SYMMETRY
  ICON_SYMMETRY_HORIZONTAL = raylib.ICON_SYMMETRY_HORIZONTAL
  ICON_SYMMETRY_VERTICAL = raylib.ICON_SYMMETRY_VERTICAL
  ICON_LENS = raylib.ICON_LENS
  ICON_LENS_BIG = raylib.ICON_LENS_BIG
  ICON_EYE_ON = raylib.ICON_EYE_ON
  ICON_EYE_OFF = raylib.ICON_EYE_OFF
  ICON_FILTER_TOP = raylib.ICON_FILTER_TOP
  ICON_FILTER = raylib.ICON_FILTER
  ICON_TARGET_POINT = raylib.ICON_TARGET_POINT
  ICON_TARGET_SMALL = raylib.ICON_TARGET_SMALL
  ICON_TARGET_BIG = raylib.ICON_TARGET_BIG
  ICON_TARGET_MOVE = raylib.ICON_TARGET_MOVE
  ICON_CURSOR_MOVE = raylib.ICON_CURSOR_MOVE
  ICON_CURSOR_SCALE = raylib.ICON_CURSOR_SCALE
  ICON_CURSOR_SCALE_RIGHT = raylib.ICON_CURSOR_SCALE_RIGHT
  ICON_CURSOR_SCALE_LEFT = raylib.ICON_CURSOR_SCALE_LEFT
  ICON_UNDO = raylib.ICON_UNDO
  ICON_REDO = raylib.ICON_REDO
  ICON_REREDO = raylib.ICON_REREDO
  ICON_MUTATE = raylib.ICON_MUTATE
  ICON_ROTATE = raylib.ICON_ROTATE
  ICON_REPEAT = raylib.ICON_REPEAT
  ICON_SHUFFLE = raylib.ICON_SHUFFLE
  ICON_EMPTYBOX = raylib.ICON_EMPTYBOX
  ICON_TARGET = raylib.ICON_TARGET
  ICON_TARGET_SMALL_FILL = raylib.ICON_TARGET_SMALL_FILL
  ICON_TARGET_BIG_FILL = raylib.ICON_TARGET_BIG_FILL
  ICON_TARGET_MOVE_FILL = raylib.ICON_TARGET_MOVE_FILL
  ICON_CURSOR_MOVE_FILL = raylib.ICON_CURSOR_MOVE_FILL
  ICON_CURSOR_SCALE_FILL = raylib.ICON_CURSOR_SCALE_FILL
  ICON_CURSOR_SCALE_RIGHT_FILL = raylib.ICON_CURSOR_SCALE_RIGHT_FILL
  ICON_CURSOR_SCALE_LEFT_FILL = raylib.ICON_CURSOR_SCALE_LEFT_FILL
  ICON_UNDO_FILL = raylib.ICON_UNDO_FILL
  ICON_REDO_FILL = raylib.ICON_REDO_FILL
  ICON_REREDO_FILL = raylib.ICON_REREDO_FILL
  ICON_MUTATE_FILL = raylib.ICON_MUTATE_FILL
  ICON_ROTATE_FILL = raylib.ICON_ROTATE_FILL
  ICON_REPEAT_FILL = raylib.ICON_REPEAT_FILL
  ICON_SHUFFLE_FILL = raylib.ICON_SHUFFLE_FILL
  ICON_EMPTYBOX_SMALL = raylib.ICON_EMPTYBOX_SMALL
  ICON_BOX = raylib.ICON_BOX
  ICON_BOX_TOP = raylib.ICON_BOX_TOP
  ICON_BOX_TOP_RIGHT = raylib.ICON_BOX_TOP_RIGHT
  ICON_BOX_RIGHT = raylib.ICON_BOX_RIGHT
  ICON_BOX_BOTTOM_RIGHT = raylib.ICON_BOX_BOTTOM_RIGHT
  ICON_BOX_BOTTOM = raylib.ICON_BOX_BOTTOM
  ICON_BOX_BOTTOM_LEFT = raylib.ICON_BOX_BOTTOM_LEFT
  ICON_BOX_LEFT = raylib.ICON_BOX_LEFT
  ICON_BOX_TOP_LEFT = raylib.ICON_BOX_TOP_LEFT
  ICON_BOX_CENTER = raylib.ICON_BOX_CENTER
  ICON_BOX_CIRCLE_MASK = raylib.ICON_BOX_CIRCLE_MASK
  ICON_POT = raylib.ICON_POT
  ICON_ALPHA_MULTIPLY = raylib.ICON_ALPHA_MULTIPLY
  ICON_ALPHA_CLEAR = raylib.ICON_ALPHA_CLEAR
  ICON_DITHERING = raylib.ICON_DITHERING
  ICON_MIPMAPS = raylib.ICON_MIPMAPS
  ICON_BOX_GRID = raylib.ICON_BOX_GRID
  ICON_GRID = raylib.ICON_GRID
  ICON_BOX_CORNERS_SMALL = raylib.ICON_BOX_CORNERS_SMALL
  ICON_BOX_CORNERS_BIG = raylib.ICON_BOX_CORNERS_BIG
  ICON_FOUR_BOXES = raylib.ICON_FOUR_BOXES
  ICON_GRID_FILL = raylib.ICON_GRID_FILL
  ICON_BOX_MULTISIZE = raylib.ICON_BOX_MULTISIZE
  ICON_ZOOM_SMALL = raylib.ICON_ZOOM_SMALL
  ICON_ZOOM_MEDIUM = raylib.ICON_ZOOM_MEDIUM
  ICON_ZOOM_BIG = raylib.ICON_ZOOM_BIG
  ICON_ZOOM_ALL = raylib.ICON_ZOOM_ALL
  ICON_ZOOM_CENTER = raylib.ICON_ZOOM_CENTER
  ICON_BOX_DOTS_SMALL = raylib.ICON_BOX_DOTS_SMALL
  ICON_BOX_DOTS_BIG = raylib.ICON_BOX_DOTS_BIG
  ICON_BOX_CONCENTRIC = raylib.ICON_BOX_CONCENTRIC
  ICON_BOX_GRID_BIG = raylib.ICON_BOX_GRID_BIG
  ICON_OK_TICK = raylib.ICON_OK_TICK
  ICON_CROSS = raylib.ICON_CROSS
  ICON_ARROW_LEFT = raylib.ICON_ARROW_LEFT
  ICON_ARROW_RIGHT = raylib.ICON_ARROW_RIGHT
  ICON_ARROW_DOWN = raylib.ICON_ARROW_DOWN
  ICON_ARROW_UP = raylib.ICON_ARROW_UP
  ICON_ARROW_LEFT_FILL = raylib.ICON_ARROW_LEFT_FILL
  ICON_ARROW_RIGHT_FILL = raylib.ICON_ARROW_RIGHT_FILL
  ICON_ARROW_DOWN_FILL = raylib.ICON_ARROW_DOWN_FILL
  ICON_ARROW_UP_FILL = raylib.ICON_ARROW_UP_FILL
  ICON_AUDIO = raylib.ICON_AUDIO
  ICON_FX = raylib.ICON_FX
  ICON_WAVE = raylib.ICON_WAVE
  ICON_WAVE_SINUS = raylib.ICON_WAVE_SINUS
  ICON_WAVE_SQUARE = raylib.ICON_WAVE_SQUARE
  ICON_WAVE_TRIANGULAR = raylib.ICON_WAVE_TRIANGULAR
  ICON_CROSS_SMALL = raylib.ICON_CROSS_SMALL
  ICON_PLAYER_PREVIOUS = raylib.ICON_PLAYER_PREVIOUS
  ICON_PLAYER_PLAY_BACK = raylib.ICON_PLAYER_PLAY_BACK
  ICON_PLAYER_PLAY = raylib.ICON_PLAYER_PLAY
  ICON_PLAYER_PAUSE = raylib.ICON_PLAYER_PAUSE
  ICON_PLAYER_STOP = raylib.ICON_PLAYER_STOP
  ICON_PLAYER_NEXT = raylib.ICON_PLAYER_NEXT
  ICON_PLAYER_RECORD = raylib.ICON_PLAYER_RECORD
  ICON_MAGNET = raylib.ICON_MAGNET
  ICON_LOCK_CLOSE = raylib.ICON_LOCK_CLOSE
  ICON_LOCK_OPEN = raylib.ICON_LOCK_OPEN
  ICON_CLOCK = raylib.ICON_CLOCK
  ICON_TOOLS = raylib.ICON_TOOLS
  ICON_GEAR = raylib.ICON_GEAR
  ICON_GEAR_BIG = raylib.ICON_GEAR_BIG
  ICON_BIN = raylib.ICON_BIN
  ICON_HAND_POINTER = raylib.ICON_HAND_POINTER
  ICON_LASER = raylib.ICON_LASER
  ICON_COIN = raylib.ICON_COIN
  ICON_EXPLOSION = raylib.ICON_EXPLOSION
  ICON_1UP = raylib.ICON_1UP
  ICON_PLAYER = raylib.ICON_PLAYER
  ICON_PLAYER_JUMP = raylib.ICON_PLAYER_JUMP
  ICON_KEY = raylib.ICON_KEY
  ICON_DEMON = raylib.ICON_DEMON
  ICON_TEXT_POPUP = raylib.ICON_TEXT_POPUP
  ICON_GEAR_EX = raylib.ICON_GEAR_EX
  ICON_CRACK = raylib.ICON_CRACK
  ICON_CRACK_POINTS = raylib.ICON_CRACK_POINTS
  ICON_STAR = raylib.ICON_STAR
  ICON_DOOR = raylib.ICON_DOOR
  ICON_EXIT = raylib.ICON_EXIT
  ICON_MODE_2D = raylib.ICON_MODE_2D
  ICON_MODE_3D = raylib.ICON_MODE_3D
  ICON_CUBE = raylib.ICON_CUBE
  ICON_CUBE_FACE_TOP = raylib.ICON_CUBE_FACE_TOP
  ICON_CUBE_FACE_LEFT = raylib.ICON_CUBE_FACE_LEFT
  ICON_CUBE_FACE_FRONT = raylib.ICON_CUBE_FACE_FRONT
  ICON_CUBE_FACE_BOTTOM = raylib.ICON_CUBE_FACE_BOTTOM
  ICON_CUBE_FACE_RIGHT = raylib.ICON_CUBE_FACE_RIGHT
  ICON_CUBE_FACE_BACK = raylib.ICON_CUBE_FACE_BACK
  ICON_CAMERA = raylib.ICON_CAMERA
  ICON_SPECIAL = raylib.ICON_SPECIAL
  ICON_LINK_NET = raylib.ICON_LINK_NET
  ICON_LINK_BOXES = raylib.ICON_LINK_BOXES
  ICON_LINK_MULTI = raylib.ICON_LINK_MULTI
  ICON_LINK = raylib.ICON_LINK
  ICON_LINK_BROKE = raylib.ICON_LINK_BROKE
  ICON_TEXT_NOTES = raylib.ICON_TEXT_NOTES
  ICON_NOTEBOOK = raylib.ICON_NOTEBOOK
  ICON_SUITCASE = raylib.ICON_SUITCASE
  ICON_SUITCASE_ZIP = raylib.ICON_SUITCASE_ZIP
  ICON_MAILBOX = raylib.ICON_MAILBOX
  ICON_MONITOR = raylib.ICON_MONITOR
  ICON_PRINTER = raylib.ICON_PRINTER
  ICON_PHOTO_CAMERA = raylib.ICON_PHOTO_CAMERA
  ICON_PHOTO_CAMERA_FLASH = raylib.ICON_PHOTO_CAMERA_FLASH
  ICON_HOUSE = raylib.ICON_HOUSE
  ICON_HEART = raylib.ICON_HEART
  ICON_CORNER = raylib.ICON_CORNER
  ICON_VERTICAL_BARS = raylib.ICON_VERTICAL_BARS
  ICON_VERTICAL_BARS_FILL = raylib.ICON_VERTICAL_BARS_FILL
  ICON_LIFE_BARS = raylib.ICON_LIFE_BARS
  ICON_INFO = raylib.ICON_INFO
  ICON_CROSSLINE = raylib.ICON_CROSSLINE
  ICON_HELP = raylib.ICON_HELP
  ICON_FILETYPE_ALPHA = raylib.ICON_FILETYPE_ALPHA
  ICON_FILETYPE_HOME = raylib.ICON_FILETYPE_HOME
  ICON_LAYERS_VISIBLE = raylib.ICON_LAYERS_VISIBLE
  ICON_LAYERS = raylib.ICON_LAYERS
  ICON_WINDOW = raylib.ICON_WINDOW
  ICON_HIDPI = raylib.ICON_HIDPI
  ICON_FILETYPE_BINARY = raylib.ICON_FILETYPE_BINARY
  ICON_HEX = raylib.ICON_HEX
  ICON_SHIELD = raylib.ICON_SHIELD
  ICON_FILE_NEW = raylib.ICON_FILE_NEW
  ICON_FOLDER_ADD = raylib.ICON_FOLDER_ADD
  ICON_ALARM = raylib.ICON_ALARM
  ICON_CPU = raylib.ICON_CPU
  ICON_ROM = raylib.ICON_ROM
  ICON_STEP_OVER = raylib.ICON_STEP_OVER
  ICON_STEP_INTO = raylib.ICON_STEP_INTO
  ICON_STEP_OUT = raylib.ICON_STEP_OUT
  ICON_RESTART = raylib.ICON_RESTART
  ICON_BREAKPOINT_ON = raylib.ICON_BREAKPOINT_ON
  ICON_BREAKPOINT_OFF = raylib.ICON_BREAKPOINT_OFF
  ICON_BURGER_MENU = raylib.ICON_BURGER_MENU
  ICON_CASE_SENSITIVE = raylib.ICON_CASE_SENSITIVE
  ICON_REG_EXP = raylib.ICON_REG_EXP
  ICON_FOLDER = raylib.ICON_FOLDER
  ICON_FILE = raylib.ICON_FILE
  ICON_SAND_TIMER = raylib.ICON_SAND_TIMER
  ICON_220 = raylib.ICON_220
  ICON_221 = raylib.ICON_221
  ICON_222 = raylib.ICON_222
  ICON_223 = raylib.ICON_223
  ICON_224 = raylib.ICON_224
  ICON_225 = raylib.ICON_225
  ICON_226 = raylib.ICON_226
  ICON_227 = raylib.ICON_227
  ICON_228 = raylib.ICON_228
  ICON_229 = raylib.ICON_229
  ICON_230 = raylib.ICON_230
  ICON_231 = raylib.ICON_231
  ICON_232 = raylib.ICON_232
  ICON_233 = raylib.ICON_233
  ICON_234 = raylib.ICON_234
  ICON_235 = raylib.ICON_235
  ICON_236 = raylib.ICON_236
  ICON_237 = raylib.ICON_237
  ICON_238 = raylib.ICON_238
  ICON_239 = raylib.ICON_239
  ICON_240 = raylib.ICON_240
  ICON_241 = raylib.ICON_241
  ICON_242 = raylib.ICON_242
  ICON_243 = raylib.ICON_243
  ICON_244 = raylib.ICON_244
  ICON_245 = raylib.ICON_245
  ICON_246 = raylib.ICON_246
  ICON_247 = raylib.ICON_247
  ICON_248 = raylib.ICON_248
  ICON_249 = raylib.ICON_249
  ICON_250 = raylib.ICON_250
  ICON_251 = raylib.ICON_251
  ICON_252 = raylib.ICON_252
  ICON_253 = raylib.ICON_253
  ICON_254 = raylib.ICON_254
  ICON_255 = raylib.ICON_255
  LIGHTGRAY = raylib.LIGHTGRAY
  GRAY = raylib.GRAY
  DARKGRAY = raylib.DARKGRAY
  YELLOW = raylib.YELLOW
  GOLD = raylib.GOLD
  ORANGE = raylib.ORANGE
  PINK = raylib.PINK
  RED = raylib.RED
  MAROON = raylib.MAROON
  GREEN = raylib.GREEN
  LIME = raylib.LIME
  DARKGREEN = raylib.DARKGREEN
  SKYBLUE = raylib.SKYBLUE
  BLUE = raylib.BLUE
  DARKBLUE = raylib.DARKBLUE
  PURPLE = raylib.PURPLE
  VIOLET = raylib.VIOLET
  DARKPURPLE = raylib.DARKPURPLE
  BEIGE = raylib.BEIGE
  BROWN = raylib.BROWN
  DARKBROWN = raylib.DARKBROWN
  WHITE = raylib.WHITE
  BLACK = raylib.BLACK
  BLANK = raylib.BLANK
  MAGENTA = raylib.MAGENTA
  RAYWHITE = raylib.RAYWHITE
  InitWindow = raylib.InitWindow
  CloseWindow = raylib.CloseWindow
  WindowShouldClose = raylib.WindowShouldClose
  IsWindowReady = raylib.IsWindowReady
  IsWindowFullscreen = raylib.IsWindowFullscreen
  IsWindowHidden = raylib.IsWindowHidden
  IsWindowMinimized = raylib.IsWindowMinimized
  IsWindowMaximized = raylib.IsWindowMaximized
  IsWindowFocused = raylib.IsWindowFocused
  IsWindowResized = raylib.IsWindowResized
  IsWindowState = raylib.IsWindowState
  SetWindowState = raylib.SetWindowState
  ClearWindowState = raylib.ClearWindowState
  ToggleFullscreen = raylib.ToggleFullscreen
  ToggleBorderlessWindowed = raylib.ToggleBorderlessWindowed
  MaximizeWindow = raylib.MaximizeWindow
  MinimizeWindow = raylib.MinimizeWindow
  RestoreWindow = raylib.RestoreWindow
  SetWindowIcon = raylib.SetWindowIcon
  SetWindowIcons = raylib.SetWindowIcons
  SetWindowTitle = raylib.SetWindowTitle
  SetWindowPosition = raylib.SetWindowPosition
  SetWindowMonitor = raylib.SetWindowMonitor
  SetWindowMinSize = raylib.SetWindowMinSize
  SetWindowMaxSize = raylib.SetWindowMaxSize
  SetWindowSize = raylib.SetWindowSize
  SetWindowOpacity = raylib.SetWindowOpacity
  SetWindowFocused = raylib.SetWindowFocused
  GetWindowHandle = raylib.GetWindowHandle
  GetScreenWidth = raylib.GetScreenWidth
  GetScreenHeight = raylib.GetScreenHeight
  GetRenderWidth = raylib.GetRenderWidth
  GetRenderHeight = raylib.GetRenderHeight
  GetMonitorCount = raylib.GetMonitorCount
  GetCurrentMonitor = raylib.GetCurrentMonitor
  GetMonitorPosition = raylib.GetMonitorPosition
  GetMonitorWidth = raylib.GetMonitorWidth
  GetMonitorHeight = raylib.GetMonitorHeight
  GetMonitorPhysicalWidth = raylib.GetMonitorPhysicalWidth
  GetMonitorPhysicalHeight = raylib.GetMonitorPhysicalHeight
  GetMonitorRefreshRate = raylib.GetMonitorRefreshRate
  GetWindowPosition = raylib.GetWindowPosition
  GetWindowScaleDPI = raylib.GetWindowScaleDPI
  GetMonitorName = raylib.GetMonitorName
  SetClipboardText = raylib.SetClipboardText
  GetClipboardText = raylib.GetClipboardText
  EnableEventWaiting = raylib.EnableEventWaiting
  DisableEventWaiting = raylib.DisableEventWaiting
  ShowCursor = raylib.ShowCursor
  HideCursor = raylib.HideCursor
  IsCursorHidden = raylib.IsCursorHidden
  EnableCursor = raylib.EnableCursor
  DisableCursor = raylib.DisableCursor
  IsCursorOnScreen = raylib.IsCursorOnScreen
  ClearBackground = raylib.ClearBackground
  BeginDrawing = raylib.BeginDrawing
  EndDrawing = raylib.EndDrawing
  BeginMode2D = raylib.BeginMode2D
  EndMode2D = raylib.EndMode2D
  BeginMode3D = raylib.BeginMode3D
  EndMode3D = raylib.EndMode3D
  BeginTextureMode = raylib.BeginTextureMode
  EndTextureMode = raylib.EndTextureMode
  BeginShaderMode = raylib.BeginShaderMode
  EndShaderMode = raylib.EndShaderMode
  BeginBlendMode = raylib.BeginBlendMode
  EndBlendMode = raylib.EndBlendMode
  BeginScissorMode = raylib.BeginScissorMode
  EndScissorMode = raylib.EndScissorMode
  BeginVrStereoMode = raylib.BeginVrStereoMode
  EndVrStereoMode = raylib.EndVrStereoMode
  LoadVrStereoConfig = raylib.LoadVrStereoConfig
  UnloadVrStereoConfig = raylib.UnloadVrStereoConfig
  LoadShader = raylib.LoadShader
  LoadShaderFromMemory = raylib.LoadShaderFromMemory
  IsShaderValid = raylib.IsShaderValid
  GetShaderLocation = raylib.GetShaderLocation
  GetShaderLocationAttrib = raylib.GetShaderLocationAttrib
  SetShaderValue = raylib.SetShaderValue
  SetShaderValueV = raylib.SetShaderValueV
  SetShaderValueMatrix = raylib.SetShaderValueMatrix
  SetShaderValueTexture = raylib.SetShaderValueTexture
  UnloadShader = raylib.UnloadShader
  GetScreenToWorldRay = raylib.GetScreenToWorldRay
  GetScreenToWorldRayEx = raylib.GetScreenToWorldRayEx
  GetWorldToScreen = raylib.GetWorldToScreen
  GetWorldToScreenEx = raylib.GetWorldToScreenEx
  GetWorldToScreen2D = raylib.GetWorldToScreen2D
  GetScreenToWorld2D = raylib.GetScreenToWorld2D
  GetCameraMatrix = raylib.GetCameraMatrix
  GetCameraMatrix2D = raylib.GetCameraMatrix2D
  SetTargetFPS = raylib.SetTargetFPS
  GetFrameTime = raylib.GetFrameTime
  GetTime = raylib.GetTime
  GetFPS = raylib.GetFPS
  SwapScreenBuffer = raylib.SwapScreenBuffer
  PollInputEvents = raylib.PollInputEvents
  WaitTime = raylib.WaitTime
  SetRandomSeed = raylib.SetRandomSeed
  GetRandomValue = raylib.GetRandomValue
  LoadRandomSequence = raylib.LoadRandomSequence
  UnloadRandomSequence = raylib.UnloadRandomSequence
  TakeScreenshot = raylib.TakeScreenshot
  SetConfigFlags = raylib.SetConfigFlags
  OpenURL = raylib.OpenURL
  TraceLog = raylib.TraceLog
  SetTraceLogLevel = raylib.SetTraceLogLevel
  MemAlloc = raylib.MemAlloc
  MemRealloc = raylib.MemRealloc
  MemFree = raylib.MemFree
  SetTraceLogCallback = raylib.SetTraceLogCallback
  SetLoadFileDataCallback = raylib.SetLoadFileDataCallback
  SetSaveFileDataCallback = raylib.SetSaveFileDataCallback
  SetLoadFileTextCallback = raylib.SetLoadFileTextCallback
  SetSaveFileTextCallback = raylib.SetSaveFileTextCallback
  LoadFileData = raylib.LoadFileData
  UnloadFileData = raylib.UnloadFileData
  SaveFileData = raylib.SaveFileData
  ExportDataAsCode = raylib.ExportDataAsCode
  LoadFileText = raylib.LoadFileText
  UnloadFileText = raylib.UnloadFileText
  SaveFileText = raylib.SaveFileText
  FileExists = raylib.FileExists
  DirectoryExists = raylib.DirectoryExists
  IsFileExtension = raylib.IsFileExtension
  GetFileLength = raylib.GetFileLength
  GetFileExtension = raylib.GetFileExtension
  GetFileName = raylib.GetFileName
  GetFileNameWithoutExt = raylib.GetFileNameWithoutExt
  GetDirectoryPath = raylib.GetDirectoryPath
  GetPrevDirectoryPath = raylib.GetPrevDirectoryPath
  GetWorkingDirectory = raylib.GetWorkingDirectory
  GetApplicationDirectory = raylib.GetApplicationDirectory
  MakeDirectory = raylib.MakeDirectory
  ChangeDirectory = raylib.ChangeDirectory
  IsPathFile = raylib.IsPathFile
  IsFileNameValid = raylib.IsFileNameValid
  LoadDirectoryFiles = raylib.LoadDirectoryFiles
  LoadDirectoryFilesEx = raylib.LoadDirectoryFilesEx
  UnloadDirectoryFiles = raylib.UnloadDirectoryFiles
  IsFileDropped = raylib.IsFileDropped
  LoadDroppedFiles = raylib.LoadDroppedFiles
  UnloadDroppedFiles = raylib.UnloadDroppedFiles
  GetFileModTime = raylib.GetFileModTime
  CompressData = raylib.CompressData
  DecompressData = raylib.DecompressData
  EncodeDataBase64 = raylib.EncodeDataBase64
  DecodeDataBase64 = raylib.DecodeDataBase64
  ComputeCRC32 = raylib.ComputeCRC32
  ComputeMD5 = raylib.ComputeMD5
  ComputeSHA1 = raylib.ComputeSHA1
  LoadAutomationEventList = raylib.LoadAutomationEventList
  UnloadAutomationEventList = raylib.UnloadAutomationEventList
  ExportAutomationEventList = raylib.ExportAutomationEventList
  SetAutomationEventList = raylib.SetAutomationEventList
  SetAutomationEventBaseFrame = raylib.SetAutomationEventBaseFrame
  StartAutomationEventRecording = raylib.StartAutomationEventRecording
  StopAutomationEventRecording = raylib.StopAutomationEventRecording
  PlayAutomationEvent = raylib.PlayAutomationEvent
  IsKeyPressed = raylib.IsKeyPressed
  IsKeyPressedRepeat = raylib.IsKeyPressedRepeat
  IsKeyDown = raylib.IsKeyDown
  IsKeyReleased = raylib.IsKeyReleased
  IsKeyUp = raylib.IsKeyUp
  GetKeyPressed = raylib.GetKeyPressed
  GetCharPressed = raylib.GetCharPressed
  SetExitKey = raylib.SetExitKey
  IsGamepadAvailable = raylib.IsGamepadAvailable
  GetGamepadName = raylib.GetGamepadName
  IsGamepadButtonPressed = raylib.IsGamepadButtonPressed
  IsGamepadButtonDown = raylib.IsGamepadButtonDown
  IsGamepadButtonReleased = raylib.IsGamepadButtonReleased
  IsGamepadButtonUp = raylib.IsGamepadButtonUp
  GetGamepadButtonPressed = raylib.GetGamepadButtonPressed
  GetGamepadAxisCount = raylib.GetGamepadAxisCount
  GetGamepadAxisMovement = raylib.GetGamepadAxisMovement
  SetGamepadMappings = raylib.SetGamepadMappings
  SetGamepadVibration = raylib.SetGamepadVibration
  IsMouseButtonPressed = raylib.IsMouseButtonPressed
  IsMouseButtonDown = raylib.IsMouseButtonDown
  IsMouseButtonReleased = raylib.IsMouseButtonReleased
  IsMouseButtonUp = raylib.IsMouseButtonUp
  GetMouseX = raylib.GetMouseX
  GetMouseY = raylib.GetMouseY
  GetMousePosition = raylib.GetMousePosition
  GetMouseDelta = raylib.GetMouseDelta
  SetMousePosition = raylib.SetMousePosition
  SetMouseOffset = raylib.SetMouseOffset
  SetMouseScale = raylib.SetMouseScale
  GetMouseWheelMove = raylib.GetMouseWheelMove
  GetMouseWheelMoveV = raylib.GetMouseWheelMoveV
  SetMouseCursor = raylib.SetMouseCursor
  GetTouchX = raylib.GetTouchX
  GetTouchY = raylib.GetTouchY
  GetTouchPosition = raylib.GetTouchPosition
  GetTouchPointId = raylib.GetTouchPointId
  GetTouchPointCount = raylib.GetTouchPointCount
  SetGesturesEnabled = raylib.SetGesturesEnabled
  IsGestureDetected = raylib.IsGestureDetected
  GetGestureDetected = raylib.GetGestureDetected
  GetGestureHoldDuration = raylib.GetGestureHoldDuration
  GetGestureDragVector = raylib.GetGestureDragVector
  GetGestureDragAngle = raylib.GetGestureDragAngle
  GetGesturePinchVector = raylib.GetGesturePinchVector
  GetGesturePinchAngle = raylib.GetGesturePinchAngle
  UpdateCamera = raylib.UpdateCamera
  UpdateCameraPro = raylib.UpdateCameraPro
  SetShapesTexture = raylib.SetShapesTexture
  GetShapesTexture = raylib.GetShapesTexture
  GetShapesTextureRectangle = raylib.GetShapesTextureRectangle
  DrawPixel = raylib.DrawPixel
  DrawPixelV = raylib.DrawPixelV
  DrawLine = raylib.DrawLine
  DrawLineV = raylib.DrawLineV
  DrawLineEx = raylib.DrawLineEx
  DrawLineStrip = raylib.DrawLineStrip
  DrawLineBezier = raylib.DrawLineBezier
  DrawCircle = raylib.DrawCircle
  DrawCircleSector = raylib.DrawCircleSector
  DrawCircleSectorLines = raylib.DrawCircleSectorLines
  DrawCircleGradient = raylib.DrawCircleGradient
  DrawCircleV = raylib.DrawCircleV
  DrawCircleLines = raylib.DrawCircleLines
  DrawCircleLinesV = raylib.DrawCircleLinesV
  DrawEllipse = raylib.DrawEllipse
  DrawEllipseLines = raylib.DrawEllipseLines
  DrawRing = raylib.DrawRing
  DrawRingLines = raylib.DrawRingLines
  DrawRectangle = raylib.DrawRectangle
  DrawRectangleV = raylib.DrawRectangleV
  DrawRectangleRec = raylib.DrawRectangleRec
  DrawRectanglePro = raylib.DrawRectanglePro
  DrawRectangleGradientV = raylib.DrawRectangleGradientV
  DrawRectangleGradientH = raylib.DrawRectangleGradientH
  DrawRectangleGradientEx = raylib.DrawRectangleGradientEx
  DrawRectangleLines = raylib.DrawRectangleLines
  DrawRectangleLinesEx = raylib.DrawRectangleLinesEx
  DrawRectangleRounded = raylib.DrawRectangleRounded
  DrawRectangleRoundedLines = raylib.DrawRectangleRoundedLines
  DrawRectangleRoundedLinesEx = raylib.DrawRectangleRoundedLinesEx
  DrawTriangle = raylib.DrawTriangle
  DrawTriangleLines = raylib.DrawTriangleLines
  DrawTriangleFan = raylib.DrawTriangleFan
  DrawTriangleStrip = raylib.DrawTriangleStrip
  DrawPoly = raylib.DrawPoly
  DrawPolyLines = raylib.DrawPolyLines
  DrawPolyLinesEx = raylib.DrawPolyLinesEx
  DrawSplineLinear = raylib.DrawSplineLinear
  DrawSplineBasis = raylib.DrawSplineBasis
  DrawSplineCatmullRom = raylib.DrawSplineCatmullRom
  DrawSplineBezierQuadratic = raylib.DrawSplineBezierQuadratic
  DrawSplineBezierCubic = raylib.DrawSplineBezierCubic
  DrawSplineSegmentLinear = raylib.DrawSplineSegmentLinear
  DrawSplineSegmentBasis = raylib.DrawSplineSegmentBasis
  DrawSplineSegmentCatmullRom = raylib.DrawSplineSegmentCatmullRom
  DrawSplineSegmentBezierQuadratic = raylib.DrawSplineSegmentBezierQuadratic
  DrawSplineSegmentBezierCubic = raylib.DrawSplineSegmentBezierCubic
  GetSplinePointLinear = raylib.GetSplinePointLinear
  GetSplinePointBasis = raylib.GetSplinePointBasis
  GetSplinePointCatmullRom = raylib.GetSplinePointCatmullRom
  GetSplinePointBezierQuad = raylib.GetSplinePointBezierQuad
  GetSplinePointBezierCubic = raylib.GetSplinePointBezierCubic
  CheckCollisionRecs = raylib.CheckCollisionRecs
  CheckCollisionCircles = raylib.CheckCollisionCircles
  CheckCollisionCircleRec = raylib.CheckCollisionCircleRec
  CheckCollisionCircleLine = raylib.CheckCollisionCircleLine
  CheckCollisionPointRec = raylib.CheckCollisionPointRec
  CheckCollisionPointCircle = raylib.CheckCollisionPointCircle
  CheckCollisionPointTriangle = raylib.CheckCollisionPointTriangle
  CheckCollisionPointLine = raylib.CheckCollisionPointLine
  CheckCollisionPointPoly = raylib.CheckCollisionPointPoly
  CheckCollisionLines = raylib.CheckCollisionLines
  GetCollisionRec = raylib.GetCollisionRec
  LoadImage = raylib.LoadImage
  LoadImageRaw = raylib.LoadImageRaw
  LoadImageAnim = raylib.LoadImageAnim
  LoadImageAnimFromMemory = raylib.LoadImageAnimFromMemory
  LoadImageFromMemory = raylib.LoadImageFromMemory
  LoadImageFromTexture = raylib.LoadImageFromTexture
  LoadImageFromScreen = raylib.LoadImageFromScreen
  IsImageValid = raylib.IsImageValid
  UnloadImage = raylib.UnloadImage
  ExportImage = raylib.ExportImage
  ExportImageToMemory = raylib.ExportImageToMemory
  ExportImageAsCode = raylib.ExportImageAsCode
  GenImageColor = raylib.GenImageColor
  GenImageGradientLinear = raylib.GenImageGradientLinear
  GenImageGradientRadial = raylib.GenImageGradientRadial
  GenImageGradientSquare = raylib.GenImageGradientSquare
  GenImageChecked = raylib.GenImageChecked
  GenImageWhiteNoise = raylib.GenImageWhiteNoise
  GenImagePerlinNoise = raylib.GenImagePerlinNoise
  GenImageCellular = raylib.GenImageCellular
  GenImageText = raylib.GenImageText
  ImageCopy = raylib.ImageCopy
  ImageFromImage = raylib.ImageFromImage
  ImageFromChannel = raylib.ImageFromChannel
  ImageText = raylib.ImageText
  ImageTextEx = raylib.ImageTextEx
  ImageFormat = raylib.ImageFormat
  ImageToPOT = raylib.ImageToPOT
  ImageCrop = raylib.ImageCrop
  ImageAlphaCrop = raylib.ImageAlphaCrop
  ImageAlphaClear = raylib.ImageAlphaClear
  ImageAlphaMask = raylib.ImageAlphaMask
  ImageAlphaPremultiply = raylib.ImageAlphaPremultiply
  ImageBlurGaussian = raylib.ImageBlurGaussian
  ImageKernelConvolution = raylib.ImageKernelConvolution
  ImageResize = raylib.ImageResize
  ImageResizeNN = raylib.ImageResizeNN
  ImageResizeCanvas = raylib.ImageResizeCanvas
  ImageMipmaps = raylib.ImageMipmaps
  ImageDither = raylib.ImageDither
  ImageFlipVertical = raylib.ImageFlipVertical
  ImageFlipHorizontal = raylib.ImageFlipHorizontal
  ImageRotate = raylib.ImageRotate
  ImageRotateCW = raylib.ImageRotateCW
  ImageRotateCCW = raylib.ImageRotateCCW
  ImageColorTint = raylib.ImageColorTint
  ImageColorInvert = raylib.ImageColorInvert
  ImageColorGrayscale = raylib.ImageColorGrayscale
  ImageColorContrast = raylib.ImageColorContrast
  ImageColorBrightness = raylib.ImageColorBrightness
  ImageColorReplace = raylib.ImageColorReplace
  LoadImageColors = raylib.LoadImageColors
  LoadImagePalette = raylib.LoadImagePalette
  UnloadImageColors = raylib.UnloadImageColors
  UnloadImagePalette = raylib.UnloadImagePalette
  GetImageAlphaBorder = raylib.GetImageAlphaBorder
  GetImageColor = raylib.GetImageColor
  ImageClearBackground = raylib.ImageClearBackground
  ImageDrawPixel = raylib.ImageDrawPixel
  ImageDrawPixelV = raylib.ImageDrawPixelV
  ImageDrawLine = raylib.ImageDrawLine
  ImageDrawLineV = raylib.ImageDrawLineV
  ImageDrawLineEx = raylib.ImageDrawLineEx
  ImageDrawCircle = raylib.ImageDrawCircle
  ImageDrawCircleV = raylib.ImageDrawCircleV
  ImageDrawCircleLines = raylib.ImageDrawCircleLines
  ImageDrawCircleLinesV = raylib.ImageDrawCircleLinesV
  ImageDrawRectangle = raylib.ImageDrawRectangle
  ImageDrawRectangleV = raylib.ImageDrawRectangleV
  ImageDrawRectangleRec = raylib.ImageDrawRectangleRec
  ImageDrawRectangleLines = raylib.ImageDrawRectangleLines
  ImageDrawTriangle = raylib.ImageDrawTriangle
  ImageDrawTriangleEx = raylib.ImageDrawTriangleEx
  ImageDrawTriangleLines = raylib.ImageDrawTriangleLines
  ImageDrawTriangleFan = raylib.ImageDrawTriangleFan
  ImageDrawTriangleStrip = raylib.ImageDrawTriangleStrip
  ImageDraw = raylib.ImageDraw
  ImageDrawText = raylib.ImageDrawText
  ImageDrawTextEx = raylib.ImageDrawTextEx
  LoadTexture = raylib.LoadTexture
  LoadTextureFromImage = raylib.LoadTextureFromImage
  LoadTextureCubemap = raylib.LoadTextureCubemap
  LoadRenderTexture = raylib.LoadRenderTexture
  IsTextureValid = raylib.IsTextureValid
  UnloadTexture = raylib.UnloadTexture
  IsRenderTextureValid = raylib.IsRenderTextureValid
  UnloadRenderTexture = raylib.UnloadRenderTexture
  UpdateTexture = raylib.UpdateTexture
  UpdateTextureRec = raylib.UpdateTextureRec
  GenTextureMipmaps = raylib.GenTextureMipmaps
  SetTextureFilter = raylib.SetTextureFilter
  SetTextureWrap = raylib.SetTextureWrap
  DrawTexture = raylib.DrawTexture
  DrawTextureV = raylib.DrawTextureV
  DrawTextureEx = raylib.DrawTextureEx
  DrawTextureRec = raylib.DrawTextureRec
  DrawTexturePro = raylib.DrawTexturePro
  DrawTextureNPatch = raylib.DrawTextureNPatch
  ColorIsEqual = raylib.ColorIsEqual
  Fade = raylib.Fade
  ColorToInt = raylib.ColorToInt
  ColorNormalize = raylib.ColorNormalize
  ColorFromNormalized = raylib.ColorFromNormalized
  ColorToHSV = raylib.ColorToHSV
  ColorFromHSV = raylib.ColorFromHSV
  ColorTint = raylib.ColorTint
  ColorBrightness = raylib.ColorBrightness
  ColorContrast = raylib.ColorContrast
  ColorAlpha = raylib.ColorAlpha
  ColorAlphaBlend = raylib.ColorAlphaBlend
  ColorLerp = raylib.ColorLerp
  GetColor = raylib.GetColor
  GetPixelColor = raylib.GetPixelColor
  SetPixelColor = raylib.SetPixelColor
  GetPixelDataSize = raylib.GetPixelDataSize
  GetFontDefault = raylib.GetFontDefault
  LoadFont = raylib.LoadFont
  LoadFontEx = raylib.LoadFontEx
  LoadFontFromImage = raylib.LoadFontFromImage
  LoadFontFromMemory = raylib.LoadFontFromMemory
  IsFontValid = raylib.IsFontValid
  LoadFontData = raylib.LoadFontData
  GenImageFontAtlas = raylib.GenImageFontAtlas
  UnloadFontData = raylib.UnloadFontData
  UnloadFont = raylib.UnloadFont
  ExportFontAsCode = raylib.ExportFontAsCode
  DrawFPS = raylib.DrawFPS
  DrawText = raylib.DrawText
  DrawTextEx = raylib.DrawTextEx
  DrawTextPro = raylib.DrawTextPro
  DrawTextCodepoint = raylib.DrawTextCodepoint
  DrawTextCodepoints = raylib.DrawTextCodepoints
  SetTextLineSpacing = raylib.SetTextLineSpacing
  MeasureText = raylib.MeasureText
  MeasureTextEx = raylib.MeasureTextEx
  GetGlyphIndex = raylib.GetGlyphIndex
  GetGlyphInfo = raylib.GetGlyphInfo
  GetGlyphAtlasRec = raylib.GetGlyphAtlasRec
  LoadUTF8 = raylib.LoadUTF8
  UnloadUTF8 = raylib.UnloadUTF8
  LoadCodepoints = raylib.LoadCodepoints
  UnloadCodepoints = raylib.UnloadCodepoints
  GetCodepointCount = raylib.GetCodepointCount
  GetCodepoint = raylib.GetCodepoint
  GetCodepointNext = raylib.GetCodepointNext
  GetCodepointPrevious = raylib.GetCodepointPrevious
  CodepointToUTF8 = raylib.CodepointToUTF8
  TextCopy = raylib.TextCopy
  TextIsEqual = raylib.TextIsEqual
  TextLength = raylib.TextLength
  TextFormat = raylib.TextFormat
  TextSubtext = raylib.TextSubtext
  TextReplace = raylib.TextReplace
  TextInsert = raylib.TextInsert
  TextJoin = raylib.TextJoin
  TextSplit = raylib.TextSplit
  TextAppend = raylib.TextAppend
  TextFindIndex = raylib.TextFindIndex
  TextToUpper = raylib.TextToUpper
  TextToLower = raylib.TextToLower
  TextToPascal = raylib.TextToPascal
  TextToSnake = raylib.TextToSnake
  TextToCamel = raylib.TextToCamel
  TextToInteger = raylib.TextToInteger
  TextToFloat = raylib.TextToFloat
  DrawLine3D = raylib.DrawLine3D
  DrawPoint3D = raylib.DrawPoint3D
  DrawCircle3D = raylib.DrawCircle3D
  DrawTriangle3D = raylib.DrawTriangle3D
  DrawTriangleStrip3D = raylib.DrawTriangleStrip3D
  DrawCube = raylib.DrawCube
  DrawCubeV = raylib.DrawCubeV
  DrawCubeWires = raylib.DrawCubeWires
  DrawCubeWiresV = raylib.DrawCubeWiresV
  DrawSphere = raylib.DrawSphere
  DrawSphereEx = raylib.DrawSphereEx
  DrawSphereWires = raylib.DrawSphereWires
  DrawCylinder = raylib.DrawCylinder
  DrawCylinderEx = raylib.DrawCylinderEx
  DrawCylinderWires = raylib.DrawCylinderWires
  DrawCylinderWiresEx = raylib.DrawCylinderWiresEx
  DrawCapsule = raylib.DrawCapsule
  DrawCapsuleWires = raylib.DrawCapsuleWires
  DrawPlane = raylib.DrawPlane
  DrawRay = raylib.DrawRay
  DrawGrid = raylib.DrawGrid
  LoadModel = raylib.LoadModel
  LoadModelFromMesh = raylib.LoadModelFromMesh
  IsModelValid = raylib.IsModelValid
  UnloadModel = raylib.UnloadModel
  GetModelBoundingBox = raylib.GetModelBoundingBox
  DrawModel = raylib.DrawModel
  DrawModelEx = raylib.DrawModelEx
  DrawModelWires = raylib.DrawModelWires
  DrawModelWiresEx = raylib.DrawModelWiresEx
  DrawModelPoints = raylib.DrawModelPoints
  DrawModelPointsEx = raylib.DrawModelPointsEx
  DrawBoundingBox = raylib.DrawBoundingBox
  DrawBillboard = raylib.DrawBillboard
  DrawBillboardRec = raylib.DrawBillboardRec
  DrawBillboardPro = raylib.DrawBillboardPro
  UploadMesh = raylib.UploadMesh
  UpdateMeshBuffer = raylib.UpdateMeshBuffer
  UnloadMesh = raylib.UnloadMesh
  DrawMesh = raylib.DrawMesh
  DrawMeshInstanced = raylib.DrawMeshInstanced
  GetMeshBoundingBox = raylib.GetMeshBoundingBox
  GenMeshTangents = raylib.GenMeshTangents
  ExportMesh = raylib.ExportMesh
  ExportMeshAsCode = raylib.ExportMeshAsCode
  GenMeshPoly = raylib.GenMeshPoly
  GenMeshPlane = raylib.GenMeshPlane
  GenMeshCube = raylib.GenMeshCube
  GenMeshSphere = raylib.GenMeshSphere
  GenMeshHemiSphere = raylib.GenMeshHemiSphere
  GenMeshCylinder = raylib.GenMeshCylinder
  GenMeshCone = raylib.GenMeshCone
  GenMeshTorus = raylib.GenMeshTorus
  GenMeshKnot = raylib.GenMeshKnot
  GenMeshHeightmap = raylib.GenMeshHeightmap
  GenMeshCubicmap = raylib.GenMeshCubicmap
  LoadMaterials = raylib.LoadMaterials
  LoadMaterialDefault = raylib.LoadMaterialDefault
  IsMaterialValid = raylib.IsMaterialValid
  UnloadMaterial = raylib.UnloadMaterial
  SetMaterialTexture = raylib.SetMaterialTexture
  SetModelMeshMaterial = raylib.SetModelMeshMaterial
  LoadModelAnimations = raylib.LoadModelAnimations
  UpdateModelAnimation = raylib.UpdateModelAnimation
  UpdateModelAnimationBones = raylib.UpdateModelAnimationBones
  UnloadModelAnimation = raylib.UnloadModelAnimation
  UnloadModelAnimations = raylib.UnloadModelAnimations
  IsModelAnimationValid = raylib.IsModelAnimationValid
  CheckCollisionSpheres = raylib.CheckCollisionSpheres
  CheckCollisionBoxes = raylib.CheckCollisionBoxes
  CheckCollisionBoxSphere = raylib.CheckCollisionBoxSphere
  GetRayCollisionSphere = raylib.GetRayCollisionSphere
  GetRayCollisionBox = raylib.GetRayCollisionBox
  GetRayCollisionMesh = raylib.GetRayCollisionMesh
  GetRayCollisionTriangle = raylib.GetRayCollisionTriangle
  GetRayCollisionQuad = raylib.GetRayCollisionQuad
  InitAudioDevice = raylib.InitAudioDevice
  CloseAudioDevice = raylib.CloseAudioDevice
  IsAudioDeviceReady = raylib.IsAudioDeviceReady
  SetMasterVolume = raylib.SetMasterVolume
  GetMasterVolume = raylib.GetMasterVolume
  LoadWave = raylib.LoadWave
  LoadWaveFromMemory = raylib.LoadWaveFromMemory
  IsWaveValid = raylib.IsWaveValid
  LoadSound = raylib.LoadSound
  LoadSoundFromWave = raylib.LoadSoundFromWave
  LoadSoundAlias = raylib.LoadSoundAlias
  IsSoundValid = raylib.IsSoundValid
  UpdateSound = raylib.UpdateSound
  UnloadWave = raylib.UnloadWave
  UnloadSound = raylib.UnloadSound
  UnloadSoundAlias = raylib.UnloadSoundAlias
  ExportWave = raylib.ExportWave
  ExportWaveAsCode = raylib.ExportWaveAsCode
  PlaySound = raylib.PlaySound
  StopSound = raylib.StopSound
  PauseSound = raylib.PauseSound
  ResumeSound = raylib.ResumeSound
  IsSoundPlaying = raylib.IsSoundPlaying
  SetSoundVolume = raylib.SetSoundVolume
  SetSoundPitch = raylib.SetSoundPitch
  SetSoundPan = raylib.SetSoundPan
  WaveCopy = raylib.WaveCopy
  WaveCrop = raylib.WaveCrop
  WaveFormat = raylib.WaveFormat
  LoadWaveSamples = raylib.LoadWaveSamples
  UnloadWaveSamples = raylib.UnloadWaveSamples
  LoadMusicStream = raylib.LoadMusicStream
  LoadMusicStreamFromMemory = raylib.LoadMusicStreamFromMemory
  IsMusicValid = raylib.IsMusicValid
  UnloadMusicStream = raylib.UnloadMusicStream
  PlayMusicStream = raylib.PlayMusicStream
  IsMusicStreamPlaying = raylib.IsMusicStreamPlaying
  UpdateMusicStream = raylib.UpdateMusicStream
  StopMusicStream = raylib.StopMusicStream
  PauseMusicStream = raylib.PauseMusicStream
  ResumeMusicStream = raylib.ResumeMusicStream
  SeekMusicStream = raylib.SeekMusicStream
  SetMusicVolume = raylib.SetMusicVolume
  SetMusicPitch = raylib.SetMusicPitch
  SetMusicPan = raylib.SetMusicPan
  GetMusicTimeLength = raylib.GetMusicTimeLength
  GetMusicTimePlayed = raylib.GetMusicTimePlayed
  LoadAudioStream = raylib.LoadAudioStream
  IsAudioStreamValid = raylib.IsAudioStreamValid
  UnloadAudioStream = raylib.UnloadAudioStream
  UpdateAudioStream = raylib.UpdateAudioStream
  IsAudioStreamProcessed = raylib.IsAudioStreamProcessed
  PlayAudioStream = raylib.PlayAudioStream
  PauseAudioStream = raylib.PauseAudioStream
  ResumeAudioStream = raylib.ResumeAudioStream
  IsAudioStreamPlaying = raylib.IsAudioStreamPlaying
  StopAudioStream = raylib.StopAudioStream
  SetAudioStreamVolume = raylib.SetAudioStreamVolume
  SetAudioStreamPitch = raylib.SetAudioStreamPitch
  SetAudioStreamPan = raylib.SetAudioStreamPan
  SetAudioStreamBufferSizeDefault = raylib.SetAudioStreamBufferSizeDefault
  SetAudioStreamCallback = raylib.SetAudioStreamCallback
  AttachAudioStreamProcessor = raylib.AttachAudioStreamProcessor
  DetachAudioStreamProcessor = raylib.DetachAudioStreamProcessor
  AttachAudioMixedProcessor = raylib.AttachAudioMixedProcessor
  DetachAudioMixedProcessor = raylib.DetachAudioMixedProcessor
  GuiEnable = raylib.GuiEnable
  GuiDisable = raylib.GuiDisable
  GuiLock = raylib.GuiLock
  GuiUnlock = raylib.GuiUnlock
  GuiIsLocked = raylib.GuiIsLocked
  GuiSetAlpha = raylib.GuiSetAlpha
  GuiSetState = raylib.GuiSetState
  GuiGetState = raylib.GuiGetState
  GuiSetFont = raylib.GuiSetFont
  GuiGetFont = raylib.GuiGetFont
  GuiSetStyle = raylib.GuiSetStyle
  GuiGetStyle = raylib.GuiGetStyle
  GuiLoadStyle = raylib.GuiLoadStyle
  GuiLoadStyleDefault = raylib.GuiLoadStyleDefault
  GuiEnableTooltip = raylib.GuiEnableTooltip
  GuiDisableTooltip = raylib.GuiDisableTooltip
  GuiSetTooltip = raylib.GuiSetTooltip
  GuiIconText = raylib.GuiIconText
  GuiSetIconScale = raylib.GuiSetIconScale
  GuiGetIcons = raylib.GuiGetIcons
  GuiLoadIcons = raylib.GuiLoadIcons
  GuiDrawIcon = raylib.GuiDrawIcon
  GuiWindowBox = raylib.GuiWindowBox
  GuiGroupBox = raylib.GuiGroupBox
  GuiLine = raylib.GuiLine
  GuiPanel = raylib.GuiPanel
  GuiTabBar = raylib.GuiTabBar
  GuiScrollPanel = raylib.GuiScrollPanel
  GuiLabel = raylib.GuiLabel
  GuiButton = raylib.GuiButton
  GuiLabelButton = raylib.GuiLabelButton
  GuiToggle = raylib.GuiToggle
  GuiToggleGroup = raylib.GuiToggleGroup
  GuiToggleSlider = raylib.GuiToggleSlider
  GuiCheckBox = raylib.GuiCheckBox
  GuiComboBox = raylib.GuiComboBox
  GuiDropdownBox = raylib.GuiDropdownBox
  GuiSpinner = raylib.GuiSpinner
  GuiValueBox = raylib.GuiValueBox
  GuiTextBox = raylib.GuiTextBox
  GuiSlider = raylib.GuiSlider
  GuiSliderBar = raylib.GuiSliderBar
  GuiProgressBar = raylib.GuiProgressBar
  GuiStatusBar = raylib.GuiStatusBar
  GuiDummyRec = raylib.GuiDummyRec
  GuiGrid = raylib.GuiGrid
  GuiListView = raylib.GuiListView
  GuiListViewEx = raylib.GuiListViewEx
  GuiMessageBox = raylib.GuiMessageBox
  GuiTextInputBox = raylib.GuiTextInputBox
  GuiColorPicker = raylib.GuiColorPicker
  GuiColorPanel = raylib.GuiColorPanel
  GuiColorBarAlpha = raylib.GuiColorBarAlpha
  GuiColorBarHue = raylib.GuiColorBarHue
  GuiColorPickerHSV = raylib.GuiColorPickerHSV
  GuiColorPanelHSV = raylib.GuiColorPanelHSV
  EaseLinearNone = raylib.EaseLinearNone
  EaseLinearIn = raylib.EaseLinearIn
  EaseLinearOut = raylib.EaseLinearOut
  EaseLinearInOut = raylib.EaseLinearInOut
  EaseSineIn = raylib.EaseSineIn
  EaseSineOut = raylib.EaseSineOut
  EaseSineInOut = raylib.EaseSineInOut
  EaseCircIn = raylib.EaseCircIn
  EaseCircOut = raylib.EaseCircOut
  EaseCircInOut = raylib.EaseCircInOut
  EaseCubicIn = raylib.EaseCubicIn
  EaseCubicOut = raylib.EaseCubicOut
  EaseCubicInOut = raylib.EaseCubicInOut
  EaseQuadIn = raylib.EaseQuadIn
  EaseQuadOut = raylib.EaseQuadOut
  EaseQuadInOut = raylib.EaseQuadInOut
  EaseExpoIn = raylib.EaseExpoIn
  EaseExpoOut = raylib.EaseExpoOut
  EaseExpoInOut = raylib.EaseExpoInOut
  EaseBackIn = raylib.EaseBackIn
  EaseBackOut = raylib.EaseBackOut
  EaseBackInOut = raylib.EaseBackInOut
  EaseBounceOut = raylib.EaseBounceOut
  EaseBounceIn = raylib.EaseBounceIn
  EaseBounceInOut = raylib.EaseBounceInOut
  EaseElasticIn = raylib.EaseElasticIn
  EaseElasticOut = raylib.EaseElasticOut
  EaseElasticInOut = raylib.EaseElasticInOut
  GetCameraForward = raylib.GetCameraForward
  GetCameraUp = raylib.GetCameraUp
  GetCameraRight = raylib.GetCameraRight
  CameraMoveForward = raylib.CameraMoveForward
  CameraMoveUp = raylib.CameraMoveUp
  CameraMoveRight = raylib.CameraMoveRight
  CameraMoveToTarget = raylib.CameraMoveToTarget
  CameraYaw = raylib.CameraYaw
  CameraPitch = raylib.CameraPitch
  CameraRoll = raylib.CameraRoll
  GetCameraViewMatrix = raylib.GetCameraViewMatrix
  GetCameraProjectionMatrix = raylib.GetCameraProjectionMatrix
  DrawTextBoxed = raylib.DrawTextBoxed
  DrawTextBoxedSelectable = raylib.DrawTextBoxedSelectable
  UniformFloat = raylib.UniformFloat
  UniformVector2 = raylib.UniformVector2
  UniformVector3 = raylib.UniformVector3
  UniformVector4 = raylib.UniformVector4
  UniformColor = raylib.UniformColor
  UniformInt = raylib.UniformInt
  UniformTexture = raylib.UniformTexture
      await InitGame(raylib)
    }, UpdateGame)
  `)
f(raylib_run,canvas)}
export{RaylibComponent,Module}
export default raylib_run
