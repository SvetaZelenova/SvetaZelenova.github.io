$(window).on('load', function () {
    var width = $(window).width();
    if (width <= 768) {
        //add background to header
        $(".fixed-top").addClass("header_collapse");
        //resize about div
        $(".about_side").removeClass("col-md-8");
        $(".about_side").addClass("col-md-12");
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
        if (width <= 768 || (width > 768 && $('.header').offset().top > 50)) {
            //add background to header
            $(".fixed-top").addClass("header_collapse");
            //resize about div
            $(".about_side").removeClass("col-md-8");
            $(".about_side").addClass("col-md-12");
        } else  {
            $(".fixed-top").removeClass("header_collapse");
            //resize about div
            $(".about_side").removeClass("col-md-12");
            $(".about_side").addClass("col-md-8");
        }
    });

    $('.nav-toggler').on('click', function () {
        var nav = $('#header_nav');
        nav.toggleClass('navbar-show');

    });

    $(function() {
        var skills = $("#skills");
        var skillsTop = skills.offset().top;
        var windowHeight = $(window).height();

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if ( scroll >= ( skillsTop - windowHeight )) {
                $('.progress_html .progress-bar').addClass('html');
                $('.progress_css .progress-bar').addClass('css');
                $('.progress_js .progress-bar').addClass('js');
                $('.progress_sass .progress-bar').addClass('sass');
                $('.progress_angular .progress-bar').addClass('angular');
                $('.progress_vue .progress-bar').addClass('vue');
            }
            else {
                $('.progress_html .progress-bar').removeClass('html');
                $('.progress_css .progress-bar').removeClass('css');
                $('.progress_js .progress-bar').removeClass('js');
                $('.progress_sass .progress-bar').removeClass('sass');
                $('.progress_angular .progress-bar').removeClass('angular');
                $('.progress_vue .progress-bar').removeClass('vue');
            }
        });
    });
});