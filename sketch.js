// The setup function only happens once
function setup() {
  createCanvas(500, 500); // create a 500px X 500px canvas
}

// The draw function happens over and over again
function draw() {
  background(70, mouseX, 20);

  // First ellipse that follows the mouse
  stroke(50, 200, 5);
  strokeWeight(2);
  fill(255, 255, 127, 100);
  ellipse(mouseX, mouseY, 90, 90); // Fixed the dimensions

  // Random ellipses
  fill(255, 0, 0); // Red color
  strokeWeight(0);
  ellipse(random(width), random(height), 50, 50);

  // Random triangle
  fill(0, 255, 0); // Green color
  strokeWeight(5);
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));

  // Random small ellipses
  fill(0, 0, 255); // Blue color
  strokeWeight(12);
  ellipse(random(width), random(height), 20, 77);
}