function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('blue')
  for(var x = 10; x < 400; x+=20){
    for(var y = 10; y < 400; y+=20){
    ellipse(x, y, 20, 20)
    }
  }
  
}
