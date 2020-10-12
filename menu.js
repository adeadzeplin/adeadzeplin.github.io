const box__height = 200;
const box__width = 200;
const box_kid_height = 500;
const box_kid_width = 1000;
var layout = [dat.about,dat.work,dat.projects]

let scootch = 50;

function construct_main_menu(ui_list){
    const start = {
        x:50,
        y:50
    }

    // console.log(dat.fname)
    for(let i = 0;i<layout.length;i++){
        ui_list.push(new Menu_box(start.x,start.y,box__width,box__height,layout[i],true));
        // ui_list[i].mouseOver(ui_list[i].highlight);
        start.y += scootch+box__height;
    }

    return ui_list;
}



class Txt {
    constructor(x,y,txt, size=30){
        this.txt = txt;
        this.x = x;
        this.y = y;
        this.size = size;
        this.y_offset = this.y + this.size;
        this.x_offset = this.x + 10;
    }
}
const base = background_color;
const highlight = 80;

class Menu_box{
    constructor(startx,starty,width,height,txt,with_child=false){
        this.scale = {
            x:window.displayWidth/(window.displayWidth*window.displayHeight)*1000,
            y:window.displayHeight/(window.displayWidth*window.displayHeight)*1000
        }
        this.parent = with_child;
        this.startx = startx;
        this.starty = starty;
        this.x = startx*this.scale.x;
        this.y = starty*this.scale.y;
        this.bulge = 10;
        this.highlighted = false;


        this.boxheight = height;
        this.boxwidth = width;
        this.col = base;

        this.w = this.boxwidth*this.scale.x;
        this.h = this.boxheight*this.scale.y;
        this.txt = new Txt(this.x,this.y,txt);

        this.kid;
        if(with_child){
            this.kid = new Menu_box(this.startx + this.w + scootch, scootch*this.scale.y*2,box_kid_width,box_kid_height,'Template Text');
            this.kid.highlighted = true;

        }
        // console.log(this.x + ' ' + this.y + ' ' + this.w + ' ' +this.h);
    }
    display(){
        if(this.highlighted == true){
            this.col = highlight;
            this.x = this.startx*this.scale.x - this.bulge;
            this.y = this.starty*this.scale.y - this.bulge;
            this.w = this.boxwidth*this.scale.x + this.bulge*2;
            this.h = this.boxheight*this.scale.y + this.bulge*2;
            if(this.parent){
                this.kid.col = highlight;
                this.kid.display();
                console.log('child: ',this.kid.boxwidth);
            }
        }
        else{
            this.col = base;
            if(this.parent){
                this.kid.col = base;
            }
            this.x = this.startx*this.scale.x;
            this.y = this.starty*this.scale.y;
            this.w = this.boxwidth*this.scale.x;
            this.h = this.boxheight*this.scale.y;
        }
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);
        fill(255);
        textSize(this.txt.size);
        text(this.txt.txt,this.txt.x_offset,this.txt.y_offset);
        // console.log(this.txt.y_offset);
    }

    checkhighlighted(){
        // console.log('start '+ this.x + ' '+ this.w);
        this.highlighted = false;
        this.kid.highlighted = false;
        if((this.x <= mouseX )&& (mouseX <= this.x+this.w)){
            if((this.y <= mouseY) && (this.y + this.h >= mouseY)){
                this.highlighted = true;
                this.kid.highlighted = true;

            }
        }
        // console.log(this.txt.txt,this.highlighted);


    }


}
