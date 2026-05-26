// AOS init
AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
function toggleMenu() {
  const ul = document.getElementById('menu');
  const isVisible = window.getComputedStyle(ul).display !== 'none' && ul.style.display !== 'none';
  ul.style.display = isVisible ? 'none' : 'flex';
}

// Smooth scroll + close menu
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const ul = document.getElementById('menu');
      if (window.innerWidth < 880) ul.style.display = 'none';
    }
  });
});

// Close menu on outside click
document.addEventListener('click', function(e) {
  const ul = document.getElementById('menu');
  const toggle = document.querySelector('.menu-toggle');
  if (ul && toggle && !ul.contains(e.target) && !toggle.contains(e.target)) {
    if (window.innerWidth < 880) ul.style.display = 'none';
  }
});

// Sticky header shrink
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 40) {
    header.style.background = 'rgba(7,13,26,0.95)';
  } else {
    header.style.background = 'rgba(7,13,26,0.8)';
  }
});

// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = '✓ 送信しました / Terkirim!';
  btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}
