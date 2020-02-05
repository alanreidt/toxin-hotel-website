import 'cleave.js';


const maskedDateInputs = document.querySelectorAll(".js-input-masked-date");

maskedDateInputs.forEach( (maskedDateInput) => {
  new Cleave(maskedDateInput, {
    date: true,
    delimiter: '.',
    dateMin: '2019-01-01',
    dateMax: '2022-12-31',
    datePattern: ['d', 'm', 'Y'],
  });
});
