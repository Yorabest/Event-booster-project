import axios  from 'axios';
import Pagination from 'tui-pagination';
import hbs from '../template/cards.hbs'
const API_KEY = 'eXb8ULUoq4HjIKYn2xDLaMMehZFueL04'

const cards = document.getElementById('container')


const container = document.getElementById('tui-pagination-container');
console.log(container);
const options = { // below default value of options
    totalItems: 500,
    itemsPerPage: 5,
    visiblePages: 5,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
   
};
const pagination = new Pagination(container, options);



pagination.on('beforeMove', function(eventData) {
    getEventsByPage(eventData.page).then(articles => {
        const markup = hbs(articles);
        cards.innerHTML = markup
    } )
   
});



async function getEventsByPage(page) {
   try{
 const response =  await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=20&page=${page}&apikey=${API_KEY}`)

   const data = await response.data 
   const events = await data._embedded.events


return events

   } catch(error){
    alert('помилка');
   }
}