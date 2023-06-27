let cubeSize = 100;
let angleX = 0;
let angleY = 0;
let startX, startY;
let isDragging = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(220);

  if (isDragging) {
    let dx = mouseX - startX;
    let dy = mouseY - startY;

    angleX += dx * 0.01;
    angleY += dy * 0.01;

    startX = mouseX;
    startY = mouseY;
  }

  rotateX(angleY);
  rotateY(angleX);

  // Draw axes
  drawAxes();

  // Draw the cube
  box(cubeSize);
}

function drawAxes() {
  // X-axis (red)
  stroke(255, 0, 0);
  line(0, 0, 0, 100, 0, 0);

  // Y-axis (green)
  stroke(0, 255, 0);
  line(0, 0, 0, 0, 100, 0);

  // Z-axis (blue)
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, 100);
}

function mousePressed() {
  startX = mouseX;
  startY = mouseY;
  isDragging = true;
}

function mouseReleased() {
  isDragging = false;
}

function windowResized() {
  // Resize the canvas when the window is resized
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}
