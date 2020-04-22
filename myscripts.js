
$(document).ready(function() {

  /* When window is scrolled */
  $(window).scroll(function() {

    let divs = document.querySelectorAll('.main1,.main2');

    /* Find location of each element */
    $(divs).each(function(i) {

      var top_of_div = $(this).offset().top + 40;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the div is visible, fade it in */
      if (bottom_of_window > top_of_div) {
        $(this).animate({'opacity':'1'},1000);
        $(this).addClass("slide-in");
      }

    });
  });
});
