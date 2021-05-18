$(document).ready(function() {
    setTimeout(function() {
        document.getElementById('k-quote').click();
    }, 10000);


    $(".vertical-accordion__item").click(function() {
        $(this).addClass('vertical-accordion__item_active').siblings().removeClass('vertical-accordion__item_active');
        $(this).find('.vertical-accordion__header').slideUp();
        $(this).siblings().find('.vertical-accordion__header').slideDown();


        $(this).find('.vertical-accordion__content').delay(500).slideDown();
        $(this).siblings().find('.vertical-accordion__content').slideUp();
    })
});
/***Trigger Popup On Page Load*
$("document").ready(function() {
    setTimeout(function() {
        $("#get-quote-btn").trigger('click');
    },200);
});*/