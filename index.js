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

  // NEW: one-line value statement (shows up above the long description)
  summary: 'M-Pesa-verified access control backend with token-based auth and Swagger-documented APIs.',

  // NEW: 2–3 proof bullets (fast scanning)
  highlights: [
    'Payment verification via Safaricom M-Pesa (STK Push, Paybill/Till)',
    'JWT + UUIDv4 tokens to prevent link-sharing and enforce verified access',
    'Swagger-documented REST APIs designed for easy frontend integration'
  ],

  // Keep your full long description (used when expanded / “Read more”)
  description:
    'Problem: The film streaming platform needed a way to ensure that only verified, paying users could access content, and to stop people from sharing links or bypassing payments. Solution & Approach: I built a secure, M-Pesa–powered authentication backend using Node.js, Express.js, MySQL, Prisma, and UUIDv4 tokens. Payments are verified via Safaricom M-Pesa APIs (STK Push, Paybill/Till), then access tokens are generated and validated through Swagger-documented REST APIs, making the system scalable, auditable, and easy to integrate with any frontend.',

  technologies: [
    'Node.js',
    'Express.js',
    'Safaricom M-Pesa API (STK Push, Paybill/Till)',
    'MySQL',
    'Prisma',
    'UUIDv4 Tokens',
    'JWT Authentication',
    'Swagger Documentation'
  ],

  demoLink: '#',
  codeLink: 'https://github.com/iamanduru/MPesa-Auth'
},
  {
  icon: 'fa-solid fa-shield-heart',
  title: 'GBV Reporting & Support Platform',

  // NEW: one-line value statement
  summary: 'Secure desktop reporting system for GBV incidents with structured admin workflows and durable data storage.',

  // NEW: fast proof bullets
  highlights: [
    'Anonymous-style reporting flow with secure storage and structured records',
    'Clean architecture using MVC + DAO/SDAO separation (UI, logic, data)',
    'Admin dashboard for managing reports and support services'
  ],

  // Keep your full long description
  description:
    'Problem: Survivors of Gender-Based Violence often lack safe, anonymous ways to report incidents and connect with trusted support services, while organisations struggle to manage reports securely. Solution & Approach: I built a desktop application using Java Swing, the MVC pattern, DAO/SDAO, and MySQL to separate concerns clearly between UI, logic, and data. Reports are stored securely, admins manage services through a structured dashboard, and Java JDBC ensures reliable database operations. This architecture makes the system maintainable, testable, and easier to extend with new features like analytics or multi-user roles.',

  // Slightly tightened tags for clarity + signal
  technologies: [
    'Java',
    'Java Swing',
    'MVC Architecture',
    'DAO/SDAO',
    'MySQL',
    'JDBC',
    'Maven'
  ],

  demoLink: '#',
  codeLink: 'https://github.com/iamanduru/GBVSystem'
  },
  {
  icon: 'fa-solid fa-spa',
  title: 'Therapist Portfolio Website',

  summary: 'Calm, accessible therapist website designed to build trust and make services easy to understand.',

  highlights: [
    'Responsive, accessibility-aware layout focused on clarity (services, approach, contact)',
    'Subtle Animate.css transitions for a gentle, professional feel',
    'Fast-loading design with clean typography and emotionally safe visuals'
  ],

  description:
    'Problem: A therapist client needed an online presence that felt calm, trustworthy, and easy for clients to understand and use, instead of relying on word of mouth only. Solution & Approach: I designed and built a responsive, accessibility-aware portfolio using HTML, CSS, and JavaScript with subtle Animate.css transitions. The layout focuses on clarity (services, approach, contact), soft visuals, and clean typography so that the site feels emotionally safe while still looking professional and loading fast.',

  technologies: ['HTML', 'CSS', 'JavaScript', 'Animate.css'],

  demoLink: 'https://therapist101.netlify.app/',
  codeLink: 'https://github.com/iamanduru/Therapist'
},
  {
  icon: 'fa-solid fa-mouse-pointer',
  title: 'Cursor Ripple',

  summary: 'Lightweight interactive cursor trail built with Canvas for subtle UX delight on landing pages.',

  highlights: [
    'Canvas-based ripple/particle trail that follows cursor movement',
    'Minimal performance impact with customizable effect settings',
    'Easy to plug into portfolios or landing pages without heavy libraries'
  ],

  description:
    'Problem: Many sites feel static and boring, with no small moments of delight in the user experience. Solution & Approach: I built a lightweight cursor ripple animation using HTML5 Canvas, CSS, and JavaScript to create a particle-like trail that follows the mouse. The effect is fully customizable and minimal in performance impact, making it easy to plug into landing pages or portfolios to enhance interactivity without heavy libraries.',

  technologies: ['HTML', 'CSS', 'JavaScript', 'HTML5 Canvas'],

  demoLink: 'https://iamanduru.github.io/cursor-ripple/',
  codeLink: 'https://github.com/iamanduru/cursor-ripple'
},
  {
  icon: 'fa-solid fa-hospital',
  title: 'SerenityCare Clinic Website',

  summary: 'Trust-focused clinic website with clear service structure, team profiles, and patient-friendly navigation.',

  highlights: [
    'Structured layout: hero, services/subcategories, team profiles, mission & vision',
    'Designed for readability, trust-building, and fast navigation across devices',
    'Responsive build with subtle transitions for a modern, calm experience'
  ],

  description:
    'Problem: SerenityCare Clinic needed a modern, clear, and trustworthy online space so patients could quickly understand services, meet the team, and know why they should choose the clinic. Solution & Approach: I built a responsive clinic website using HTML5, CSS3, JavaScript, and Animate.css with a structured layout: hero section, detailed services and subcategories, team profiles, mission & vision, and a strong “Why Choose Us” section. The focus is on readability, patient trust, and easy navigation across devices.',

  technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animate.css'],

  demoLink: 'https://serenitycare.netlify.app/',
  codeLink: 'https://github.com/iamanduru/SerenityCare'
},
  {
  icon: 'fa-solid fa-boxes-stacked',
  title: 'Inventory & Procurement Backend',

  summary: 'Auditable procurement backend with RBAC workflows for requests, approvals, receiving, and payments.',

  highlights: [
    'API-first, modular design aligned to real workflow (Request → Approve → Procure → Receive → Pay)',
    'RBAC + JWT authentication to enforce controlled access and secure operations',
    'Prisma + MySQL domain models designed for extensibility and auditability'
  ],

  description:
    'Problem: A growing tech company was leaking money and time because inventory and procurement were handled through scattered spreadsheets and manual approvals, with no clear audit trail or role-based access. Solution & Approach: I am building a clean, auditable, role-based backend using a modular, domain-driven, API-first design in Node.js and Express.js. Core domains like auth, users, inventory, purchase requests, and approvals are modelled in Prisma and MySQL, mirroring the real workflow (Request → Approve → Procure → Receive → Pay). REST APIs with role-based access control keep the system secure and extensible, making it easy to later plug in a React/Tailwind frontend without touching the core logic.',

  technologies: [
    'Node.js',
    'Express.js',
    'Prisma ORM',
    'MySQL',
    'REST APIs',
    'JWT Authentication',
    'Role-Based Access Control (RBAC)',
    'Swagger Documentation'
  ],

  demoLink: '#',
  codeLink: 'https://github.com/iamanduru/inventory-procurement-backend'
},
  {
  icon: 'fa-solid fa-chart-line',
  title: 'FinLens Financial Insights Backend',

  summary: 'Async FastAPI backend for transaction normalization, auto-categorization, and real-time KPI summaries.',

  highlights: [
    'Normalizes raw transactions and applies rules for auto-categorization',
    'JWT auth (access/refresh) + Argon2 hashing for secure identity and access',
    'Domain-driven modules built for clean growth (rules, alerts, summaries, accounts)'
  ],

  description:
    'FinLens tackles the “money fog” most users face, where bank, Sacco, and mobile-money transactions are scattered, uncategorized, and hard to turn into decisions. I’m building a clean, async FastAPI backend that securely gathers raw transactions from connected accounts, normalizes them, auto-categorizes them with rules, and produces monthly KPIs, summaries, and simple forecasts in real time. The service uses JWT-based auth with access/refresh tokens, Argon2 password hashing, and email-based password resets, all structured with domain-driven modules (users, accounts, transactions, rules, summaries) so features like auto-categorization, duplicate detection, and anomaly/rule alerts plug in cleanly as it grows.',

  technologies: [
    'Python 3.12',
    'FastAPI',
    'Pydantic v2',
    'Async SQLAlchemy',
    'Alembic',
    'MySQL',
    'Redis',
    'JWT Authentication',
    'Argon2 Password Hashing',
    'Domain-Driven Design',
    'MinIO (S3 Storage)'
  ],

  demoLink: '#',
  codeLink: 'https://github.com/iamanduru/FLBackend'
},
{
  icon: 'fa-solid fa-ticket',
  title: 'Online Ticketing System (End-to-End Digital Ticketing)',

  summary: 'Fraud-resistant ticketing workflow with QR verification, payment confirmation, and automated ticket issuing.',

  highlights: [
    'End-to-end flow: events, ticket tiers, payment confirmation, QR tickets, admin dashboard',
    'Reliable Paybill receipt verification (sandbox STK callback limitations handled)',
    'Modular Node/Express backend + React/Tailwind frontend for scalable operations'
  ],

  description:
    'The Online Ticketing System solves the core problem of unreliable, manual, and fragmented event ticket sales where organizers face scattered payments, inconsistent confirmations, counterfeit tickets, and slow check-ins. Our approach was to design a fully digital workflow that automates everything end-to-end: event creation, ticket tiers, real-time payments, automatic ticket generation, QR-based verification, audit logging, and an admin dashboard. The backend uses a modular Node.js/Express architecture with Prisma ORM and MySQL to securely handle orders, payment processing, ticket issuing, and verification—plus email delivery via Gmail SMTP. Because M-Pesa STK callbacks are inconsistent in sandbox, we improved reliability using manual Paybill checkout with receipt-code verification while keeping the system upgrade-ready for STK and card payments. The React + Tailwind frontend provides a clean admin panel and smooth customer flow, with QR ticket downloads and event management tools. This results in a simple, automated, fraud-resistant ticketing system that scales to real events and ensures every confirmed payment instantly generates secure, verifiable tickets.',

  technologies: [
    'Node.js',
    'Express.js',
    'Prisma ORM',
    'MySQL',
    'JWT Authentication',
    'QR Code Verification',
    'React.js',
    'Tailwind CSS',
    'Gmail SMTP',
    'Receipt Code Validation (M-Pesa Paybill)'
  ],

  demoLink: '#',
  codeLink: {
    backend: 'https://github.com/iamanduru/OTBackend/tree/auth',
    frontend: 'https://github.com/iamanduru/OTFrontend'
  }
},
{
  icon: 'fa-solid fa-network-wired',
  title: 'Network Security Test Lab (Python)',

  summary: 'Root-required network diagnostics script that validates interfaces, connectivity, DNS, and local listeners.',

  highlights: [
    'Enumerates IPv4/IPv6 addresses via iproute2 with /proc + ioctl fallback',
    'Connectivity checks with ICMP ping and TCP fallback when ICMP is blocked',
    'Lists local listening ports and maps sockets to processes using ss or /proc parsing'
  ],

  description:
    'This project is a practical network security lab script built in Python to validate host-level network health and visibility. It prints interface IPv4/IPv6 addresses, tests outbound connectivity (ICMP with TCP fallback), checks DNS resolution via TCP connect, and inspects local listeners. Listener inspection prefers ss output and falls back to parsing /proc/net/tcp and /proc/net/udp, mapping socket inodes back to processes through /proc/<pid>/fd. The goal is to build real troubleshooting skill and a defender mindset: understand what services are exposed, confirm DNS and outbound reachability, and verify the host’s network posture quickly.',

  technologies: [
    'Python 3',
    'Linux /proc',
    'Sockets',
    'subprocess',
    'iproute2 (ip, ss)',
    'ICMP ping (fallback TCP connect)',
    'Process/FD inspection',
    'Basic GRC mindset (audit-ready output)'
  ],

  demoLink: '#',
  codeLink: 'https://github.com/iamanduru/Network_Security_with_Python'
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
  this.track.innerHTML = projects.map((project, idx) => {
    const techPreview = project.technologies?.slice(0, 4) ?? [];
    const techHiddenCount = (project.technologies?.length ?? 0) - techPreview.length;

    const codeButtons = (() => {
      if (!project.codeLink) return "";
      if (typeof project.codeLink === "string") {
        return `<a href="${project.codeLink}" target="_blank" rel="noopener" class="project-btn btn-secondary">View Code</a>`;
      }
      // If object (backend/frontend)
      const parts = [];
      if (project.codeLink.backend) {
        parts.push(`<a href="${project.codeLink.backend}" target="_blank" rel="noopener" class="project-btn btn-secondary">Backend</a>`);
      }
      if (project.codeLink.frontend) {
        parts.push(`<a href="${project.codeLink.frontend}" target="_blank" rel="noopener" class="project-btn btn-secondary">Frontend</a>`);
      }
      return parts.join("");
    })();

    const demoBtn = project.demoLink && project.demoLink !== "#"
      ? `<a href="${project.demoLink}" target="_blank" rel="noopener" class="project-btn btn-primary">Live Demo</a>`
      : `<button class="project-btn btn-primary disabled" type="button" disabled>Demo Soon</button>`;

    const summary = project.summary
      ? `<p class="project-summary">${project.summary}</p>`
      : "";

    const highlights = Array.isArray(project.highlights) && project.highlights.length
      ? `<ul class="project-highlights">
            ${project.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join("")}
         </ul>`
      : "";

    return `
      <article class="project-card" data-index="${idx}">
        <div class="project-top">
          <div class="project-icon">
            <i class="${project.icon}"></i>
          </div>
          <h3 class="project-title">${project.title}</h3>
        </div>

        ${summary}
        ${highlights}

        <p class="project-description clamp" id="desc-${idx}">
          ${project.description}
        </p>

        <button class="read-more" type="button" data-toggle="${idx}">
          Read more
        </button>

        <div class="project-tech" aria-label="Technologies used">
          ${techPreview.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          ${techHiddenCount > 0 ? `<span class="tech-more">+${techHiddenCount} more</span>` : ""}
        </div>

        <div class="project-links">
          ${demoBtn}
          ${codeButtons}
        </div>
      </article>
    `;
  }).join("");

  // Attach toggle listeners after render
  this.track.querySelectorAll(".read-more").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.currentTarget.dataset.toggle;
      const desc = document.getElementById(`desc-${i}`);
      const expanded = desc.classList.toggle("clamp");
      e.currentTarget.textContent = expanded ? "Read more" : "Show less";
    });
  });
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

//Reports

const reports = [
  {
  title: "Risk Management Report — HarborTech Solutions (IoT + R&D)",
  meta: "Risk Assessment • Feb 2026",
  abstract:
    "Assessed key assets (R&D data, customer portal, maritime IoT devices, employees), identified major threats, quantified risk using Likelihood×Impact scoring, and prioritized mitigations. Highest-ranked risks: IoT device compromise and employee phishing.",
  tags: ["Risk Management", "GRC", "IoT Security", "Phishing", "CIA Triad"],
  file: "/reports/HarborTech_Risk_Management_Report.pdf"
},
{
  title: "APT10 Attack Analysis — MITRE ATT&CK Mapping (menuPass)",
  meta: "Threat Analysis • Jan 2026",
  abstract:
    "Analyzed a multi-stage intrusion attributed to APT10 (menuPass), mapped observed behavior to MITRE ATT&CK, documented techniques and IOCs, and proposed mitigation plus monitoring/validation strategies across email, endpoint, identity, and network layers.",
  tags: ["MITRE ATT&CK", "APT10", "Threat Analysis", "Detection", "Incident Response"],
  file: "/reports/APT10 Attack Analysis.pdf"
},
{
  title: "Linux System Hardening Report — Users, Password Policy & SSH",
  meta: "Hardening Lab • Jan 2026",
  abstract:
    "Audited and hardened a Linux workstation against identity, privilege, and remote access risks. Identified unauthorized accounts, incorrect RBAC group membership, excessive sudo privileges, weak password aging, missing password hashes, and insecure SSH defaults; proposed remediations aligned to least privilege and secure remote administration.",
  tags: ["Linux Hardening", "SSH", "Access Control", "Password Policy", "DevOps"],
  file: "/reports/Linux System Hardening Report.pdf"
},
{
  title: "Cyber Threat Intelligence (CTI) Strategy — Ransomware Defense for Healthcare",
  meta: "CTI Strategy Report • Jan 2026",
  abstract:
    "Designed a CTI strategy for SecureHealth to proactively reduce ransomware risk by defining objectives, intelligence needs, collection sources, analysis workflows, dissemination routines, tooling, collaboration channels, and KPIs for continuous improvement in a HIPAA-aware environment.",
  tags: ["CTI", "Ransomware", "Healthcare Security", "Threat Feeds", "KPIs"],
  file: "/reports/CTI Strategy Report.pdf"
},
{
  title: "Cloud Security Implementation — Firewall & Attack Surface Hardening",
  meta: "Cloud Security Lab Report • Jan 2026",
  abstract:
    "Hardened a Linux cloud container by removing unnecessary services (Samba), enforcing default-deny inbound firewall rules with iptables, eliminating insecure packages (telnet), and fixing identity hygiene (duplicate UID) to improve traceability and reduce attack surface. Validated changes using ss/iptables counters and nc testing from a separate container.",
  tags: ["Cloud Security", "iptables", "Lynis", "Linux Hardening", "Attack Surface"],
  file: "/reports/Cloud Security Implementation Report.pdf"
},
{
  title: "Cloud Web Server Security — Audit, Hardening & Cloud Recommendation",
  meta: "Web Security / Cloud Lab Report • Jan 2026",
  abstract:
    "Audited a Docker-hosted Ubuntu 22.04 Apache web server with Lynis, linked findings to scalability/compliance/DR risks, implemented targeted hardening (safer OS defaults, reduced Apache info leakage, WAF/DoS protection modules, AIDE integrity baseline, core dump restrictions, and improved patch workflow), and produced a public-cloud PaaS recommendation for scalable, compliant, and resilient deployment.",
  tags: ["Apache", "Lynis", "AIDE", "WAF", "PaaS", "Disaster Recovery"],
  file: "/reports/Cloud Web Server Security Report.pdf"
},
{
  title: "Data Privacy & Compliance — Linux Permissions Hardening (GDPR-Aligned)",
  meta: "Compliance / System Hardening Report • Jan 2026",
  abstract:
    "Assessed Linux file permissions, ownership, and access controls against GDPR security expectations using Lynis and manual validation. Remediated high-impact issues including home directory ownership mismatches and UID/GID accountability gaps, enforced a restrictive default umask (027), locked down privileged configuration paths (sudoers), protected audit log integrity (root-only access), and validated safe handling of world-writable directories via sticky bit controls.",
  tags: ["GDPR", "Least Privilege", "Linux Permissions", "Lynis", "Audit Logs"],
  file: "assets/reports/Data_Privacy_Compliance_Report_Jan_2026.pdf"
}

]
class ReportsCarousel {
  constructor() {
    this.currentIndex = 0;
    this.perView = this.calculatePerView();
    this.maxIndex = Math.max(0, reports.length - this.perView);

    this.track = document.getElementById("reportsTrack");
    this.prevBtn = document.getElementById("reportsPrevBtn");
    this.nextBtn = document.getElementById("reportsNextBtn");
    this.indicators = document.getElementById("reportsIndicators");
    this.wrapper = document.querySelector(".reports-carousel");

    this.init();
    this.setupEvents();
  }

  calculatePerView() {
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1200) return 2;
    return 3;
  }

  init() {
    this.render();
    this.renderIndicators();
    this.update();
  }

  render() {
    this.track.innerHTML = reports.map(r => `
      <article class="report-card">
        <div class="report-top">
          <div>
            <h3 class="report-title">${r.title}</h3>
            <div class="report-meta">${r.meta}</div>
          </div>
          <span class="report-badge">PDF</span>
        </div>

        <p class="report-abstract">${r.abstract}</p>

        <div class="report-tags">
          ${r.tags.slice(0, 5).map(t => `<span class="report-tag">${t}</span>`).join("")}
        </div>

        <div class="report-actions">
          <a class="report-btn primary" href="${r.file}" target="_blank" rel="noopener">Open</a>
          <a class="report-btn secondary" href="${r.file}" download>Download</a>
        </div>
      </article>
    `).join("");
  }

  renderIndicators() {
    const count = Math.ceil(reports.length / this.perView);
    this.indicators.innerHTML = Array(count).fill(0).map((_, i) =>
      `<div class="indicator ${i === 0 ? "active" : ""}" data-index="${i}"></div>`
    ).join("");
  }

  update() {
    const cardWidth = (window.innerWidth < 768 ? 280 : 350) + 30; // card + gap
    const offset = -this.currentIndex * cardWidth;
    this.track.style.transform = `translateX(${offset}px)`;

    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex >= this.maxIndex;

    const activeDot = Math.floor(this.currentIndex / this.perView);
    this.indicators.querySelectorAll(".indicator").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeDot);
    });
  }

  next() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
      this.update();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.update();
    }
  }

  goTo(i) {
    this.currentIndex = Math.min(i * this.perView, this.maxIndex);
    this.update();
  }

  setupEvents() {
    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());

    this.indicators.addEventListener("click", (e) => {
      const dot = e.target.closest(".indicator");
      if (!dot) return;
      this.goTo(parseInt(dot.dataset.index, 10));
    });

    // keyboard support
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prev();
      if (e.key === "ArrowRight") this.next();
    });

    // touch swipe
    let startX = 0;
    let dragging = false;

    this.wrapper.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      dragging = true;
    });

    this.wrapper.addEventListener("touchend", (e) => {
      if (!dragging) return;
      dragging = false;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) diff > 0 ? this.next() : this.prev();
    });

    // resize
    window.addEventListener("resize", () => {
      this.perView = this.calculatePerView();
      this.maxIndex = Math.max(0, reports.length - this.perView);
      this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
      this.renderIndicators();
      this.update();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ReportsCarousel();
});