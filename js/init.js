var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
canvas = document.getElementById("canvas");
anim_container = document.getElementById("animation_container");
dom_overlay_container = document.getElementById("dom_overlay_container");
var comp=AdobeAn.getComposition("FDAC4584EFF999448D1623F0AC3E7D21");
var lib=comp.getLibrary();
var loader = new createjs.LoadQueue(false);
loader.installPlugin(createjs.Sound);
loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
var lib=comp.getLibrary();
loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
var images=comp.getImages();	
if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
var lib=comp.getLibrary();
var ss=comp.getSpriteSheet();
var queue = evt.target;
var ssMetadata = lib.ssMetadata;
for(i=0; i<ssMetadata.length; i++) {
ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
}
exportRoot = new lib.map();
stage = new lib.Stage(canvas);
stage.enableMouseOver();	
//Registers the "tick" event listener.
fnStartAnimation = function() {
stage.addChild(exportRoot);
createjs.Ticker.framerate = lib.properties.fps;
createjs.Ticker.addEventListener("tick", stage);
createjs.Ticker.addEventListener("tick", AdobeAn.handleSoundStreamOnTick);
}	    
//Code to support hidpi screens and responsive scaling.
AdobeAn.makeResponsive(true,'both',true,0.5, [canvas,anim_container,dom_overlay_container]);	
AdobeAn.compositionLoaded(lib.properties.id);
fnStartAnimation();
}
function playSound(id, loop, offset) {
return createjs.Sound.play(id, {'interrupt':createjs.Sound.INTERRUPT_EARLY, 'loop': loop, 'offset': offset});}