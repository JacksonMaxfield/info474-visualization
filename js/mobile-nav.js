$(document).ready(function() {
  var mobileNav = $('#mobile-nav-button');
  var sectionNav = $('#section-nav');
  var sectionAnchor = $('.section-anchor');

  mobileNav.on('click', function(event) {
    if (mobileNav.attr('class') == 'toggled') {
      sectionNav.css('display', 'none');
      mobileNav.attr('class', '');
    } else {
      sectionNav.css('display', 'block');
      mobileNav.attr('class', 'toggled');
    }
  });

  sectionAnchor.on('click', function(event) {
    if (mobileNav.attr('class') == 'toggled') {
      sectionNav.css('display', 'none');
      mobileNav.attr('class', '');
    }
  });

  $(window).on('resize', function(event) {
    var x = $(window).width();

    if (x > 800) {
      sectionNav.css('display', 'block');
    } else {
      sectionNav.css('display', 'none');
    }
  });
});
