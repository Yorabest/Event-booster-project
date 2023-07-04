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
// id = 'vvG1fZ949qhf4C'

container.addEventListener("click", (event) => {
  if(event.target.nodeName !== "IMG"){
    return
  }
  console.log(event.target.parentNode.id);
  const eventId = event.target.parentNode.id;
  modalEl.classList.remove('is-hidden');

  getEventsById(eventId).then(event=>{
    console.log(event);
    renderModalEvent(event)
  });
  
  console.log('yes sir');
  }
);

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

  
async function getEventsById(id){
  const MY_BASE_URL = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=k9IBmovyNPghLZMyMgLEAjSKjhVz1jpl`
  try{
    const res = await axios.get(MY_BASE_URL);
    const event = await res.data;
  return event;
  } catch (error){
  console.log(error)
  }
}

function renderModalEvent(event) {  
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
  
}

