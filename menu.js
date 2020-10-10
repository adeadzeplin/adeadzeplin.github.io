const temp = 100;

class MainMenu_box{
    constructor(){
        this.x = temp;
        this.y = temp;
        this.w = temp;
        this.h = temp;
        this.text;
        this.kid;
    }
    display(){
        fill(temp);
        rect(this.x, this.y, this.w, this.h);
    }


}

function construct_main_menu(ui_list){
    
}
