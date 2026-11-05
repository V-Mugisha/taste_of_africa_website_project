const newsletterForm = document.querySelector("#newsletter-form");
const newsletterEmail = document.querySelector("#newsletter-email");
const newsletterMessage = document.querySelector("#newsletter-message");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletterMessage.textContent = `Thanks for subscribing, ${newsletterEmail.value}!`;
  newsletterForm.reset();
});

const contactForm = document.querySelector("#contact-form");
const contactName = document.querySelector("#name");
const contactMessage = document.querySelector("#message");
const contactFeedback = document.querySelector("#contact-feedback");
const contactSuccess = document.querySelector("#contact-success");
const contactSuccessText = document.querySelector("#contact-success-text");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const messageLength = contactMessage.value.trim().length;

  if (messageLength <= 20) {
    contactFeedback.textContent =
      "Please write a message longer than 20 characters.";
    contactFeedback.className = "form-feedback error";
    return;
  }

  contactForm.classList.add("hidden");
  contactFeedback.textContent = "";
  contactFeedback.className = "form-feedback";
  contactSuccessText.textContent = `Thank you, ${contactName.value.trim()}! We've received your message.`;
  contactSuccess.classList.remove("hidden");
});
