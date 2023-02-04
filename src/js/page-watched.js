import cardsMarkup from '../js/Cards-markup';
const btnWatched = document.querySelector('#watched-btn');
const sectionEl = document.querySelector('.films-catalog');

btnWatched.addEventListener('click', addWatchedMurkup);


function addWatchedMurkup() {
    const murkupArr = localStorage.getItem('watched-movies');
    const murkupArrParse = JSON.parse(murkupArr);

    const strokeMurkup = cardsMarkup(murkupArrParse);
    sectionEl.innerHTML = strokeMurkup;
}

