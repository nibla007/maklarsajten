const filterForms = `
        <div class="filterForm">
          <form>
            <h2>Filter Residences</h2>
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
              <input class="slider" type="range" id="minPrice" name="minPrice" min="0" max="1500000" step="100000"
                value="0">
              <br>
              <label for="maxPrice">Maximum Price:</label>
              <input class="slider" type="range" id="maxPrice" name="maxPrice" min="0" max="2000000" step="100000"
                value="2000000">
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

            <button type="button" onclick="applyFilters()">Apply Filters</button>
          </form>
        </div>
      `;

// Add event listeners to update the displayed values when the sliders change
document.addEventListener('input', function (event) {
  if (event.target.id === 'minPrice' || event.target.id === 'maxPrice') {

    document.getElementById('minPriceOutput').textContent = document.getElementById('minPrice').value;
    document.getElementById('maxPriceOutput').textContent = document.getElementById('maxPrice').value;
  }
});

function fetchAndRenderResidences() {
  fetch('http://localhost:5500/residence')
    .then(response => response.json())
    .then(residences => {
      renderResidences(residences);
    })
    .catch(error => {
      console.error('Error fetching residences:', error);
      renderContent('Failed to fetch residences.');
    });
}

function renderResidences(residences) {
  const residencesList = residences.map(residence => `
    <a href="#residence-${residence.id}" class="residence-link">
      <div class="residencesList">
        <div class="residences">
          <h2>${residence.address}</h2>
          <p>${residence.housingType}</p>
          <p>${residence.size} KVM | ${residence.numberOfRooms} ROOMS | ${residence.startingPrice} KR</p>
        </div>
      </div>
    </a>
  `).join('');

  renderContent(filterForms, residencesList);
}

function applyFilters() {
  // Get values from the filter form
  const address = document.getElementById('address').value;
  const housingType = document.getElementById('housingType').value;
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;
  const numberOfRooms = document.getElementById('numberOfRooms').value;
  const size = document.getElementById('size').value;
  const yearOfConstruction = document.getElementById('yearOfConstruction').value
  const elevator = document.getElementById('elevator').value;
  const balconyPatio = document.getElementById('balconyPatio').value;
  const storehouse = document.getElementById('storehouse').value;
  const parking = document.getElementById('parking').value;
  const innerYard = document.getElementById('innerYard').value;


  // Fetch residences and apply filters
  fetch('http://localhost:5500/residence')
    .then(response => response.json())
    .then(residences => {
      const filteredResidences = residences.filter(residence => {
        return (
          residence.address.toLowerCase().includes(address.toLowerCase())
          && residence.housingType.toLowerCase().includes(housingType.toLowerCase())
          && (minPrice === '' || residence.startingPrice >= minPrice)
          && (maxPrice === '' || residence.startingPrice <= maxPrice)
          && residence.numberOfRooms >= numberOfRooms
          && residence.size >= size
          && residence.yearOfConstruction >= yearOfConstruction
          && (elevator === '' || residence.elevator.toLowerCase().includes(elevator.toLowerCase()))
          && (balconyPatio === '' || residence.balconyPatio.toLowerCase().includes(balconyPatio.toLowerCase()))
          && (storehouse === '' || residence.storehouse.toLowerCase().includes(storehouse.toLowerCase()))
          && (parking === '' || residence.parking.toLowerCase().includes(parking.toLowerCase()))
          && (innerYard === '' || residence.innerYard.toLowerCase().includes(innerYard.toLowerCase()))
        );
      });

      renderFilteredResidences(filteredResidences);
    })
    .catch(error => {
      console.error('Error fetching residences:', error);
      renderFilteredResidences([]);
    });
}

function renderFilteredResidences(residences) {
  const filteredResidencesList = residences.map(residence => `
        <a href="#residence-${residence.id}" class="residence-link">
          <div class="residencesList">
            <div class="residences">
              <h2>${residence.address}</h2>
              <p>${residence.housingType}</p>
              <p>${residence.size} KVM | ${residence.numberOfRooms} ROOMS | ${residence.startingPrice} KR</p>
            </div>
          </div>
        </a>
  `).join('');

  renderContent(filterForms, filteredResidencesList);
}