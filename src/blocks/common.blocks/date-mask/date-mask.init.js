import Cleave from 'cleave.js';

window.addEventListener("load", () => {
  const now = new Date();
  const nowISOString = now.toISOString();
  const afterTwoYearsFromNow = new Date(now.getFullYear() + 2, now.getMonth(), now.getDate());
  const afterTwoYearsFromNowISOString = afterTwoYearsFromNow.toISOString();

  const dateMasks = document.querySelectorAll(".js-date-mask");

  dateMasks.forEach((dateMask) => {
    new Cleave(dateMask, {
      date: true,
      delimiter: '.',
      dateMin: nowISOString,
      dateMax: afterTwoYearsFromNowISOString,
      datePattern: ['d', 'm', 'Y'],
    });
  });
});
