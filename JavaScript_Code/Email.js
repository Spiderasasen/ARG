document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactInfo');
    const submitButton = document.getElementById('submitButton');
    const formMessages = document.getElementById('formMessages'); // Our new div for messages

    // Make sure you replace this with YOUR ACTUAL GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzzT_Eg34mfVtPT6noU2KLEUNigf3_Bucu9N78kDsxOs9qXsC8Yql4POl_vUbvfkD1F/exec";

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from reloading the page

        // Clear previous messages
        formMessages.textContent = '';
        formMessages.style.color = 'black'; // Reset color

        // Disable the button to prevent multiple submissions
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Get all form data
        const formData = new FormData(contactForm);

        // Send the data using fetch API
        fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            body: formData,
            // Mode 'no-cors' is often needed for Apps Script as it doesn't return CORS headers by default
            mode: 'no-cors'
        })
            .then(response => {
                // Note: With 'no-cors' mode, 'response.json()' or 'response.text()' won't work due to opaque response.
                // We'll just assume success if no network error.
                // Google Apps Script usually returns a 200 OK even in 'no-cors'.
                console.log('Form submission initiated (check console for success/error if using CORS)');
                formMessages.textContent = 'Email sent successfully! The World CIA has received your message. Please remember to check your email for further notices.';
                formMessages.style.color = 'green';
                contactForm.reset(); // Clear the form fields
            })
            .catch(error => {
                console.error('Error during form submission:', error);
                formMessages.textContent = 'Failed to send email. Please try again later.';
                formMessages.style.color = 'red';
            })
            .finally(() => {
                // Re-enable the button after submission (whether success or error)
                submitButton.disabled = false;
                submitButton.textContent = 'Send Email';
            });
    });
});
