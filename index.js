//To initialize the canvas
const canvas = document.getElementById('cursor-canvas');
const ctx = canvas.getContext('2d');

//Setting canvas size to window size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

setCanvasSize();
window.addEventListener('resize', setCanvasSize);


//Particles system setup
const particles = [];
const numberOfParticles = 15;
const mousePosition = { x: 0, y: 0 };
let mouseSpeed = 0;
let lastMousePosition = { x: 0, y: 0 };

//Particle class to manage each ripple point
class Particle {
    constructor() {
        this.reset();
    }

     reset() {
        // Initialize particle properties
        this.x = mousePosition.x;
        this.y = mousePosition.y;
        this.size = Math.random() * 4 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 1;
        this.opacity = 1;
     }

     update() {
        // Update particle position and life
        this.x += this.speedX * mouseSpeed;
        this.y += this.speedY * mouseSpeed;
        this.life -= 0.01;
        this.opacity = this.life;

        if (this.life <= 0) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Changed to white color with adjusted opacity for better visibility
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.3})`;
        ctx.fill();
    }
}

//To initialize particles
for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle());
}

// Mouse movement handler with improved smoothing
document.addEventListener('mousemove', (e) => {
    mouseSpeed = Math.hypot(e.clientX - lastMousePosition.x, e.clientY - lastMousePosition.y) * 0.1;
    mouseSpeed = Math.min(mouseSpeed, 4);

    lastMousePosition.x = mousePosition.x;
    lastMousePosition.y = mousePosition.y;
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
});

 // Animation loop with optimized rendering
 function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Experience Section Interactions
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.experience__header');
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const details = document.getElementById(targetId);
            
            // Close other open sections
            document.querySelectorAll('.experience__details').forEach(detail => {
                if (detail.id !== targetId) {
                    detail.classList.remove('active');
                }
            });
            
            // Toggle current section
            details.classList.toggle('active');
        });
    });
});



//Add Javascript for tech stack item hover animations
document.addEventListener('DOMContentLoaded', function() {
    const techItems = document.querySelectorAll('.tech-item');

    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    //Optional: Add a subtle animation to tech items on page load
    techItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// JavaScript for education section toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all education header elements
    const educationHeaders = document.querySelectorAll('.education__header');
    
    // Add click event listener to each header
    educationHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Get the target details element
            const targetId = this.getAttribute('data-target');
            const targetDetails = document.getElementById(targetId);
            
            // Toggle active class on the details element
            targetDetails.classList.toggle('active');
            
            // Optional: Close other open details sections
            const allDetails = document.querySelectorAll('.education__details');
            allDetails.forEach(detail => {
                if (detail.id !== targetId && detail.classList.contains('active')) {
                    detail.classList.remove('active');
                }
            });
        });
    });
    
    // Optional: Open first education item by default
    const firstEducationDetails = document.querySelector('.education__details');
    if (firstEducationDetails) {
        firstEducationDetails.classList.add('active');
    }
});

// Add this to projects.js file
document.addEventListener('DOMContentLoaded', function() {
    // Equalize card heights within each category
    equalizeCardHeights();
    
    // Re-equalize on window resize
    window.addEventListener('resize', debounce(equalizeCardHeights, 250));
    
    // Function to equalize card heights within each category section
    function equalizeCardHeights() {
        const categorySections = document.querySelectorAll('.category__section');
        
        // Reset heights first
        document.querySelectorAll('.project__card').forEach(card => {
            card.style.height = '';
            card.querySelector('.project__description').style.webkitLineClamp = '';
        });
        
        // Skip equalization for mobile views
        if (window.innerWidth <= 576) return;
        
        // For each category, find the tallest card and apply its height to all cards
        categorySections.forEach(section => {
            const cards = section.querySelectorAll('.project__card:not(.featured__project)');
            if (cards.length <= 1) return;
            
            let maxHeight = 0;
            
            // Find the natural tallest card
            cards.forEach(card => {
                const height = card.offsetHeight;
                maxHeight = Math.max(maxHeight, height);
            });
            
            // Set all cards to the max height
            cards.forEach(card => {
                card.style.height = `${maxHeight}px`;
            });
        });
        
        // Handle featured projects separately
        const featuredProjects = document.querySelectorAll('.featured__project');
        featuredProjects.forEach(card => {
            // Allow featured projects to be taller
            card.style.height = 'auto';
            card.style.minHeight = '600px';
        });
    }
    
    // Optimize performance with debounce
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }
    
    // Enhanced image loading with fade-in effect
    enhanceImageLoading();
    
    function enhanceImageLoading() {
        const projectImages = document.querySelectorAll('.project__image img');
        
        projectImages.forEach(img => {
            // Add loading style
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            // Add listener for when image is loaded
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            // If image is already loaded
            if (img.complete) {
                img.style.opacity = '1';
            }
            
            // Add error handling
            img.addEventListener('error', function() {
                this.src = './img/placeholder.jpg';
                this.style.opacity = '1';
            });
        });
    }
    
    // Enhanced project card hover effects
    const projectCards = document.querySelectorAll('.project__card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle lift shadow
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            this.style.borderColor = '#64ffda';
            
            // Zoom in on the image
            const img = this.querySelector('.project__image img');
            if (img) {
                img.style.transform = 'scale(1.08)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset styles
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.borderColor = '';
            
            // Reset image zoom
            const img = this.querySelector('.project__image img');
            if (img) {
                img.style.transform = '';
            }
        });
    });
});


/**
 * Initialize the project carousel
 */
function initializeCarousel() {
    const carouselTrack = document.querySelector('.carousel__track');
    const carouselNav = document.querySelectorAll('.carousel__nav');
    const carouselIndicators = document.querySelector('.carousel__indicators');
    
    // Featured projects data for carousel
    const featuredProjects = [
        {
            title: "Heart on Sleeve",
            description: "A responsive, boho-inspired blogging platform designed to empower writers and foster community.",
            image: "./img/case1.png",
            link: "https://www.figma.com/design/7R2qCrxWDCuVBWSh9pkOKT/Heart-on-a-sleeve"
        },
        {
            title: "FitClub",
            description: "A web app that helps users achieve fitness goals with tailored workouts, nutrition guidance, and progress tracking.",
            image: "./img/case2.png",
            link: "comingsoon.html"
        },
        {
            title: "Uber New Features",
            description: "Collaborative rewards, driver feedback, and a maternal care 'Linda Mama Ride,' fostering fairness and satisfaction.",
            image: "./img/uber.png",
            link: "https://www.figma.com/design/lt2Hr9RQbTlIV17AEEmURk/Uber-Case-study"
        }
    ];
    
    // Generate carousel items
    let carouselHTML = '';
    featuredProjects.forEach((project, index) => {
        carouselHTML += `
            <div class="carousel__item">
                <img src="${project.image}" alt="${project.title}">
                <div class="carousel__content">
                    <h3 class="carousel__title">${project.title}</h3>
                    <p class="carousel__description">${project.description}</p>
                    <a href="${project.link}" class="carousel__button" target="_blank">View Project</a>
                </div>
            </div>
        `;
    });
    
    carouselTrack.innerHTML = carouselHTML;
    
    // Generate indicators
    let indicatorsHTML = '';
    for (let i = 0; i < featuredProjects.length; i++) {
        indicatorsHTML += `<div class="carousel__indicator ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`;
    }
    
    carouselIndicators.innerHTML = indicatorsHTML;
    
    // Set initial state
    let currentSlide = 0;
    updateCarousel();
    
    // Event listeners for navigation
    carouselNav.forEach(nav => {
        nav.addEventListener('click', function() {
            if (this.classList.contains('carousel__prev')) {
                currentSlide = (currentSlide - 1 + featuredProjects.length) % featuredProjects.length;
            } else {
                currentSlide = (currentSlide + 1) % featuredProjects.length;
            }
            updateCarousel();
        });
    });
    
    // Event listeners for indicators
    document.querySelectorAll('.carousel__indicator').forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-index'));
            updateCarousel();
        });
    });
    
    // Auto advance carousel
    let carouselInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % featuredProjects.length;
        updateCarousel();
    }, 5000);
    
    // Pause auto advance on hover
    const carouselContainer = document.querySelector('.carousel__container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % featuredProjects.length;
            updateCarousel();
        }, 5000);
    });
    
    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update indicators
        document.querySelectorAll('.carousel__indicator').forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
}

/**
 * Initialize the project modals
 */
function initializeModals() {
    const modalLinks = document.querySelectorAll('.view__details');
    const modalOverlay = document.querySelector('.project__modal__overlay');
    const modalContent = document.querySelector('.modal__content');
    const modalClose = document.querySelector('.modal__close');
    
    // Project details data
    const projectDetails = {
        'heart-on-sleeve': {
            title: 'Heart on Sleeve',
            image: './img/case1.png',
            description: `
                <p>Heart on Sleeve is a responsive blogging platform designed to empower writers and foster community through an intuitive and visually appealing interface.</p>
                <p>The design process involved extensive user research, competitive analysis, and iterative prototyping to create a unique experience that aligns with the brand's boho aesthetic while maintaining excellent usability.</p>
                <p>Key features include:</p>
                <ul>
                    <li>Customizable author profiles with mood boards</li>
                    <li>Interactive comment sections with rich media support</li>
                    <li>Content discovery algorithm based on reading habits</li>
                    <li>Mobile-first responsive design with offline reading capabilities</li>
                </ul>
                <p>The platform was designed in Figma with a focus on accessibility and inclusivity, ensuring that all users can enjoy the content regardless of their abilities or devices.</p>
            `,
            tags: ['UI Design', 'User Research', 'Prototyping', 'Figma', 'Information Architecture', 'Wireframing'],
            links: [
                {
                    icon: 'fas fa-external-link-alt',
                    url: 'https://www.figma.com/design/7R2qCrxWDCuVBWSh9pkOKT/Heart-on-a-sleeve?node-id=394-961&t=BufrAxTz2bKhD8xz-1',
                    text: 'View in Figma'
                }
            ]
        },
        'uber-features': {
            title: 'Uber New Features',
            image: './img/uber.png',
            description: `
                <p>This project reimagines the Uber experience by introducing innovative features designed to address pain points for both riders and drivers in the Kenyan market.</p>
                <p>After conducting extensive user research and analyzing competitor strategies, I identified opportunities to enhance the platform with collaborative rewards, improved driver feedback systems, and specialized ride options.</p>
                <p>The redesign introduces:</p>
                <ul>
                    <li><strong>Linda Mama Ride:</strong> A specialized service for expectant mothers ensuring safe and comfortable transportation</li>
                    <li><strong>Driver Feedback System:</strong> A more nuanced approach to ratings that provides actionable insights rather than punitive measures</li>
                    <li><strong>Collaborative Rewards:</strong> A loyalty program that benefits both riders and drivers through shared incentives</li>
                </ul>
                <p>The design process included creating user personas, journey maps, wireframes, and high-fidelity prototypes that were tested with actual Uber users and drivers.</p>
            `,
            tags: ['UI Design', 'User Research', 'Prototyping', 'Service Design', 'User Testing'],
            links: [
                {
                    icon: 'fas fa-external-link-alt',
                    url: 'https://www.figma.com/design/lt2Hr9RQbTlIV17AEEmURk/Uber-Case-study?node-id=2-3&t=s0r991z9Pfz7BBlk-0',
                    text: 'View in Figma'
                },
                {
                    icon: 'fas fa-file-alt',
                    url: '#',
                    text: 'Case Study'
                }
            ]
        },
        
        'construction': {
            title: 'Construction Platform',
            image: './img/construction.jpg',
            description: `
                <p>The Construction Platform is a comprehensive e-commerce solution designed specifically for the construction industry, connecting suppliers, contractors, and clients in a seamless digital marketplace.</p>
                <p>Built on the MERN stack (MongoDB, Express, React, Node.js), this platform offers:</p>
                <ul>
                    <li>Advanced product catalog with construction-specific categorization</li>
                    <li>Secure user authentication with role-based permissions</li>
                    <li>Integrated shopping cart and streamlined checkout process</li>
                    <li>Multiple payment gateway options for different markets</li>
                    <li>Order tracking and delivery management</li>
                    <li>Supplier and product verification systems</li>
                </ul>
                <p>The platform was developed with a focus on performance, security, and scalability to handle the varied needs of the construction supply chain.</p>
            `,
            tags: ['MongoDB', 'Express', 'React', 'Node.js', 'E-commerce', 'RESTful API'],
            links: [
                {
                    icon: 'fab fa-github',
                    url: '#',
                    text: 'View Code'
                },
                {
                    icon: 'fas fa-external-link-alt',
                    url: '#',
                    text: 'Visit Site'
                }
            ]
        },
        'python-projects': {
            title: 'Python Projects',
            image: './img/python.jpg',
            description: `
                <p>This repository is a showcase of various Python applications and scripts that demonstrate problem-solving skills, data analysis capabilities, and automation techniques.</p>
                <p>The collection includes:</p>
                <ul>
                    <li><strong>Data Analysis Tools:</strong> Scripts for processing, analyzing, and visualizing data using libraries like Pandas, NumPy, and Matplotlib</li>
                    <li><strong>Web Scrapers:</strong> Tools for extracting and processing data from websites with BeautifulSoup and Requests</li>
                    <li><strong>Automation Scripts:</strong> Utilities for automating repetitive tasks and file management</li>
                    <li><strong>Machine Learning Models:</strong> Simple implementations of classification and regression algorithms using Scikit-learn</li>
                    <li><strong>CLI Applications:</strong> Interactive command-line tools for various purposes, from task management to financial calculations</li>
                </ul>
                <p>Each project includes comprehensive documentation, test cases, and usage examples to help others understand and potentially utilize these tools.</p>
            `,
            tags: ['Python', 'Data Analysis', 'Automation', 'Web Scraping', 'Machine Learning'],
            links: [
                {
                    icon: 'fab fa-github',
                    url: 'https://github.com/iamanduru/PythonProjects/tree/main',
                    text: 'View Repository'
                }
            ]
        },
        'Cursor-ripple': {
            title: 'Cursor Ripples',
            image: './img/cursor.png',
            description: `
                <p>This is a lightweight and interactive cursor trail effect built using HTML5, CSS, and JavaScript. With its visually appealing particle system, this project offers both creativity and inspiration for those interested in UI/UX design and web animation.</p>
                <p>The collection includes:</p>
                <ul>
                   <li><strong>Canvas Animation Basics:</strong> Learn how to use the HTML5 <canvas> element and its 2D context for drawing and animation.</li>
                    <li><strong>Particle System Design:</strong> Understand how particle systems work, including concepts like lifespan, opacity, and movement dynamics.</li>
                    <li><strong>Mouse Interaction:</strong> Discover how to capture and utilize real-time mouse movements for creating interactive effects.</li>
                    <li><strong>JavaScript Animation Techniques:</strong> Master the requestAnimationFrame API for smooth and efficient animations.</li>
                    <li><strong>Responsive Design:</strong> Learn how to make canvas animations adaptable to different screen sizes.</li>
                    <li><strong>Styling with CSS Variables:</strong> Explore the use of CSS variables (:root) to manage theming and maintain consistent styling.</li>
                </ul>
                <p>Each implementation includes clear documentation and example usage to help developers quickly integrate the effect into their projects.</p>
            `,
            tags: ['HTML', 'CSS', 'Javascript', ],
            links: [
                {
                    icon: 'fas fa-external-link-alt',
                    url: 'https://iamanduru.github.io/cursor-ripple/',
                    text: 'View Website'
                }
            ]
        },
        'Mpesa-Auth': {
            title: 'Cursor Ripples',
            image: './img/mpesa.png',
            description: `
                <p>This is a secure and robust M-Pesa authentication system designed for a film streaming platform, ensuring only verified paying users can access content while preventing unauthorized link sharing.
                 The system integrates M-Pesa's STK Push and Paybill/Till Number functionalities for seamless payment processing and access control.</p>
                <p>The collection includes:</p>
                <ul>
                   <li><strong>Payment Integration:</strong> Seamless integration with Safaricom's M-Pesa API for real-time payment processing using STK Push and Paybill/Till Number.</li> 
                   <li><strong>Access Control:</strong> Unique, time-sensitive access links tied to a single device or IP address, ensuring one-time viewing sessions.</li> 
                   <li><strong>Multi-Layered Security:</strong> Cross-verification of M-Pesa payment phone numbers, UUIDv4-based access tokens, and optional Multi-Factor Authentication (MFA).</li> 
                   <li><strong>Real-Time Monitoring:</strong> An admin dashboard for tracking transactions, access attempts, and detecting suspicious activities.</li> 
                   <li><strong>Scalable Backend:</strong> Built with Node.js and Express.js, ensuring high performance and reliability.</li> 
                   <li><strong>Database Management:</strong> MONGODB for structured data storage, including user details, transactions, and access logs.</li> 
                   <li><strong>Interactive Frontend:</strong> A user-friendly interface built with HTML, CSS, and JavaScript for film selection, payment, and viewing.</li>
                </ul>
                <p>This full-stack solution is designed to provide a frictionless payment experience, enhanced security, and controlled access, making it ideal for modern film streaming platforms.</p>
            `,
            tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'M-Pesa API', 'UUIDv4', 'JWT', 'Redis', 'Axios', 'Webhooks'],
            links: [
                {
                    icon: 'fas fa-external-link-alt',
                    url: 'https://github.com/iamanduru/MPesa-Auth',
                    text: 'View Repository'
                }
            ]
        },

        'cafe-menu': {
            title: 'Artisan Cafe Menu',
            image: './img/coffee.png',
            description: `
                <p>A modern, responsive, and interactive digital menu designed for cafes and restaurants. This project leverages cutting-edge web technologies to deliver a seamless and engaging user experience.</p>
                <p>The collection includes:</p>
                <ul>
                   <li><strong>Fully Responsive Design:</strong> Optimized for desktops, tablets, and mobile devices.</li>
                    <li><strong>Dark Mode Support:</strong> Users can toggle between light and dark themes.</li>
                    <li><strong>Interactive UI:</strong> Hover effects, expandable descriptions, and smooth animations.</li>
                    <li><strong>Elegant Aesthetic:</strong> Carefully curated typography and color schemes for a polished look.</li>
                    <li><strong>Accessibility Compliance:</strong> Ensures usability for all audiences with semantic HTML and WCAG-compliant contrast ratios.</li>
                </ul>
                <p>Each implementation includes clear documentation and example usage to help developers quickly integrate the effect into their projects.</p>
            `,
            tags: ['HTML', 'CSS', 'Javascript', 'ES6+'],
            links: [
                {
                    icon: 'fas fa-external-link-alt',
                    url: 'https://iamanduru.github.io/coffee-menu/',
                    text: 'View Website'
                }
            ]
        },
    };
    
    // Event listener for opening modals
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            const project = projectDetails[projectId];
            
            if (project) {
                let tagsHTML = '';
                project.tags.forEach(tag => {
                    tagsHTML += `<span class="modal__tag">${tag}</span>`;
                });
                
                let linksHTML = '';
                project.links.forEach(link => {
                    linksHTML += `
                        <a href="${link.url}" class="modal__link" target="_blank">
                            <i class="${link.icon}"></i> ${link.text}
                        </a>
                    `;
                });
                
                modalContent.innerHTML = `
                    <div class="modal__image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <h2 class="modal__title">${project.title}</h2>
                    <div class="modal__description">${project.description}</div>
                    <div class="modal__tags">${tagsHTML}</div>
                    <div class="modal__links">${linksHTML}</div>
                `;
                
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });
    
    // Event listener for closing modal
    modalClose.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Initialize the search functionality
 */
function initializeSearch() {
    const searchInput = document.querySelector('.search__input');
    const searchButton = document.querySelector('.search__button');
    const popularKeywords = document.querySelectorAll('.popular__keyword');
    const projectCards = document.querySelectorAll('.project__card');
    
    function performSearch(query) {
        query = query.toLowerCase().trim();
        
        if (query === '') {
            // Show all projects if query is empty
            projectCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        // Filter projects based on search query
        projectCards.forEach(card => {
            const title = card.querySelector('.project__title').textContent.toLowerCase();
            const description = card.querySelector('.project__description').textContent.toLowerCase();
            const type = card.querySelector('.project__type').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.project__tag'))
                .map(tag => tag.textContent.toLowerCase());
            
            // Check if the project matches the search query
            const matches = 
                title.includes(query) || 
                description.includes(query) || 
                type.includes(query) || 
                tags.some(tag => tag.includes(query));
            
            // Show or hide the project card
            card.style.display = matches ? 'block' : 'none';
        });
        
        // Scroll to results
        document.querySelector('.projects__categories').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Event listener for search form
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch(searchInput.value);
    });
    
    // Search on Enter key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(this.value);
        }
    });
    
    // Event listeners for popular keywords
    popularKeywords.forEach(keyword => {
        keyword.addEventListener('click', function() {
            searchInput.value = this.textContent;
            performSearch(this.textContent);
        });
    });
}

/**
 * Initialize the back to top button
 */
function initializeBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Initialize pagination
 */
function initializePagination() {
    const pageButtons = document.querySelectorAll('.page__btn');
    
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // If this is not a navigation button
            if (!this.innerHTML.includes('fa-chevron')) {
                // Remove active class from all buttons
                pageButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // In a real application, this would fetch and display the next page of projects
                // Since this is a demo, we'll just scroll to the top of the projects section
                document.querySelector('.projects__categories').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // This is a navigation button (next page)
                const activeButton = document.querySelector('.page__btn.active');
                const nextButton = activeButton.nextElementSibling;
                
                if (nextButton && !nextButton.innerHTML.includes('fa-chevron')) {
                    activeButton.classList.remove('active');
                    nextButton.classList.add('active');
                    
                    document.querySelector('.projects__categories').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    initializeCarousel();
    
    // Initialize modals
    initializeModals();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize back to top button
    initializeBackToTop();
    
    // Initialize pagination
    initializePagination();
    
    // Initialize card heights
    equalizeCardHeights();
    
    // Re-equalize on window resize
    window.addEventListener('resize', debounce(equalizeCardHeights, 250));
});