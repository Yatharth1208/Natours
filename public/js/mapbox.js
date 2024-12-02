
export const displayMap=(locations)=>{
  const [longStart, latStart] = locations[0].coordinates;

  const map = L.map('map').setView([latStart, longStart], 6);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  for (let i = locations.length - 1; i >= 0; i--) {
    const currLocation = locations[i];

    const [long, lat] = currLocation.coordinates;

    const marker = L.marker([lat, long]).addTo(map);

    marker
      .bindPopup(
        `<h1>Arrive on Day ${currLocation.day}</h1><br><h1>Location: ${currLocation.description}.</h1>`
      )
      .openPopup();
  }
};


 