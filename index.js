 //Hamburger
 document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav__toggle');
    const links  = document.querySelector('.nav__links');

    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
      toggle.classList.toggle('open');
    });
  });

//Generate animated stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

//Animation click to the quote card
function addCardAnimations() {
  const cards = document.querySelectorAll('.quote__card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      // push animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'translateY(-5px)';
      }, 150);

      // toggle quote visibility
      this.classList.toggle('active');
    });
  });
}


//Parallax effect for particles
function addParallaxEffect() {
    const particles = document.querySelectorAll('.particle');

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Smooth scroll for navigation
function addSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Add smooth scroll behavior here if needed
        });
    });
}

// Tech stack filtering
function addFilterFunctionality() {
    const cards = document.querySelectorAll('.tech-card');
    let currentFilter = 'all';

    // Add click event to section title for filtering demo
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.addEventListener('click', function() {
        const categories = ['all', 'Languages & Frameworks', 'Frontend', 'Backend & Databases', 'Cloud & DevOps', 'UX/UI Design', 'Soft Skills', 'Tools & Technologies'];
        currentFilter = categories[(categories.indexOf(currentFilter) + 1) % categories.length];
        
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (currentFilter === 'all' || category === currentFilter) {
                card.style.display = 'flex';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const titles = [
      'Full Stack Software Engineer',
      'UI/UX Designer',
      'Tech Mentor',
      'Digital Product Builder'
    ];
    let i = 0;
    const textEl = document.getElementById('roleText');

    // Initialize with first title
    textEl.textContent = titles[i];

    setInterval(() => {
      // fade out
      textEl.style.opacity = 0;
      setTimeout(() => {
        // update text & fade in
        i = (i + 1) % titles.length;
        textEl.textContent = titles[i];
        textEl.style.opacity = 1;
      }, 300);  // match this to your CSS transition
    }, 3000);
  });

 // Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});



// Project Data
const projects = [
  {
    icon: 'fa-solid fa-lock',
    title: 'Secure M-Pesa Auth System',
    description:
      'Problem: The film streaming platform needed a way to ensure that only verified, paying users could access content, and to stop people from sharing links or bypassing payments. Solution & Approach: I built a secure, M-Pesa–powered authentication backend using Node.js, Express.js, MySQL, Prisma, and UUIDv4 tokens. Payments are verified via Safaricom M-Pesa APIs (STK Push, Paybill/Till), then access tokens are generated and validated through Swagger-documented REST APIs, making the system scalable, auditable, and easy to integrate with any frontend.',
    technologies: [
      'Node.js',
      'Express.js',
      'Safaricom M-Pesa API (STK Push, Paybill/Till)',
      'MySQL',
      'Prisma',
      'HTML',
      'CSS',
      'JavaScript',
      'UUIDv4 Tokens',
      'Swagger Documentation'
    ],
    demoLink: '#',
    codeLink: 'https://github.com/iamanduru/MPesa-Auth'
  },
  {
    icon: 'fa-solid fa-shield-heart',
    title: 'GBV Reporting & Support Platform',
    description:
      'Problem: Survivors of Gender-Based Violence often lack safe, anonymous ways to report incidents and connect with trusted support services, while organisations struggle to manage reports securely. Solution & Approach: I built a desktop application using Java Swing, the MVC pattern, DAO/SDAO, and MySQL to separate concerns clearly between UI, logic, and data. Reports are stored securely, admins manage services through a structured dashboard, and Java JDBC ensures reliable database operations. This architecture makes the system maintainable, testable, and easier to extend with new features like analytics or multi-user roles.',
    technologies: [
      'Java Swing',
      'Java MVC Pattern',
      'SDAO',
      'MySQL',
      'Java JDBC API',
      'Maven'
    ],
    demoLink: '#',
    codeLink: 'https://github.com/iamanduru/GBVSystem'
  },
  {
    icon: 'fa-solid fa-spa',
    title: 'Therapist Portfolio Website',
    description:
      'Problem: A therapist client needed an online presence that felt calm, trustworthy, and easy for clients to understand and use, instead of relying on word of mouth only. Solution & Approach: I designed and built a responsive, accessibility-aware portfolio using HTML, CSS, and JavaScript with subtle Animate.css transitions. The layout focuses on clarity (services, approach, contact), soft visuals, and clean typography so that the site feels emotionally safe while still looking professional and loading fast.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Animate.css'],
    demoLink: 'https://therapist101.netlify.app/',
    codeLink: 'https://github.com/iamanduru/Therapist'
  },
  {
    icon: 'fa-solid fa-mouse-pointer',
    title: 'Cursor Ripple',
    description:
      'Problem: Many sites feel static and boring, with no small moments of delight in the user experience. Solution & Approach: I built a lightweight cursor ripple animation using HTML5 Canvas, CSS, and JavaScript to create a particle-like trail that follows the mouse. The effect is fully customizable and minimal in performance impact, making it easy to plug into landing pages or portfolios to enhance interactivity without heavy libraries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Animate.css'],
    demoLink: 'https://iamanduru.github.io/cursor-ripple/',
    codeLink: 'https://github.com/iamanduru/cursor-ripple'
  },
  {
    icon: 'fa-solid fa-hospital',
    title: 'SerenityCare Clinic Website',
    description:
      'Problem: SerenityCare Clinic needed a modern, clear, and trustworthy online space so patients could quickly understand services, meet the team, and know why they should choose the clinic. Solution & Approach: I built a responsive clinic website using HTML5, CSS3, JavaScript, and Animate.css with a structured layout: hero section, detailed services and subcategories, team profiles, mission & vision, and a strong “Why Choose Us” section. The focus is on readability, patient trust, and easy navigation across devices.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animate.css'],
    demoLink: 'https://serenitycare.netlify.app/',
    codeLink: 'https://github.com/iamanduru/SerenityCare'
  },
  {
    icon: 'fa-solid fa-boxes-stacked',
    title: 'Inventory & Procurement Backend',
    description:
      'Problem: A growing tech company was leaking money and time because inventory and procurement were handled through scattered spreadsheets and manual approvals, with no clear audit trail or role-based access. Solution & Approach: I am building a clean, auditable, role-based backend using a modular, domain-driven, API-first design in Node.js and Express.js. Core domains like auth, users, inventory, purchase requests, and approvals are modelled in Prisma and MySQL, mirroring the real workflow (Request → Approve → Procure → Receive → Pay). REST APIs with role-based access control keep the system secure and extensible, making it easy to later plug in a React/Tailwind frontend without touching the core logic.',
    technologies: [
      'Node.js',
      'Express.js',
      'Prisma ORM',
      'MySQL',
      'REST APIs',
      'Role-Based Access Control (RBAC)',
      'JWT Authentication',
      'Swagger Documentation'
    ],
    demoLink: '#',
    codeLink: 'https://github.com/iamanduru/inventory-procurement-backend'
  },
  {
  icon: 'fa-solid fa-chart-line',
  title: 'FinLens Financial Insights Backend',
  description:
    'FinLens tackles the “money fog” most users face, where bank, Sacco, and mobile-money transactions are scattered, uncategorized, and hard to turn into decisions. I’m building a clean, async FastAPI backend that securely gathers raw transactions from connected accounts, normalizes them, auto-categorizes them with rules, and produces monthly KPIs, summaries, and simple forecasts in real time. The service uses JWT-based auth with access/refresh tokens, Argon2 password hashing, and email-based password resets, all structured with domain-driven modules (users, accounts, transactions, rules, summaries) so features like auto-categorization, duplicate detection, and anomaly/rule alerts plug in cleanly as it grows.',
  technologies: [
    'Python 3.12',
    'FastAPI',
    'Pydantic v2',
    'SQLAlchemy (async)',
    'Alembic',
    'MySQL',
    'Redis',
    'aiosmtplib',
    'JWT Authentication',
    'Argon2 Password Hashing',
    'Domain-Driven Design',
    'S3-Compatible Storage (MinIO)',
    '12-Factor App Config'
  ],
  demoLink: '#',
  codeLink: 'https://github.com/iamanduru/FLBackend'
},
{
  icon: 'fa-solid fa-ticket',
  title: 'Online Ticketing System (End-to-End Digital Ticketing)',
  description:
    'The Online Ticketing System solves the core problem of unreliable, manual, and fragmented event ticket sales where organizers face scattered payments, inconsistent confirmations, counterfeit tickets, and slow check-ins. Our approach was to design a fully digital workflow that automates everything end-to-end: event creation, ticket tiers, real-time payments, automatic ticket generation, QR-based verification, audit logging, and an admin dashboard. The backend uses a modular Node.js/Express architecture with Prisma ORM and MySQL to securely handle orders, payment processing, ticket issuing, and verification—plus email delivery via Gmail SMTP. Because M-Pesa STK callbacks are inconsistent in sandbox, we improved reliability using manual Paybill checkout with receipt-code verification while keeping the system upgrade-ready for STK and card payments. The React + Tailwind frontend provides a clean admin panel and smooth customer flow, with QR ticket downloads and event management tools. This results in a simple, automated, fraud-resistant ticketing system that scales to real events and ensures every confirmed payment instantly generates secure, verifiable tickets.',
  technologies: [
    'Node.js',
    'Express.js',
    'Prisma ORM',
    'MySQL',
    'JWT Authentication',
    'Gmail SMTP (Email Delivery)',
    'QR Code Generation & Verification',
    'React.js',
    'Tailwind CSS',
    'REST APIs',
    'Receipt Code Validation (M-Pesa Paybill)',
    'Modular Architecture'
  ],
  demoLink: '#',
  codeLink: {
    backend: 'https://github.com/iamanduru/OTBackend/tree/auth',
    frontend: 'https://github.com/iamanduru/OTFrontend'
  }
}

];


class ProjectCarousel {
  constructor(){
    this.currentIndex = 0;
    this.projectsPerView = this.calculateProjectsPerView();
    this.maxIndex = Math.max(0, projects.length - this.projectsPerView);

    this.track = document.getElementById('carouselTrack');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.indicators = document.getElementById('indicators');
    this.carouselEl = document.querySelector('.carousel'); // wrapper

    this.autoPlayInterval = null;
    this.isUserInteracting = false;

    this.init();
    this.setupEventListeners();
    this.setupAutoPlay();
  }

  calculateProjectsPerView() {
    const screenWidth = window.innerWidth;
    if(screenWidth < 768 ) return 1;
    if(screenWidth < 1200) return 2;
    return 3;
  }

  init() {
    this.renderProjects();
    this.renderIndicators();
    this.updateCarousel();
  }

  renderProjects() {
    this.track.innerHTML = projects.map(project => `
      <div class="project-card">
          <div class="project-icon">
            <i class="${project.icon}"></i>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
              ${project.technologies.map(tech => 
                  `<span class="tech-tag">${tech}</span>`
              ).join('')}
          </div>
          <div class="project-links">
              <a href="${project.demoLink}" class="project-btn btn-primary">Live Demo</a>
              <a href="${project.codeLink}" class="project-btn btn-secondary">View Code</a>
          </div>
      </div>
  `).join('');
  }

  renderIndicators() {
    const indicatorCount = Math.ceil(projects.length / this.projectsPerView);
    this.indicators.innerHTML = Array(indicatorCount).fill(0).map((_, index) => 
        `<div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
    ).join('');
  }

  updateCarousel() {
    const cardWidth = 350 + 30; // card width + gap
    const offset = -this.currentIndex * cardWidth;
    
    this.track.style.transform = `translateX(${offset}px)`;
    
    // Update navigation buttons
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
    
    // Update indicators
    const activeIndicatorIndex = Math.floor(this.currentIndex / this.projectsPerView);
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === activeIndicatorIndex);
    });
  }

   next() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
      this.pauseAutoPlay(); // user took control
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
      this.pauseAutoPlay();
    }
  }

  goToSlide(index) {
    this.currentIndex = Math.min(index * this.projectsPerView, this.maxIndex);
    this.updateCarousel();
    this.pauseAutoPlay();
  }

  setupEventListeners() {
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());

    // Indicators
    this.indicators.addEventListener('click', (e) => {
      if (e.target.classList.contains('indicator')) {
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      }
    });

    // Keyboard navigation
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Pause/resume autoplay on hover
    if (this.carouselEl) {
      this.carouselEl.addEventListener('mouseenter', () => this.pauseAutoPlay());
      this.carouselEl.addEventListener('mouseleave', () => this.resumeAutoPlay());
    }

    // Touch/swipe
    let startX = 0;
    let isDragging = false;

    this.track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      this.pauseAutoPlay();
    });

    this.track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
    });

    this.track.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;

      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) this.next();
        else this.prev();
      }
    });


     // Resize handler
    window.addEventListener('resize', () => {
      this.projectsPerView = this.calculateProjectsPerView();
      this.maxIndex = Math.max(0, projects.length - this.projectsPerView);
      this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
      this.renderIndicators();
      this.updateCarousel();
    });
  }

  setupAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.autoPlayInterval = setInterval(() => {
      if (this.currentIndex >= this.maxIndex) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.updateCarousel();
    }, 5000);
  }

  pauseAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.autoPlayInterval = null;
  }

  resumeAutoPlay() {
    if (!this.autoPlayInterval) {
      this.setupAutoPlay();
    }
  }
}

// Enhanced animations and interactions
function addAdvancedAnimations() {
  // Parallax effect on scroll (optional – can remove if too much)
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.carousel__container');
    if (!parallax) return;
    const speed = scrolled * 0.2;
    parallax.style.transform = `translateY(${speed}px)`;
  });

  // Intersection Observer for card fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  });

  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectCarousel();
    
    // Add advanced animations after a short delay
    setTimeout(() => {
        addAdvancedAnimations();
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
  addCardAnimations();
  createStars();
  addParallaxEffect();
  addSmoothScroll();
  addFilterFunctionality();
});