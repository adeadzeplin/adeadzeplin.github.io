var menu_height = 0;
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
    createCanvas(window.displayWidth,window.displayHeight*1.5);
    background(background_color);
    balllist = initball();
    ui_list = construct_main_menu(ui_list);
}
var render_list = [ui_list,balllist];
function draw() {
    background(50,50,50);

    checkUIVars();
    for(let i=0; i < ui_list.length;i++){

        ui_list[i].shiftUI();

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

    let ui_check = false;
    for(let i = 0;i < ui_list.length;i++){
        if(ui_list[i].checkifUiclicked()){
            ui_check = true;
            break;
        }
    }
    if(ui_check){
        for(let i = 0;i < ui_list.length;i++){
            ui_list[i].checkhighlighted();
        }
    }
}

// function mouseWheel(event) {
//   print(event.delta);
//   //move the square according to the vertical scroll amount
//   menu_height += event.delta;
//   //uncomment to block page scrolling
//   //return false;
// }

function mouseMoved(){



    // console.log('moved');
    // for(let i = 0;i < ui_list.length;i++){
    //     ui_list[i].checkhighlighted();
    //
    // }
}
