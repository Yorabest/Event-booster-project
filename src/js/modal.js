import axios from "axios";
const modalEl = document.querySelector("#myModal");
const btnEl = document.querySelector("#myBtn");
const spanEl = document.querySelector(".close");
const infoText = document.querySelector('.info');
const whenText = document.querySelector('.when')
// id = 'vvG1fZ949qhf4C'
// btnEl.addEventListener("click", (event) => {
//   console.log(event.target.id)
//   getEventsById(event.target.id);
//   modalEl.style.display = "block";
//   }
// );
btnEl.addEventListener("click", () => {
  modalEl.style.display = "block";
  renderModalEvent()
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
const MY_BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events/vvG1fZ949qhf4C.json?apikey=k9IBmovyNPghLZMyMgLEAjSKjhVz1jpl'
  
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
    infoText.textContent = event.pleaseNote
    infoText.style.color = 'black';

    whenText.textContent = event.dates.start.localDate
    whenText.style.color = 'black';

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