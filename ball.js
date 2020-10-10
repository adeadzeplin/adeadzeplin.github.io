var win = {
  width:0,
  height:0,
  bound: 50
};
const color_min = 50;
const color_max = 255-color_min;

class Ball {
  constructor(){
    this.x = random(win.bound, win.width-win.bound);
    this.y = random(win.bound, win.height-win.bound);
    this.diameter = 0;
    this.xvel = random(-1,1);
    this.yvel = random(-1,1);
    this.xacel = random(-1,1)/5;
    this.yacel = random(-1,1)/5;
    this.ace = .1
    this.speedlim = 1;
    this.rand_strength = random(100,2000);
    this.r = random(0,color_max)*(random(0,100)/100)+color_min;
    this.g = random(0,color_max)*(random(0,100)/100)+color_min;
    this.b = random(0,color_max)*(random(0,100)/100)+color_min;
  }
  targetmouse(){

    this.xacel = (mouseX - this.x)+ random(-this.rand_strength,this.rand_strength);
    this.yacel = (mouseY - this.y)+ random(-this.rand_strength,this.rand_strength);
    this.xacel = (this.xacel)/sqrt(((this.xacel)**2)+(this.yacel**2))/2;
    this.yacel = (this.yacel)/sqrt(((this.xacel)**2)+(this.yacel**2))/2;
    if(this.xacel > this.ace){
      this.xacel = this.ace;
    }else if (this.xacel < -this.ace) {
      this.xacel = -this.ace;
    }
    if(this.yacel >this.ace){
      this.yacel =this.ace;
    }else if (this.yacel < -this.ace) {
      this.yacel = -this.ace;
    }

  }
  scoot(){
    this.targetmouse();
    this.xvel += this.xacel;
    this.yvel += this.yacel;
    this.x += this.xvel;
    this.y += this.yvel;
    if((this.x < win.bound) || (this.x+this.diameter+win.bound>win.width)){
      this.xvel *= -1;
      this.xvel -= this.xvel / 10;
    }
    if((this.y < win.bound)||(this.y+this.diameter+win.bound>win.height)){
      this.yvel *= -1;
      this.yvel -= this.yvel / 10;
    }
    if(this.xvel > this.speedlim || this.xvel < -this.speedlim)
      this.xvel *= .98;
    if(this.yvel > this.speedlim || this.yvel < -this.speedlim)
      this.yvel *= .98;
    this.diameter = 5 + (abs(this.xvel*this.yvel))*2;
    // if (this.diameter > 300 ){
    //   this.diameter = 50;
    // }
    if (this.diameter < 5) {
      this.diameter = 5;
    }

  }
  diplay(){
    noStroke();
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
//+abs(this.xvel)
// +abs(this.yvel)
