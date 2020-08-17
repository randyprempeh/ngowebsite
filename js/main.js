/* scrollTo funtction
 */
$(".scrollTo").click(function () {
  var getElement = $(this).attr("href");
  var targetDistance = 30;
  if ($(getElement).length) {
    var getOffset = $(getElement).offset().top;
    $("html,body").animate(
      {
        scrollTop: getOffset - targetDistance,
      },
      500
    );
  }
  return false;
});

/* Gallery Collage with Simplelightbox */
$(function () {
  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
  });
});

/* fading upon window load*/

/* wlecome page animation */
$(".diva").hide().fadeIn(5000);
$("h1").hide().fadeIn(2000);
$("#hyper").hide().fadeIn(3000);

/* fade in upon scroll till the bottom */

$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});
