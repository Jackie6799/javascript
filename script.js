function myFunction() {
  alert("I am an alert box!");
}



let circle = {
    x: 30,
    y: 50,
    width: 85,

};

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(250, 400, 100);
  fill(250, 200, 200);
  circle.x = random(0,600);
  circle.y = random(0,600);
  ellipse(circle.x, circle.y, circle.width, circle.width);
  circle.x = circle.x + 5;
}
function date() {
  document.write(Date());
}
