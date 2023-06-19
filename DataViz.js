let years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
let population = [100, 120, 150, 180, 200, 220, 240, 260, 280, 300, 320];
let graduates = [10, 12, 15, 18, 20, 22, 24, 26, 28, 30, 32];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  // Draw x-axis
  stroke(0);
  line(50, height - 50, width - 50, height - 50);

  // Draw y-axis for population
  stroke(255, 0, 0);
  line(50, height - 50, 50, 50);

  // Draw y-axis for graduates
  stroke(0, 0, 255);
  line(width - 50, height - 50, width - 50, 50);

  // Plot population data
  stroke(255, 0, 0);
  for (let i = 0; i < years.length; i++) {
    let x = map(years[i], years[0], years[years.length - 1], 50, width - 50);
    let y = map(population[i], min(population), max(population), height - 50, 50);
    point(x, y);
  }

  // Plot graduates data
  stroke(0, 0, 255);
  for (let i = 0; i < years.length; i++) {
    let x = map(years[i], years[0], years[years.length - 1], 50, width - 50);
    let y = map(graduates[i], min(graduates), max(graduates), height - 50, 50);
    point(x, y);
  }
}