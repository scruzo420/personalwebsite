$(document).ready(function () {

    /* 
        Component: Navbar fixed on scroll
        Description:
        Fix navbar to top after the user scrolls past the main header section, and remove the fix positioning when user scrolls back to top
    */
    $(window).scroll(function () {
        var headerHeight = $('.main-header').height();
        if ($(window).scrollTop() >= headerHeight) {
            $('.main-nav').addClass('navbar-fixed-top');
            $('.back-to-top').removeClass('hide');
        }
        if ($(window).scrollTop() < headerHeight) {
            $('.main-nav').removeClass('navbar-fixed-top');
            $('.back-to-top').addClass('hide');
        }
    });


    /* 
        Component: Back to Top Button
        Description:
        The user will scroll back to the top of the site everytime they click this button.
    */
    $('.back-to-top').click(function(){
        $('HTML, BODY').animate({ scrollTop: 0 }, 1000);;
    });

    /* 
        Component: One Page Navigation
        Description:
        
    */
    $('.navbar-nav li a').click(function(){
        console.log("Hola");
    });

});