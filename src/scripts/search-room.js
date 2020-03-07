import wNumb from 'wnumb';
import noUiSlider from 'nouislider';
import '../blocks/common.blocks/date-mask/date-mask.init.js';
import '../blocks/common.blocks/search-box/__dropdown/search-box__dropdown.js';


$(document).ready(function () {
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

  $(function () {
    $('#search-panel-button').on('click', function () {
      $('#search-panel').toggleClass('search__search-panel_is-open');
    });
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
