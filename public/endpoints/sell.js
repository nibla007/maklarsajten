function renderSellForm() {
  renderContent(sellForm);

  document.getElementById('residenceForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      housingType: document.getElementById('housingType').value,
      address: document.getElementById('address').value,
      startingPrice: document.getElementById('startingPrice').value,
      numberOfRooms: document.getElementById('numberOfRooms').value,
      size: document.getElementById('size').value,
      floor: document.getElementById('floor').value,
      yearOfConstruction: document.getElementById('yearOfConstruction').value,
      elevator: document.getElementById('elevator').value,
      balconyPatio: document.getElementById('balconyPatio').value,
      storehouse: document.getElementById('storehouse').value,
      parking: document.getElementById('parking').value,
      innerYard: document.getElementById('innerYard').value
    };

    fetch('http://localhost:5500/residence', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Residence added:', data);
      })
      .catch(error => {
        console.error('Error adding residence:', error);
      });
  });
}