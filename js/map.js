(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.indigoNodes2 = function() {
	this.initialize(img.indigoNodes2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,643,577);


(lib._19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_19wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_18wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_17wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_16wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_15wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_14wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_13wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_12wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_11wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_10wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_9wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_8wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_7wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_6wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_5wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_3wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_2wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape.setTransform(0.25,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmGGGQiiihABjlQgBjkCiiiQCiihDkAAQDlAACiChQCiCiAADkQAADliiChQiiCijlAAQjkAAiiiig");
	this.shape_1.setTransform(0.25,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-54.9,112.5,112.5);


// stage content:
(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой_1
	this.instance = new lib._19();
	this.instance.setTransform(510.05,458,0.3072,0.3072,0,0,0,0.4,0.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib._19(), 3);

	this.instance_1 = new lib._18();
	this.instance_1.setTransform(424,434.75,0.256,0.256,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib._18(), 3);

	this.instance_2 = new lib._17();
	this.instance_2.setTransform(368.75,379.55,0.256,0.256,0,0,0,0.2,0.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib._17(), 3);

	this.instance_3 = new lib._16();
	this.instance_3.setTransform(62.25,446,0.256,0.256,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib._16(), 3);

	this.instance_4 = new lib._15();
	this.instance_4.setTransform(88.65,381.95,0.256,0.256,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib._15(), 3);

	this.instance_5 = new lib._14();
	this.instance_5.setTransform(88.65,341.15,0.256,0.256,0,0,0,0.2,0.4);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib._14(), 3);

	this.instance_6 = new lib._13();
	this.instance_6.setTransform(84.65,301.15,0.3072,0.3072,0,0,0,0.5,0.4);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib._13(), 3);

	this.instance_7 = new lib._12();
	this.instance_7.setTransform(449.6,251.2,0.3072,0.3072,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib._12(), 3);

	this.instance_8 = new lib._11();
	this.instance_8.setTransform(321.6,285.15,0.3072,0.3072,0,0,0,0.5,0.4);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib._11(), 3);

	this.instance_9 = new lib._10();
	this.instance_9.setTransform(512.85,137.6,0.3583,0.3584,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib._10(), 3);

	this.instance_10 = new lib._9();
	this.instance_10.setTransform(326.4,227.8,0.3072,0.3072,0,0,0,0.4,0.5);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib._9(), 3);

	this.instance_11 = new lib._8();
	this.instance_11.setTransform(88.65,262.7,0.256,0.256,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 2, false, new lib._8(), 3);

	this.instance_12 = new lib._7();
	this.instance_12.setTransform(88.65,216.25,0.256,0.256,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 2, false, new lib._7(), 3);

	this.instance_13 = new lib._6();
	this.instance_13.setTransform(211.15,193.9,0.3583,0.3584,0,0,0,0.3,0.1);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 2, false, new lib._6(), 3);

	this.instance_14 = new lib._5();
	this.instance_14.setTransform(333.55,164.45,0.256,0.256,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 2, false, new lib._5(), 3);

	this.instance_15 = new lib._3();
	this.instance_15.setTransform(281.65,133.85,0.256,0.256,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 2, false, new lib._3(), 3);

	this.instance_16 = new lib._2();
	this.instance_16.setTransform(279.2,192.75,0.256,0.256,0,0,0,0.6,0.4);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib._2(), 3);

	this.instance_17 = new lib._1();
	this.instance_17.setTransform(363.15,43.65,0.3583,0.3584,0,0,0,0.3,0.1);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib._1(), 3);

	this.instance_18 = new lib.indigoNodes2();
	this.instance_18.setTransform(4,0,0.9215,0.9215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();
	
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(304,300,292.6,231.70000000000005);
// library properties:
lib.properties = {
	id: 'FDAC4584EFF999448D1623F0AC3E7D21',
	width: 600,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../img/indigoNodes2.png", id:"indigoNodes2"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_1wav.mp3", id:"_1wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_10wav.mp3", id:"_10wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_12wav.mp3", id:"_12wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_14wav.mp3", id:"_14wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_15wav.mp3", id:"_15wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_16wav.mp3", id:"_16wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_18wav.mp3", id:"_18wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_2wav.mp3", id:"_2wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_3wav.mp3", id:"_3wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_6wav.mp3", id:"_6wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_8wav.mp3", id:"_8wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_9wav.mp3", id:"_9wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_5wav.mp3", id:"_5wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_17wav.mp3", id:"_17wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_19wav.mp3", id:"_19wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_13wav.mp3", id:"_13wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_7wav.mp3", id:"_7wav"},
		{src:"https://raw.githubusercontent.com/DUF1LT/IndigoProject/main/sounds/_11wav.mp3", id:"_11wav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FDAC4584EFF999448D1623F0AC3E7D21'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;