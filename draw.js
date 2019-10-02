let circle = {
 x: 300,
 y: 200,
 width: 30,

};

  
  
let speed = 5;
let pos = 1;
  

// let x = 40;
// let s = 20;





// ctx.fillStyle = "#00f"

// x = x + s;

// ctx.fillRect(x,30,20,30);
let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');



function draw() {

      ctx.clearRect(0,0, canvas.width, canvas.width);



     ctx.fillStyle = '#00f';
     ctx.fillRect(circle.x, circle.y, circle.width, circle.width);









    if (circle.x > 400) {
       speed = -5;
     }
     if (circle.x < 0) {

     speed = 5

     }
     if (circle.y > 450) {

     pos = -1

     }
     if (circle.y < 0) {

     pos = 1

     }
     circle.x = circle.x + speed;
     circle.y += pos;

     requestAnimationFrame(draw);


};
    
     



   
// function loop(timestamp) {
//     var progress = timestamp - lastRender

    
//     draw();
//     update(progress);
    
    
  
//     lastRender = timestamp
//     requestAnimationFrame(loop)
// };

// var lastRender = 0
  
// requestAnimationFrame(update);

//document.addEventListener('keydown', keyDownHandler, false);
//document.addEventListener('keyup', keyUpHandler, false);
//
//var rightPressed = false;
//var leftPressed = false;
//var upPressed = false;
//var downPressed = false;
//
//function keyDownHandler(event) {
//    if(event.keyCode == 39) {
//        rightPressed = true;
//    }
//    else if(event.keyCode == 37) {
//        leftPressed = true;
//    }
//    if(event.keyCode == 40) {
//    	downPressed = true;
//    }
//    else if(event.keyCode == 38) {
//    	upPressed = true;
//    }
//}
//
//function draw() {
//
//      ctx.clearRect(0,0, canvas.width, canvas.width);
//
//
//
//     ctx.fillStyle = '#00f';
//     ctx.fillRect(circle.x, circle.y, circle.width, circle.width);
//
//
//
//
//
//
//
//
//
//
//    if(rightPressed) {
//        circle.x += 5;
//    }
//    else if(leftPressed) {
//        circle.x -= 5;
//    }
//    if(downPressed) {
//        circle.y += 5;
//    }
//    else if(upPressed) {
//        circle.y -= 5;
//    }
//
//
//     requestAnimationFrame(draw);
//
//
//};
