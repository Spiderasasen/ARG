// js/emailSender.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactInfo');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userEmail = document.getElementById('userEmail').value;
        const userName = document.getElementById('userName').value;
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;

        emailjs.send("service_pp46fvj", "template_yth8pjo", {
            from_name: userName,  // Use userName
            reply_to: userEmail,  // Use userEmail
            subject: subject,
            message: body
        })
            .then(function(response) {
                console.log('Success!', response.status, response.text);
                alert('Email sent successfully!');
            }, function(error) {
                console.log('Failed...', error);
                alert('Failed to send email. Please try again.');
            });
    });
});