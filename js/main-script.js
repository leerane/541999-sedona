var modalSearch = document.querySelector(".modal-search");
var toggleButton = document.querySelector("#modal-button");
var modalForm = document.querySelector(".booking-form");
var modalError = document.querySelector(".modal-error");
var sedonaMap = document.querySelector(".sedona-map");
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
}

function initMap() {
	var map = new google.maps.Map(sedonaMap, {
		zoom: 9,
		center: {lat: 34.76, lng: -111.74},
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.roadmap
});

	var marker = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: {lat: 34.88, lng: -111.76}
	});
}

toggleButton.addEventListener("click", toggleModal);
modalForm.addEventListener("submit", errorModal);