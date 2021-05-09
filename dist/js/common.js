$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


function openNav(){
    $(".wrapper").toggleClass("active");
}



$(document).ready(function () {
    $(".sidebar ul.nav li:first-child, .sidebar-bg").click(function () {
        $(".sidebar ul.nav li:first-child i").toggleClass("fi-long-arrow-left fi-navigation");
        openNav();
    });

    function mobileNav() {
        $(".mob-sidebar-bg").toggleClass("open");
    }

    $(".mob-sidebar, .mob-nav, .close-nav").click(function () {
        mobileNav();
    });

});