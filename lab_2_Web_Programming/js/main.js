$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1.25,
        speed: 500,
        infinite: false,
        centerMode: true,
        variableWidth: true,
    });
});