$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


$(document).ready(function () {
    $(".sidebar ul.nav li:first-child").click(function () {
        $(".sidebar ul.nav li:first-child i").toggleClass("fa-angle-left icon-navigation");
        $(".wrapper").toggleClass("active");
    });
});
