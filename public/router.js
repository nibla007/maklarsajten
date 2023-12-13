function navigateTo(route, args = []) {
  // Handle navigation to different routes
  switch (route) {
    case '':
    case 'home':
      renderContentFromScript('/endpoints/home.js', 'homePage');
      break;
    case 'buy':
      renderContentFromScript('/endpoints/buy.js', 'renderResidences');
      break;
    case 'residence':
      renderContentFromScript('/endpoints/residence.js', 'viewResidenceDetails', args);
      break;
    case 'sell':
      renderContent('Sell Page Content');
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

// Render content for the selected route
function renderContent(content) {
  document.getElementById('content').innerHTML = content;
}

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
  if(route.startsWith('residence')) {
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
