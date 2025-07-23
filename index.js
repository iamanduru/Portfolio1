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


//Project Data
const projects = [
  {
    icon: '🔒',
    title: 'Secure M-Pesa Auth System',
    description: 'A secure and scalable M-Pesa-powered authentication system built for a film streaming platform. It ensures only verified, paying users access content — no shared links, no loopholes — just smooth, locked-down viewing.',
    technologies: ['Node.js', 'Express.js', ' Safaricom M-Pesa API (STK Push, Paybill/Till)', 'MySQL', 'Prisma', 'HTML', 'CSS', 'Javascript', ' UUIDv4 Tokens', 'Swagger Documentation'],
    demoLink: '#',
    codeLink: 'https://github.com/iamanduru/MPesa-Auth'
  },
  {
    icon: '🛡️',
    title: 'GBV Reporting & Support Platform',
    description: 'A secure and anonymous desktop application that empowers survivors of Gender-Based Violence to safely report incidents, access emergency contacts, and connect with support services — all while enabling admins to manage reports and services through an intuitive dashboard.',
    technologies: ['Java Swing', 'Java MVC Pattern', ' SDAO', 'MySQL', ' Java JDBC API', 'Maven'],
    demoLink: '#',
    codeLink: 'https://github.com/iamanduru/GBVSystem'
  },
  {
    icon: '🧘🏾‍♀️',
    title: 'Therapist Portfolio Website',
    description: 'A clean, calming, and responsive portfolio website built for a therapist client to showcase their services, approach, and booking info. Designed to reflect emotional safety and professional warmth, with soft animations and accessible design choices',
    technologies: ['HTML', 'CSS', 'Javascript', 'Animate CSS' ],
    demoLink: 'https://iamanduru.github.io/Connie/',
    codeLink: 'https://github.com/iamanduru/Connie'
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
          <div class="project-icon">${project.icon}</div>
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
        this.resetAutoPlay();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateCarousel();
        this.resetAutoPlay();
    }
  }

  goToSlide(index) {
    this.currentIndex = Math.min(index * this.projectsPerView, this.maxIndex);
    this.updateCarousel();
    this.resetAutoPlay();
  }

  setupEventListeners() {
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());

    //Indicators
    this.indicators.addEventListener('click', (e) => {
      if (e.target.classList.contains('indicator')) {
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.prev();
        if (e.key === 'ArrowRight') this.next();
    });

    // Touch/swipe support
    let startX = 0;
    let isDragging = false;

    this.track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
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
      this.autoPlayInterval = setInterval(() => {
          if (this.currentIndex >= this.maxIndex) {
              this.currentIndex = 0;
          } else {
              this.currentIndex++;
          }
          this.updateCarousel();
      }, 5000);
  }

  resetAutoPlay() {
      clearInterval(this.autoPlayInterval);
      this.setupAutoPlay();
  }
}

// Enhanced animations and interactions
function addAdvancedAnimations() {
  // Parallax effect on scroll
  window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.carousel-container');
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
  });

  // Intersection Observer for card animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
              entry.target.classList.add('animate-in');
          }
      });
  });

  document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
  });

  // Add mouse tracking for cards
  document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          card.style.transform = `translateY(-10px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
          card.style.transform = '';
      });
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