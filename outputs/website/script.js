/**
 * Andaman Golf Cup 2026
 * script.js — Main JavaScript for the trilingual static website
 *
 * Modules:
 *   1. Translations (loaded from content.js → window.SITE_CONTENT)
 *   2. setLanguage() — i18n rendering
 *   3. Navigation behaviour (scroll, smooth anchor, hamburger)
 *   4. Registration Form Handler
 *   5. Scroll Animations (IntersectionObserver)
 *   6. DOMContentLoaded Init
 *
 * To edit text content: open content.js or use admin.html
 */

'use strict';

/* =============================================================================
   MODULE 1 — TRANSLATIONS
   All content lives in content.js which sets window.SITE_CONTENT.
   Edit content.js directly, or use admin.html for a visual editor.
============================================================================= */

const translations = window.SITE_CONTENT || {};

/* =============================================================================
   MODULE 2 — setLanguage
   Renders all [data-i18n] elements, meta description, and title.
============================================================================= */

/**
 * Apply a language to the entire page.
 * @param {string} lang  One of: 'en', 'th', 'ru'
 */
function setLanguage(lang) {
  // Guard: fall back to English if an unsupported lang is requested
  if (!translations[lang]) {
    lang = 'en';
  }

  // 1. Persist the user's choice
  localStorage.setItem('agc_lang', lang);

  // 2. Update the <html lang=""> attribute for accessibility & SEO
  document.documentElement.lang = lang;

  // 3. Update all elements carrying a data-i18n key
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value === undefined) return;

    const tag = el.tagName.toLowerCase();

    // For form controls, set the value attribute / placeholder rather than innerHTML
    if (tag === 'input' || tag === 'textarea') {
      if (el.getAttribute('type') === 'submit' || el.getAttribute('type') === 'button') {
        el.value = value;
      } else {
        el.setAttribute('placeholder', value);
      }
    } else if (tag === 'select') {
      // Nothing to set on the <select> itself — options carry their own keys
    } else if (tag === 'option') {
      el.textContent = value;
    } else {
      // For all other elements, set innerHTML so that any inline HTML in
      // translations (e.g. arrows, entities) is rendered correctly.
      // Line breaks in multi-line strings are preserved via CSS white-space.
      el.innerHTML = value;
    }
  });

  // 4. Update <meta> tags that carry a data-i18n-attr="content" attribute
  document.querySelectorAll('[data-i18n-attr="content"]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.setAttribute('content', value);
    }
  });

  // 5. Update the browser tab title
  if (translations[lang]['meta.title']) {
    document.title = translations[lang]['meta.title'];
  }

  // 6. Reflect the active state on language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* =============================================================================
   MODULE 3 — NAVIGATION BEHAVIOUR
   Scroll class, smooth anchors, hamburger toggle.
============================================================================= */

/**
 * Add or remove the .scrolled class on the navbar based on scroll position.
 * CSS uses this class to apply a background / shadow to the initially
 * transparent navbar.
 */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const hero   = document.getElementById('hero');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    // Stay light while the hero section is still in view
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    navbar.classList.toggle('nav-light', heroBottom > 72);
  }
}, { passive: true });

/**
 * Smooth-scroll to anchor targets.
 * Native scroll-behavior: smooth in CSS handles most cases, but this
 * explicit handler closes the mobile menu and provides a fallback.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetSelector = anchor.getAttribute('href');
    if (!targetSelector || targetSelector === '#') return;

    const target = document.querySelector(targetSelector);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });

      // Close mobile nav if it is open
      const navbar = document.getElementById('navbar');
      if (navbar) navbar.classList.remove('nav-open');
    }
  });
});

/**
 * Hamburger / mobile menu toggle.
 */
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('nav-open');
  });
}

/* =============================================================================
   MODULE 4 — REGISTRATION FORM HANDLER
   Client-side validation; shows confirmation block on success.
============================================================================= */

const registrationForm = document.getElementById('registration-form');
if (registrationForm) {
  registrationForm.addEventListener('submit', e => {
    e.preventDefault();

    let valid = true;

    // ---- Validate: Full Name ------------------------------------------------
    const name    = document.getElementById('reg-name');
    const errName = document.getElementById('err-name');
    if (name && !name.value.trim()) {
      name.classList.add('error');
      if (errName) errName.classList.add('visible');
      valid = false;
    } else if (name) {
      name.classList.remove('error');
      if (errName) errName.classList.remove('visible');
    }

    // ---- Validate: Email ----------------------------------------------------
    const email    = document.getElementById('reg-email');
    const errEmail = document.getElementById('err-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && (!email.value.trim() || !emailRegex.test(email.value.trim()))) {
      email.classList.add('error');
      if (errEmail) errEmail.classList.add('visible');
      valid = false;
    } else if (email) {
      email.classList.remove('error');
      if (errEmail) errEmail.classList.remove('visible');
    }

    // ---- Validate: Phone ----------------------------------------------------
    const phone    = document.getElementById('reg-phone');
    const errPhone = document.getElementById('err-phone');
    if (phone && !phone.value.trim()) {
      phone.classList.add('error');
      if (errPhone) errPhone.classList.add('visible');
      valid = false;
    } else if (phone) {
      phone.classList.remove('error');
      if (errPhone) errPhone.classList.remove('visible');
    }

    // ---- Validate: Team Type (select) ---------------------------------------
    const teamType = document.getElementById('reg-type');
    const errType  = document.getElementById('err-type');
    if (teamType && !teamType.value) {
      teamType.classList.add('error');
      if (errType) errType.classList.add('visible');
      valid = false;
    } else if (teamType) {
      teamType.classList.remove('error');
      if (errType) errType.classList.remove('visible');
    }

    // ---- Submit: send email + show confirmation block -----------------------
    if (valid) {
      const submitBtn = registrationForm.querySelector('button[type="submit"], input[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      const teamCount = document.getElementById('reg-count');
      const notes     = document.getElementById('reg-notes');
      const org       = document.getElementById('reg-org');

      emailjs.send('service_xl453kq', 'template_vpibzkk', {
        to_email:     'ruttherick@gmail.com',
        from_name:    name.value.trim(),
        from_email:   email.value.trim(),
        organisation: org       ? org.value.trim()       : '',
        phone:        phone.value.trim(),
        team_type:    teamType.options[teamType.selectedIndex].text,
        team_count:   teamCount ? teamCount.value        : '1',
        notes:        notes     ? notes.value.trim()     : '',
      }).catch((err) => {
        console.error('EmailJS error:', err);
      }).finally(() => {
        registrationForm.classList.add('hidden');
        const confirmation = document.getElementById('confirmation');
        if (confirmation) {
          confirmation.classList.remove('hidden');
          confirmation.classList.add('visible');
          confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  });
}

/* =============================================================================
   MODULE 5 — SCROLL ANIMATIONS (IntersectionObserver)
   Elements with class .fade-in-up animate in once when they enter the viewport.
============================================================================= */

(function initScrollAnimations() {
  // IntersectionObserver is supported in all modern browsers.
  // For very old browsers (IE 11) the elements will simply remain visible
  // without the entrance animation.
  if (!('IntersectionObserver' in window)) {
    // Fallback: make all animated elements visible immediately
    document.querySelectorAll('.fade-in-up').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // trigger only once
      }
    });
  }, {
    threshold: 0.15  // 15 % of element visible before triggering
  });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}());

/* =============================================================================
   MODULE 5b — AGENDA SCROLL COLOURS
   As each .agenda-row enters the viewport it receives a data-color attribute
   that drives a CSS colour transition on the time pill.
============================================================================= */

(function initAgendaColors() {
  const rows = document.querySelectorAll('.agenda-row');
  if (!rows.length) return;

  const TRIGGER = 0.6; // 60% down the viewport

  function updateColors() {
    const threshold = window.innerHeight * TRIGGER;
    rows.forEach(row => {
      const top = row.getBoundingClientRect().top;
      if (top < threshold) {
        row.dataset.color = row.dataset.agendaIndex || 0;
      } else {
        delete row.dataset.color;
      }
    });
  }

  window.addEventListener('scroll', updateColors, { passive: true });
  updateColors(); // run once on load
}());

/* =============================================================================
   MODULE 6 — GALLERY MODAL / LIGHTBOX

   To add extra photos per card, add filenames to the arrays below.
   null = placeholder slot (shows a labeled placeholder until you add the file).

   Example — to add a real photo to card 1:
     Change:  1: ['past-jazz-for-king.webp', null, null]
     To:      1: ['past-jazz-for-king.webp', 'jazz-photo-2.jpg', null]
============================================================================= */

const GALLERY_IMAGES = {
  1: ['past-jazz-for-king.webp',    null, null],   // card 1 — Jazz for the King
  2: ['past-plant.webp',            null, null],   // card 2 — Reforestation
  3: ['past-turtle-saving.webp', 'card 3.1.webp', 'card3.2.webp', 'card 3.3.webp'],   // card 3 — Turtle / Cleaning Day
  4: ['past-maya-bay-mooring.jpg',  null, null],   // card 4 — Maya Bay Mooring
  5: ['past-turtle-ambassadors.webp', null, null], // card 5 — Ambassador Release
};

(function initGalleryModal() {
  const overlay     = document.getElementById('gallery-modal');
  const closeBtn    = document.getElementById('gallery-modal-close');
  const modalImg    = document.getElementById('gallery-modal-img');
  const modalTitle  = document.getElementById('gallery-modal-title');
  const modalDetail = document.getElementById('gallery-modal-detail');
  const thumbsWrap  = document.getElementById('gallery-modal-thumbs');

  if (!overlay) return;

  let currentImages = [];
  let currentIndex  = 0;

  /* ── Switch the main image to slot i ── */
  function showSlot(i) {
    currentIndex = i;
    const src = currentImages[i];

    if (src) {
      modalImg.src = src;
      modalImg.style.display = '';
      modalImg.closest('.gallery-modal-img-wrap').classList.remove('showing-placeholder');
    } else {
      modalImg.src = '';
      modalImg.style.display = 'none';
      modalImg.closest('.gallery-modal-img-wrap').classList.add('showing-placeholder');
      // Update placeholder label with the suggested filename
      const label = modalImg.closest('.gallery-modal-img-wrap').querySelector('.modal-main-placeholder-label');
      if (label) label.textContent = suggestedName(i);
    }

    // Update active thumb
    thumbsWrap.querySelectorAll('.gallery-thumb').forEach((th, j) => {
      th.classList.toggle('active', j === i);
    });
  }

  /* ── Generate a suggested filename for a placeholder slot ── */
  function suggestedName(slotIndex) {
    return `event-photo-${slotIndex + 1}.jpg`;
  }

  /* ── Build the thumbnail strip ── */
  function buildThumbs(cardIndex) {
    thumbsWrap.innerHTML = '';
    currentImages.forEach((src, i) => {
      const thumb = document.createElement('div');
      thumb.className = 'gallery-thumb' + (i === 0 ? ' active' : '');

      if (src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.loading = 'lazy';
        thumb.appendChild(img);
      } else {
        // Placeholder thumbnail
        thumb.classList.add('gallery-thumb-placeholder');
        const label = document.createElement('span');
        label.textContent = suggestedName(i);
        thumb.appendChild(label);
        thumb.title = `Replace: add file "${suggestedName(i)}" and update GALLERY_IMAGES in script.js`;
      }

      thumb.addEventListener('click', () => showSlot(i));
      thumbsWrap.appendChild(thumb);
    });
  }

  /* ── Open modal ── */
  function openModal(cardIndex) {
    const lang = localStorage.getItem('agc_lang') || 'th';
    const t    = (window.SITE_CONTENT || {})[lang] || {};

    currentImages = (GALLERY_IMAGES[cardIndex] || []).slice();

    // Fallback: use the card's img src if config missing
    if (!currentImages.length) {
      const card  = document.querySelector(`[data-card-index="${cardIndex}"]`);
      const imgEl = card ? card.querySelector('img') : null;
      if (imgEl) currentImages = [imgEl.src];
    }

    modalTitle.textContent  = t[`past.card${cardIndex}`] || '';
    modalDetail.textContent = t[`past.card${cardIndex}.detail`] || '';

    buildThumbs(cardIndex);
    showSlot(0);

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Reset main image display in case a placeholder was showing
    modalImg.style.display = '';
    modalImg.closest('.gallery-modal-img-wrap').classList.remove('showing-placeholder');
  }

  /* ── Card click handlers ── */
  document.querySelectorAll('.gallery-card').forEach(card => {
    const idx     = card.getAttribute('data-card-index');
    const imgWrap = card.querySelector('.gallery-img-wrap');
    if (imgWrap && idx) {
      imgWrap.addEventListener('click', () => openModal(Number(idx)));
    }
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}());

/* =============================================================================
   MODULE 7 — DOMContentLoaded INIT
   Bootstraps the page: language, language-button handlers, nav scroll state.
============================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Restore saved language preference, defaulting to Thai
  const savedLang = localStorage.getItem('agc_lang') || 'th';
  setLanguage(savedLang);

  // 2. Wire up language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });

  // 3. Set the initial navbar scroll/light state in case the page loads mid-scroll
  const navbar = document.getElementById('navbar');
  const hero   = document.getElementById('hero');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    navbar.classList.toggle('nav-light', heroBottom > 72);
  }

});
