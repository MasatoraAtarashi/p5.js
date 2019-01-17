let imgs = ['./yuhi.jpg', './mizuumi.jpg',  './koyo.jpg'];
var count = 0;
var photo_count = 0;
var img;

function preload() {
	img = loadImage(imgs[photo_count]);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	img.resize(width,height);
	background(0);
}

function draw() {
	push();
	let x = int(random(width));
	let y = int(random(height));
	let col = img.get(x,y);
	stroke(red(col), green(col), blue(col));
	let rotation = map(saturation(col), 0, 255, 0, 360);
	let length = map(brightness(col),0,255,0,100);
	noFill();
	translate(x,y);
	rotate(radians(rotation));
	if(count < 100) {
		strokeWeight(100);
		beginShape();
		curveVertex(120, 91);
		curveVertex(120, 91);
		curveVertex(random(20,100), random(20,100));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 150) {
		strokeWeight(70);
		beginShape();
		curveVertex(50, 91);
		curveVertex(50, 91);
		curveVertex(random(20,50), random(20,50));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 200) {
		strokeWeight(60);
		beginShape();
		curveVertex(45, 91);
		curveVertex(45, 91);
		curveVertex(random(20,45), random(20,45));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 250) {
		strokeWeight(50);
		beginShape();
		curveVertex(30, 91);
		curveVertex(30, 91);
	  curveVertex(random(20,30), random(20,30));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 300) {
		strokeWeight(45);
		beginShape();
		curveVertex(20, 91);
		curveVertex(20, 91);
		curveVertex(random(0,20), random(0,20));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 400) {
		strokeWeight(30);
		beginShape();
		curveVertex(15, 91);
		curveVertex(15, 91);
		curveVertex(random(0,15), random(0,15));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 500) {
		strokeWeight(15);
		beginShape();
		curveVertex(10, 91);
		curveVertex(10, 91);
		curveVertex(random(0,10), random(0,10));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 600) {
		strokeWeight(10);
		beginShape();
		curveVertex(20, 91);
		curveVertex(20, 91);
		curveVertex(random(0,20), random(0,20));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 900) {
		strokeWeight(5);
		beginShape();
		curveVertex(15, 91);
		curveVertex(15, 91);
	  curveVertex(random(0,15), random(0,15));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 700) {
		strokeWeight(3);
		beginShape();
		curveVertex(10, 91);
		curveVertex(10, 91);
		curveVertex(random(0,10), random(0,10));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	} else if(count < 2000) {
		strokeWeight(2);
		beginShape();
		curveVertex(5, 91);
		curveVertex(5, 91);
		curveVertex(random(0,5), random(0,5));
		curveVertex(0, 0);
		curveVertex(0, 0);
		endShape();
	}
	count++;
	// print(count);
}

function mousePressed() {
	// resetImage();
}

function resetImage() {
	background(0);
	// photo_count++;
	count = 0;
	// pop();
	// img = loadImage('./mizuumi.jpg');
	// img.resize(width,height);
}