function renderLoginForm() {
  renderContent(loginForm);

  //if the user pressed the login button, handle the login
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', handleLogin);
}