$(function () {
  var dropDown = $('#js-search-box__guests-dropdown');

  $('#search-box-guests-input').on('focusin', function () {
    dropDown.toggleClass('dropdown-field_is-expanded');
  });

  $('#search-box-guests-input').on('focusout', function () {
    dropDown.toggleClass('dropdown-field_is-expanded');
  });
});
