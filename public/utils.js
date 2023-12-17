// Declare the forms here to prevent redeclaring elsewhere
const filterForms = `
<div class="filterForm">
  <form>
    <h2>Search Residences</h2>
    <label for="housingType">Housing Type:</label>
    <select id="housingType" name="housingType">
      <option value="">Select</option>
      <option value="Apartment">Apartment</option>
      <option value="House">House</option>
    </select>
    <br>
    <label for="address">Address:</label>
    <input type="text" id="address" name="address" placeholder="Kungsgatan 63">

    <label for="numberOfRooms">Minimum Number of Rooms:</label>
    <input type="number" id="numberOfRooms" name="numberOfRooms" placeholder="3">

    <label for="size">Minimum Size (KVM):</label>
    <input type="number" id="size" name="size" placeholder="200">

    <label for="yearOfConstruction">Year of Construction:</label>
    <input type="number" id="yearOfConstruction" name="yearOfConstruction" placeholder="2003">

    <div class="sliderContainer">
      <label for="minPrice">Minimum Price:</label>
      <input class="slider" type="range" id="minPrice" name="minPrice" min="0" max="1500000" step="100000" value="0">
      </input>
      <br>
      <label for="maxPrice">Maximum Price:</label>
      <input class="slider" type="range" id="maxPrice" name="maxPrice" min="0" max="2000000" step="100000"
        value="2000000">
      </input>
    </div>
    <span id="minPriceOutput">0</span> KR - <span id="maxPriceOutput">2000000</span> KR
    <br>
    <label for="elevator">Elevator:</label>
    <select id="elevator" name="elevator">
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label for="balconyPatio">Balcony/Patio:</label>
    <select id="balconyPatio" name="balconyPatio">
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label for="storehouse">Storehouse:</label>
    <select id="storehouse" name="storehouse">
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label for="parking">Parking:</label>
    <select id="parking" name="parking">
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label for="innerYard">Inner Yard:</label>
    <select id="innerYard" name="innerYard">
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label for="sortCriteria">Sort by:</label>
    <select id="sortCriteria" name="sortCriteria">
      <option value="startingPrice">Price</option>
      <option value="address">Alphabetic</option>
      <option value="size">Size</option>
      <option value="yearOfConstruction">Year of Construction</option>
      <option value="numberOfRooms">Number of Rooms</option>
    </select>

    <label for="sortOrder">Sort order:</label>
    <select id="sortOrder" name="sortOrder">
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>

    <button type="button" onclick="applyFiltersAndSort()">Apply</button>
  </form>
</div>
`;
const sellForm = `
<div class="sellForm">
  <h2>Sell your residence</h2>
  <form id="residenceForm">
    <label for="housingType">Housing Type:</label>
    <select id="housingType" name="housingType" required>
      <option value="">Select</option>
      <option value="Apartment">Apartment</option>
      <option value="House">House</option>
    </select>
    <br>
    <label for="address">Address:</label>
    <input type="text" id="address" name="address" placeholder="Kungsgatan 63" required>

    <label for="startingPrice">Starting Price:</label>
    <input type="number" id="startingPrice" name="startingPrice" placeholder="100000" required>

    <label for="numberOfRooms">Number of Rooms:</label>
    <input type="number" id="numberOfRooms" name="numberOfRooms" placeholder="3" required>

    <label for="size">Size (KVM):</label>
    <input type="number" id="size" name="size" placeholder="200" required>

    <label for="floor">Floor:</label>
    <input type="number" id="floor" name="floor" placeholder="5" required>

    <label for="yearOfConstruction">Year of Construction:</label>
    <input type="number" id="yearOfConstruction" name="yearOfConstruction" placeholder="2003" required>

    <label for="elevator">Elevator:</label>
    <select id="elevator" name="elevator" required>
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label for="balconyPatio">Balcony/Patio:</label>
    <select id="balconyPatio" name="balconyPatio" required>
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label for="storehouse">Storehouse:</label>
    <select id="storehouse" name="storehouse" required>
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label for="parking">Parking:</label>
    <select id="parking" name="parking" required>
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label for="innerYard">Inner Yard:</label>
    <select id="innerYard" name="innerYard" required>
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <button type="submit">Submit</button>
  </form>
</div>
`;
const contactForm = `
<div class="contactForm">
  <h2>Contact Us</h2>
  <form id="contactForm">
    <label for="name">Name:</label>
    <input id="name" type="text" required>

    <label for="email">Email:</label>
    <input id="email" type="email" required>

    <label for="message">Message:</label>
    <textarea rows="5" maxlength="300" id="message" type="text" required></textarea>

    <button "type=" submit">Submit</button>
  </form>
</div>
`;
const loginForm = `
<div class="loginForm">
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

function formatPrice(price) {
  // Convert the number to a string and insert spaces every three digits from the right
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Updates the navbar based on the login status
function updateNavbar() {
  const loginLink = document.getElementById('loginLink');
  const isLoggedIn = sessionStorage.getItem('token') === 'loggedIn';

  if (isLoggedIn) {
    const adminLink = document.createElement('a');

    adminLink.textContent = 'ADMIN';
    adminLink.classList.add('nav__link');
    adminLink.setAttribute('id', 'admin');
    adminLink.setAttribute('href', '#admin');
    contact.insertAdjacentElement('afterend', adminLink);

    // Add a click event listener to the admin element
    adminLink.addEventListener('click', function () {
      window.location.hash = '#admin';
    });

    // Add a click event listener to the login element
    loginLink.textContent = 'LOGOUT';
    loginLink.addEventListener('click', function () {
      sessionStorage.removeItem('token');
      updateNavbar();
    });
  } else {
    // User logged out, restore "Login"
    loginLink.textContent = 'LOGIN';
    // remove admin element from navbar
    const profile = document.getElementById('admin');
    if (profile) {
      profile.parentElement.removeChild(profile);
    }
  }
}

updateNavbar();