function setup() {
    canvas=createCanvas(1420, 800);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}
  
  function draw() {
    background(220);
    draw=function(){
    fill(mouseX, mouseY, 255);
    ellipse(mouseX, mouseY, 50, 50);
    }
  }