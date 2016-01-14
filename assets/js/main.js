var $header = $('header').height();
var $navigation = $('nav');
var navSticky = 'nav-sticky';

$(window).scroll(function() {
  var thresholdReached = $(this).scrollTop() > header;
  if (thresholdReached && !navigation.hasClass(navSticky)) {
    navigation.addClass(navSticky transition).fadeIn();
  } else if (!thresholdReached && navigation.hasClass(navSticky)) {
    navigation.removeClass(navSticky transition);
  }
});
