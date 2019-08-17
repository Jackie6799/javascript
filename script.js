function myFunction() {
  alert("I am an alert box!");
}

let circle = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250, 100, 100);
  fill(250, 200, 200);
  ellipse(circle, 200, 55, 55);
  circle = circle + 2;
}
