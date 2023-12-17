// Handle navigation to different routes
function navigateTo(route, args = []) {
  switch (route) {
    case '':
    case 'home':
      renderContentFromScript('/endpoints/home.js', 'renderHomepage');
      break;
    case 'buy':
      renderContentFromScript('/endpoints/buy.js', 'fetchAndRenderResidences');
      break;
    case 'residence':
      renderContentFromScript('/endpoints/residence.js', 'renderResidenceDetails', args);
      break;
    case 'sell':
      renderContentFromScript('/endpoints/sell.js', 'renderSellForm');
      break;
    case 'contact':
      renderContentFromScript('/endpoints/contact.js', 'renderContactForm');
      break;
    case 'login':
      if (sessionStorage.getItem('token') === 'loggedIn') {
        window.location.hash = '#admin';
        return;
      }
      renderContentFromScript('/endpoints/login.js', 'renderLoginForm');
      break;
    case 'admin':
      if (sessionStorage.getItem('token') === 'loggedIn') {
        renderContentFromScript('/endpoints/admin.js', 'renderAdmin');
        return;
      }
      console.log('Access Denied: Not logged in');
      window.location.hash = '#login';
      break;
    default:
      renderContent('404 Page Not Found');
      break;
  }
}

// Render simple content for the selected route
function renderContent(content, additionalContent) {
  document.getElementById('content').innerHTML = content;
  if (additionalContent) {
    document.getElementById('content').innerHTML += additionalContent;
  }
}

// Render scripted content for the selected route
function renderContentFromScript(scriptSrc, functionName, args = []) {
  const script = document.createElement('script');
  console.log("Current Endpoint: ", script);
  script.src = scriptSrc;
  document.head.appendChild(script);
  script.onload = function () {
    window[functionName](...args);
  };
}

// Handle hashchange event
function handleHashChange() {
  const route = location.hash.substring(1);
  if (route.startsWith('residence')) {
    const residenceId = route.split('-')[1];
    navigateTo('residence', [residenceId]);
    return;
  }
  navigateTo(route);
}

// Add event listener for hashchange
window.addEventListener('hashchange', handleHashChange);

// Initial page load
window.onload = handleHashChange;