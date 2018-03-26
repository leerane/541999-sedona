var modalSearch = document.querySelector(".modal-search");
var toggleButton = document.querySelector("#modal-button");

function toggleModal(event) {
	event.preventDefault();
	modalSearch.classList.toggle("modal-shown");
};

toggleButton.addEventListener("click", toggleModal);