import Car from "./car.js";
import Controls from "./controls.js";

const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");

cnv.width = 200;
cnv.height = window.innerHeight;

const car = new Car(100, 200, 30, 50);

function animate() {
  cnv.height = window.innerHeight;
  //   ctx.clearRect(0, 0, cnv.width, cnv.height);
  car.draw(ctx);
  car.update();
  requestAnimationFrame(animate);
}
animate();
