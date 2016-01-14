var headerHeight = $('header').height();
var $navigation = $('.header-nav');
var navSticky = 'nav-sticky';
var cssNames = 'nav-sticky transition';

$(window).scroll(function() {
  var thresholdReached = $(this).scrollTop() > (headerHeight*0.8);
  
  if (thresholdReached && !$navigation.hasClass(navSticky)) {
    $navigation.addClass(cssNames).fadeIn();
  } else if (!thresholdReached && $navigation.hasClass(navSticky)) {
    $navigation.removeClass(cssNames);
  }
});
