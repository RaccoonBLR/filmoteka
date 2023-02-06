// <!-- функция открытия и разметки модалки
function modalOpen() {
  const refs = {
    openModalCard: document.querySelector('.container-catalog'),
    modal: document.querySelector('[data-modal]'),
    modalConteiner: document.querySelector('.modal-conteiner'),
  };

  refs.openModalCard.addEventListener('click', openModal);

  function openModal(evt) {
    const filmCard = evt.target.closest('.film-card__link');
    if (!filmCard) {
      return;
    }
    refs.modal.classList.toggle('is-hidden');
    window.addEventListener('keydown', onEscapeKeyPress);
  // получение id  по нажатому объекту

    const filmId = Number(filmCard.dataset.id);
    console.log(filmId);

    // Получение объекта из localStorage
    const currentMovies = JSON.parse(localStorage.getItem('current-movies'));
    const currentFilm = currentMovies.find(({ id }) => id === filmId);
    console.log(currentFilm);

    // ФУНКЦИЯ РАЗМЕТКИ МОДАЛКИ
    function modalMarkup() {
      const imgUrl = `https://image.tmdb.org/t/p/w500${currentFilm.poster_path}`;
      console.log(currentFilm.poster_path);
      const title = currentFilm.title;
      const vote = Number(currentFilm.vote_average).toFixed(1);
      const votes = currentFilm.vote_count;
      const popularity = Number(currentFilm.popularity).toFixed(1);
      let genre = 'Action';
      if (!genre) {
        genre = 'no information';
      }
      let about = currentFilm.overview;
      if (!about) {
        about = 'no information, but coming soon';
      }

      const markup = `<div class="img-box">
         <img
           class="img-modal"
           src="${imgUrl}"
           alt="${title}"
           width="240px"
         />
       </div>
       <div class="content-box">
         <div class="text-box">
           <h2 class="modal-title">${title}</h2>
           <table>
             <tbody class="tbody">
               <tr>
                 <td class="tbody-category">Vote / Votes</td>
                 <td class="tbody-vote">${vote}</td>
                 <td>/</td>
                 <td>${votes}</td>
               </tr>
               <tr>
                 <td class="tbody-category">Popularity</td>
                 <td colspan="3">${popularity}</td>
                 <td></td>
                 <td></td>
               </tr>
               <tr>
                 <td class="tbody-category">Original Title</td>
                 <td class="tbody-title" colspan="3">${title}</td>
                 <td></td>
                 <td></td>
               </tr>
               <tr>
                 <td class="tbody-category">Genre</td>
                 <td colspan="3">${genre}</td>
                 <td></td>
                 <td></td>
               </tr>
             </tbody>
           </table>
    
           <h3 class="modal-subtitle">About</h3>
           <p class="textAbout">
             ${about}
           </p>
         </div>
         <div class="btn-conteiner">
           <button class="js-toWatched btn-click-modal">add to watched</button>
           <button class="js-toQueue btn-click-modal">add to queue</button>
         </div>
       </div>`;

      refs.modalConteiner.innerHTML = markup;
    }
    modalMarkup();
  }
}
modalOpen();

// Функция закрытия модалки
function modalClose() {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  window.removeEventListener('keydown', onEscapeKeyPress);
}
modalClose();

// Функция создания объекта жанров
function addGanre() {
  const ganre = JSON.parse(localStorage.getItem('Ganre'));

  const ganreId = ganre.flatMap(el => el.id);
  const ganreName = ganre.flatMap(el => el.name);
  const ganreObj = ganreId.reduce(
    (acc, id, i) => ({ ...acc, [id]: ganreName[i] }),
    {}
  );

  return ganreObj;
}
const ganreObj = addGanre();

//закриття по бекдропу та Esc
const backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click', onBackdropClick);
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    document.querySelector('[data-modal]').classList.toggle('is-hidden');
  }
}

function onEscapeKeyPress(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    document.querySelector('[data-modal]').classList.toggle('is-hidden');
  }
}