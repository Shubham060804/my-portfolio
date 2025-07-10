// Typing Animation
const text = ["Shubham", "a Full Stack Developer", "a BCA Student", "an Open Source Contributor"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
})();

// Dark/Light Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.style.backgroundColor = document.body.classList.contains("dark-theme") ? "#1e1e1e" : "#f7f7f7";
  document.body.style.color = document.body.classList.contains("dark-theme") ? "#f1f1f1" : "#333";
}

// Mobile Menu Toggle (optional enhancement)
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
}
