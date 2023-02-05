import zhdun from '../images/waiting/z9ax1o.jpg';

const imgNotFound = `<div class>
<img src="${zhdun}" width="600 class='img_not-found'">
    </div>`;

function filmsNotFound() {
    const conteinerEl = document.querySelector('.container-catalog');

    conteinerEl.innerHTML = imgNotFound;
}

function filmsNotFoundTwo() {
    const conteinerEl = document.querySelector('.films-catalog');

    conteinerEl.innerHTML = imgNotFound;
}

export { filmsNotFound, filmsNotFoundTwo }