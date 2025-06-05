document.addEventListener('DOMContentLoaded', function() {
    // We now target the <form> element by its ID
    const userSignupForm = document.getElementById('userSignupForm');
    const signupMessageDiv = document.getElementById('signupMessage'); // Assuming you've added this div

    // IMPORTANT: Replace this with YOUR NEWLY DEPLOYED Apps Script Web App URL for the User system!
    const WEB_APP_URL_USER = 'https://script.google.com/macros/s/AKfycbw69KhwZhlhrAgUORPP96qhH2IoO71RizKuCXIfy75jhmA1tGc1F3NHVIW4gpYEKp7zEA/exec';

    userSignupForm.addEventListener('submit', async function(event) { // Listener is on the form's submit event
        event.preventDefault(); // Prevent default form submission

        signupMessageDiv.textContent = 'Enrolling...';
        signupMessageDiv.style.color = 'blue';

        const form = event.target; // The form itself
        const formData = new FormData(form); // This will now collect all fields with 'name' attributes

        // Convert FormData to a plain object, as Apps Script expects JSON
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        try {
            const response = await fetch(WEB_APP_URL_USER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data), // Sending the data as JSON
                mode: 'no-cors' // Use 'no-cors' to bypass the CORS check
            });

            // With 'no-cors', we can't read the response directly.
            // We assume the request was sent successfully if no network error occurred.
            console.log('User enrollment initiated. Check Apps Script logs for actual email sending status.');
            signupMessageDiv.textContent = 'Enrollment successful! Check your email for initial instructions.';
            signupMessageDiv.style.color = 'green';
            form.reset(); // Clear the form fields
        } catch (error) {
            console.error('Fetch error:', error);
            signupMessageDiv.textContent = 'An error occurred during enrollment. Please try again.';
            signupMessageDiv.style.color = 'red';
        }
    });
});