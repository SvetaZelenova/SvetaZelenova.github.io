$(window).on("load",function(){$(window).width()<=768&&($(".fixed-top").addClass("header_collapse"),$(".about_side").removeClass("col-md-8"),$(".about_side").addClass("col-md-12"))}),$(document).ready(function(){new Typed(".typed_string",{strings:["Frontend Dev.","From Kherson, Ukraine."],typeSpeed:100,loop:!0});$(window).on("scroll",function(){50<$(".header").offset().top?$(".fixed-top").addClass("header_collapse"):$(".header").offset().top<50&&768<$(window).width()&&$(".fixed-top").removeClass("header_collapse")}),$("body").scrollspy({target:"#header_nav",offset:70}),$(window).on("resize",function(){var s=$(window).width();s<=768||768<s&&50<$(".header").offset().top?($(".fixed-top").addClass("header_collapse"),$(".about_side").removeClass("col-md-8"),$(".about_side").addClass("col-md-12")):($(".fixed-top").removeClass("header_collapse"),$(".about_side").removeClass("col-md-12"),$(".about_side").addClass("col-md-8"))}),$(".nav-toggler").on("click",function(){$("#header_nav").toggleClass("navbar-show")}),$(function(){var e=$("#skills").offset().top,r=$(window).height();$(window).scroll(function(){var s=$(window).scrollTop();e-r<=s?($(".progress_html .progress-bar").addClass("html"),$(".progress_css .progress-bar").addClass("css"),$(".progress_js .progress-bar").addClass("js"),$(".progress_sass .progress-bar").addClass("sass"),$(".progress_angular .progress-bar").addClass("angular"),$(".progress_vue .progress-bar").addClass("vue")):($(".progress_html .progress-bar").removeClass("html"),$(".progress_css .progress-bar").removeClass("css"),$(".progress_js .progress-bar").removeClass("js"),$(".progress_sass .progress-bar").removeClass("sass"),$(".progress_angular .progress-bar").removeClass("angular"),$(".progress_vue .progress-bar").removeClass("vue"))})})});
//# sourceMappingURL=main.js.map
