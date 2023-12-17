function renderSellForm() {
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
      innerYard: document.getElementById('innerYard').value,
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