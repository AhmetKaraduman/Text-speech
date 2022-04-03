const toggleBtn = document.getElementById("toggle-btn");
const toggleContainer = document.getElementById("toggle-container");
const closeBtn = document.querySelector(".x");
const texts = document.querySelectorAll(".card-text");
const readBtn = document.getElementById("read-btn");
const textArea = document.getElementById("text-area");
const allLang = document.querySelector("select");
const cards = document.querySelectorAll(".card");
var synth = window.speechSynthesis;

// show toggle container
toggleBtn.addEventListener("click", () => {
	toggleContainer.classList.toggle("show");
});

// hide toggle container
closeBtn.addEventListener("click", () => {
	toggleContainer.classList.remove("show");
});

// click the card and speak text with selected lang
cards.forEach((card) =>
	card.addEventListener("click", () => {
		sayIt(card.querySelector("h3").innerText);
		card.classList.toggle("active");
		setTimeout(() => card.classList.toggle("active"), 1000);
	})
);

// read btn when typing something in text area and pick language
readBtn.addEventListener("click", () => {
	sayIt(textArea.value);
});

function sayIt(text) {
	let utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = "tr-TR";
	speechSynthesis.speak(utterance);
}
