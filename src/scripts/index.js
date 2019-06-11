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
    var datePickerOutput = $("#js-datepicker-output").datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      prevText: '',
      nextText: '',
      showButtonPanel: true,
      closeText: 'Применить',
      currentText: 'Очистить',
      minDate: 0
    }).hide();

    $.datepicker.setDefaults( $.datepicker.regional[ 'ru' ] );

    $(".datepicker__input").on("focus", function () {
      datePickerOutput.show();
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

  $(function () {
    var dropDown = $('#dropdown-facilities');

    $('#facilities').on('focusin', function () {
      dropDown.toggleClass('dropdown_is-expanded');
    });

    $('#facilities').on('focusout', function () {
      dropDown.toggleClass('dropdown_is-expanded');
    });
  });

  $(function () {
    var quantity = $('.dropdown__quantity').html();
    var maxValue = '5';

    if (quantity === '0') {
      $('.dropdown__button_remove').addClass('dropdown__button_is-disabled');
    }

    if (quantity === maxValue) {
      $('.dropdown__button_add').addClass('dropdown__button_is-disabled');
    }
  });
});
