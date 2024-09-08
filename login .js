document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
        // You can redirect to another page or perform other actions here
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
