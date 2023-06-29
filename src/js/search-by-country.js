import axios from "axios";
import cardTPL from '../template/cards.hbs';

const select =document.querySelector('.country-searcher');
const container = document.querySelector('#container');

select.addEventListener('change', onOptionSelect);

function onOptionSelect(evt) {
    // шукаємо id селекту
    const code = evt.target.querySelector('option:checked').id
    
    getEventsByCountry(code).then(
        response => {
            const data = response.data._embedded.events

            const markup = cardTPL(data)
            container.innerHTML = markup;
        }
    )
    
}


async function getEventsByCountry(countryCode) {
    try{
        return await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&apikey=eXb8ULUoq4HjIKYn2xDLaMMehZFueL04`)

    } catch(error){
        console.log(error);
    }
}
