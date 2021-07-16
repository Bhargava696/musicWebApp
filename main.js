music = "";
music2 = "";
function preload(){
    music = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}
function setup() {
    can = createCanvas(500, 450);
    can.position(440, 300);
    cam = createCapture(VIDEO);
    cam.hide();
}

function draw() {
    image(cam, 0, 0, 500, 450);
}
