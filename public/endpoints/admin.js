function fetchMessagesAndRenderAdmin() {
  fetch('http://localhost:5500/messages')
    .then(response => response.json())
    .then(messages => {
      renderAdmin(messages);
    })
    .catch(error => {
      console.error('Error fetching messages:', error);
      renderContent('Failed to fetch messages.');
    });
}

function renderAdmin(messages) {
  const messagesList = messages.map(message => `
    <div class="messageList">
      <p>Message: ${message.id}</p>
      <p>Name: ${message.name}</p>
      <p>Email: ${message.email}</p>
      <p class="message">Message:<br>${message.message}</p>
    </div>
  `).join('');

  const adminPage = `
  <div class="adminPage">
    <h1>Welcome back!</h1>
    <p>Here you can see all the messages that have been sent to you:</p>
    ${messagesList}
  </div>
  `;

  renderContent(adminPage);
}