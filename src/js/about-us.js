import json from './our-info.json'

const ourCard = document.querySelector('.js-card-container')

function makeCard(people) {
    const a = people.map(people => 
        `<li>
             <h3>${people.name}</h3>
             <p>Роботу, яку виконував на проекті : ${people.work}</p>
             <img src="${people.photo}" alt="${people.name}"></img>
             <p>E-mail : ${people.mail}</p>
             <p>Github : ${people.git}</p>
        </li>`).join('')
    return a
}
const murkup = makeCard(json.people)
console.log(murkup);
ourCard.innerHTML = murkup