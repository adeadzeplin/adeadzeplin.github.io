const box__height = 100;
const box__width = 150;
var box_kid_height;
var box_kid_width;
// console.log(window.displayWidth);
var menu_top = 50;
var menu_bottom = 0;

var layout = [about,work,projects]

let scootch = 50;
function checkUIVars(){
    for(let i=0; i < ui_list.length;i++){
        if(menu_bottom < ui_list[i].y+ui_list[i].h){
            menu_bottom = ui_list[i].y+ui_list[i].h;
        }
        if(menu_top > ui_list[i].y){
            menu_top = ui_list[i].y;
        }

    }
// console.log('UIVARS: bottom: ' + menu_bottom+ ' top: '+ menu_top);
}
function construct_main_menu(ui_list){
    const start = {
        x:20,
        y:50
    }
    // console.log(dat.fname)
    for(let i = 0;i<layout.length;i++){
        ui_list.push(new Menu_box(start.x,start.y,box__width,box__height,layout[i],true));
        // ui_list[i].mouseOver(ui_list[i].highlight);
        start.y += scootch+box__height;
        checkUIVars(ui_list[i]);

    }

    return ui_list;
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

        this.kid;
        if(with_child){
            this.txt = txt.main;
            this.kid = new Menu_box(this.startx + this.w*.6 + scootch, scootch*this.scale.y*2,(window.displayWidth*.47),window.displayHeight*2,txt);
            this.kid.highlighted = true;

        }
        else{
            this.txt = txt.body;
            // this.boxwidth = textWidth(txt.body)*this.scale.x;
        }
        this.size = 30;
        // this.txt_x = this.x + 10;
        // this.txt_y = this.y + this.size;

        // console.log(this.x + ' ' + this.y + ' ' + this.w + ' ' +this.h);
    }
    display(){
        if(this.highlighted == true){
            this.col = highlight;
            this.x = this.startx*this.scale.x - this.bulge;
            this.y = menu_height + this.starty*this.scale.y - this.bulge;
            this.w = this.boxwidth*this.scale.x + this.bulge*2;
            this.h = this.boxheight*this.scale.y + this.bulge*2;
            if(this.parent){
                this.kid.col = highlight;
                this.kid.display();
                // console.log('child: ',this.kid.boxwidth);
            }
        }
        else{
            this.col = base;
            if(this.parent){
                this.kid.col = base;
            }
            this.x = this.startx*this.scale.x;
            this.y = (menu_height + this.starty)*this.scale.y;
            this.w = this.boxwidth*this.scale.x;
            this.h = this.boxheight*this.scale.y;
        }
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);
        fill(255);
        textSize(this.size);
        text(this.txt,this.x+10,this.y+this.size);
        // console.log(this.txt.y_offset);
    }
    checkifUiclicked(){
        if((this.x <= mouseX )&& (mouseX <= this.x+this.w)){
            if((this.y <= mouseY) && (this.y + this.h >= mouseY)){
                return true;

            }
        }
        return false;
    }
    checkhighlighted(){
        // console.log('start '+ this.x + ' '+ this.w);
        this.highlighted = false;
        this.kid.highlighted = false;
        if((this.x <= mouseX )&& (mouseX <= this.x+this.w)){
            if((this.y <= mouseY) && (this.y + this.h >= mouseY)){
                this.highlighted = true;
                this.kid.highlighted = true;
                window.scrollTo(0, 0);
            }
        }
    }
    shiftUI(){
        if(menu_bottom < mouseY){
            console.log('Shift: ' + menu_bottom);
                this.starty += mouseY - menu_bottom;
                menu_top += 5;

        }
        else if((menu_top > mouseY)&&(menu_top > 50)){

            console.log('Shift: ' + menu_top);
                this.starty += mouseY - menu_top;
                menu_bottom -=5;

            // if(menu_top < 50){
            //     menu_top = 50;
            //     this.starty += 5;
            //     menu_bottom +=5;
            // }
        }
    }


}
