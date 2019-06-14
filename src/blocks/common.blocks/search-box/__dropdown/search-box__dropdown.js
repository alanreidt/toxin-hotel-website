$(function () {
  var dropDown = $('#search-box__dropdown');

  $('#search-box__guests-input').on('focusin', function () {
    dropDown.toggleClass('dropdown_is-expanded');
  });

  $('#search-box__guests-input').on('focusout', function () {
    dropDown.toggleClass('dropdown_is-expanded');
  });
});
