"use strict";$(document).ready(function(){$(".arrowTrigger-js").on("click",function(){$(".dropMnu-js").slideToggle()}),$(".registration-js").on("click",function(){$(".registration").fadeIn()}),$("#registration-tab").on("click",function(){$(".registration__modalWindow").css("flex-direction","row-reverse"),$(".closeBtn").addClass("closeBtnLeft")}),$("#signIn-tab").on("click",function(){$(".registration__modalWindow").css("flex-direction","row"),$(".closeBtn").removeClass("closeBtnLeft")}),$(".registration-js").on("click",function(){$("#autorization").css("display","flex")}),$(".closeBtn").on("click",function(){$(".blurEffect").hide()}),$(".hamburger").click(function(){$(this).toggleClass("openClose"),$(".mnu-js").toggleClass("mobileMnu-js"),$(".hamburger__line").toggleClass("lineBg")}),$(".mnu-js").click(function(){$(".hamburger").removeClass("openClose"),$(".hamburger__line").removeClass("lineBg")}),$(document).mouseup(function(e){var n=$(".hamburger");n.is(e.target)||0!==n.has(e.target).length||n.removeClass("openClose")}),$(".header__mnuFirstLvl").clone().appendTo(".mmenu-nav");var e=$(".mmenu-nav").mmenu({navbar:{title:"IshuInfo"},extensions:["fx-menu-slide","fx-listitems-slide","border-full","pagedim-black","position-right"],offCanvas:{},counters:!0}),n=$(".hamburger"),s=e.data("mmenu");n.on("click",function(){s.open()}),$(function(){$("li").on("click",function(){var e="selected",n=$(this);n.siblings("."+e).removeClass(e),n.addClass(e).parent().addClass("vote-cast")})});var i=new Swiper(".gallery-thumbs",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,direction:"vertical"});new Swiper(".gallery-top",{spaceBetween:10,thumbs:{swiper:i}})});