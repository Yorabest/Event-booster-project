import axios from "axios";
const modalEl = document.querySelector(".modal");
const btnEl = document.querySelector(".my-button");
const spanEl = document.querySelector(".close");
const infoText = document.querySelector('.info');
const whenText = document.querySelector('.when');
const whoText = document.querySelector('.who');
const img = document.querySelector('.img');
const whereText = document.querySelector('.where');
const priceText = document.querySelector('.price');
const container = document.querySelector('#container');
id = 'vvG1fZ949qhf4C'
container.addEventListener("click", (event) => {
  
  if(event.target.nodeName !== "IMG"){
    return
  }
  console.log(event.target.parentNode);
  getEventsById(event.target.id);
  modalEl.classList.remove('is-hidden');
  renderModalEvent();
  console.log('yes sir');
  }
);
// btnEl.addEventListener("click", () => {
//   modalEl.classList.remove('is-hidden');
//   modalEl.style.display = "fixed";
//   renderModalEvent()
//   console.log('yes sir')
//   }
// );
spanEl.addEventListener("click", () => {
  modalEl.style.display = "none";
  }
);

document.addEventListener("click", (event) => {
  if (event.target === modalEl) {
    modalEl.style.display = "none";
    }
  }
);
// тобі щось видає? Якщо ні, то тримай fetch, сонце
// fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${apikey}`)
// id можеш тимчасово поставтити вручну, я тобі кидала, а ключ або свій, або, якщо немає, то пиши, я тобі Ірин скину
// try{
// const MY_BASE_URL = https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey=k9IBmovyNPghLZMyMgLEAjSKjhVz1jpl
// axios.get(MY_BASE_URL)
// .then(console.log)
// } catch (error){
// console.log(error)
// }
console.log(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=k9IBmovyNPghLZMyMgLEAjSKjhVz1jpl`)
const MY_BASE_URL = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=k9IBmovyNPghLZMyMgLEAjSKjhVz1jpl`
  
async function getEventsById(){
  try{
  const res = await axios.get(MY_BASE_URL);
  // console.log(res);
  const event = await res.data;
  // console.log(event);
  return event;
  } catch (error){
  console.log(error)
  }
}

function renderModalEvent() {
  getEventsById().then(event=>{
    img.src = event.images[0].url
    img.style.width = '360px'

    infoText.textContent = event.pleaseNote
    infoText.style.color = 'black';

    whenText.textContent = event.dates.start.localDate
    whenText.style.color = 'black';

    whoText.textContent = event.name
    whoText.style.color = 'black';

    whereText.textContent = event.locale
    whereText.style.color = 'black';

    priceText.textContent = event.priceRanges[0].max
    priceText.style.color = 'black';
  })
}



// function makeMarkUp(events){
//   return events.map(({name, image}) => {
//     return `<li>
//     <img src="${image}" alt="${name}">
//     <button type="button"> Add to cart </button>
//     </li>`
//   }
//   )
// }
// console.log(makeMarkUp());
// const myFetch = getEventsById()
// console.log(getEventsById())
console.log('test');