function renderLoginForm() {
  const loginForm = `
  <div class="login-form">
        <h2>Login</h2>
        <form>

            <label for="email">Email:</label>
            <input value="admin@admin.admin" type="email" id="email" name="email" required>

            <label for="password">Password:</label>
            <input value="abc123" type="password" id="password" name="password" required>

            <button id="login-button" type="submit">Login</button>
        </form>
    </div>
    `;

  renderContent(loginForm);

  //if the user pressed the login button, handle the login
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', handleLogin);
}