import axios from "axios";

const select =document.querySelector('.country-searcher');

select.addEventListener('change', onOptionSelect);

function onOptionSelect(evt) {
    // шукаємо id селекту
    console.log(evt.target.querySelector('option:checked').id);
    const code = evt.target.querySelector('option:checked').id
    
    getEventsByCountry(code).then(
        // код рендеру на сторінці
    )
    
}


async function getEventsByCountry(countryCode) {
    try{
        await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&apikey=eXb8ULUoq4HjIKYn2xDLaMMehZFueL04`)

    } catch(error){
        
    }
}
