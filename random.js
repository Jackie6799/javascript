 let choice = {
   x: 30,
   y: 50,
   width: 85
 };

 function setup() {
   createCanvas(800, 600);
 }

 function draw() {
   background(250, 400, 100);
   fill(250, 200, 200);

   choice.x = random(1, 3);


   }


console.log(choice.x);