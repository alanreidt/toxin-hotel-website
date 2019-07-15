$(function () {
  var menu = $('#menu');
  var menuButton = $('#menu-button');
  var menuOverlay = $('#menu-overlay');
  var page = $('#page');

  $(menuButton).on('click', function () {
    menu.toggleClass('topline__reception_is-active');
    menuButton.toggleClass('menu-button_is-clicked');
    menuOverlay.toggleClass('menu-overlay_is-active');
    page.toggleClass('page_is-unscrollable');
  });

  $(menuOverlay).on('click', function () {
    menu.toggleClass('topline__reception_is-active');
    menuButton.toggleClass('menu-button_is-clicked');
    menuOverlay.toggleClass('menu-overlay_is-active');
    page.toggleClass('page_is-unscrollable');
  });
});
