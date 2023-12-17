function renderContactForm() {
  const contactForm = `
  <div class="contactForm">
    <h2>Contact Us</h2>
    <form>
      <label for="name">Name:</label>
      <input id="name" type="text" required>

      <label for="email">Email:</label>
      <input type="email" id="email" required>

      <label for="message">Message:</label>
      <textarea required id="message"></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
    `;

  renderContent(contactForm);
}