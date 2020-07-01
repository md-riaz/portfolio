"use strict";
//click on theme change
$("#change-theme").on("change ", function () {
  if ($(this).prop("checked")) {
    darkmode();
  } else {
    nodark();
  }
});

function darkmode() {
  $("body").addClass("dark-mode");
  $("#change-theme").prop("checked", true);
  sessionStorage.setItem("mode", "dark");
}

function nodark() {
  $("body").removeClass("dark-mode");
  $("#change-theme").prop("checked", false);
  sessionStorage.setItem("mode", "light");
}

if (sessionStorage.getItem("mode") == "dark") {
  darkmode();
} else {
  nodark();
}

//nav bar icon
$(".nav-icon").on("click", function () {
  slideout.toggle();
});

// Typed.js initial code
var typed = new Typed(".auto_type", {
  stringsElement: "#typed-strings",
  loop: true,
  smartBackspace: true,
  backSpeed: 60,
  backDelay: 1000,
  showCursor: true,
});

//scroll progress loader on top
$(function () {
  $("#progress").progress();
});

//Slideout.js
var slideout = new Slideout({
  panel: document.getElementById("main"),
  menu: document.getElementById("aside"),
  padding: 256,
  tolerance: 70,
});

//skill bars
jQuery(document).ready(function () {
  jQuery(".skillbar").each(function () {
    jQuery(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: jQuery(this).attr("data-percent"),
        },
        6000
      );
  });
});

//super placeholder
superplaceholder({
  el: document.getElementById("n"),
  sentences: ["Enter your name here", "Example: Riaz"],
  options: {
    // loop through passed sentences
    loop: true,
    // Show cursor or not. Shows by default
    showCursor: true,
    // String to show as cursor
    cursor: "|",
  },
});

superplaceholder({
  el: document.getElementById("e"),
  sentences: ["Enter a valid Email Address", "Example: yourname@gmail.com"],
});

superplaceholder({
  el: document.getElementById("m"),
  sentences: ["Type your messege now...", "This should not be empty!!!!"],
});

// Add class to menu links on scroll to a section
$(document).on("scroll", onScroll);

const mainNavLinks = document.querySelectorAll("nav a");
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(".nav a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top - 300 <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

// mouse effect
const position = document.documentElement;
$(document).on("mousemove", (e) => {
  position.style.setProperty("--x", e.clientX - 20 + "px");
  position.style.setProperty("--y", e.clientY - 20 + "px");
});

//contact form
// $("#my_form").submit(function (event) {
//   $(".mybtn").addClass("action");
//   event.preventDefault(); //prevent default action
//   var post_url = $(this).attr("action"); //get form action url
//   var request_method = $(this).attr("method"); //get form GET/POST method
//   var form_data = $(this).serialize(); //Encode form elements for submission

//   $.ajax({
//     url: post_url,
//     type: request_method,
//     data: form_data
//   }).done(function (response) {
//     $("#my_form").trigger("reset");
//     $(".mybtn").removeClass("action");
//     var x = document.getElementById("snackbar");
//     x.className = "show";
//     setTimeout(function () {
//       x.className = x.className.replace("show", "");
//     }, 3000);
//   });
// });
