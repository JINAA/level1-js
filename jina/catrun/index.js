var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

//고양이 그림 부르기
var catImage = [];
catImage[0] = new Image();
catImage[1] = new Image();
catImage[0].src = "cat1.png";
catImage[1].src = "cat2.png";

//고양이 사이즈와 초기좌표
var catwidth = 90;
var catheight = 90;
var catX = 100;
var catY = 220;

//고양이 움직임
var dx = 2;
var dy = -130;

//고양이 로드시키기
var catImageLoad = false;
catImage.onload = function () {
	catImage = true;
};


//배경그리기	
function drawbg() {
	ctx.fillStyle = "lavender";
	ctx.fillRect(10,10,500,500);
}

//고양이 점프
function jump() {
	if (catY > canvas.height / 2) {
		catY += dy;
		return catY;
	}
}

//고양이 그리기
var count = 0;
function drawcat() {
	count++;
	if (count >= 3){
		ctx.drawImage(catImage[0],catX,catY,catwidth,catheight);
	} else {
		ctx.drawImage(catImage[1],catX,catY,catwidth,catheight);
	}

	if (count == 6)
		count = 0;
}

//그린이미지실행
function drawAll() {
	drawbg();
	drawcat();
}



setInterval(drawAll, 60);
