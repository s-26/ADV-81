canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250 , 200 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx = canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350 , 200 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx = canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(450 , 200 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx = canvas.getContext("2d");
color="yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300 , 230 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx = canvas.getContext("2d");
color="pink";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400 , 230 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

canvas.addEventListener("mousedown",  my_mousedown);

function  my_mousedown (e)
{
    color = document.getElementById("Color").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y =e.clientY - canvas.offsetTop;
    console.log();
    circle(mouse_x, mouse_y );
}


function circle (mouse_x , mouse_y)
{

  
  ctx = canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250 , 200 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx = canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350 , 200 , 40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx = canvas.getContext("2d");
color="yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(450 , 200 , 40 , 0 , 2 * Math.PI );
ctx.stroke();
  
ctx = canvas.getContext("2d");
color="pink";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(320 , 200 , 40 , 0 , 2 * Math.PI );
ctx.stroke();
}

function clearArea()
{
    ctx.clearRect (0, 0, canvas.width, canvas.height);
    
}
