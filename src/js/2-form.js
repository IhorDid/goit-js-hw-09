const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageTextarea = form.elements['message'];
const feedbackStateKey = 'feedback-form-state';

form.addEventListener('input', event => {
  event.preventDefault();
  const { name, value } = event.target;
  if (name === 'email' || name === 'message') {
    const currentState = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };
    localStorage.setItem(feedbackStateKey, JSON.stringify(currentState));
  }
});

const savedState = localStorage.getItem(feedbackStateKey);
if (savedState) {
  const { email, message } = JSON.parse(savedState);

  if (email) emailInput.value = email;
  if (message) messageTextarea.value = message;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = messageTextarea.value.trim();
  if (!email || !message) {
    return;
  }
  console.log({ email, message });
  emailInput.value = '';
  messageTextarea.value = '';
  localStorage.removeItem(feedbackStateKey);
});
