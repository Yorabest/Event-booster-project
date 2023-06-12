import axios  from 'axios';
import Pagination from 'tui-pagination';
const API_KEY = 'eXb8ULUoq4HjIKYn2xDLaMMehZFueL04'




const container = document.getElementById('tui-pagination-container');
console.log(container);
const options = { // below default value of options
    totalItems: 100,
    itemsPerPage: 5,
    visiblePages: 5,
    page: 1,
    centerAlign: false,
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
                '<span class="tui-ico-{{type}}">{{type}}></span>' +
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                '<span class="tui-ico-ellip">...</span>' +
            '</a>'
    }
};
const pagination = new Pagination(container, options);

pagination.on('beforeMove', function(eventData) {
    getEventsByPage(eventData.page).then(data=>console.log(data.data))
    .then(data=>data._embedded.events)
    .then(console.log)
});



async function getEventsByPage(page) {
   try{
    return await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=20&page=${page}&apikey=${API_KEY}`);
    
   } catch(error){
    alert('msg');
   }
}