const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menu-button');
const menuOverlay = document.querySelector('#menu-overlay');

menuButton.addEventListener('click', function(e) {
  menu.classList.toggle('topline__reception_is-active');
  menuButton.classList.toggle('topline-hamburger_is-clicked');
  menuOverlay.classList.toggle('menu-overlay_is-active');
  scrollLock.disablePageScroll(menu);
  e.stopPropagation();
});

menuOverlay.addEventListener('click', function(e) {
  menu.classList.toggle('topline__reception_is-active');
  menuButton.classList.toggle('topline-hamburger_is-clicked');
  menuOverlay.classList.toggle('menu-overlay_is-active');
  scrollLock.enablePageScroll(menu);
  e.stopPropagation();
});
