// Handle navigation to different routes
function navigateTo(route, args = []) {
  switch (route) {
    case '':
    case 'home':
      renderContentFromScript('/endpoints/home.js', 'renderHomepage');
      break;
    case 'buy':
      renderContentFromScript('/endpoints/buy.js', 'renderResidences');
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
      renderContentFromScript('/endpoints/login.js', 'renderLoginForm');
      break;
    default:
      renderContent('404 Page Not Found');
      break;
  }
}

// Render simple content for the selected route
function renderContent(content) {
  document.getElementById('content').innerHTML = content;
}

// Render scripted content for the selected route
function renderContentFromScript(scriptSrc, functionName, args = []) {
  const script = document.createElement('script');
  console.log(script);
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