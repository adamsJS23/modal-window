'use strict';
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function toggleModal() {
  modalWindow.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

btnCloseModal.addEventListener('click', toggleModal);

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    toggleModal();
  }
});

overlay.addEventListener('click', toggleModal);
