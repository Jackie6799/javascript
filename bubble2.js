
let bubbles = [];
let b;

let s = 3;
let pos = 1;

function setup() {
  createCanvas(600, 600);

  // h = new Bubble(500, 300, 50);
  // b = new Bubble(400, 200, 80);

  // bubbles[i] = new Bubble(600, 400, 50);



}

function mouseDragged() {

// for (let i = 0; i < bubbles.length; i++) {
// bubbles[i] = new Bubble(mouseX, mouseY, 40);
  let r = random(10, 90);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);




}

function draw() {
  background(0);

  

  for (let bubble of bubbles) {
    bubble.paint();
    bubble.show();
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].paint();
    bubbles[i].show();
  }

}




class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }


//
// move() {
//    this.x = this.x + random(-5, 5);
//    this.y = this.y + random(-5, 5);
//  }

  paint() {

  this.x = this.x + s;
  this.y = this.y + pos;

  if (this.x > width) {
     s = -3;
  }
  else if (this.x <0){
  s = 3;
  }
  if (this.y > width) {
     pos = -1;
  }
  else if (this.y <0){
  pos = 3;
  }

  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill(5);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
