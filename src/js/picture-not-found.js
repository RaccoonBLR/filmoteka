const imgNotFound = `<div class>
<img src="./images/waiting/z9ax1o.jpg.jpg" width="400">
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