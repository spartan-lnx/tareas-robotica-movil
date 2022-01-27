class Brazo{
    constructor(x=0,y=0, l1=200, l2=200, angulol1=90,angulol2=90,color=[255, 51, 78]){
        this.x = x;
        this.y = y;
        this.l1 = l1;
        this.l2 = l2;
        this.angulol1 = angulol1;
        this.angulol2 = angulol2;
        this.color = color;
    }

    dibujar(){
        translate(this.x, this.y);
        stroke("black");
        strokeWeight(6);
        rotate(-this.angulol1);
        push();
        fill(255, 194, 97);
        circle(0, 0, 30);
        pop();
        fill(this.color[0],this.color[1],this.color[2]);
        rect(20, -15, this.l1, 30);
        translate(this.l1+38,0);
        rotate(this.angulol1 - this.angulol2);
        push();
        fill(255, 194, 97);
        circle(0, 0, 30);
        pop();
        rect(20,-15,this.l2,30);
    }
}

let brazo;
let sliderangle1;
let sliderangle2;
let a;
function setup(){
    createCanvas(windowWidth,windowHeight);
    //rectMode(CENTER);
    angleMode(DEGREES);
    sliderangle1 = createSlider(0, 180, 0, 1);
    sliderangle2 = createSlider(0,360,0,1);
    sliderangle1.position(80, 80);
    sliderangle2.position(80, 100);
    a = 0;
    brazo = new Brazo(x=windowWidth/2,y=windowHeight-80,l1=400,l2=300);
}

function draw() {
    background(23,26,31);
    brazo.angulol1 = sliderangle1.value();
    brazo.angulol2 = a;
    a = (a+1)%360;
    brazo.dibujar();
}
