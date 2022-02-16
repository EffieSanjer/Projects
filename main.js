import { CountUp } from './countUp.js-master/countUp.js-master/dist/countUp.min.js'; 

window.onload = function() {
  var countUp = new CountUp('target', 2000);
  countUp.start();
}