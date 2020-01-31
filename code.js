let colors = ["red", "green", "yellow", "pink", "cayan", "black", "DarkKhaki","DodgerBlue","Maroon"]
let radius = [70, 60, 50 , 40, 30]
let circles = [];

resize(canvas)  // make canvas and ctx full scrine
function resize(canvas) {
    canvas.style.height = "100vh";
    canvas.style.width = "100vw";
    let displayWidth  = canvas.clientWidth;
    let displayHeight = canvas.clientHeight;
    if (canvas.width  != displayWidth || canvas.height != displayHeight) {
      canvas.width  = displayWidth;
      canvas.height = displayHeight;
    }
}

window.requestAnimationFrame(anim);
function anim(){
    window.requestAnimationFrame(anim);
    updateCircle();
    drawCircle();
}

makeCirсle()
setInterval(() => {
    makeCirсle()
}, 5000);

setInterval(() => {
    console.log(Math.floor(Math.random()*(colors.length)))
}, 1000);

function makeCirсle(){
    if(circles.length<20){
        circles.push({
            x: 0,
            y: 0,
            speedX: 5,
            speedY:5,
            radius: radius[Math.floor(Math.random()*(radius.length))],
            color: colors[Math.floor(Math.random()*(colors.length))],
        });

    }
}

function updateCircle(){

    for(var i in circles){
        var part = circles[i];
        //if touch bottom wall
        if((part.y+part.radius) >canvas.height){
            part.speedY = part.speedY * (-1);
        }
        //if touch right wall
        if((part.x+part.radius)>canvas.width){
            part.speedX = part.speedX * (-1)
        }
        //if touch top wall
        if((part.y-part.radius)<=0){
            part.speedY = 5
        }
        //if touch left wall
        if((part.x-part.radius)<=0){
            part.speedX = 5
        }

        part.x += part.speedX;
        part.y += part.speedY; 
    }
    
}

function drawCircle(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d'); 
    ctx.fillStyle='white';
    ctx.fillRect(0,0,canvas.width,canvas.height); 
    for(var i in circles){
        var part = circles[i];
        ctx.beginPath();
        ctx.arc(part.x,part.y, part.radius, 0, Math.PI*2); 
        ctx.closePath();
        ctx.fillStyle=part.color;
        ctx.fill();
    }
}