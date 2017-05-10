'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var c = undefined,
    ctx = undefined,
    w = undefined,
    h = undefined,
    count = undefined,
    lines = undefined,
    tick = undefined;

    var mouseX;
    var mouseY;


function rand(min, max) {
	return Math.random() * (max - min) + min;
};


var Line = function () {
	function Line(opt) {
		_classCallCheck(this, Line);

	Object.assign(this, opt);
		this.rx = this.x;
	}

	Line.prototype.step = function step() {
		this.rx = this.x + Math.cos((tick + this.offset) / this.div) * this.range * rand(2, 10);
	};

	Line.prototype.draw = function draw() {
		ctx.fillStyle = 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, ' + this.alpha + ')';
		ctx.fillRect(this.rx - this.w / 2 + rand(-2, 2), ~ ~(this.y - this.h / 2), this.w + rand(-2, 2), ~ ~this.h);
	};

	return Line;
}();

function init() {
	c = document.querySelector('canvas');
	ctx = c.getContext('2d');
	w = 1340;
	h = 600;
	count = 950;
	lines = [];
	tick = 0;
	reset();
	loop();
  c.addEventListener("click", onClick, false);
}





function reset() {
	c.width = w;
	c.height = h;
	lines.length = 0;
	for (var i = 0; i < count; i++) {
		lines.push(new Line({
			x: w / 2,
			y: -100 + count - i,
			w: (count - i) * 1,
			h: 1,
			range: i / 8 + rand(0, (count + i) / 10),
			div: 84,
			offset: i + rand(0, 10),
			hue: 100,
			saturation: 0,
			lightness: 0,
			alpha: (count - i * 0.92) / count * 0.9
		}));
	}
}

// speed
function step() {
	var i = count;
	while (i--) {
		lines[i].step();
	}
	tick += rand(0, 100) > 0.002 ? 1 : rand(5, 10);
}

function draw() {
  // ctx.beginPath();
  // ctx.arc(700, 400, 150, 100, 102 * Math.PI);
  // ctx.fill();
	ctx.fillStyle = 'hsla(' + (260 + tick + rand(0, 90)) + ', ' + rand(5, 100) + '%, ' + rand(45, 55) + '%, 0.1)';
	ctx.fillRect(2, rand(0, 190), w, h);
	var i = count;
	while (i--) {
		lines[i].draw();
	}
	if (rand(0, 1) > 0.2) {
		ctx.save();
		if (rand(0, 7) > 3.2) {
			ctx.globalCompositeOperation = 'difference';
		} else {
			ctx.globalCompositeOperation = 'overlay';
			ctx.globalAlpha = 0.2;
		}
		ctx.translate(w / 2 + rand(-10.1, 10.1), h / 2 + rand(-0.1, 0.1));
    ctx.rotate(rand(0.005, 0.0005));
		ctx.scale(rand(1, 1.1), rand(0.98, 1.02));
		ctx.translate(-w / 2 + rand(-0.1, 0.91), -h / 2 + rand(-0.1, 0.1));
		// ctx.drawImage(c, 1, 0);
		ctx.restore();
	}
}

function loop() {
	requestAnimationFrame(loop);
	step();
	draw();
}

function onClick(e) {

}

init();
