import json from './our-info.json'
// console.log(json.people[1].mail);
// const ourJson = JSON.stringify(json.people)
// const parse = JSON.parse(ourJson)

const ourCard = document.querySelector('.js-card-container')

// const markup = makeCard(json);


// function makeMarkup(people) {
//     const markup = aboutusTpl(people)
//     ourCard.innerHTML = markup;
// }

function makeCard(people) {
    const a = people.map(people => 
        `<li class='about-us-li'>
             <h3 class='our-h3'>${people.name}</h3>
             <img class='our-img'>${people.photo}</img>
             <p class='our-p-work'>Роботу, яку виконував на проекті : ${people.work}</p>
             <p class='our-p-mail'>E-mail : ${people.mail}</p>
             <p class='our-p-git'>Github : ${people.git}</p>
        </li>`).join('')
    return a
}
const markup = makeCard(json.people)
    ourCard.innerHTML = markup
// makeCard(json.people)
// console.log(makeCard(json.people));
// makeMarkup(json)