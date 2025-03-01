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

//Carousel Cards
document.addEventListener('DOMContentLoaded', () => {
    // Get all carousel containers (for both UI/UX and Development sections)
    const carousels = document.querySelectorAll('.carousel__container');

    carousels.forEach(carouselContainer => {
        const carousel = carouselContainer.querySelector('.projects__grid.carousel');
        const prevButton = carouselContainer.querySelector('.carousel-button.prev');
        const nextButton = carouselContainer.querySelector('.carousel-button.next');

        if (!carousel || !prevButton || !nextButton) return;

        // Function to scroll the carousel
        const scroll = (direction) => {
            const cardWidth = carousel.querySelector('.project-card').offsetWidth;
            // Add the gap between cards (30px from CSS)
            const scrollAmount = direction === 'next' ? (cardWidth + 30) : -(cardWidth + 30);

            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        };

        // Button click handlers with correct direction
        nextButton.addEventListener('click', () => scroll('next'));
        prevButton.addEventListener('click', () => scroll('prev'));

        // Update button visibility based on scroll position
        const updateButtons = () => {
            const isAtStart = carousel.scrollLeft <= 0;
            const isAtEnd = Math.abs(
                carousel.scrollWidth - carousel.clientWidth - carousel.scrollLeft
            ) <= 1;

            // Update button states
            prevButton.style.opacity = isAtStart ? '0.5' : '1';
            prevButton.style.pointerEvents = isAtStart ? 'none' : 'all';

            nextButton.style.opacity = isAtEnd ? '0.5' : '1';
            nextButton.style.pointerEvents = isAtEnd ? 'none' : 'all';
        };

        // Add scroll event listener
        carousel.addEventListener('scroll', updateButtons);
        
        // Initial button state
        updateButtons();

        // Touch swipe functionality with improved threshold
        let touchStartX = 0;
        let touchEndX = 0;
        const swipeThreshold = 50; // minimum distance for swipe

        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeDistance = touchStartX - touchEndX;

            if (Math.abs(swipeDistance) >= swipeThreshold) {
                if (swipeDistance > 0) {
                    scroll('next');
                } else {
                    scroll('prev');
                }
            }
        }, { passive: true });

        // Optional: Add keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                scroll('prev');
            } else if (e.key === 'ArrowRight') {
                scroll('next');
            }
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