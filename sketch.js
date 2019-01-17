// 色を変えてきれいにする
// domでguiをいれる

// 信号
	// 蜂の巣
	// グライダー銃	とかはキー入力で

// 一辺の数
let n = 100;

// 状態
let board = [];
let board_next = [];

let drawable = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	frameRate(20);
	
	// リスタートボタン
	// button_stop = createButton('Restart');
	// button_stop.position(width-80,5);
	// button_stop.mousePressed(start);
	// 色のスライド
	// siliderH = createSlider(0,width,width/2);
	// siliderH.position(width-280,80);
	// stroke(255,0,0);
	// fill(255);
	// hueText = createP('Hufaeafefafe');
	// hueText.position(width-280,45);
	// text('h',width-280,45);
	// 初期化ボタン
	button_stop = createButton('Initialize');
	button_stop.position(width-80,5);
	button_stop.mousePressed(initialize);
	// 全部消すボタン
	button_stop = createButton('Reset');
	button_stop.position(width-80,35);
	button_stop.mousePressed(reset);
	// カラーモードボタン
// 	button_stop = createButton('Color');
// 	button_stop.position(width-80,65);
// 	button_stop.mousePressed(changeColor);
	
	initialize();
}

function draw() {
	noStroke();
	
	// let size = (width-80)/n;
	let size = 12;
	// print(size);
	// print('width' + width + ',height' + height);
	
	if(drawable) {
		for(let i=0; i<n; i++){
			for(let j=0; j<n; j++){
				if(board[i][j] == 1) {
					colorMode(HSB, 360,100,100);
					fill(random(0,300),random(80,100),random(80,100));
					rect(i*size, j*size, size,size);
				} else if(board[i][j] == 0) {
					fill(0);
					rect(i*size, j*size, size,size);
				}
			}
		}
	}

	evolution();
	// print('a');
}

function initialize() {
	for(let i=0; i<n; i++){
		board[i] = [];
		for(let j=0; j<n; j++){
			board[i][j] = 0;
		}
	}

	for(let i=0; i<n; i++){
		board_next[i] = [];
		for(let j=0; j<n; j++){
			board_next[i][j] = 0;
		}
	}

	let m = 700;
	let xs = [];
	let ys = [];
	for(let i=0; i<m; i++){
		let x = int(random(0,99));
		xs[i] = x;
		let y = int(random(0,99));
		ys[i] = y;
	}

	for(let i=0; i<m; i++) {
		board[xs[i]][ys[i]] = 1;
	}
}

// ライフゲームスタート
function start() {
	drawable = true;
}

function stop() {
	drawable = false;
}

// ライフゲームのアルゴリズム
function evolution() {
	for(let i=0; i<n; i++){
		for(let j=0; j<n; j++){
			let blackCount = 0;
			if(board[i][j] == 1) {
				for(var cx = -1; cx <= 1; cx++) {
					for(var cy = -1; cy <= 1; cy++) {
						if(cx == 0 && cy == 0) {
							continue;
						}
						var nx = i + cx; 	
						var ny = j + cy;
						if(nx < 0 || ny < 0 || nx >= n || ny >= n) {
							continue;
						}
						if(board[nx][ny] == null) {
							continue;
						}
						if(board[nx][ny] == 1) {
							blackCount++;
						}
					}
				}
				if(blackCount == 2 || blackCount == 3) {
					board_next[i][j] = 1;
				} else {
					board_next[i][j] = 0;
				}
			} else if(board[i][j] == 0) {
				for(var cx = -1; cx <= 1; cx++) {
					for(var cy = -1; cy <= 1; cy++) {
						if(cx == 0 && cy == 0) {
							continue;
						}
						var nx = i + cx; 	
						var ny = j + cy;
						if(nx < 0 || ny < 0 || nx >= n || ny >= n) {
							continue;
						}
						if(board[nx][ny] == null) {
							continue;
						}
						if(board[nx][ny] == 1) {
							blackCount++;
						}
					}
				}
				// print(blackCount);
				if(blackCount == 3) {
					board_next[i][j] = 1;
				} else {
					board_next[i][j] = 0;
				}
			}
		}
	}
	for(let i=0; i<n; i++){
		for(let j=0; j<n; j++){
			board[i][j] = board_next[i][j];
		}
	}

	for(let i=0; i<n; i++){
		for(let j=0; j<n; j++){
			board_next[i][j] = 0;
		}
	}
	// for(let i=0; i<n; i++){
	// 	for(let j=0; j<n; j++){
	// 		print(board_next[i][j] + ',' + board[i][j]);
	// 	}
	// }
}

function reset() {
	for(let i=0; i<n; i++){
		for(let j=0; j<n; j++){
			board[i][j] = 0;
		}
	}
}

function keyTyped() {
	if(key == 'a') {
		createSignal();
	} else if(key == 's') {
		createHoneycomb();
	} else if(key == 'd') {
		createGlider();
	} else if(key == 'f') {
		createGliderGun();
	} else if(key == 'g') {
		createAcorn();
	} else if(key == 'h') {
		createBeacon();
	}
}

function createSignal() {
	let x = int(random(10,90));
	let y = int(random(10,50));
	board[x][y] = 1;
	board[x+1][y] = 1;
	board[x+2][y] = 1;
}

function createHoneycomb() {
	let x = int(random(10,90));
	let y = int(random(0,50));
	board[x][y] = 1;
	board[x-1][y-1] = 1;
	board[x-1][y-2] = 1;
	board[x][y-3] = 1;
	board[x+1][y-1] = 1;
	board[x+1][y-2] = 1;
}
function createGlider() {
	let x = int(random(10,90));
	let y = int(random(0,50));
	board[x][y] = 1;
	board[x-1][y+1] = 1;
	board[x-1][y+2] = 1;
	board[x][y+2] = 1;
	board[x+1][y+2] = 1;
}

function createGliderGun() {
	let x = int(random(10,90));
	let y = int(random(0,50));
	board[x][y] = 1;
	board[x+1][y] = 1;
	board[x][y+1] = 1;
	board[x+1][y+1] = 1;
}

function createAcorn() {
	let x = int(random(10,90));
	let y = int(random(0,50));
	board[x][y] = 1;
	board[x+1][y] = 1;
	board[x+1][y-2] = 1;
	board[x+3][y-1] = 1;
	board[x+4][y] = 1;
	board[x+5][y] = 1;
	board[x+6][y] = 1;
}

function createBeacon() {
	let x = int(random(10,90));
	let y = int(random(0,50));
	board[x][y] = 1;
	board[x+1][y] = 1;
	board[x][y+1] = 1;
	board[x+1][y+1] = 1;
	board[x-2][y+2] = 1;
	board[x-2][y+3] = 1;
	board[x-1][y+2] = 1;
	board[x-1][y+3] = 1;
}

function changeColor() {
	
}
// //参考
// // https://tony-mooori.blogspot.com/2015/10/processingprocessing.html