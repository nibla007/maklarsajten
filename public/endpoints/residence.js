function renderResidenceDetails(residenceId) {
  if (residenceId === undefined) {
    console.error('Residence ID is undefined');
    renderContent('Invalid residence ID.');
    return;
  }

  fetch(`http://localhost:5500/residence/${residenceId}`)
    .then(response => response.json())
    .then(residence => {
      const detailedView = `
      <div class="residence">
        <img class="image" src="./house1.jpg">
        <h2>${residence.address}</h2>
        <p class="info">
          STARTING PRICE: ${formatPrice(residence.startingPrice)} KR
          <br>HOUSING TYPE: ${residence.housingType}
          <br>NUMBER OF ROOMS: ${residence.numberOfRooms}
          <br>SIZE: ${residence.size} KVM
          <br>CONSTRUCTED: ${residence.yearOfConstruction}
          <br>
          <br>BALCONY: ${residence.balconyPatio}
          <br>FLOOR: ${residence.floor}
          <br>ELEVATOR: ${residence.elevator}
          <br>STOREHOUSE: ${residence.storehouse}
          <br>PARKING: ${residence.parking}
          <br>INNER YARD: ${residence.innerYard}
        </p>
      </div>
      `;
      renderContent(detailedView);
    })
    .catch(error => {
      console.error('Error fetching residence details:', error);
      renderContent('Failed to fetch residence details.');
    });
}