import axios from 'axios';
import cardTPL from '../template/cards.hbs';

const API_KEY = '77Ac9HCazeKMnvPXKSOG4ttGQsmsEoic';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.event-input');
const container = document.querySelector('#container');

searchForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()
    const query = searchInput.value;

    findEvent(query)
}

async function findEvent(query){

    const data = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&source=universe&apikey=${API_KEY}`)
    const res = data.data._embedded.events
    
    const markup = cardTPL(res)
    container.innerHTML = markup;
}