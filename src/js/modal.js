const modalEl = document.querySelector("#myModal");
const btnEl = document.querySelector("#myBtn");
const spanEl = document.querySelector(".close");

btnEl.onclick = function() {
  modalEl.style.display = "block";
}

spanEl.onclick = function() {
  modalEl.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modalEl) {
    modalEl.style.display = "none";
  }
}

// тобі щось видає? Якщо ні, то тримай fetch, сонце
// fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${apikey}`)
// id можеш тимчасово поставтити вручну, я тобі кидала, а ключ або свій, або, якщо немає, то пиши, я тобі Ірин скину
// fetch(/discovery/v2/events/{id})
// .then(response => response.json())
// .then(events => console.log(events))
