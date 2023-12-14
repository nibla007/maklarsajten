function renderSellForm() {
  const sellForm = `
  <div class="sellForm">
    <h1>Sell your residence</h1>
        <form id="residenceForm">
          <label for="housingType">Housing Type:</label>
          <input type="text" id="housingType" name="housingType" required>

          <label for="address">Address:</label>
          <input type="text" id="address" name="address" required>

          <label for="startingPrice">Starting Price:</label>
          <input type="number" id="startingPrice" name="startingPrice" required>

          <label for="numberOfRooms">Number of Rooms:</label>
          <input type="number" id="numberOfRooms" name="numberOfRooms" required>

          <label for="size">Living Area:</label>
          <input type="number" id="size" name="size" required>

          <label for="floor">Floor:</label>
          <input type="number" id="floor" name="floor" required>

          <label for="yearOfConstruction">Year of Construction:</label>
          <input type="number" id="yearOfConstruction" name="yearOfConstruction" required>

          <label for="elevator">Elevator:</label>
          <select id="elevator" name="elevator" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label for="balconyPatio">Balcony/Patio:</label>
          <select id="balconyPatio" name="balconyPatio" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label for="storehouse">Storehouse:</label>
          <select id="storehouse" name="storehouse" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label for="parking">Parking:</label>
          <select id="parking" name="parking" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label for="innerYard">Inner Yard:</label>
          <select id="innerYard" name="innerYard" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label for="image">Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/*">

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
      image: document.getElementById('image').value,
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