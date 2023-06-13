import json from './our-info.json'
// import aboutusTpl from '../template/about-us.hbs'
console.log(json.people[1].mail);
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
             <h3>${people.name}</h3>
             <img>${people.photo}</img>
             <p>Роботу, яку виконував на проекті : ${people.work}</p>
             <p>E-mail : ${people.mail}</p>
             <p>Github : ${people.git}</p>
        </li>`).join('')
    return a
}
const markup = makeCard(json.people)
    ourCard.innerHTML = markup
// makeCard(json.people)
// console.log(makeCard(json.people));
// makeMarkup(json)