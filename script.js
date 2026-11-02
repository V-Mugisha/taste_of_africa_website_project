const testBtn = document.querySelector("#testBtn");
const message = document.querySelector("#message");

testBtn.addEventListener("click", () => {
  message.textContent = "JavaScript is connected";
});
