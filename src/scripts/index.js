import '../../node_modules/jquery-ui-dist/jquery-ui.css';
var jquery = require('jquery');
window.$ = window.jQuery = jquery;
require('jquery-ui-dist/jquery-ui');
require('../blocks/common.blocks/datepicker/i18n/datepicker-zh-CN.js');
require('../blocks/common.blocks/datepicker/i18n/datepicker-fr.js');
require('../blocks/common.blocks/datepicker/i18n/datepicker-ru.js');
import wNumb from 'wnumb';
import noUiSlider from 'nouislider';
import '../../node_modules/nouislider/distribute/nouislider.css';


/* noUiSlider */

var rangeSlider = document.getElementById('js-range-slider__input');
var rangeSliderOutput = document.getElementById('js-range-slider__output');
var rangeSliderValues;
var rangeSliderRange = '';

noUiSlider.create(rangeSlider, {
  start: [5000, 10000],
  step: 500,
  margin: 500,
  // orientation: 'vertical',
  connect: true,
  range: {
    'min': 0,
    'max': 15000
  },
  ariaFormat: wNumb({
    decimals: 0
  }),
  format: wNumb({
    decimals: 0,
    thousand: ' ',
    suffix: '₽'
  })
});

rangeSlider.noUiSlider.on('update', function () {
  rangeSliderValues = rangeSlider.noUiSlider.get();

  rangeSliderRange = rangeSliderValues[0] + '–' + rangeSliderValues[1];

  rangeSliderOutput.innerHTML = rangeSliderRange;
});

/*
rangeSlider.noUiSlider.on('update', function () {
  rangeSliderValues = rangeSlider.noUiSlider.get();

  for (var i = 0; i < rangeSliderValues.length; i++) {
    rangeSliderValues[i] = rangeSliderValues[i].slice(0, -3) + '₽';
  }

  rangeSliderRange = rangeSliderValues[0] +'–'+ rangeSliderValues[1];

  rangeSliderOutput.innerHTML = rangeSliderRange;
}); */

/* JQuery */

$(document).ready(function () {

  $(function () {
    $.datepicker.setDefaults( $.datepicker.regional[ 'ru' ] );

    $.datepicker.setDefaults({
      showOtherMonths: true,
      selectOtherMonths: true,
      showButtonPanel: true,
      closeText: 'Применить',
      currentText: 'Очистить'
    });

    var dateFormat = "dd.mm.yy",
      from = $("#from-date")
        .datepicker({
          // showButtonPanel: true
          /* firstDay: 1,
          showOtherMonths: true,
          selectOtherMonths: true,
          showButtonPanel: true,
          closeText: 'Применить',
          currentText: 'Очистить',
          dateFormat: dateFormat */

          minDate: 0
        })
        .on("change", function () {
          to.datepicker("option", "minDate", getDate(this));
        }),
      to = $("#to-date")
        .datepicker({
          // showButtonPanel: true
          /* firstDay: 1,
          showOtherMonths: true,
          selectOtherMonths: true,
          showButtonPanel: true,
          closeText: 'Применить',
          currentText: 'Очистить',
          dateFormat: dateFormat */

          minDate: 1
        })
        .on("change", function () {
          from.datepicker("option", "maxDate", getDate(this));
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
});
