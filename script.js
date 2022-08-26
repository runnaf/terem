const buttonFirst = document.querySelector('.button-first');
const buttonSecond = document.querySelector('.button-second');
const modal = document.querySelector('.modal-hi');
const buttonModal = modal.querySelector('button');
const title = document.querySelector('.first');
const changeableBlock = document.querySelector('.wrapper__second');

buttonFirst.addEventListener('click', changedHidden);
buttonSecond.addEventListener('click', changeOfPosition);
buttonModal.addEventListener('click', closedModal);
document.addEventListener('keydown', closedModalKey);
document.addEventListener('click', closedModalForClick)

function changedHidden () {
  title.classList.toggle('is-hidden')
};

function changeOfPosition () {
  changeableBlock.classList.toggle('is-transform')
}

function closedModal () {
  modal.style.display = 'none';
  document.removeEventListener('keydown', closedModalKey)
}

function closedModalKey (e) {
  let isTabPressed = e.key.toUpperCase() === 'ESCAPE';

  if (isTabPressed) {
    modal.style.display = 'none';
  }

  buttonModal.removeEventListener('click', closedModal)
}

function closedModalForClick (e) {
  if (!e.target.closest('.modal-hi div')) {
    modal.style.display = 'none';
    buttonModal.removeEventListener('click', closedModal);
    document.removeEventListener('keydown', closedModalKey)
  }
}




