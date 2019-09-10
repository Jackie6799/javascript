function myFunction() {
  alert("I am an alert box!");
}

let circle = {
  x: 30,
  y: 80,
  width: 85
};

let speed = 5;
let pos = 1;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(250, 400, 100);
  fill(250, 200, 200);
  //  circle.x = random(0,600);
  //  circle.y = random(0,600);
  ellipse(circle.x, circle.y, circle.width, circle.width);

  if (circle.x > width) {
    speed = -5;
  }
  if (circle.x < 0) {

  speed = 5

  }
  if (circle.y > width) {

  pos = -1

  }
  if (circle.y < 0) {

  pos = 1

  }
  circle.x = circle.x + speed;
  circle.y += pos;
}
