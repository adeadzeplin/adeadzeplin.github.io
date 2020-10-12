
const color_min = 50;
const color_max = 200;

function normalizeAVec(x,y){
    let leng = sqrt(x**2+y**2);
    return x/leng;
}

class Ball {
    constructor(init_x = random(0,window.displayWidth), init_y = random(0,window.displayHeight) ){
        // console.log(init_x + ' ' + init_y );
        this.x = init_x;
        this.y = init_y;

        this.r = random(0,color_max)*(random(0,100)/100)+color_min;
        this.g = random(0,color_max)*(random(0,100)/100)+color_min;
        this.b = random(0,color_max)*(random(0,100)/100)+color_min;


        this.diameter = 0;
        this.diameter_base = random(5,20);
        this.diameter_max = 100;
        this.xvel = random(-1,1);
        this.yvel = random(-1,1);
        this.xacel = random(-1,1)/5;
        this.yacel = random(-1,1)/5;
        this.ace = .1
        this.speedlim = .3;
        this.rand_strength = abs(random((this.b-(this.g*2+this.r*4)+100),((this.b-this.g*2-this.r*4)+100)*2));
    }
    targetmouse(){
        // mouse.x = mouseX;
        // mouse.y = mouseY;
        this.xacel = (mouseX - this.x)+ random(-this.rand_strength,this.rand_strength);
        this.yacel = (mouseY - this.y)+ random(-this.rand_strength,this.rand_strength);
        this.xacel = normalizeAVec(this.xacel,this.yacel)/2;
        this.yacel = normalizeAVec(this.yacel,this.xacel)/2;
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
        // if((mouseX != mouse.x) || (mouseY != mouse.y)){
        this.targetmouse();
        // }
        this.xvel += this.xacel;
        this.yvel += this.yacel;
        this.x += this.xvel;
        this.y += this.yvel;
        // if((this.x < win.bound) || (this.x+this.diameter+win.bound>win.width)){
        //     this.xvel *= -1;
        //     this.xvel -= this.xvel / 10;
        // }
        // if((this.y < win.bound)||(this.y+this.diameter+win.bound>win.height)){
        //     this.yvel *= -1;
        //     this.yvel -= this.yvel / 10;
        // }
        if(this.xvel > this.speedlim || this.xvel < -this.speedlim)
            this.xvel *= .99;
        if(this.yvel > this.speedlim || this.yvel < -this.speedlim)
            this.yvel *= .99;
        this.diameter = this.diameter_base + (abs(this.xvel*this.yvel))*2;
        if (this.diameter > this.diameter_max){
                this.diameter = this.diameter_max;
        }
    }
    collide(temp){
        if(temp.col != background_color){
            if ((this.x + (this.diameter+abs(this.xvel))/2 > temp.x) && (this.x <temp.x + temp.w+(this.diameter+abs(this.xvel))/2)) {
                if ((this.y + (this.diameter+abs(this.yvel))/2 > temp.y) && (this.y <temp.y + temp.h+(this.diameter+abs(this.yvel))/2)) {
                    //COLLISION
                    let depthx = ((this.x)-(temp.x+temp.w/2))*1.1;
                    let depthy = ((this.y)-(temp.y+temp.h/2))*1.1;
                    // console.log(depthx);
                    this.xvel+= normalizeAVec(depthx,depthy)*2;
                    this.yvel+= normalizeAVec(depthy,depthx*2);
                    // this.x = temp.x+temp.w/2+depthx;
                    // this.y = temp.y+temp.h/2+depthy;
                }
            }
        }
    }
    collide_with_ui(list_of_ui){
        var temp;
        for(var i = 0; i < list_of_ui.length; i++){
            temp = list_of_ui[i];
            this.collide(temp);
            if(temp.parent){
                this.collide(temp.kid);
            }
        }
    }

    diplay(){
        // noStroke();
        // stroke('white');
        fill(this.r,this.g,this.b);
        ellipse(this.x, this.y, this.diameter+abs(this.xvel), this.diameter+abs(this.yvel));
    }
}

function addball(){
    return new Ball(mouseX,mouseY);
}
const MAXBALLS = 100;
function initball(){
    const BALLCOUNT = 1;
    var ball_list = [];
    for(let i = 0;i <BALLCOUNT;i++){
        ball_list.push(new Ball());
    }
    return ball_list;
}
