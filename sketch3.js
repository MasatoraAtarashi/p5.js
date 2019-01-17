let num = 100;
let fish = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	// frameRate(60);
	background(0);
	
	for(let i=0; i<num; i++) {
		fish[i] = new Fish();
	}
}

function draw() {
	for(let i=0; i<num; i++) {
		fish[i].draw();
	}
	fill(0, 20);
	rect(0, 0, width, height);
}

class Fish {
	constructor() {
		this.position = createVector(random(0,width),random(0,height));
		this.noise = createVector(random()*1000, random()*1000);
		this.noiseScale = random(0.001, 0.02);
		this.col1 = random(0,359);
		this.col2 = random(0,255);
		this.col3 = random(0,255);
		this.col4 = random(0,255);
	}
	
	draw() {
		colorMode(HSB, 359,255,255,255);
		fill(this.col1,this.col2,this.col3,this.col4);
		noStroke();
		this.position.x += noise(this.noise.x)*4-1.86;
		this.position.y += noise(this.noise.y)*4-1.86;
		if(this.position.x < 0){this.position.x=0}
		if(this.position.x > width){this.position.x=width}
		if(this.position.y < 0){this.position.y=0}
		if(this.position.y > height){this.position.y=height}
		ellipse(this.position.x,this.position.y,6,6);
		this.noise.x += this.noiseScale;
		this.noise.y += this.noiseScale;
	}
	
	swim() {
		let x = (mouseX - this.position.x)/100;
		let y = (mouseY - this.position.y)/100;
		this.position.x += x;
		this.position.y += y;
	}
}

function mouseMoved() {
	for(let i=0; i<num; i++) {
		fish[i].swim();
	}
}