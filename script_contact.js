function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Output simulated "terminal response"
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Submitting your details...\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Clear form inputs
    document.getElementById('contact-form').reset();

    // Sending the email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        // Simulate "submitted" after 2 seconds with success message
        setTimeout(() => {
            outputDiv.innerHTML += `\n\nForm submitted successfully!`;
        }, 2000);
    }, function(error) {
        // Simulate "submitted" after 2 seconds with error message
        setTimeout(() => {
            outputDiv.innerHTML += `\n\nFailed to submit the form. Please try again later.`;
        }, 2000);
    });
}
