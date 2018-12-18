$(window).on('load', function () {
    var width = $(window).width();
    if (width <= 768) {
        $(".fixed-top").addClass("header_collapse");
    }
});
$(document).ready(function(){
    var options = {
        strings: ["Frontend Dev.", "From Kherson, Ukraine."],
        typeSpeed: 100,
        loop: true,
    }

    var typed = new Typed(".typed_string", options);

    $(window).on('scroll', function() {
        if ($(".header").offset().top > 50) {
            $(".fixed-top").addClass("header_collapse");
        } else if ($(".header").offset().top < 50 && $(window).width() > 768){
            $(".fixed-top").removeClass("header_collapse");
        }
    });

    $("body").scrollspy({
        target: "#header_nav",
        offset: 70
    });

    $(window).on('resize', function () {
        var width = $(window).width();
        if (width <= 768) {
            $(".fixed-top").addClass("header_collapse");
        } else  {
            $(".fixed-top").removeClass("header_collapse");
        }
    });

    $('.nav-toggler').on('click', function () {
        var nav = $('#header_nav');
        nav.toggleClass('navbar-show');

    })
});