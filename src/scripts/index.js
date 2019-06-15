/* Additon of 3rd party labraries */
import '../../node_modules/jquery-ui-dist/jquery-ui.css';
var jquery = require('jquery');
window.$ = window.jQuery = jquery;
require('jquery-ui-dist/jquery-ui');
// import datepicker's language packages
require('../blocks/common.blocks/datepicker/i18n/datepicker-zh-CN.js');
require('../blocks/common.blocks/datepicker/i18n/datepicker-fr.js');
require('../blocks/common.blocks/datepicker/i18n/datepicker-ru.js');
import wNumb from 'wnumb';
import noUiSlider from 'nouislider';
import '../../node_modules/nouislider/distribute/nouislider.css';

/* JQuery */

$(document).ready(function () {
  // addition of blocks
  require('../blocks/common.blocks/datepicker/datepicker.js');
  require('../blocks/common.blocks/dropdown-field/dropdown-field.js');
  require('../blocks/common.blocks/search-box/__datepicker/search-box__datepicker.js');
  require('../blocks/common.blocks/search-box/__dropdown/search-box__dropdown.js');

  $.datepicker.setDefaults($.datepicker.regional['ru']);

  $(function () {
    var dropDown = $('#facilities-additional-dropdown');

    $('#checkbox-dropdown').on('change', function () {
      dropDown.toggleClass('checkbox-dropdown_is-expanded');
    });
/*
    $('#checkbox-dropdown').on('focusout', function () {
      dropDown.toggleClass('dropdown_is-expanded');
    }); */
  });
});

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
