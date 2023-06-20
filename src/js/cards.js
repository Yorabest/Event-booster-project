import axios from 'axios';
import Handlebars from 'handlebars';
import templateSource from '../template/cards.hbs';

const template = Handlebars.compile(templateSource);

async function getAllEvents() {
  try {
    const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=eXb8ULUoq4HjIKYn2xDLaMMehZFueL04');
    const data = response.data;
    const events = data._embedded.events;
    return events;
  } catch (error) {
    console.log('Error:', error);
  }
}

async function renderEvents() {
  const events = await getAllEvents();
  events.forEach(event => {
    const renderedHtml = template(event);
    document.getElementById('container').innerHTML += renderedHtml;
  });
}

window.addEventListener('DOMContentLoaded', renderEvents);










// import axios from 'axios';
// import Handlebars from 'handlebars';
// import templateSource from './cards.hbs';

// const template = Handlebars.compile(templateSource);

// async function getAllEvents() {
//   try {
//     const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=eXb8ULUoq4HjIKYn2xDLaMMehZFueL04');
//     const data = response.data;
//     const events = data._embedded.events;
//     renderEvents(events);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// function renderEvents(events) {
//   events.forEach(event => {
//     const renderedHtml = template(event);
//     document.getElementById('container').innerHTML += renderedHtml;
//   });
// }

// getAllEvents();








// const templateSource = document.getElementById('card').innerHTML;
// const template = Handlebars.compile(templateSource);

// import axios from 'axios'
// import Handlebars from 'handlebars';

// async function getAllEvents() {
//     try {
//         const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=eXb8ULUoq4HjIKYn2xDLaMMehZFueL04')
//         const data = await response.data
//         const events = await data._embedded.events
//         console.log(events);
//         return events
//     } catch(error) {
//         console.log('error');
//     }
// }

// getAllEvents()

// getAllEvents().then(events => {
//     const html = template({ items: events });
//     const container = document.getElementById('container');
//     container.innerHTML = html;
// });