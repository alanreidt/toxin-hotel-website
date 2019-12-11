import { disablePageScroll, enablePageScroll } from 'scroll-lock';


/* Vanilla JS */
// require('../blocks/common.blocks/topline/topline.js');

const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menu-button');
const menuOverlay = document.querySelector('#menu-overlay');

menuButton.addEventListener('click', function(e) {
  menu.classList.toggle('topline__reception_is-active');
  menuOverlay.classList.toggle('menu-overlay_is-active');

  if ( menuButton.classList.contains('topline-hamburger_is-clicked') ) {
    enablePageScroll(menu);
  } else {
    disablePageScroll(menu);
  }

  menuButton.classList.toggle('topline-hamburger_is-clicked');
  e.stopPropagation();
});

menuOverlay.addEventListener('click', function(e) {
  menu.classList.toggle('topline__reception_is-active');
  menuButton.classList.toggle('topline-hamburger_is-clicked');
  menuOverlay.classList.toggle('menu-overlay_is-active');
  enablePageScroll(menu);
  e.stopPropagation();
});
