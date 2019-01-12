var modalSearch = document.querySelector('.modal-search');
var messageAttraction = document.querySelector('.message-attraction');
var toggleButton = document.querySelector('#modal-button');
var modalForm = document.querySelector('.booking-form');
var inputFieldList = modalForm.querySelectorAll('input[type="text"]');
var inputFieldArray = Array.prototype.slice.call(inputFieldList);

function isInvalid(invField) {
  return !invField.value;
}

function errorModal(evt) {
  if (inputFieldArray.some(isInvalid)) {
    evt.preventDefault();
    modalSearch.classList.remove('modal-error');
    void modalSearch.offsetWidth;
    modalSearch.classList.add('modal-error');
  }
}

function toggleModal(evt) {
  evt.preventDefault();
  messageAttraction.classList.toggle('message-attraction-opened');
  modalSearch.classList.toggle('modal-shown');
}

toggleButton.addEventListener('click', toggleModal);
modalForm.addEventListener('submit', errorModal);
