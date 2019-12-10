/* Additon of 3rd party labraries */
var jquery = require('jquery');
window.$ = window.jQuery = jquery;
require('jquery-ui-dist/jquery-ui.js');
import 'cleave.js';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
require('../blocks/common.blocks/input-field/input-field.js');
require('../blocks/common.blocks/dropdown-field/dropdown-field.js');
require('../blocks/common.blocks/search-box/__datepicker/search-box__datepicker.js');

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
