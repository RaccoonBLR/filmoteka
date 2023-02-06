import cardsMarkup from '../js/cards-markup';
import { filmsNotFoundTwo } from '../js/picture-not-found';

const btnWatched = document.querySelector('#watched-btn');
const btnQueue = document.querySelector('#queue-btn');
const sectionEl = document.querySelector('.films-catalog');

addWatchedMarkup();

btnWatched.addEventListener('click', addWatchedMarkup);

function addWatchedMarkup() {
    const markupArr = localStorage.getItem('watched-movies');
    btnWatched.classList.add('library_btn--active');
    btnQueue.classList.remove('library_btn--active');
    if(!markupArr) {
        filmsNotFoundTwo();
    } else {
        const markupArrParse = JSON.parse(markupArr);
        const strokeMarkup = cardsMarkup(markupArrParse);
        sectionEl.innerHTML = strokeMarkup;
    }
}

