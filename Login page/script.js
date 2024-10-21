// Function to handle form submission
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      alert('Login Successful');
      // Add authentication logic here
      return true;
    } else {
      alert('Login Failed');
      return false;
    }
  }
  