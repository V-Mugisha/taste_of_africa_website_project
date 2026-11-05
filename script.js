function initNewsletter() {
  const newsletterForm = document.querySelector("#newsletter-form");
  if (!newsletterForm) return;

  const newsletterEmail = document.querySelector("#newsletter-email");
  const newsletterMessage = document.querySelector("#newsletter-message");

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterMessage.textContent = `Thanks for subscribing, ${newsletterEmail.value}!`;
    newsletterForm.reset();
  });
}

function initContactForm() {
  const contactForm = document.querySelector("#contact-form");
  if (!contactForm) return;

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
}

function initRecipeFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const recipeCards = document.querySelectorAll(".recipe-card");
  if (filterButtons.length === 0 || recipeCards.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      recipeCards.forEach((card) => {
        const region = card.dataset.region;
        const shouldShow = filter === "all" || region === filter;
        card.classList.toggle("hidden", !shouldShow);
      });
    });
  });
}

function initFavorites() {
  const favButtons = document.querySelectorAll(".fav-btn");
  if (favButtons.length === 0) return;

  const STORAGE_KEY = "taste-of-africa-favorites";

  const getFavorites = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
      return [];
    }
  };

  const saveFavorites = (favorites) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  };

  favButtons.forEach((button) => {
    const recipeId = button.dataset.id;

    if (getFavorites().includes(recipeId)) {
      button.classList.add("favorited");
    }

    button.addEventListener("click", () => {
      const favorites = getFavorites();
      const index = favorites.indexOf(recipeId);

      if (index === -1) {
        favorites.push(recipeId);
        button.classList.add("favorited");
      } else {
        favorites.splice(index, 1);
        button.classList.remove("favorited");
      }

      saveFavorites(favorites);
    });
  });
}

initNewsletter();
initContactForm();
initRecipeFilter();
initFavorites();
