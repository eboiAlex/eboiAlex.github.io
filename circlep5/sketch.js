function setup() {
  //Looks clean
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(0, 200, 200);
  }
  rect(mouseX, mouseY, 80, 80);
}