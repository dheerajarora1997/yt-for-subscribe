$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


$(document).ready(function () {
    $(".sidebar ul.nav li:first-child").click(function () {
        $(".sidebar ul.nav li:first-child i").toggleClass("fi-long-arrow-left fi-navigation");
        $(".wrapper").toggleClass("active");
    });
});

$(function(){
    $("template#sidebar").load("sidebar.html");
    $("#header").load("header.html");
  });