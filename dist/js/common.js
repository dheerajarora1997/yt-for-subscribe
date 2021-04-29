$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


$(document).ready(function () {
    $(".sidebar ul.nav li:first-child").click(function () {
        $(".sidebar ul.nav li:first-child i").toggleClass("fi-long-arrow-left fi-navigation");
        $(".wrapper").toggleClass("active");
    });

    function openSidebar() {
        $(".cont-rght-side-fixed").toggleClass("open");
    }

    $(".cont-side-fixed-bg, .cont-rght-side-fixed, .mob-nav, .close-nav").click(function () {
        openSidebar();
    });

});