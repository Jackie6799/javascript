let x = 300;
let y = 200;

let width = 30;

let dx = 2;
let dy = 2;
l = Math.random(20, 30);

let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = true;
  } else if (event.keyCode == 37) {
    leftPressed = true;
  }
  if (event.keyCode == 40) {
    downPressed = true;
  } else if (event.keyCode == 38) {
    upPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = false;
  } else if (event.keyCode == 37) {
    leftPressed = false;
  }
  if (event.keyCode == 40) {
    downPressed = false;
  } else if (event.keyCode == 38) {
    upPressed = false;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00f";
  ctx.fillRect(x, y, width, width);

  if (rightPressed && x < canvas.width - width) {
    x += dx;
  } else if (leftPressed && x > 0) {
    x -= dx;
  }
  if (downPressed && y < canvas.height - width) {
    y += dy;
  } else if (upPressed && y > 0) {
    y -= dy;
  }
  //     circle.x += speed;
  //     circle.y += pos;

  requestAnimationFrame(draw);
}
