document.getElementById('operatorSignupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    const messageDiv = document.getElementById('signupMessage');
    messageDiv.textContent = 'Signing up...';
    messageDiv.style.color = 'blue';

    // Replace with your deployed Apps Script Web App URL!
    // Get this URL after deploying your script as a Web App (see Step 3).
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbxsT7nw5hEbR8S6FoDCwqxHsidcOoCqZj3qbzeNjfsz2r_0_SigX7vKG88h2LZwLseq/exec'; // <--- IMPORTANT!

    try {
        const response = await fetch(webAppUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'no-cors'
        });

        // const result = await response.json();
        //
        // if (result.status === 'success') {
        //     messageDiv.textContent = 'Signup successful! Check your email for your briefing.';
        //     messageDiv.style.color = 'green';
        //     form.reset(); // Clear the form
        // } else {
        //     messageDiv.textContent = 'Signup failed: ' + result.message;
        //     messageDiv.style.color = 'red';
        // }

        console.log('Form submission initiated. Check Apps Script logs for actual email sending status.');
        messageDiv.textContent = 'Signup process initiated! Check your email for your briefing.'; // No direct status from server due to CORS settings.
        messageDiv.style.color = 'green';
        form.reset(); // Clear the form

    } catch (error) {
        messageDiv.textContent = 'An error occurred during signup.';
        messageDiv.style.color = 'red';
        console.error('Fetch error:', error);
    }
});
