var $header = $('header').height();
var $navigation = $('nav');
var navSticky = 'nav-sticky';
var cssNames = 'nav-sticky transition';

$(window).scroll(function() {
  var thresholdReached = $(this).scrollTop() > header;
  if (thresholdReached && !navigation.hasClass(navSticky)) {
    navigation.addClass(cssNames).fadeIn();
  } else if (!thresholdReached && navigation.hasClass(navSticky)) {
    navigation.removeClass(cssNames);
  }
});
