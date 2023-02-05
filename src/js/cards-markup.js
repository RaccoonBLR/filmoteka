export default function filmCardMarkupCreator(data) {
  return data
    .map(film => {
      const date = film.release_date ?? film.first_air_date;
      const name = film.original_title ?? film.name;

      return `<article class="film-card">
    <a src="#" class="film-card__link"  data-modal-open>
      <img
        class="film-card__image"
        src="https://image.tmdb.org/t/p/w500${film.poster_path}"
        alt="${name}"
        width="395"
      />
      <h2 class="film-card__title">${name}</h2>
      <div class="film-card__desc">
        <p class="film-card__janre">Janre</p>
        <p class="film-card__date">&nbsp|&nbsp${Number.parseInt(date)}</p>
        <span class="film-card__rating">${film.vote_average.toFixed(1)}</span>
      </div>
    </a>
  </article>`;
    })
    .join('');
}
