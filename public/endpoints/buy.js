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

// Updates the displayed values when the input sliders change
document.addEventListener('input', function (event) {
  if (event.target.id === 'minPrice' || event.target.id === 'maxPrice') {
    document.getElementById('minPriceOutput').textContent = document.getElementById('minPrice').value;
    document.getElementById('maxPriceOutput').textContent = document.getElementById('maxPrice').value;
  }
});

function renderResidences(residences) {
  const residencesList = residences.map(residence => `
    <a href="#residence-${residence.id}" class="residence-link">
      <div class="residencesList">
        <div class="residences">
          <h2>${residence.address}</h2>
          <p>${residence.housingType}</p>
          <p>${residence.size} KVM | ${residence.numberOfRooms} ROOMS | ${formatPrice(residence.startingPrice)} KR</p>
        </div>
      </div>
    </a>
  `).join('');

  renderContent(filterForms, residencesList);
}

function applyFiltersAndSort() {
  // Get values from the filter form
  const address = document.getElementById('address').value;
  const housingType = document.getElementById('housingType').value;
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;
  const numberOfRooms = document.getElementById('numberOfRooms').value;
  const size = document.getElementById('size').value;
  const yearOfConstruction = document.getElementById('yearOfConstruction').value;
  const elevator = document.getElementById('elevator').value;
  const balconyPatio = document.getElementById('balconyPatio').value;
  const storehouse = document.getElementById('storehouse').value;
  const parking = document.getElementById('parking').value;
  const innerYard = document.getElementById('innerYard').value;

  // Fetch residences and apply filters
  fetch('http://localhost:5500/residence')
    .then(response => response.json())
    .then(residences => {
      // Filter residences based on user input
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

      // Get values for sorting
      const sortCriteria = document.getElementById('sortCriteria').value;
      const sortOrder = document.getElementById('sortOrder').value;

      // Sort filtered residences
      const sortedAndFilteredResidences = sortResidencesByProperty(filteredResidences, sortCriteria, sortOrder);

      renderFilteredResidences(sortedAndFilteredResidences);
    })
    .catch(error => {
      console.error('Error fetching residences:', error);
      renderFilteredResidences([]);
    });
}

// Function to sort residences by a specified property and order
function sortResidencesByProperty(residences, property, order) {
  return residences.sort((a, b) => {
    const aValue = a[property];
    const bValue = b[property];

    // Check if values are valid strings
    if (typeof aValue !== 'string' || typeof bValue !== 'string') {
      // If not valid strings, fallback to basic comparison
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    }
    // Valid string values, use localeCompare for string comparison
    return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
}

function renderFilteredResidences(residences) {
  const filteredResidencesList = residences.map(residence => `
        <a href="#residence-${residence.id}" class="residence-link">
          <div class="residencesList">
            <div class="residences">
              <h2>${residence.address}</h2>
              <p>${residence.housingType}</p>
              <p>${residence.size} KVM | ${residence.numberOfRooms} ROOMS | ${formatPrice(residence.startingPrice)} KR</p>
            </div>
          </div>
        </a>
  `).join('');

  renderContent(filterForms, filteredResidencesList);
}