function o(o){return o&&o.__esModule?o.default:o}var i;i=JSON.parse('{"people":[{"name":"Микола Саламаха","work":"work","photo":"photo","mail":"koliunia2006@gmail.com","git":"https://github.com/MukolaSa"},{"name":"Влад Гончарук","work":"work","photo":"photo","mail":"vladikhoncharuk@gmail.com","git":"https://github.com/Vllaaddd"},{"name":"Потьомко Вероніка","work":"work","photo":"photo","mail":"vnpotomko@gmail.com","git":"https://github.com/Potyomko"},{"name":"Хлибов Іван","work":"work","photo":"photo","mail":"hlibov2007.7@gmail.com","git":"https://github.com/ivanhlibo"},{"name":"Романенков Ілля","work":"work","photo":"photo","mail":"ilyadep5@gmail.com","git":"https://github.com/tinomu85"},{"name":"Білішук Ілля","work":"work","photo":"Bilishuk.jpg","mail":"nik333nik888@gmail.com","git":"https://github.com/Niky-Niky"},{"name":"Олександр Савранський","work":"work","photo":"./images/favicon.png","mail":"alexsawranskiy989@gmail.com","git":"https://github.com/AlexSawranskiy"},{"name":"Тарнавський Олександр","work":"work","photo":"images/Tarnavsky.jpg","mail":"cmurtimur@gmail.com","git":"https://github.com/Olexander1234"},{"name":"Цап Олег","work":"work","photo":"photo","mail":"olehtsap07@gmail.com","git":"https://github.com/HECKONCHIK"},{"name":"Мельниченко Софія","work":"work","photo":"photo","mail":"melnichenko.cofia07@gmail.com","git":"https://github.com/Yorabest"}]}');const t=document.querySelector(".js-card-container");const a=void o(i).people.map((o=>`<li class='about-us-li'>\n             <h3 class='our-h3'>${o.name}</h3>\n             <img class='our-img' src="./${o.photo}" alt="">\n             <p class='our-p-work'>Роботу, яку виконував на проекті : ${o.work}</p>\n             <p class='our-p-mail'>E-mail : ${o.mail}</p>\n             <p class='our-p-git'>Github : ${o.git}</p>\n        </li>`)).join("");console.log(a),t.innerHTML=a;
//# sourceMappingURL=about-us.63978e46.js.map
