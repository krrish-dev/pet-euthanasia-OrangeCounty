// City page generator for Pet Home Euthanasia Orange County
// Run with: node generate-cities.js

const fs = require('fs');
const path = require('path');

const cities = [
  { slug: 'newport-beach', name: 'Newport Beach', intro: 'Newport Beach is a beautiful coastal city in Orange County where many pet owners cherish their furry companions. When the time comes to say goodbye, Pet Home Euthanasia Service provides compassionate in-home euthanasia so your pet can pass peacefully in the comfort of your Newport Beach home.' },
  { slug: 'irvine', name: 'Irvine', intro: 'Irvine is a family-friendly city known for its safe neighborhoods and pet-loving community. Our in-home euthanasia services allow Irvine residents to provide their beloved pets with a gentle, peaceful goodbye surrounded by familiar surroundings and loved ones.' },
  { slug: 'orange', name: 'Orange', intro: 'The City of Orange with its historic Old Towne charm is home to countless pet families. Pet Home Euthanasia Service offers compassionate in-home euthanasia services throughout Orange, allowing your pet to rest peacefully in the place they know and love.' },
  { slug: 'anaheim', name: 'Anaheim', intro: 'Anaheim, one of Orange County\'s largest cities, is home to many devoted pet owners. Our in-home euthanasia services in Anaheim provide a humane and loving alternative to clinical settings, ensuring your pet\'s final moments are peaceful and dignified.' },
  { slug: 'laguna-beach', name: 'Laguna Beach', intro: 'Laguna Beach is a picturesque coastal community where pets are treasured family members. When facing the difficult decision of euthanasia, our in-home services allow Laguna Beach pet owners to give their companions a serene farewell in the comfort of home.' },
  { slug: 'tustin', name: 'Tustin', intro: 'Tustin is a welcoming community in the heart of Orange County where pets are part of the family. Pet Home Euthanasia Service provides gentle in-home euthanasia for Tustin families, ensuring your pet\'s last moments are filled with love and comfort.' },
  { slug: 'garden-grove', name: 'Garden Grove', intro: 'Garden Grove residents know how important their pets are to their families. Our in-home pet euthanasia services provide Garden Grove pet owners with a compassionate way to say goodbye, right in the familiar environment your pet loves most.' },
  { slug: 'mission-viejo', name: 'Mission Viejo', intro: 'Mission Viejo is regularly ranked among the safest cities in America and is home to many loving pet families. Pet Home Euthanasia Service makes at-home visits throughout Mission Viejo, providing gentle end-of-life care for your beloved companion.' },
  { slug: 'lake-forest', name: 'Lake Forest', intro: 'Lake Forest is a beautiful South Orange County community where many families include four-legged members. Our in-home euthanasia services help Lake Forest pet owners through one of life\'s toughest moments with compassion and professionalism.' },
  { slug: 'yorba-linda', name: 'Yorba Linda', intro: 'Known as the "Land of Gracious Living," Yorba Linda is a community that values quality of life — for humans and pets alike. Our in-home euthanasia services bring peaceful end-of-life care directly to your Yorba Linda home.' },
  { slug: 'rancho-santa-margarita', name: 'Rancho Santa Margarita', intro: 'Rancho Santa Margarita is a close-knit community nestled in the foothills of Orange County. Pet Home Euthanasia Service provides compassionate in-home euthanasia for Rancho Santa Margarita families, ensuring a gentle and loving goodbye for your pet.' },
  { slug: 'santa-ana', name: 'Santa Ana', intro: 'Santa Ana, the county seat of Orange County, is a vibrant city with many devoted pet owners. Our in-home euthanasia services allow Santa Ana families to provide their pets with a peaceful passing in the comfort and privacy of their own home.' },
  { slug: 'costa-mesa', name: 'Costa Mesa', intro: 'Costa Mesa is a dynamic city in Orange County where pets are beloved family members. Pet Home Euthanasia Service brings compassionate end-of-life care directly to Costa Mesa homes, providing comfort during this difficult time.' },
  { slug: 'fountain-valley', name: 'Fountain Valley', intro: 'Fountain Valley, a welcoming community in central Orange County, is home to many pet owners who deeply love their animal companions. Our in-home euthanasia services provide Fountain Valley families a gentle and dignified way to honor their pet\'s life.' },
];

const allCityLinks = cities.map(c =>
  `            <a href="${c.slug}.html">${c.name}, CA</a>`
).join('\n');

const dropdownLinks = cities.map(c =>
  `            <a href="${c.slug}.html">${c.name}, CA</a>`
).join('\n');

const cityGridLinks = cities.map(c =>
  `          <a href="${c.slug}.html" class="city-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
            ${c.name}, CA
          </a>`
).join('\n');

const sidebarLinks = cities.map(c =>
  `              <a href="${c.slug}.html">${c.name}, CA</a>`
).join('\n');

function generateCityPage(city) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>In-Home Pet Euthanasia ${city.name}, CA | Pet Home Euthanasia Orange County</title>
  <meta name="description" content="Compassionate in-home pet euthanasia and cremation services in ${city.name}, CA. Peaceful end-of-life care for dogs and cats. Call (760) 912-0848.">
  <meta name="keywords" content="pet euthanasia ${city.name}, in-home pet euthanasia ${city.name} CA, dog euthanasia ${city.name}, cat euthanasia ${city.name}, pet cremation ${city.name}">
  <link rel="canonical" href="https://pethomeeuthanasiaorangecounty.com/cities/${city.slug}.html">

  <meta property="og:type" content="website">
  <meta property="og:title" content="In-Home Pet Euthanasia ${city.name}, CA | Pet Home Euthanasia Orange County">
  <meta property="og:description" content="Compassionate in-home pet euthanasia and cremation services in ${city.name}, CA.">
  <meta property="og:url" content="https://pethomeeuthanasiaorangecounty.com/cities/${city.slug}.html">

  <link rel="stylesheet" href="../css/style.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "Pet Home Euthanasia - ${city.name}",
    "description": "Compassionate in-home pet euthanasia and cremation services in ${city.name}, CA.",
    "url": "https://pethomeeuthanasiaorangecounty.com/cities/${city.slug}.html",
    "telephone": "+17609120848",
    "email": "info@pethomeeuthanasiaorangecounty.com",
    "areaServed": {"@type": "City", "name": "${city.name}", "addressRegion": "CA"},
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  }
  </script>
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://pethomeeuthanasiaorangecounty.com/"},
      {"@type":"ListItem","position":2,"name":"Services","item":"https://pethomeeuthanasiaorangecounty.com/#service-area"},
      {"@type":"ListItem","position":3,"name":"${city.name}, CA","item":"https://pethomeeuthanasiaorangecounty.com/cities/${city.slug}.html"}
    ]
  }
  </script>
</head>
<body>

  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container">
      <a href="tel:7609120848">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        (760) 912-0848
      </a>
      <a href="mailto:info@pethomeeuthanasiaorangecounty.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        info@pethomeeuthanasiaorangecounty.com
      </a>
    </div>
  </div>

  <!-- Header -->
  <header class="header">
    <div class="container">
      <a href="../" class="header__logo">
        <img src="../images/logo.png" alt="Pet Home Euthanasia Services Logo" width="180" height="60">
      </a>
      <nav class="header__nav" aria-label="Main navigation">
        <a href="../">Home</a>
        <div class="dropdown">
          <a href="#" class="dropdown__toggle active">Services</a>
          <div class="dropdown__menu">
${dropdownLinks}
          </div>
        </div>
        <a href="../consent-form.html">Consent Form</a>
      </nav>
      <button class="menu-toggle" aria-label="Open menu">
        Menu
        <span class="hamburger"><span></span><span></span><span></span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Nav -->
  <div class="mobile-overlay" aria-hidden="true"></div>
  <nav class="mobile-nav" aria-label="Mobile navigation">
    <button class="mobile-nav__close" aria-label="Close menu">&times;</button>
    <a href="../">Home</a>
    <a href="#" class="mobile-nav__cities-toggle">Services ▾</a>
    <div class="mobile-nav__cities">
${allCityLinks}
    </div>
    <a href="../consent-form.html">Consent Form</a>
  </nav>

  <main id="main-content">

    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <div class="container">
        <ol class="breadcrumb__list">
          <li><a href="../">Home</a></li>
          <li class="separator">/</li>
          <li><a href="../#service-area">Services</a></li>
          <li class="separator">/</li>
          <li><span>${city.name}, CA</span></li>
        </ol>
      </div>
    </nav>

    <!-- City Hero -->
    <section class="city-hero">
      <h1>In-Home Pet Euthanasia in ${city.name}, CA</h1>
      <p>Compassionate end-of-life care for your beloved pets in ${city.name} and the surrounding areas.</p>
    </section>

    <!-- City Content -->
    <section class="city-content">
      <div class="container">
        <div class="fade-in">
          <p>${city.intro}</p>

          <h2>Compassionate In-Home Euthanasia</h2>
          <p>Saying goodbye to a beloved pet is one of the most difficult parts of having them in our lives. Dr. Soliman and his team offer compassionate care with quality of life assessments and advice based on decades of veterinary experience to help you make the best decision for your pet and your family.</p>
          <p>By choosing in-home euthanasia in ${city.name}, you'll know that your pet had a peaceful passing surrounded by everything and everyone they love most in the world. Our goal is to provide pets and owners the compassion and care they deserve at a difficult time.</p>

          <h2>Our Services in ${city.name}</h2>
          <p>We offer the following services for ${city.name} pet owners:</p>
          <ul style="list-style: disc; padding-left: 30px; margin-bottom: 20px;">
            <li style="margin-bottom: 8px;"><strong>Euthanasia Only</strong> — Starting at $450. Includes travel, home visit, sedation and euthanasia.</li>
            <li style="margin-bottom: 8px;"><strong>Euthanasia + Communal Cremation</strong> — Starting at $550. Includes all of the above plus group cremation.</li>
            <li style="margin-bottom: 8px;"><strong>Euthanasia + Private Cremation</strong> — Starting at $750. Includes all of the above plus individual cremation with ashes returned.</li>
          </ul>
          <p>Prices may vary depending upon the distance and weight of the pet. For more information, call or text <a href="tel:7609120848">(760) 912-0848</a>.</p>

          <h2>Pet Cremation &amp; Aftercare in ${city.name}</h2>
          <p>We offer pet cremation and aftercare services so that you can honor your pet's memory. Private cremation allows your pet's remains to be returned to you in a personalized cedar box, while communal cremation does not return ashes. Regardless of which option you choose, you can request a fur clipping and a clay paw print.</p>

          <div style="text-align: center; margin: 40px 0;">
            <a href="tel:7609120848" class="btn btn--primary btn--large">Call Now (760) 912-0848</a>
          </div>
        </div>

        <!-- Other Cities Sidebar -->
        <div class="city-sidebar fade-in">
          <h3>We Also Serve</h3>
          <div class="cities-list">
${sidebarLinks}
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="../images/logo.png" alt="Pet Home Euthanasia Services" width="150" height="50">
          <p>Providing compassionate in-home pet euthanasia and aftercare services in Orange County and the surrounding areas.</p>
        </div>
        <div class="footer__links">
          <h4>Quick Links</h4>
          <a href="../#home">Home</a>
          <a href="../#about-euthanasia">About Euthanasia</a>
          <a href="../#cremation">Cremation Services</a>
          <a href="../#pricing">Pricing</a>
          <a href="../#about-doctor">About Dr. Soliman</a>
          <a href="../consent-form.html">Consent Form</a>
        </div>
        <div class="footer__contact">
          <h4>Contact Us</h4>
          <a href="tel:7609120848">(760) 912-0848</a>
          <a href="mailto:info@pethomeeuthanasiaorangecounty.com">info@pethomeeuthanasiaorangecounty.com</a>
          <p>Open 7 Days a Week</p>
          <p>8:00 AM – 8:00 PM</p>
          <p>By Appointment Only</p>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 Pet Home Euthanasia Service. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <button class="scroll-top" aria-label="Scroll to top">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
  </button>

  <script src="../js/main.js"></script>
</body>
</html>`;
}

// Generate all city pages
const citiesDir = path.join(__dirname, 'cities');
if (!fs.existsSync(citiesDir)) fs.mkdirSync(citiesDir, { recursive: true });

cities.forEach(city => {
  const filePath = path.join(citiesDir, `${city.slug}.html`);
  fs.writeFileSync(filePath, generateCityPage(city), 'utf8');
  console.log(`Created: cities/${city.slug}.html`);
});

console.log(`\nDone! Generated ${cities.length} city pages.`);
