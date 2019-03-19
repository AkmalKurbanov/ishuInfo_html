$(document).ready(function () {





  // drop down menu
  $('.arrowTrigger-js').on('click', function () {
    $('.dropMnu-js').slideToggle();
  });
  // drop down menu end



  // modal windows
  $('.registration-js').on('click', function () {
    $('.registration').fadeIn();
  });
  $('#registration-tab').on('click', function () {
    $('.registration__modalWindow').css('flex-direction', 'row-reverse');
  });
  $('#signIn-tab').on('click', function () {
    $('.registration__modalWindow').css('flex-direction', 'row');
  });
  // modal windows end












});
