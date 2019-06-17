$(function () {
  var inputField = $('.input-field_dropdown');

  $('.input-field__input').on('focusin focusout', function () {
    // apply to particular element
    inputField.toggleClass('input-field_dropdown_focus');
  });

  $('.js-input-masked-date').toArray().forEach(function(field) {
    new Cleave(field, {
      date: true,
      delimiter: '.',
      dateMin: '2019-01-01',
      dateMax: '2022-12-31',
      datePattern: ['d', 'm', 'Y']
    });
  });
});
