import zhdun from '../images/waiting/z9ax1o.jpg';

const imgNotFound = `<div class='not-found_container'>
<h2 class="librery_not-found-text">No movies have been added yet. Select the desired movies on the <a href="./index.html" class="link_to-home">home page.</a></h1>
<img src="${zhdun}" width="600" class='img_not-found'>
    </div>`;

function filmsNotFound() {
    const containerEl = document.querySelector('.container-catalog');

    containerEl.innerHTML = imgNotFound;
}

function filmsNotFoundTwo() {
    const containerEl = document.querySelector('.films-catalog');

    containerEl.innerHTML = imgNotFound;
}

export { filmsNotFound, filmsNotFoundTwo }