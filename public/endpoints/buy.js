function renderResidences() {
  fetch('http://localhost:5500/residence')
    .then(response => response.json())
    .then(residence => {
      const residencesList = residence.map(residence => `
        <a href="#residence-${residence.id}" class="residence-link">
          <div class="residences-container">
            <div class="residences">
              <h2>${residence.address}</h2>
              <p>${residence.housingType}</p>
              <p>${residence.size} KVM | ${residence.numberOfRooms} ROOMS | ${residence.startingPrice} KR</p>
            </div>
          </div>
        </a>
      `).join('');

      renderContent(residencesList);
    })
    .catch(error => {
      console.error('Error fetching residences:', error);
      renderContent('Failed to fetch residences.');
    });
}