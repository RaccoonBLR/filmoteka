import { NewTrendApi, NewSearchApi } from "./news-api"
import filmCardMarkupCreator from "./cards-markup";

const carts = document.querySelector('.container');
const form = document.querySelector(".search");

const TrendApi = new NewTrendApi();
const SearchApi = new NewSearchApi();


form.addEventListener('submit', onSearch);

async function onSearch(e) {
    e.preventDefault();
    SearchApi.query = e.currentTarget.elements.searchQuery.value;
    console.log(SearchApi.query)

    try {
        const p = await SearchApi.fetchSearch().then(addCards)
        console.log(p)
    }
    catch {error => console.log(error.message)}

}

function addCards(data) {
    carts.insertAdjacentHTML("beforeend", filmCardMarkupCreator(data))
}