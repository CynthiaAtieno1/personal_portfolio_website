document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      const email = document.querySelector("input[type='email']");
      if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }
});