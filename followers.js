function foRandomColor(){ 
  return color(random(0, 256), random(0, 256), random(0, 256));
}
function cFollower(){
  this.iDiameter = random(20, 50);
  this.iX = random(0, width);
  this.iY = random(0, height);
  this.iXSpeed = 1;
  this.iYSpeed = 1;
  this.oColor = foRandomColor();
  this.fShape = random([rect, ellipse]);
  this.mUpdate = function(){
  }    
  this.mDraw = function(){
    this.fShape(this.iX, this.iY, this.iDiameter, this.iDiameter);
  }
}
var oBackgroundColor;
var loFollowers = [];
function setup() {
  createCanvas(710, 400);
  frameRate(30);
  colorMode(RGB);
  oBackgroundColor = foRandomColor();
  var iFollowers = random(10, 50);
  for (var i = 0; i < iFollowers; i++){
    loFollowers.push(new cFollower());
  }
}
function draw() {
  background(oBackgroundColor);
  for (var i=0; i < loFollowers.length; i++){
    loFollowers[i].mUpdate();
    loFollowers[i].mDraw();
  }
}
