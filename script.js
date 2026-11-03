const newsletterForm = document.querySelector("#newsletter-form");
const newsletterEmail = document.querySelector("#newsletter-email");
const newsletterMessage = document.querySelector("#newsletter-message");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletterMessage.textContent = `Thanks for subscribing, ${newsletterEmail.value}!`;
  newsletterForm.reset();
});
