$(function () {
  var datePickerOutput = $("#datepicker__output").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    prevText: '',
    nextText: '',
    showButtonPanel: true,
    closeText: 'Применить',
    currentText: 'Очистить',
    minDate: 0
  }).hide();

  $(".datepicker__input").on("focusin", function () {
    datePickerOutput.show();
  });

  $(".datepicker__input").on("focusout", function () {
    datePickerOutput.hide();
  });

  datePickerOutput.on("change", function () {
    // there would be code
  });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }
});
