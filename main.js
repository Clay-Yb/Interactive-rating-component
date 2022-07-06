const submit = document.querySelector(".submit_btn");
const card1 = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const resultText = document.querySelector(".submit_result");
const numLink = document.querySelectorAll(".card_link");

function removeActive() {
	numLink.forEach((n) => n.classList.remove("active_link"));
}

numLink.forEach((n) =>
	n.addEventListener("click", () => {
		removeActive();
		n.classList.add("active_link");
		const result = n.innerHTML;
		resultText.innerHTML = `You selected ${result} out of 5`;
	})
);

submit.onclick = () => {
	card1.style.display = "none";
	card2.style.display = "block";
};
