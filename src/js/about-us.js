import json from './our-info.json'

const ourCard = document.querySelector('.js-card-container')

function makeCard(people) {
    const a = people.map(people => 
        `<li>
             <h3>${people.name}</h3>
             <p>Роботу, яку виконував на проекті : ${people.work}</p>
             <img>${people.photo}</img>
             <p>E-mail : ${people.mail}</p>
             <p>Github : ${people.git}</p>
        </li>`).join('')
    return a
}
const markup = makeCard(json.people)
ourCard.innerHTML = markup