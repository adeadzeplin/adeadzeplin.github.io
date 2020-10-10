
var balllist = [];
var ui_list = [];

function setup() {
    win.width = window.displayWidth;
    win.height = window.displayHeight;
    createCanvas(win.width,win.height);
    background(50,50,50);
    balllist = initball();
    ui_list.push(new MainMenu_box());
}

function draw() {
    background(50,50,50);
    for(let i = 0; i < balllist.length;i++){
        balllist[i].scoot();
        balllist[i].collide_with_ui(ui_list);
        balllist[i].diplay();
    }
    for(let i=0; i < ui_list.length;i++){
        ui_list[i].display();

    }
}
function mousePressed(){
    console.log("Click");
    balllist.push(addball());
    balllist.shift();
}
