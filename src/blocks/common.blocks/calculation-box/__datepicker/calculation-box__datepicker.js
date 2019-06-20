$(function () {
  var datePickerOutput = $("#js-calculation-box__date-output").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    prevText: '',
    nextText: '',
    showButtonPanel: true,
    closeText: 'Применить',
    currentText: 'Очистить',
    minDate: 0
  }).hide();

  $(".js-calculation-box__date-input").on("focusin", function () {
    datePickerOutput.show();
  });

  $(".js-calculation-box__date-input").on("focusout", function () {
    datePickerOutput.hide();
  });
});
