import axios from 'axios'
import Handlebars from 'handlebars';

function getAllEvents() {
    axios.get('https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#supported-country-codes')
    .then(res=>res.data)
    .then(data=>data._embedded.events)
    .then(console.log)
}

// getAllEvents()


// const container = document.getElementById('container');
// axios.get('template.hbs')
//     .then(res => res.data)
//     .then(templateStr => {
//         const template = Handlebars.compile(templateStr);

//         axios.get('https://app.ticketmaster.com/discovery/v2/events.json?keyword=devjam&source=universe&countryCode=US&apikey=%7Bapikey%7D')
//             .then(res => res.data)
//             .then(data => {
//                 const events = data._embedded.events.map(event => ({
//                     ...event,
//                     imgSrc: event.images[0].url
//                 }));

//                 const html = template({ items: events });

//                 container.innerHTML = html;
//             });
//     });
