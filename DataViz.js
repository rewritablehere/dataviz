let cubeSize = 100;
let angleX = 0;
let angleY = 0;
let startX, startY;
let isDragging = false;
let myFont;

function preload() {
  myFont = loadFont('assets/OpenSans.ttf'); // Replace 'path/to/font.ttf' with the actual path to your font file
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(myFont); // Set the loaded font
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

  // Draw the cube box(cubeSize);
  
  // Draw X-axis markings
  drawXAxisMarkings();
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

function drawXAxisMarkings() {
  // X-axis values and positions
  const xValues = [26, 31, 1, 7, 14, 21, 28, 1, 7, 14, 21];
  const xAxisY = 0; // Adjust the Y position as needed
  
  // X-axis markings
  stroke(0);
  strokeWeight(10);
  
  const xSpacing = (width - 100) / (xValues.length - 1);
  
  for (let i = 0; i < xValues.length; i++) {
    const x = 50 + i * xSpacing; // Adjust the starting X position as needed
    
    // Draw vertical line
    line(x, xAxisY, x, xAxisY + 10);
    
    // Draw value text
    textAlign(CENTER, TOP);
    noStroke();
    text(xValues[i], x, xAxisY + 20);
  }
}

