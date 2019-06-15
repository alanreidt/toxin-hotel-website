$(function () {
  var dropDown = $('#js-dropdown-field__content');

  $('#dropdown-field-input').on('focusin', function () {
    dropDown.toggleClass('dropdown-field_is-expanded');
  });

  $('#dropdown-field-input').on('focusout', function () {
    dropDown.toggleClass('dropdown-field_is-expanded');
  });
});

$(function () {
  var quantity = $('.dropdown-field__quantity').html();
  var maxValue = '5';

  if (quantity === '0') {
    $('.dropdown-field__button_remove').addClass('dropdown-field__button_is-disabled');
  }

  if (quantity === maxValue) {
    $('.dropdown-field__button_add').addClass('dropdown-field__button_is-disabled');
  }
});
