// Navigation Toggle
$(document).ready(function () {
    $('.nav_toggle').click(function () {
        $('.nav_toggle').toggleClass('active');
        $('nav').toggleClass('active');
    })
});

// Bottom To Top 
const btnscrollTop = document.querySelector('#scrollTop');

btnscrollTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
})