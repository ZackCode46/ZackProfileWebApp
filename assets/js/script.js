// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('.menu-button');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });
    targetSection.classList.add('active');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Leaflet.js map setup for Kalimulya, Depok
const map = L.map('map').setView([-6.419622, 106.840070], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-6.419622, 106.840070])
  .addTo(map)
  .bindPopup('Jl. Raya Kalimulya No.49, Cilodong, Depok')
  .openPopup();

// Contact form to WhatsApp
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.getElementById('message').value;

  const whatsappLink = `https://wa.me/6289653720025?text=Halo%20nama%20saya%20${encodeURIComponent(name)}%2C%20email%3A%20${encodeURIComponent(email)}%0A${encodeURIComponent(message)}`;

  window.open(whatsappLink, '_blank');
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  const keys = ['1','2','3','4','5','6'];
  const tabs = ['profile', 'cv', 'portfolio', 'social', 'contact', 'location'];
  if (keys.includes(e.key)) {
    const index = keys.indexOf(e.key);
    document.querySelector(`[data-target="${tabs[index]}"]`).click();
  }
});

// Typewriter Effect on header
const typeText = ["IoT Architect", "Embedded System Developer", "Web & App Developer", "Electric & Network Technician", "Martial Artist"];
let i = 0, j = 0, currentText = '', isDeleting = false;

function typeWriter() {
  const element = document.querySelector('header p');
  if (!element) return;
  if (!isDeleting && j <= typeText[i].length) {
    currentText = typeText[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    currentText = typeText[i].substring(0, j--);
  }
  element.innerHTML = currentText + '<span class="cursor">|</span>';
  if (!isDeleting && j === typeText[i].length) {
    isDeleting = true;
    setTimeout(typeWriter, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % typeText.length;
    setTimeout(typeWriter, 300);
  } else {
    setTimeout(typeWriter, isDeleting ? 40 : 100);
  }
}
typeWriter();
