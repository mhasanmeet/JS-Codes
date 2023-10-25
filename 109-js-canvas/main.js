//Get HTMl canvas element
const canvas = document.getElementById("canvas")

// Get canvas context
const ctx = canvas.getContext('2d');

// Get user browser height & width
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

function setPosition(e){
    setPosition.x = e.clientX;
    setPosition.y = e.clientY;
}

function draw(e){

    if(e.buttons !== 1){
        return
    }

    //set drawing color & style
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#fff';
    ctx.lineCap = 'round';

    ctx.beginPath(); //begin
    ctx.moveTo(setPosition.x, setPosition.y); //from
    setPosition(e);
    ctx.lineTo(setPosition.x, setPosition.y); //to

    ctx.stroke(); //draw it
}

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
