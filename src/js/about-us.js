import json from './our-info.json'

// console.log(json.people[1].mail);
// const ourJson = JSON.stringify(json.people)
// const parse = JSON.parse(ourJson)

const ourCard = document.querySelector('.js-card-container')

function makeCard(people) {
    const a = people.map(people => 

        `<li class='about-us-li'>
             <h3 class='our-h3'>${people.name}</h3>
             <img class='our-img'>${people.photo}</img>
             <p class='our-p-work'>Роботу, яку виконував на проекті : ${people.work}</p>
             <p class='our-p-mail'>E-mail : ${people.mail}</p>
             <p class='our-p-git'>Github : ${people.git}</p>

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