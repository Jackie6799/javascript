//let bubble11;
//let bubble22;
//
//function setup() {
//  createCanvas(800, 600);
//  bubble11 = new Bubble();
//  bubble22 = new Bubble();
//}
//
//function draw() {
//  background(0);
//  bubble11.move();
//  bubble11.show();
//  bubble22.move();
//  bubble22.show(60, 60, 10);
//}
//
//class Bubble {
//  constructor(x, y, r) {
//    this.x = 200;
//    this.y = 150;
//    this.r = 4;
//  }
//
//  move() {
//    this.x = this.x + random(-5, 5);
//    this.y = this.y + random(-5, 5);
//  }
//
//  show() {
//    stroke(255, 204, 100);
//    strokeWeight(4);
//    fill('red');
//    ellipse(this.x, this.y, 40, 40);
//  }
//}
