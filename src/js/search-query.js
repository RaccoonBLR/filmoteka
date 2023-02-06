import { NewTrendApi, NewSearchApi } from './news-api';
import filmCardMarkupCreator from './cards-markup';
import {pagination, onResultsResetPagination} from './pagination';


const hiddenWarning = document.querySelector('.search__text');
const carts = document.querySelector('.container-catalog');
const form = document.querySelector('.search');
const searchInputEl = document.querySelector('.search__input');

const TrendApi = new NewTrendApi();
const SearchApi = new NewSearchApi();

TrendApi.fetchTrend()
  .then(dataForCatalog => {
    localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
    addCards(dataForCatalog);
  })
  .catch(console.log);

form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  // SearchApi.resetPage();

  SearchApi.query = e.currentTarget.elements.searchQuery.value;  //можливо варто додати trim()
  console.log(SearchApi.query);

 // Type something

  if (SearchApi.query === '') {
    hiddenWarning.classList.remove('hidden');
    hiddenWarning.textContent = 'Please type something';
    setTimeout(function () {
      hiddenWarning.classList.add('hidden');
    }, 3000);
  }


  if (!SearchApi.query) {
    try {
      const dataForCatalog = await TrendApi.fetchTrend();
      console.log(dataForCatalog);
      localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
      await TrendApi.fetchTrend().then(addCards);
    } catch (error) {
      console.log(error.message);
    }
    return;
  }

  try {
    const dataForCatalog = await SearchApi.fetchSearch();
    console.log(dataForCatalog);
    localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
    await SearchApi.fetchSearch().then(addCards);

    //wrongSearch

    if (dataForCatalog.length === 0) {
      console.log(dataForCatalog);
      TrendApi.fetchTrend()
        .then(dataForCatalog => {
          localStorage.setItem(
            'current-movies',
            JSON.stringify(dataForCatalog)
          );
          addCards(dataForCatalog);
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

pagination.on('afterMove', event => {
  movePage(event);
});

async function movePage(event) {
  let URL_handler;

  if (!pagination.currentSearchString) {
    const handler_params = {
      page: event.page,
    };
    URL_handler = TrendApi;
  } else {
    const handler_params = {
      queryString: pagination.currentSearchString,
      page: event.page,
    };
    console.log(handler_params.queryString);
    URL_handler = SearchApi;
  }


pagination.on('afterMove', event => {
        const currentPage = event.page;
       URL_handler.page = currentPage;
      SearchApi.query = document.querySelector('.search__input').value;
  
        document.querySelector('.container-catalog').innerHTML = '';
  onSearchTwo();
  async function onSearchTwo(e) {
  
    if (!SearchApi.query) {
      try {
        const dataForCatalog = await TrendApi.fetchTrend();
      
        localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
        await TrendApi.fetchTrend().then(addCards);
      } catch (error) {
        console.log(error.message);
      }
      return;
    }

    try {
      const dataForCatalog = await SearchApi.fetchSearch();
      
      localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
      await SearchApi.fetchSearch().then(addCards);
    } catch (error) {
      console.log(error.message);
    }
  }
  })

}