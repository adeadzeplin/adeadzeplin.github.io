function include(file) {
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./ball.js');

var ball_list = [];
const BALLCOUNT = 100;

function setup() {
  win.width = window.displayWidth;
  win.height = window.displayHeight
  createCanvas(win.width,win.height);
  background(250,250,100);

  for(let i = 0;i <BALLCOUNT;i++){
    ball_list.push(new Ball());
  }


}



function draw() {
  background(250,250,100);

  for(let i = 0; i < ball_list.length;i++){
    ball_list[i].scoot();
    ball_list[i].diplay();
  }
}
