document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const modal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close');

    loginBtn.addEventListener('click', function() {
        // Your login functionality here
        console.log('Login button clicked');
    });

    signupBtn.addEventListener('click', function() {
        // Your signup functionality here
        console.log('Signup button clicked');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // You can add code here to handle form submission, such as validating input, making an AJAX request, etc.
        console.log('Form submitted');
    });
});

// signup page 

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // You can add code here to handle form submission, such as validating input, making an AJAX request, etc.
        console.log('Form submitted');
    });
});
