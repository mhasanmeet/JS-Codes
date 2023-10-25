
// A Square Canvas
function drawCanvas(){
    let canvas = document.getElementById("squareCanvas");

    if(canvas.getContext){
        let ctx = canvas.getContext('2d');

        ctx.fillRect(50, 50, 100, 100);
    }
}

drawCanvas();

// A Triangle Canvas
function triangleCanvas(){
    let canvas = document.getElementById("triangleCanvas");

    if(canvas.getContext){
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(125, 25);
        ctx.lineTo(125, 125);
        ctx.fill();
    }
}

triangleCanvas();

// A Circle Canvas
function circleCanvas(){
    let canvas = document.getElementById("circleCanvas");

    if(canvas.getContext){
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
        ctx.fill();
        ctx.stroke();
    }
}

circleCanvas();