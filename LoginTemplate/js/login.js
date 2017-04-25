'user strict';
$(document).ready(function() {
    //when page load 
    $('#signup-form').hide();
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
    // $("form[name='registration']").validate({
    //     // Specify validation rules
    //     rules: {
    //         // The key name on the left side is the name attribute
    //         // of an input field. Validation rules are defined
    //         // on the right side
    //         fist: "required",
    //         last: "required",
    //         username: "required",
    //         registeremail: {
    //             required: true,
    //             // Specify that email should be validated
    //             // by the built-in "email" rule
    //             email: true
    //         },
    //         registerpassword: {
    //             required: true,
    //             minlength: 8
    //         }
    //     },
    //     // Specify validation error messages
    //     messages: {
    //         firstname: "Please enter your firstname",
    //         lastname: "Please enter your lastname",
    //         username: "Please enter your username",
    //         password: {
    //             required: "Please provide a password",
    //             minlength: "Your password must be at least 8 characters long"
    //         },
    //         email: "Please enter a valid email address"
    //     },
    //     // Make sure the form is submitted to the destination defined
    //     // in the "action" attribute of the form when valid
    //     submitHandler: function(form) {
    //         form.submit();
    //     }


});