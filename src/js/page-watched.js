import cardsMarkup from '../js/Cards-markup';
const btnWatched = document.querySelector('#watched-btn');
const btnQueue = document.querySelector('#queue-btn');
const sectionEl = document.querySelector('.films-catalog');

addWatchedMurkup();

btnWatched.addEventListener('click', addWatchedMurkup);

function addWatchedMurkup() {
    const murkupArr = localStorage.getItem('watched-movies');
    btnWatched.classList.add('library_btn--active');
    btnQueue.classList.remove('library_btn--active');
    if(!murkupArr) {
        //картинка заглушка функция
    } else {
        const murkupArrParse = JSON.parse(murkupArr);
        const strokeMurkup = cardsMarkup(murkupArrParse);
        sectionEl.innerHTML = strokeMurkup;
    }
}

