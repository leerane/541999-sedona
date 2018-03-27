var modalSearch = document.querySelector(".modal-search");
var toggleButton = document.querySelector("#modal-button");
var modalForm = document.querySelector(".booking-form");
var modalError = document.querySelector(".modal-error");
var inputFieldList = modalForm.querySelectorAll("input[type='text']");
var inputFieldArray = Array.prototype.slice.call(inputFieldList);

function isInvalid(invField) {
	return !invField.value;
}

function errorModal(evt) {
	if (inputFieldArray.some(isInvalid)) {
		evt.preventDefault();
		modalSearch.classList.remove("modal-error");
		void modalSearch.offsetWidth;
		modalSearch.classList.add("modal-error");
	}
}

modalSearch.classList.add("modal-shown");

function toggleModal(evt) {
	evt.preventDefault();
	modalSearch.classList.toggle("modal-shown");
};

toggleButton.addEventListener("click", toggleModal);
modalForm.addEventListener("submit", errorModal);