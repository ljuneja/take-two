var r = [];
var b = [];
var g = [];

function setup() {
  createCanvas(400, 400);
  for(var i = 1; i<6; i++){
    r.push(255);
    b.push(255);
    g.push(255);
  }
}

function draw() {
  console.log(g);
  console.log("click each key from left to right to see the ombré");
  for(var i = 0; i<=10; i++){
   background(220);
    textSize(50);
  }
  var keyStart = 0;
  for(var i = 1; i<6; i++){
    var thisR = r[i-1];
    var thisB = b[i-1];
    var thisG = g[i-1];
    fill(thisR, thisB, thisG, 128);
    rect(keyStart, 40, 80, 200);
    keyStart = keyStart + 80;
  }
  stroke(255, 255, 255);
  strokeWeight(4);
}

function mousePressed(){
  if(mouseX<=80){
    console.log("first");
    r[0] = 250; 
    b[0] = 40;
    g[0] = 20;
  }
  else if(mouseX>80 && mouseX<=160){
    console.log("second");
    r[1] = 251;
    b[1] = 80;
    g[1] = 60;
  }
  else if(mouseX>160 && mouseX<=240){
    console.log("third");
    r[2] = 252;
    b[2] = 120;
    g[2] = 100;
  }
  else if(mouseX>240 && mouseX<=320){
    r[3] = 253;
    b[3] = 180;
    g[3] = 140;
  }
  else{
    r[4] = 255;
    b[4] = 230;
    g[4] = 160;
  }
}
