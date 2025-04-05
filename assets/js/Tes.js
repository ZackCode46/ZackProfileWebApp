// Inisialisasi Map
const map = L.map('map').setView([-6.390451, 106.838879], 16);

// Load Tile Layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);

// Marker Lokasi Zack
