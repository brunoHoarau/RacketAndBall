var dx = 2;
var dy = -2;
var time = setInterval(field,10);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = "400";
var width = canvas.width ;
canvas.height = "600";
var height = canvas.height ;
var x = 150;
var y = 150;
var ballRadius = 10;
var racketX = width/2;
var racketH = 10;
var racketW = 75;
var racketY = canvas.height-30;
ctx.fillStyle = "#008000";

//écouteur d'évenement
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//la raquette
function racket() {
  ctx.beginPath();
    ctx.rect(racketX, racketY, racketW, racketH);
    ctx.fill();
    ctx.closePath()
}

//la balle
function ball(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);

  ctx.fill();
  ctx.closePath();
};

//Le terrain
function field(){
  ctx.clearRect(0,0, width,height); 
  ball();

  racket();
  // si x > largeur - rayonball (mur droit)  ou si x < à mur gauche
  if (x + dx > width - ballRadius || x + dx < 0 + ballRadius){
    dx = -dx;
    ctx.fillStyle = "#FF0000";

  }
// si y > hauteur - rayonball (mur bas) ou si y < à mur haut
  if ((y+dy) + ballRadius > height - ballRadius || y +dy<0 + ballRadius){
    dy = -dy;
    ctx.fillStyle = "#0000FF";

  } else if (y + dy > racketY ){ // si supperieur à l'axe y de la racket
    if(x + ballRadius > racketX && (x +dy )+ ballRadius < racketX + racketW){ // si x > l'axe x et l'axe x + racket largeur,
      dy = -dy;
      ctx.fillStyle = "#0000FF";
    } else {
      alert("Game Over");
      location.reload(true);
      clearInterval(time);
    }
  }
  x += dx;
  y += dy;
} time;

// Quand la touche est pressé
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        right = true;
        racketX += 10 ;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        left = true;
        racketX -= 10;
    }
}

// Quand la touche cesse d'être préssée 
//pour empecher que la raquette continue de bouger toute seule
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        right = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        left = false;
    }
}


