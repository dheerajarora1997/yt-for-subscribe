if ($('[data-toggle="tooltip"]').length) {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}
function openNav() {
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

// Iframe Code
// let firstVideo = '0Ll5DofUmgE';
let my_array = ['0Ll5DofUmgE', 'aRvFOku7w5I', '2HNtLfetnNg', 'nyKNwwiQYcM', 'ExQe3fXj7t8', 'i0KO9Js4_dE', 'ygqbfJOdtmA', 'gU9KRJYtg5E', 'sEL5l1dATJw', 'm8N7onAJexU'];
let currentIndex = 0;

$('#coin-campaign').on('shown.bs.modal', function () {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + my_array[currentIndex]);
    currentIndex = 1;
});

$('#getNextVideo').click(function () {
    console.log(currentIndex);
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + my_array[currentIndex]);
    if (currentIndex == my_array.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
});

$('#coin-campaign').on('hidden.bs.modal', function () {
    currentIndex = 0;
});

if ($(['data-table="true"']).length) {
    $('[data-table="true"]').DataTable({
        rowReorder: true,
        columnDefs: [
            { orderable: true, className: 'reorder', targets: 0 },
            { orderable: true, className: 'reorder', targets: 1 },
            { orderable: false, targets: '_all' },
        ],
    });

}