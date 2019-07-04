$(function () {
  var menu = $('#menu');
  var menuButton = $('#menu-button');

  $('.page__body').on('click', function () {
    // if (menuButton.hasClass('topline__menu_is-active')) {
    //   menu.toggleClass('topline__reception_is-active');
    //   menuButton.toggleClass('topline__menu_is-active');
    // }
  });

  $(menuButton).on('click', function () {
    menu.toggleClass('topline__reception_is-active');
    menuButton.toggleClass('topline__menu_is-active');
  });
});
