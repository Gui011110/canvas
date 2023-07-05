var canvas=document.getElementById("desenho");
var ctx=canvas.getContext("2d");
var cor="blue";
var bt=document.getElementById("bt");
var evento="";
var lastpositionx, lastpositiony;


canvas.addEventListener("mousedown", md);
function md(e){
   evento="md";


}
canvas.addEventListener("mouseup", mu);
function mu(e){
   evento="mu";


}
canvas.addEventListener("mouseleave", ml);
function ml(e){
   evento="ml";


}
canvas.addEventListener("mousemove", mm);
function mm(e){
  var positionx=e.clientX-canvas.offsetLeft;
  var positiony=e.clientY-canvas.offsetTop;

if(evento=="md"){ 
    ctx.beginPath();
    ctx.strokeStyle=cor;
    ctx.lineWidth=2;
    ctx.moveTo(lastpositionx, lastpositiony);
    ctx.lineTo(positionx, positiony);
    ctx.stroke();

}
lastpositionx=positionx;
lastpositiony=positiony;
}
bt.addEventListener("click",clear);
function clear(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
