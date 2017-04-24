'user strict';
$(document).ready(function() {
    //Login function
    $('#login-form-link').click(function(e) {
        e.preventDefault();
        $("#login-form").delay(100).fadeIn(100);
        $("#signup-form").fadeOut(100);
        $('#signup-form-link').removeClass('active');
        $(this).addClass('active');

    });
    //Signup function
    $('#signup-form-link').click(function(e) {
        e.preventDefault();
        $("#signup-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');

    });

});