/* ============================================================
   KARTHIKEYA CAREER SOLUTIONS — script.js
   ============================================================ */

/* ---- PRELOADER ---- */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('preloader');
        if (loader) loader.classList.add('hidden');
    }, 1600);
});

/* ---- NAVBAR ---- */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

/* ---- ACTIVE NAV ON SCROLL ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ---- SCROLL TO TOP ---- */
const scrollTopBtn = document.getElementById('scrollTopBtn');
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---- COUNTER ANIMATION ---- */
function animateCount(el) {
    const target = +el.getAttribute('data-count');
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current);
        if (current >= target) clearInterval(timer);
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = 'true';
            animateCount(entry.target);
        }
    });
}, { threshold: 0.6 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ---- PARTICLE EFFECT ---- */
(function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const css = document.createElement('style');
    css.textContent = `
        @keyframes particleFloat {
            0%,100% { transform: translate(0,0); opacity:.2; }
            25%      { transform: translate(14px,-28px); opacity:.5; }
            50%      { transform: translate(-10px,-55px); opacity:.25; }
            75%      { transform: translate(18px,-35px); opacity:.45; }
        }
    `;
    document.head.appendChild(css);

    for (let i = 0; i < 55; i++) {
        const p = document.createElement('div');
        const size = Math.random() * 3.5 + 1;
        p.style.cssText = `
            position:absolute;
            width:${size}px; height:${size}px;
            background:rgba(255,255,255,${(Math.random() * .25 + .08).toFixed(2)});
            border-radius:50%;
            left:${(Math.random() * 100).toFixed(1)}%;
            top:${(Math.random() * 100).toFixed(1)}%;
            animation: particleFloat ${(Math.random() * 10 + 8).toFixed(1)}s ease-in-out infinite;
            animation-delay: ${(Math.random() * 6).toFixed(1)}s;
            pointer-events:none;
        `;
        container.appendChild(p);
    }
})();

/* ---- INIT AOS ---- */
AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 70,
});

/* ---- INIT SWIPER ---- */
new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

/* ---- SERVICE CARD 3D TILT ---- */
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width  - .5) * 9;
        const y = ((e.clientY - r.top)  / r.height - .5) * 9;
        card.style.transform = `translateY(-8px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

/* ---- CONTACT FORM ---- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const btn   = document.getElementById('submitBtn');
        const orig  = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled  = true;

        const name    = document.getElementById('cname').value.trim();
        const email   = document.getElementById('cemail').value.trim();
        const phone   = document.getElementById('cphone').value.trim();
        const jobtype = document.getElementById('cjobtype').value;
        const message = document.getElementById('cmessage').value.trim();

        setTimeout(() => {
            const subject = encodeURIComponent(`Job Enquiry from ${name}`);
            const body    = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nJob Type: ${jobtype}\n\nMessage:\n${message}`
            );
            window.location.href =
                `mailto:Karthikeyacareersolutions@gmail.com?subject=${subject}&body=${body}`;

            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = 'linear-gradient(135deg,#4caf50,#388e3c)';

            setTimeout(() => {
                btn.innerHTML = orig;
                btn.disabled = false;
                btn.style.background = '';
                contactForm.reset();
            }, 3200);
        }, 1200);
    });
}

/* ---- SMOOTH HIGHLIGHT ON HASH LOAD ---- */
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 200);
    }
});
