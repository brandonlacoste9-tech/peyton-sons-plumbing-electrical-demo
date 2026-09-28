const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "469 772-6383",
  "hero.kicker": "Arlington, Texas · 4.8★ from 103 reviews",
  "hero.title": "Plumbing & electrical,<br>one call.",
  "hero.sub": "Plumbing repairs, electrical work, gas log service and drain cleaning — friendly pros who explain everything and clean up after themselves.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Sat",
  "stats.hours": "Open 6 days a week",
  "stats.makesNum": "4.8",
  "stats.makes": "rating · 103 Birdeye reviews",
  "stats.diagNum": "Plumbing +",
  "stats.diag": "electrical in one visit",
  "stats.quoteNum": "Upfront",
  "stats.quote": "honest pricing before work",
  "services.kicker": "What we do",
  "services.title": "Two trades under one roof",
  "services.s1t": "Plumbing repairs",
  "services.s1d": "Leaks, clogs and broken fixtures fixed right the first time.",
  "services.s2t": "Electrical work",
  "services.s2d": "Outlets, switches, fixtures and panel work by qualified electricians.",
  "services.s3t": "Leak detection & repair",
  "services.s3d": "From ceiling drips to pipe connectors — leaks found and fixed.",
  "services.s4t": "Gas log installation & service",
  "services.s4d": "Fireplace gas log installation and upkeep — safe and cozy.",
  "services.s5t": "Drain cleaning",
  "services.s5d": "Drains cleared quickly with the right professional equipment.",
  "services.s6t": "Faucets & fixtures",
  "services.s6d": "Kitchen and bath faucets installed and repaired — no more drips.",
  "walkin.w1t": "Two trades, one visit",
  "walkin.w1d": "Plumbing + electrical together",
  "walkin.w2t": "4.8★ rated",
  "walkin.w2d": "103 customer reviews",
  "walkin.w3t": "We clean up",
  "walkin.w3d": "Your home left spotless",
  "makes.kicker": "All major brands",
  "makes.title": "We service every brand",
  "makes.sub": "Fixtures, panels and equipment from all the brands homeowners trust.",
  "why.kicker": "Why choose us",
  "why.title": "The team Arlington calls twice",
  "why.intro": "Customers call us back because we show up on time, explain the options clearly, and clean up when we're done. Simple as that.",
  "why.l1t": "Two trades, one visit",
  "why.l1d": "Plumbing and electrical handled by one team — no coordinating two companies.",
  "why.l2t": "4.8 from 103 reviews",
  "why.l2d": "Our customers keep us honest — and they keep calling back.",
  "why.l3t": "Upfront pricing",
  "why.l3d": "Options and cost estimates explained before we start.",
  "why.l4t": "We clean up",
  "why.l4d": "Drop cloths, shoe covers, and a spotless finish — every time.",
  "products.kicker": "We install",
  "products.title": "Quality equipment we trust",
  "products.sub": "The same quality equipment we install every day — ask us what's right for your home.",
  "products.p1t": "Water heaters",
  "products.p1d": "Tank and tankless models sized right for your household.",
  "products.p2t": "Faucets & fixtures",
  "products.p2d": "Quality kitchen and bath fixtures, professionally installed.",
  "products.p3t": "Ceiling fans & lighting",
  "products.p3d": "Fans and fixtures installed safely — balanced and wired right.",
  "products.note": "Call us to ask about equipment options for your home.",
  "products.cta": "Call to ask",
  "gallery.kicker": "On the job",
  "gallery.title": "Careful work, clean finish",
  "gallery.c1": "Water heater installation, piped with care",
  "gallery.c2": "Cozy, safe gas log fireplace service",
  "gallery.c3": "Neat electrical work, done to code",
  "reviews.kicker": "Word on the street",
  "reviews.title": "4.8 stars from 103 reviews",
  "reviews.more": "<strong>4.8 rating · 103 Birdeye reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "Do you really do both plumbing and electrical?",
  "faq.a1": "Yes — that's the whole idea. One team, one visit, for leaks, outlets, fixtures, gas logs and more.",
  "faq.q2": "Do you install and service gas fireplace logs?",
  "faq.a2": "Yes — gas log installation and upkeep is one of our specialties, done safely and to code.",
  "faq.q3": "How do you price jobs?",
  "faq.a3": "We explain your options with cost estimates up front — you approve the price before we start.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Saturday, 10:00 AM to 6:00 PM. Closed Sundays.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Sat: 10:00 AM – 6:00 PM<br>Sun: closed",
  "contact.cta": "Call now to book",
  "promo.kicker": "Two trades, one team",
  "promo.title": "One call handles it all",
  "promo.text": "From leaky pipes to new outlets to your fireplace gas logs — one trusted team handles both sides of your home.",
  "promo.cta": "Call Peyton & Sons",
  "footer.tag": "Plumbing & electrical · Arlington, Texas"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
