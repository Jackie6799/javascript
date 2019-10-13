let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

//let pos = 2;
//let s = 1;
let a = Math.random() * 200;
let b = Math.random() * 230;
// let x = 200;
// let y = 200;
let r = 90;
let s = 2;
let p = 2;

class Bubble {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }

  // move() {
  //   this.x = this.x + Math.random() * 200;
  //   this.y = this.y + Math.random() * 100;
  // }
  show() {
    // stroke(255);
    // strokeWeight(4);
    // noFill(5);
    // ellipse(this.x, this.y, this.r, this.r);

    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    // ctx.fillStyle = "#00f";
    // ctx.fillRect(this.x, this.y, 30, 30);
  }
  change() {
    if (this.x > 400) {
      this.dx = -5;
    }
    if (this.x < 0) {
      this.dx = 5;
    }
    if (this.y > 450) {
      this.dy = -4;
    }
    if (this.y < 0) {
      this.dy = 3;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].change();
  }

  if (a > 400) {
    s = -5;
  }
  if (a < 0) {
    s = 5;
  }
  if (b > 450) {
    p = -4;
  }
  if (b < 0) {
    p = 3;
  }
  a += s;
  b += p;

  requestAnimationFrame(draw);
}

let bubbles = [];

for (let i = 0; i < 50; i++) {
  let x = Math.random() * 200;
  let y = Math.random() * 230;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;
  bubbles.push(new Bubble(x, y, dx, dy));
}
