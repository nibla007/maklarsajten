// Handle login
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const loginData = {
    email,
    password
  };

  fetch('http://localhost:5500/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(loginData),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Invalid email or password');
    }
  }).then((loginData) => {
    sessionStorage.setItem('token', 'loggedIn');
    console.log(sessionStorage.getItem('token'));
    updateNavbar();
    window.location.hash = '#admin';
  }).catch((error) => {
    alert(error.message);
  });
}

// Function to update the navbar based on the login status
function updateNavbar() {
  const loginLink = document.getElementById('loginLink');
  const isLoggedIn = sessionStorage.getItem('token') === 'loggedIn';
  console.log("nav element: ", loginLink);
  console.log("here: ", isLoggedIn);
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