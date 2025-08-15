
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error states
            document.querySelectorAll('[id$="-error"]').forEach(el => {
                el.classList.add('hidden');
            });
            
            let isValid = true;
            
            // Validate name
            const name = document.getElementById('name').value.trim();
            if (!name) {
                document.getElementById('name-error').textContent = 'Please enter your name';
                document.getElementById('name-error').classList.remove('hidden');
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                document.getElementById('email-error').textContent = 'Please enter your email';
                document.getElementById('email-error').classList.remove('hidden');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email';
                document.getElementById('email-error').classList.remove('hidden');
                isValid = false;
            }
            
            // Validate subject
            const subject = document.getElementById('subject').value.trim();
            if (!subject) {
                document.getElementById('subject-error').textContent = 'Please enter a subject';
                document.getElementById('subject-error').classList.remove('hidden');
                isValid = false;
            }
            
            // Validate message
            const message = document.getElementById('message').value.trim();
            if (!message) {
                document.getElementById('message-error').textContent = 'Please enter your message';
                document.getElementById('message-error').classList.remove('hidden');
                isValid = false;
            } else if (message.length < 10) {
                document.getElementById('message-error').textContent = 'Message should be at least 10 characters';
                document.getElementById('message-error').classList.remove('hidden');
                isValid = false;
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server here
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
});