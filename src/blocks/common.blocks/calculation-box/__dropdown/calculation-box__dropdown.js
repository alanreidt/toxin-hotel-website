$(function () {
  var dropDown = $('#js-calculation-box__guests-dropdown');

  $('#calculation-box-guests-input').on('focusin', function () {
    dropDown.toggleClass('dropdown-field_is-expanded');
  });

  $('#calculation-box-guests-input').on('focusout', function () {
    dropDown.toggleClass('dropdown-field_is-expanded');
  });
});
