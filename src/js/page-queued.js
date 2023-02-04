import cardsMarkup from '../js/Cards-markup';
const library = document.querySelector('.films-catalog');
const watchedBtn = document.querySelector(`#watched-btn`);
const queueBtn = document.querySelector(`#queue-btn`);

queueBtn.addEventListener('click', onQueueBtn);
function onQueueBtn() {
  const queuedMovies = JSON.parse(localStorage.getItem('queued-movies'));
  if (!queuedMovies) {
    // заглушка
    return;
  }
  watchedBtn.classList.remove('library_btn--active');
  queueBtn.classList.add('library_btn--active');
  library.innerHTML = cardsMarkup(queuedMovies);
}
