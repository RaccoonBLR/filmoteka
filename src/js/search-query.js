import { NewTrendApi, NewSearchApi } from './news-api';
import filmCardMarkupCreator from './cards-markup';

const carts = document.querySelector('.container-catalog');
const form = document.querySelector('.search');
const searchInputEl = document.querySelector('.search__input');
const hiddenWarning = document.querySelector('.search__text');

const TrendApi = new NewTrendApi();
const SearchApi = new NewSearchApi();

TrendApi.fetchTrend()
  .then(dataForCatallog => {
    localStorage.setItem('current-movies', JSON.stringify(dataForCatallog));
    addCards(dataForCatallog);
  })
  .catch(console.log);

form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  // SearchApi.resetPage();
  SearchApi.query = e.currentTarget.elements.searchQuery.value; //можливо варто додати trim()
  console.log(SearchApi.query);

  //Type something
  if (SearchApi.query === '') {
    hiddenWarning.classList.remove('hidden');
    hiddenWarning.textContent = 'Please type something';
    setTimeout(function () {
      hiddenWarning.classList.add('hidden');
    }, 3000);
  }

  if (!SearchApi.query) {
    try {
      const dataForCatallog = await TrendApi.fetchTrend();
      console.log(dataForCatallog);
      localStorage.setItem('current-movies', JSON.stringify(dataForCatallog));
      await TrendApi.fetchTrend().then(addCards);
    } catch (error) {
      console.log(error.message);
    }
    return;
  }

  try {
    const dataForCatallog = await SearchApi.fetchSearch();
    console.log(dataForCatallog);
    localStorage.setItem('current-movies', JSON.stringify(dataForCatallog));
    await SearchApi.fetchSearch().then(addCards);

    //wrongSearch

    if (dataForCatallog.length === 0) {
      console.log(dataForCatallog);
      TrendApi.fetchTrend()
        .then(dataForCatallog => {
          localStorage.setItem(
            'current-movies',
            JSON.stringify(dataForCatallog)
          );
          addCards(dataForCatallog);
        })
        .catch(console.log);
      hiddenWarning.classList.remove('hidden');
      hiddenWarning.textContent =
        'Search result not successful. Enter the correct movie name and';
      setTimeout(function () {
        hiddenWarning.classList.add('hidden');
      }, 3000);
    }
  } catch (error) {
    console.log(error.message);
  }
}

function addCards(data) {
  carts.innerHTML = filmCardMarkupCreator(data);
}

searchInputEl.addEventListener('click', onInputClean);

// функція для того, щоб при повторному пошуку інпуп очищувався сам (для зручності користувача)
function onInputClean() {
  searchInputEl.value = '';
}
