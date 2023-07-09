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
const container = document.querySelector('.container');
const backdrop = document.querySelector('.backdrop');

container.addEventListener("click", (event) => {
  console.log('hello');
  if(event.target.nodeName !== "IMG"){
    return
  }
  console.log(event.target.parentNode.id);
  const eventId = event.target.parentNode.id;
  backdrop.classList.remove('is-hidden');

  getEventsById(eventId).then(event=>{
    console.log(event);
    renderModalEvent(event)
  });
  
  console.log('yes sir');
  }
);

spanEl.addEventListener("click", () => {
  backdrop.classList.add('is-hidden');
  }
);

document.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target === backdrop) {
     backdrop.classList.add('is-hidden');
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
    img.src = event.images[8].url;
    infoText.textContent = event.pleaseNote;
    whenText.textContent = event.dates.start.localDate;
    whoText.textContent = event.name;
    whereText.textContent = event.locale;
    priceText.textContent = event.priceRanges[0].max;
}

