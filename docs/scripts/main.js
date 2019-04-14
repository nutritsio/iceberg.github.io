"use strict";

$('.phones .dropdown').click(function () {
  $('.phones .dropdown .dropdown-menu').toggleClass('show');
});
$('.phones .dropdown .dropdown-menu .dropdown-item').click(function () {
  $('.phones .dropdown .dropdown-toggle').text(this.innerHTML);
}); // lightbox.option({
//   'resizeDuration': 200,
//   'wrapAround': true
// });
//# sourceMappingURL=main.js.map
