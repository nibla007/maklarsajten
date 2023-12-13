function renderLoginForm() {
  const loginForm = `
  <div class="login-form">
        <h2>Login</h2>
        <form>
            <br>
            <label for="email">Email:</label>
            <input value="admin@admin.admin" type="email" id="email" name="email" required>
            <br>
            <label for="password">Password:</label>
            <input value="abc123" type="password" id="password" name="password" required>
            <br>
            <button type="submit">Submit</button>
        </form>
    </div>
    `;
    
  renderContent(loginForm);
}