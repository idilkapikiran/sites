function setup() {
    canvas=createCanvas(1440, 800);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}
  
  function draw() {
    background(200);
    draw=function(){
    let rand_color = random(255);
    fill(mouseX, mouseY, rand_color);
    let rand_size = random(60);
    ellipse(mouseX, mouseY, rand_size, rand_size);
    }
  }