import Pagination from 'tui-pagination';
import "tui-pagination/dist/tui-pagination.css";
//const axios = require('axios').default;
//import { loader } from './loader';


const container = document.getElementById('pagination');
const options = { // default value of options
     totalItems: 0,
     itemsPerPage: 20,
     visiblePages: 4,
     page: 1,
    centerAlign: true,
     
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
    },
    usageStatistics: false,
};

export const pagination = new Pagination(container, options);


export function onResultsResetPagination(res) {
    pagination.reset(res.data.total_results);
};

//імпортуєте файл з const pagination,  функція змінює загальну кількість елементів, відповідно кількість кнопок пагінації
//pagination.reset(200);
 
console.dir(pagination);
//const searchString = event.currentTarget.elements.searchQuery.value.trim();
//pagination.currentSearchString = searchString;

// номер сторінки зараз
export const paginationPage = pagination.getCurrentPage();
console.log(paginationPage);

/*pagination.on('afterMove', (e) => {
     const currentPage = e.page;
     console.log(currentPage);
});
*/