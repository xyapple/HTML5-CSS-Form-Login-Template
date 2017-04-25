'user strict';
$(document).ready(function() {
    //Login function
    $('#login-submit').click(function() {
        var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if ($("#loginemail").val() == '' || $("#loginpassword").val() == '') {
            alert("Please fill all fields...!!!!!!");
        } else if (!($("#loginemail").val()).match(email)) {
            alert("Please enter valid Email...!!!!!!");
        } else {
            alert("You have successfully Logged in...!!!!!!");

        }
        $('#login-submit').reset();

    });
    // On Click SignUp It Will Hide Login Form and Display Registration Form
    $("#login-form-link").click(function(e) {

        $("#login-form").fadeIn(100, function() {
            $("#signup-form").fadeOut(100);
        })
        $('#signup-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    //Signup function
    $('#register-submit').click(function() {
        var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if ($("#first").val() == '' || $("#last").val() == '' || $("#registeremail").val() == '' || $("#registerpassword").val() == '' || $("#password_confirmation").val() == '') {
            alert("Please fill all fields...!!!!!!");
        } else if (!($("#registeremail").val()).match(email)) {
            alert("Please enter valid Email...!!!!!!");
        } else {
            alert("You have successfully Sign Up, Now you can login...!!!!!!");
        }
    });
    // On Click SignIn It Will Hide Registration Form and Display Login Form
    $("#signup-form-link").click(function(e) {

        $("#signup-form").fadeIn(100, function() {

            $("#login-form").fadeOut(100);
        });

        $('#signup-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
});