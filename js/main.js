/* ============================
   Pet Home Euthanasia Orange County
   Main JavaScript
   ============================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Sticky Header ----
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ---- Mobile Menu ----
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileClose = document.querySelector('.mobile-nav__close');

  function openMobileMenu() {
    if (mobileNav && mobileOverlay) {
      mobileNav.classList.add('open');
      mobileOverlay.style.display = 'block';
      requestAnimationFrame(() => mobileOverlay.classList.add('visible'));
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileNav && mobileOverlay) {
      mobileNav.classList.remove('open');
      mobileOverlay.classList.remove('visible');
      setTimeout(() => {
        mobileOverlay.style.display = 'none';
      }, 300);
      document.body.style.overflow = '';
    }
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // Close mobile nav on link click (except cities toggle)
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      if (!link.classList.contains('mobile-nav__cities-toggle')) {
        link.addEventListener('click', closeMobileMenu);
      }
    });
  }

  // ---- Mobile Cities Toggle ----
  const citiesToggle = document.querySelector('.mobile-nav__cities-toggle');
  const citiesList = document.querySelector('.mobile-nav__cities');
  if (citiesToggle && citiesList) {
    citiesToggle.addEventListener('click', function (e) {
      e.preventDefault();
      citiesList.classList.toggle('open');
      citiesToggle.classList.toggle('open');
    });
  }

  // ---- Desktop Dropdown ----
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector('.dropdown__toggle');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdown.classList.toggle('open');
      });
    }
    // Close on mouse leave for desktop
    dropdown.addEventListener('mouseleave', function () {
      dropdown.classList.remove('open');
    });
  });

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ---- Scroll to Top Button ----
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Fade-in on Scroll (Intersection Observer) ----
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback: show all elements
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---- Contact Form Validation ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.querySelector('[name="name"]');
      const email = this.querySelector('[name="email"]');
      const phone = this.querySelector('[name="phone"]');
      const message = this.querySelector('[name="message"]');

      let valid = true;

      // Clear previous errors
      this.querySelectorAll('.form-error').forEach(el => el.remove());
      this.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

      function showError(field, msg) {
        field.classList.add('error');
        const errorEl = document.createElement('span');
        errorEl.className = 'form-error';
        errorEl.style.color = '#e74c3c';
        errorEl.style.fontSize = '0.85rem';
        errorEl.style.marginTop = '4px';
        errorEl.style.display = 'block';
        errorEl.textContent = msg;
        field.parentElement.appendChild(errorEl);
        valid = false;
      }

      if (name && !name.value.trim()) showError(name, 'Please enter your name.');
      if (email && !email.value.trim()) {
        showError(email, 'Please enter your email.');
      } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, 'Please enter a valid email.');
      }
      if (phone && !phone.value.trim()) showError(phone, 'Please enter your phone number.');
      if (message && !message.value.trim()) showError(message, 'Please enter a message.');

      if (valid) {
        // Build mailto
        const subject = encodeURIComponent('Pet Home Euthanasia Inquiry - Orange County');
        const body = encodeURIComponent(
          'Name: ' + name.value.trim() +
          '\nEmail: ' + email.value.trim() +
          '\nPhone: ' + phone.value.trim() +
          '\nZip Code: ' + (this.querySelector('[name="zipcode"]') ? this.querySelector('[name="zipcode"]').value.trim() : '') +
          '\nMessage: ' + message.value.trim()
        );
        window.location.href = 'mailto:pethomeeuthanasiaservice@gmail.com?subject=' + subject + '&body=' + body;

        // Show success
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.style.background = '#d4edda';
        successMsg.style.color = '#155724';
        successMsg.style.padding = '15px';
        successMsg.style.borderRadius = '8px';
        successMsg.style.marginTop = '15px';
        successMsg.style.textAlign = 'center';
        successMsg.innerHTML = '<strong>Thank you!</strong> Your email client will open with your message. Please click Send.';
        contactForm.appendChild(successMsg);

        setTimeout(() => successMsg.remove(), 5000);
      }
    });
  }

  // ---- Consent Form Validation ----
  const consentForm = document.getElementById('consent-form');
  if (consentForm) {
    consentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const requiredFields = this.querySelectorAll('[required]');
      let valid = true;

      this.querySelectorAll('.form-error').forEach(el => el.remove());
      this.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

      requiredFields.forEach(function (field) {
        if (!field.value.trim() && field.type !== 'checkbox' && field.type !== 'radio') {
          field.classList.add('error');
          field.style.borderColor = '#e74c3c';
          valid = false;
        } else if (field.type === 'checkbox' && !field.checked) {
          valid = false;
          const errorEl = document.createElement('span');
          errorEl.className = 'form-error';
          errorEl.style.color = '#e74c3c';
          errorEl.style.fontSize = '0.85rem';
          errorEl.textContent = 'You must agree to continue.';
          field.parentElement.parentElement.appendChild(errorEl);
        }
      });

      // Check radio group
      const aftercareRadios = this.querySelectorAll('input[name="aftercare"]');
      if (aftercareRadios.length > 0) {
        const anyChecked = Array.from(aftercareRadios).some(r => r.checked);
        if (!anyChecked) {
          valid = false;
          const radioGroup = aftercareRadios[0].closest('.radio-group');
          if (radioGroup) {
            const errorEl = document.createElement('span');
            errorEl.className = 'form-error';
            errorEl.style.color = '#e74c3c';
            errorEl.style.fontSize = '0.85rem';
            errorEl.textContent = 'Please select an aftercare option.';
            radioGroup.appendChild(errorEl);
          }
        }
      }

      if (valid) {
        alert('Thank you! Your consent form has been submitted. A confirmation will be sent to your email. Digital signature will be collected at the time of appointment.');
        consentForm.reset();
      } else {
        // Scroll to first error
        const firstError = this.querySelector('.error, .form-error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  // ---- Print Consent Form ----
  const printBtn = document.getElementById('print-consent');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      window.print();
    });
  }

  // ---- FAQ Accordion ----
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');

        // Close all other items
        faqItems.forEach(function (otherItem) {
          otherItem.classList.remove('open');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        // Toggle current item
        if (!isOpen) {
          item.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ---- Sticky Mobile CTA ----
  const stickyCta = document.getElementById('sticky-cta');
  if (stickyCta) {
    let lastScrollY = 0;
    window.addEventListener('scroll', function () {
      const heroSection = document.querySelector('.hero');
      const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 150;

      if (window.scrollY > heroBottom) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
      lastScrollY = window.scrollY;
    });
  }

});
