function setup() {
    canvas=createCanvas(1440, 800);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
    background(0);
    strokeWeight(20);
    frameRate(4);
  }
  
  function draw() {
    for (let i = 0; i < width; i++) {
      let r = random(255);
      stroke(r);
      line(i, 0, i, height);
    }
  }