
var balllist = [];
var ui_list = [];
// var win = {
//     width:0,
//     height:0,
//     bound: 1
// };
const background_color = 50;


function setup() {
    // win.width = window.displayWidth;
    // win.height = window.displayHeight;
    createCanvas(window.displayWidth,window.displayHeight);
    background(background_color);
    balllist = initball();
    ui_list = construct_main_menu(ui_list);
}
var render_list = [ui_list,balllist];
function draw() {
    background(50,50,50);

    for(let i=0; i < ui_list.length;i++){
        ui_list[i].display();

    }
    for(let i = 0; i < balllist.length;i++){
        balllist[i].scoot();
        balllist[i].collide_with_ui(ui_list);
        balllist[i].diplay();
    }
}
function mousePressed(){
    // console.log("Click");

    if(balllist.length > MAXBALLS){
        balllist.shift();
    }
    balllist.push(addball());

    for(let i = 0;i < ui_list.length;i++){
        ui_list[i].checkhighlighted();

    }

}
function mouseMoved(){
    // console.log('moved');
    // for(let i = 0;i < ui_list.length;i++){
    //     ui_list[i].checkhighlighted();
    //
    // }
}
