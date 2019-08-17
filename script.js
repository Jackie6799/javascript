function myFunction() {
  alert("I am an alert box!");
}

let circle = 50;

let circle={
    x = 30;
    y = 200;
    width = 85;
    length = 85;



}


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(250, 100, 100);
  fill(250, 200, 200);
  ellipse(circle, 200, 85, 85);
  circle = circle + 5;
}
function date() {
  document.write(Date());
}
