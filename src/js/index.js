import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

$(document).ready(function () {
  $(".click").click(function (event) {
    event.stopPropagation();
    $(".showup").slideToggle("fast");
  });
  $(".showup").on("click", function (event) {
    event.stopPropagation();
  });
});

$(document).on("click", function () {
  $(".showup").hide();
});
