// ========== PROJECT FILTERING ========== 
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card-full');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter projects
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'grid';
            setTimeout(() => {
                project.style.opacity = '1';
            }, 10);
        } else {
            project.style.display = 'none';
        }
    });
}

// ========== SCROLL TO SECTION ==========
function scrollToSection() {
    const projectsSection = document.querySelector('.featured-projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== FORM SUBMISSION ==========
function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const subject = form.querySelector('#subject').value;
    const message = form.querySelector('#message').value;
    const statusDiv = document.getElementById('form-status');

    // Simulate form submission
    statusDiv.textContent = 'Sending...';
    statusDiv.classList.remove('success', 'error');

    // Simulate delay
    setTimeout(() => {
        // In a real application, you would send this data to a server
        console.log('Form Data:', { name, email, subject, message });

        // Show success message
        statusDiv.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        statusDiv.classList.add('success');

        // Reset form
        form.reset();

        // Clear message after 5 seconds
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.classList.remove('success');
        }, 5000);
    }, 1000);
}

// ========== NAVBAR ACTIVE LINK UPDATE ==========
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========== SMOOTH SCROLL BEHAVIOR ==========
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();

    // Add smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Initialize all projects as visible
    const projects = document.querySelectorAll('.project-card-full');
    projects.forEach(project => {
        project.style.opacity = '1';
    });
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card, .research-item, .faq-item').forEach(el => {
        observer.observe(el);
    });
});

// ========== ADD ANIMATION KEYFRAMES ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
