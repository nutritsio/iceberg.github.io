
$('.phones .dropdown').click(function(){
    $('.phones .dropdown .dropdown-menu')
      .toggleClass('show');
  });
  
  $('.phones .dropdown .dropdown-menu .dropdown-item').click(function () {
  
    $('.phones .dropdown .dropdown-toggle').text(this.innerHTML);
  });
  
//# sourceMappingURL=main.js.map
