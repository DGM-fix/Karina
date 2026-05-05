// ─── HEADER SCROLL ───
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('fabTop').classList.toggle('visible', window.scrollY > 400);
});

// ─── HAMBURGER ───
function toggleNav() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileNav').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileNav').classList.contains('open') ? 'hidden' : '';
}

// ─── CAROUSEL ───
let carouselIndex = 0;
const track = document.getElementById('carouselTrack');
const slides = track.querySelectorAll('.carousel-slide');
const slideWidth = 280 + 24; // min-width + gap*2

function updateCarousel() {
  track.style.transform = `translateX(-${carouselIndex * slideWidth}px)`;
}
function slideCarousel(dir) {
  const max = slides.length - Math.floor(track.parentElement.offsetWidth / slideWidth);
  carouselIndex = Math.max(0, Math.min(carouselIndex + dir, max));
  updateCarousel();
}
setInterval(() => slideCarousel(1), 3500);

// ─── GALLERY FILTER ───
function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

// ─── MODAL ───
function openModal(label) {
  document.getElementById('modalLabel').textContent = label;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (!e || e.target === document.getElementById('modal') || e.type === 'click') {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ─── FORM ───
function submitForm() {
  const name = document.getElementById('formName').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  if (!name || !phone) {
    alert('Por favor, preencha nome e telefone.');
    return;
  }
  document.getElementById('formArea').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

// ─── REVEAL ON SCROLL ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
