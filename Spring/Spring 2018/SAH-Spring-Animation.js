(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Artboard1100 = function() {
	this.initialize(img.Artboard1100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,615);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FCFCFB","#F1F1F0","#DEDEDE","#C5C5C4","#C2C2C1"],[0,0.314,0.557,0.776,0.98,1],-2.6,4.3,0,-2.6,4.3,39.7).s().p("AmmCBQAuhuA2hHQgcgBgUgDQgngFgTgTQgJgJgggCQgPAAgOABIAogoQA0hZBsAdQAdAIAigUQAvgbA4gHQBkgOBOAqQAVALAmAYQAiASAeAFQAyAICgAFQBvADAGAVQAJAggPATQgSAYg/AOQguAKhdgPQh6gXhPgLQgXA5gzAvQgtApgzAXQgdANAMg/QAGgfAAgHQAAgOgPAMQiPB4gfAZQhaBHgiAJIgIABQgkAAAvhwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-24,99.8,48.2);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FCFCFB","#F1F1F0","#DEDEDE","#C5C5C4","#C2C2C1"],[0,0.314,0.557,0.776,0.98,1],-2.6,4.3,0,-2.6,4.3,39.7).s().p("AmmCBQAuhuA2hHQgcgBgUgDQgngFgTgTQgJgJgggCQgPAAgOABIAogoQA0hZBsAdQAdAIAigUQAvgbA4gHQBkgOBOAqQAVALAmAYQAiASAeAFQAyAICgAFQBvADAGAVQAJAggPATQgSAYg/AOQguAKhdgPQh6gXhPgLQgXA5gzAvQgtApgzAXQgdANAMg/QAGgfAAgHQAAgOgPAMQiPB4gfAZQhaBHgiAJIgIABQgkAAAvhwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-24,99.8,48.2);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FCFCFB","#F1F1F0","#DEDEDE","#C5C5C4","#C2C2C1"],[0,0.314,0.557,0.776,0.98,1],-4.5,-1,0,-4.5,-1,41.8).s().p("Aj0EcQgSgNgdgfQgYgYgQgGQgigNgkgaQghgZgEgBQgKgCgQAAIgiACQANgTAegUQAlhFBDAFQARABBQAdQgZg1gEh8QgDiMAmg5QAUgdAUAZQAQAUAVBAIAnB6QAZBLAWAmQDSi/gNAyQgHAcgvBVIhDB/IBbAbQBPATBYABQBVgbBJgLQBKgLgNASQAqAAgOApQgPArhdAHQgnAEh6gGQgegBgSAJQgFACgbAVQg3Aoh8AXQgtAIgmAAQhPAAgygjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-31.8,99.9,63.7);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FCFCFB","#F1F1F0","#DEDEDE","#C5C5C4","#C2C2C1"],[0,0.314,0.557,0.776,0.98,1],-4.5,-1,0,-4.5,-1,41.8).s().p("Aj0EcQgSgNgdgfQgYgYgQgGQgigNgkgaQghgZgEgBQgKgCgQAAIgiACQANgTAegUQAlhFBDAFQARABBQAdQgZg1gEh8QgDiMAmg5QAUgdAUAZQAQAUAVBAIAnB6QAZBLAWAmQDSi/gNAyQgHAcgvBVIhDB/IBbAbQBPATBYABQBVgbBJgLQBKgLgNASQAqAAgOApQgPArhdAHQgnAEh6gGQgegBgSAJQgFACgbAVQg3Aoh8AXQgtAIgmAAQhPAAgygjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-31.8,99.9,63.7);


(lib.bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// forground trees
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-13);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(6));

	// bird
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.5,11);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.5,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.4,-44.8,99.9,63.7);


// stage content:
(lib.SAHSpringAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bird
	this.instance = new lib.bird();
	this.instance.parent = this;
	this.instance.setTransform(-56,148.1,1,1,0,0,180,-0.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-55.9,148.1,28.1,132.1,134.2,119,346.2,93.1,456.2,108.1,679.5,138.5,825.3,150.3,1077.7,170.8,1176.4,146.1,1235.6,131.3,1278.2,126.1,1324.2,120.5,1364.9,124.3,1405.8,128.2,1450.9,142.4,1493.3,155.8,1550.4,182.1,1603.5,206.4,1683.3,218.1,1755.9,228.7,1839.2,227.3,1918.1,226,1987.3,214.4,2056.9,202.8,2096.5,184.1,2162.8,152.8,2404.4,136.3,2525.2,128.1,2632.7,126.1]}},143).wait(1));

	// background
	this.instance_1 = new lib.Artboard1100();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1174.1,308.5,2667,615);
// library properties:
lib.properties = {
	id: 'A3F939C94E1A47F1A0B9E730F324AEEA',
	width: 2560,
	height: 615,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Artboard1100.jpg", id:"Artboard1100"}
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
an.compositions['A3F939C94E1A47F1A0B9E730F324AEEA'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;