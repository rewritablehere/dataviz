let x1 = [0, 0, 10, 0, 0, 0, 0, 0, 0, 0];
let y1 = [300, 300, 0, 300, 300, 300, 300, 300, 300, 300];
let x2 = [300, 0, 300, 300, 300, 300, 300, 300, 300, 300];
let y2 = [300, 0, 10, 300, 300, 300, 300, 300, 300, 300];

function setup() {
  createCanvas(1440, 1080, WEBGL); 
}

function draw() {
  background(102);
  let radius = width * 10.5;

  
  orbitControl();
  normalMaterial();
  
  translate(-100, -height/4, 0);

      push();

      stroke(255);
      for (let p = 0; p < x1.length; p++){
      line(x1[p], y1[p], y2[p], y2[p]);
      }
      
      pop();

}
