import { Counter } from "./Counter";

window.addEventListener("load", handleWindowLoad());

function handleWindowLoad() {
  const counters = document.querySelectorAll(".js-counter");

  counters.forEach((counter) => {
    new Counter(counter);
  });
};
