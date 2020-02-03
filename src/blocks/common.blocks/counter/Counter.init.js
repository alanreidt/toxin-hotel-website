import { Counter } from "./Counter";

window.onload = function() {
  const counters = document.querySelectorAll(".js-counter");

  counters.forEach((counter) => {
    new Counter(counter);
  });
};
