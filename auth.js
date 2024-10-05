// Example Login Handling
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login (add your actual login logic here)
    alert(`Logged in as ${username}`);
});

// Example Sign Up Handling
document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Simulate signup (add your actual signup logic here)
    alert(`Account created for ${fullName}`);
});
