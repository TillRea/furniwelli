const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const whatsappIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8.75"></circle><path d="M8.2 7.8c.35-.35.72-.45 1.08-.2l1.35 1.75c.2.28.18.6-.03.9l-.7.9c-.16.2-.16.43-.04.65.62 1.12 1.52 2.03 2.65 2.66.22.12.45.12.65-.04l.9-.7c.3-.22.62-.23.9-.03l1.75 1.35c.25.36.15.73-.2 1.08-.58.58-1.37.88-2.18.75-3.4-.54-6.1-3.24-6.65-6.65-.13-.8.17-1.6.75-2.18Z"></path><path d="m6.1 18.3.7-2.45A8.75 8.75 0 1 1 12 20.75a8.7 8.7 0 0 1-4.15-1.05L6.1 20.2l.5-1.9"></path></svg>';

document.querySelectorAll('.whatsapp-float').forEach((button) => {
  if (!button.querySelector('svg')) button.innerHTML = whatsappIcon;
  button.setAttribute('aria-label', 'WhatsApp');
  button.setAttribute('title', 'WhatsApp');
});

function navigationLabel(open) {
  const key = open ? 'nav.close' : 'nav.open';
  return window.FurniwellI18n?.t(key) || (open ? 'Close navigation' : 'Open navigation');
}

function closeMenu() {
  if (!toggle || !menu) return;
  menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', navigationLabel(false));
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', navigationLabel(open));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1320) closeMenu();
  });
}

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('furniwell:languagechange', () => {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-label', navigationLabel(menu.classList.contains('is-open')));
});


// Dropdown toggle logic
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = btn.closest('.dropdown');
    const isActive = dropdown.classList.contains('is-active');
    
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('is-active');
      d.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      dropdown.classList.add('is-active');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => {
    d.classList.remove('is-active');
    d.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof GalleryRenderer !== 'undefined') {
    GalleryRenderer.renderGallery("products-gallery-grid", "products.json", "products");
    GalleryRenderer.renderGallery("custom-furniture-grid", "custom-furniture.json", "custom-furniture");
    GalleryRenderer.renderGallery("featured-products-grid", "products.json", "products", 6);
  }
});
