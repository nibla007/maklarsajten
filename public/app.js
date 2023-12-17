// Handle login
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Fetch user data from the server
  fetch('http://localhost:5500/users')
    .then(response => response.json())
    .then(users => {
      // Find the user with the entered email
      const user = users.find(user => user.email === email);

      if (user && user.password === password) {
        // Authentication successful
        sessionStorage.setItem('token', 'loggedIn');
        console.log(sessionStorage.getItem('token'));
        updateNavbar();
        window.location.hash = '#admin';
      } else {
        // Authentication failed
        alert('Invalid email or password');
      }
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      alert('Error fetching user data');
    });
}


// Function to update the navbar based on the login status
function updateNavbar() {
  const loginLink = document.getElementById('loginLink');
  const isLoggedIn = sessionStorage.getItem('token') === 'loggedIn';
  console.log("nav element: ", loginLink);
  console.log("User status: ", isLoggedIn);
  if (isLoggedIn) {
    loginLink.textContent = 'LOGOUT';

    loginLink.addEventListener('click', function () {
      sessionStorage.removeItem('token');
      updateNavbar();
    });
  } else {
    // User logged out, restore "Login"
    loginLink.textContent = 'LOGIN';
  }
}

updateNavbar();