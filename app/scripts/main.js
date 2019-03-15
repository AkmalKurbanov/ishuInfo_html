$(document).ready(function () {





  // drop down menu
  $('.arrowTrigger-js').on('click', function () {
    // $('.dropMnu-js').slideToggle();
    $(this).parent().parent().find('.dropMnu-js').slideToggle();
  });

  $(document).mouseup(function (e) {
    var div = $('.dropMnu-js');
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      div.slideUp();
    }
  });
  // drop down menu end



  // modal windows
  $('.registration-js').on('click', function () {
    $('.registration').fadeIn();
  });
  // modal windows end












});
