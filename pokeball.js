class Pokeball {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }
  
  display() {
    //pokeball
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  strokeWeight(2)
  fill(255)
 arc(50, 50, width * .2, height * .2, 0, 180);
  fill(255, 0, 0)
 arc(50, 50, width * .2, height * .2, 180, 0);
  fill(0);
  circle(width * .125, width * .125, width *.06);
  fill(255);
  circle(width * .125, width * .125, width *.04);
  pop(0);
  }
  
  move(){
    
    //this.angle++ is shorthand for this.angle = this.angle + 1
    this.rotation++;
    
    if (this.yPos <= height * 1.08){
    //this.yPos = this.yPos + 2;
    //shorthand below is +=
    this.yPos += 2;
    } else {
      this.yPos = -height * .4;
    }
  }
  
}