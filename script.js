const forgotPasswordForm = document.getElementById('forgot-password-form');

forgotPasswordForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate sending a reset link (replace with actual logic)
  alert('A password reset link has been sent to your email address!');

  // Clear the email input field (optional)
  forgotPasswordForm.elements.email.value = '';
});


