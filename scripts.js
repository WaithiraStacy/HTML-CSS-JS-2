document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href');
            navigateToPage(targetPage);
        });
    });

    // Navigate to a specific page
    window.navigateToPage = function(pageUrl) {
        window.location.href = pageUrl;
    }

    // Contact form submission handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple form validation
            if (name === '' || email === '' || message === '') {
                showFeedback('Please fill in all fields', 'error');
                return;
            }

            // Email format validation
            if (!validateEmail(email)) {
                showFeedback('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            showFeedback('Thank you for your message! We will get back to you soon.', 'success');
            form.reset();
        });
    }

    // Display feedback messages
    function showFeedback(message, type) {
        const feedback = document.getElementById('formFeedback');
        feedback.textContent = message;
        feedback.className = type;
        setTimeout(() => feedback.textContent = '', 5000);
    }

    // Email validation regex
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    // Image gallery slider (additional functionality)
    let currentImageIndex = 0;
    const images = ['images/gallery1.jpg', 'images/gallery2.jpg', 'images/gallery3.jpg'];
    const galleryImage = document.createElement('img');
    galleryImage.src = images[currentImageIndex];
    document.body.appendChild(galleryImage);

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        galleryImage.src = images[currentImageIndex];
    }, 3000);

    // Dark mode toggle
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Toggle Dark Mode';
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.bottom = '20px';
    darkModeButton.style.right = '20px';
    darkModeButton.style.padding = '10px';
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});