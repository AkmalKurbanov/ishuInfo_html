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
    $('.closeBtn').addClass('closeBtnLeft');
  });
  $('#signIn-tab').on('click', function () {
    $('.registration__modalWindow').css('flex-direction', 'row');
    $('.closeBtn').removeClass('closeBtnLeft');
  });
  $('.registration-js').on('click', function () {
    $('.blurEffect').css('display', 'flex');
  });
  $('.closeBtn').on('click', function () {
    $('.blurEffect').hide();
  });



  // modal windows end


  // hamburger
  $('.hamburger').click(function () {
    $(this).toggleClass('openClose');
    $('.mnu-js').toggleClass('mobileMnu-js');
    $('.hamburger__line').toggleClass('lineBg');
  });

  $('.mnu-js').click(function () {
    $('.hamburger').removeClass('openClose');
    $('.hamburger__line').removeClass('lineBg');
  });

  $(document).mouseup(function (e) {
    var div = $(".hamburger");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      div.removeClass('openClose');
    }
  });

  // hamburger end

  // mmenu
  $('.header__mnuFirstLvl').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: 'IshuInfo'
    },
    extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black', 'position-right'],
    offCanvas: {

    },
    counters: true
  });

  var $icon = $('.hamburger');
  var API = $menu.data('mmenu');

  $icon.on('click', function () {
    API.open();
  });

  // mmenu







});
