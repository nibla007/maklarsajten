function renderResidences() {
  fetch('http://localhost:5500/residence')
    .then(response => response.json())
    .then(residence => {
      const residencesList = residence.map(residence => `
        <a href="#residence-${residence.id}" class="residence-link">
          <div class="residence">
            <h2>${residence.address}</h2>
            <p>${residence.housingType}</p>
            <p>${residence.livingArea} KVM ${residence.numberOfRooms} ROOMS ${residence.startingPrice} KR</p>
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