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
        } else {
            $(".fixed-top").removeClass("header_collapse");
        }
    });

    $("body").scrollspy({
        target: "#header_nav",
        offset: 70
    });
});