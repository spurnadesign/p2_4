let c = [];
let s = 0.9; 
let value;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 20; i++) {
    c[i] = new Cadira(random(width), random(-300, height));
  }

  value = color(0, 0, 230);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // recolocar sillas para que sigan dentro del nuevo tamaño
  for (let i = 0; i < c.length; i++) {
    c[i].x = random(width);
    c[i].y = random(-300, height);
  }
}

function mouseClicked() {
  s = random(0.2, 1.5);
  value = color(random(255), random(255), random(255));
}

function draw() {
  background(255, 168, 0);

  for (let i = 0; i < c.length; i++) {
    c[i].show();
    c[i].move();
  }
}

class Cadira {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    push();
    translate(this.x, this.y);
    scale(s);
    stroke(0);
    strokeWeight(0.5);
    fill(value);

    rect(10, 235, 15, 60); 
    arc(0, 190, 130, 100, 0, QUARTER_PI * 3, CHORD);
    scale(s);
    rect(0, 300, 70, 30);
    rect(75, 300, 70, 30);
    scale(s);
    rect(70, 338, 15, 50);
    rect(0, 400, 150, 10);
    scale(s);
    arc(30, 430, 40, 40, 0, PI + QUARTER_PI, CHORD);
    arc(130, 430, 40, 40, 0, PI + QUARTER_PI, CHORD);

    pop();
  }

  move() {
    this.y += 2;
    if (this.y > height) this.y = -300;
  }
}