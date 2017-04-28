'user strict';
$(document).ready(function() {
    //when page load 
    $('#signup-form').hide();
    //Login function
    $('#login-submit').click(function() {
        var $name = $('input[name="username"]');
        var $password = $('input[name="passwordHelp"]');
        var $email = $('input[name="loginemail"]');
        var $text = $('#text');
        var _name = $.trim($name.val());
        var _password = $.trim($password.val());
        var _email = $.trim($email.val());
        var emailV = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if ('' == _name) {
            $text.text('Please enter a username');
            $name.focus();
            return;
        }
        if ('' == _password) {
            $text.text('Please enter a password');
            $password.focus();
            return;
        }
        if ($("#loginemail").val() == '' || $("#loginpassword").val() == '') {
            $text.text("Please fill all fields...!!!!!!");
            $email.focus();
            return;
        } else if (!($("#loginemail").val()).match(email)) {
            $text.text("Please enter valid Email...!!!!!!");
        } else {
            $text.text("You have successfully Logged in...!!!!!!");

        }
        $text.text('Success！');
        $('#login-submit').reset();

    });
    // On Click SignUp It Will Hide Login Form and Display Registration Form
    $("#login-form-link").click(function(e) {

        $("#login-form").fadeIn(100, function() {
            $("#signup-form").hide();
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
            $('emailError').display("Please enter valid Email...!!!!!!");
        } else {
            alert("You have successfully Sign Up, Now you can login...!!!!!!");
        }


        $('#register-submit').reset();
    });
    // On Click SignIn It Will Hide Registration Form and Display Login Form
    $("#signup-form-link").click(function(e) {

        $("#signup-form").fadeIn(100, function() {

            $("#login-form").hide();
        });

        $('#signup-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });


});