let x = 0;
const setup = () => {
  createCanvas(200, 200);

  setTimeout(() => {
    rainbow();
  }, 3000);
};

const rainbow = () => {
  createP("rainbow");
};

const draw = () => {
  background(51);
  stroke(255);
  line(x, 0, x, height);

  x = x + 3;
  if (x > width) {
    x = 0;
  }
};
