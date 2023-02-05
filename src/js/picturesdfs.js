import zhdun from '../images/waiting/z9ax1o.jpg';

const imgNotFound = `<div class>
<img src="${zhdun}" width="600 class='img_not-found'">
    </div>`;

function filmsNotFound() {
    const containerEl = document.querySelector(".container-catalog");

    containerEl.innerHTML = imgNotFound;
}

function filmsNotFoundTwo() {
    const containerEl = document.querySelector(".films-catalog");

    containerEl.innerHTML = imgNotFound;
}

export {filmsNotFound, filmsNotFoundTwo}