$(function () {
  var datePickerOutput = $("#js-search-box__date-output").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    prevText: '',
    nextText: '',
    showButtonPanel: true,
    closeText: 'Применить',
    currentText: 'Очистить',
    minDate: 0
  }).hide();

  $(".js-search-box__date-input").on("focusin", function () {
    datePickerOutput.show();
  });

  $(".js-search-box__date-input").on("focusout", function () {
    datePickerOutput.hide();
  });
});
