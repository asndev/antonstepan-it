
$(window).scroll(function() {
  var header = $('header').height();
  var navigation = $('nav');
  var navSticky = 'nav-sticky';

  if ($(this).scrollTop() > header) {
    navigation.addClass(navSticky).fadeIn();
  } else {
    navigation.removeClass(navSticky);
  }
});
