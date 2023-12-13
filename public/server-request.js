// // server-request.js

// const API_URL = 'http://localhost:5500'; // Update with your JSON Server URL

// export async function getAllResidences() {
//   const response = await fetch(`${API_URL}/residence`);
//   const data = await response.json();
//   return data;
// }

// export async function addResidence() {
//   try {
//     const response = await fetch(`${API_URL}/residence`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         "id": 21,
//         "housingType": "test",
//         "address": "test 22",
//         "startingPrice": 250000,
//         "numberOfRooms": 3,
//         "livingArea": 120,
//         "balconyPatio": true,
//         "floor": 5,
//         "elevator": true,
//         "yearOfConstruction": 2000,
//         "storehouse": false,
//         "parking": true,
//         "innerYard": false
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Assuming your server returns JSON, you can parse the response
//     const data = await response.json();

//     // Do something with the data if needed
//     console.log('New residence added: ', data);

//     // Return the data or perform additional actions as necessary
//     return data;
//   } catch (error) {
//     console.error('Error adding residence:', error.message);
//     throw error; // Rethrow the error to handle it elsewhere, if needed
//   }
// }
// export async function getOneResidence(residenceId) {
//   const response = await fetch(`${API_URL}/residence/${residenceId}`);
//   const data = await response.json();
//   return data;
// }

// export async function updateResidence(residence) {
//   const response = await fetch(`${API_URL}/residence/${residence.id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(residence),
//   });
//   const data = await response.json();
//   console.log('User updated:', data);
// }
