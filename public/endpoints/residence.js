function viewResidenceDetails(residenceId) {
  if (residenceId === undefined) {
    console.error('Residence ID is undefined');
    renderContent('Invalid residence ID.');
    return;
  }

  // Fetch the residence details using residenceId
  fetch(`http://localhost:5500/residence/${residenceId}`)
    .then(response => response.json())
    .then(residence => {
      console.log("residence details: ", residence);
      const detailedView = `
        <div class="residence">
          <h2>${residence.address} Details</h2>
          <p>${residence.housingType}</p>
          <p>${residence.livingArea} KVM ${residence.numberOfRooms} ROOMS ${residence.startingPrice} KR</p>
          <p>Balcony: ${residence.balconyPatio}</p>
          <p>Floor: ${residence.floor}</p>
          <p>Elevator: ${residence.elevator}</p>
          <p>Constructed: ${residence.yearOfConstruction}</p>
          <p>Storehouse: ${residence.storehouse}</p>
          <p>Parking: ${residence.parking}</p>
          <p>Inner Yard: ${residence.innerYard}</p>
        </div>
      `;
      renderContent(detailedView);
    })
    .catch(error => {
      console.error('Error fetching residence details:', error);
      renderContent('Failed to fetch residence details.');
    });
}
