!function(){function o(o){return o&&o.__esModule?o.default:o}var t;t=JSON.parse('{"people":[{"name":"Микола Саламаха","work":"work","photo":"photo","mail":"koliunia2006@gmail.com","git":"https://github.com/MukolaSa"},{"name":"Влад Гончарук","work":"work","photo":"photo","mail":"vladikhoncharuk@gmail.com","git":"https://github.com/Vllaaddd"},{"name":"Потьомко Вероніка","work":"work","photo":"photo","mail":"vnpotomko@gmail.com","git":"https://github.com/Potyomko"},{"name":"Хлібов Іван","work":"work","photo":"photo","mail":"e-mail","git":"https://github.com/ivanhlibo"},{"name":"Романенков Ілля","work":"work","photo":"photo","mail":"ilyadep5@gmail.com","git":"https://github.com/tinomu85"},{"name":"Білішук Ілля","work":"work","photo":"photo","mail":"nik333nik888@gmail.com","git":"https://github.com/Niky-Niky"},{"name":"Олександр Савранський","work":"work","photo":"photo","mail":"alexsawranskiy989@gmail.com","git":"https://github.com/AlexSawranskiy"},{"name":"Олександр Тарнавський","work":"work","photo":"photo","mail":"cmurtimur@gmail.com","git":"https://github.com/Olexander1234"},{"name":"Цап Олег","work":"work","photo":"photo","mail":"olehtsap07@gmail.com","git":"https://github.com/HECKONCHIK"},{"name":"Мельниченко Софія","work":"work","photo":"photo","mail":"melnichenko.cofia07@gmail.com","git":"https://github.com/Yorabest"}]}');var i=document.querySelector(".js-card-container");var n=o(t).people.map((function(o){return"<li>\n             <h3>".concat(o.name,"</h3>\n             <p>Роботу, яку виконував на проекті : ").concat(o.work,"</p>\n             <img>").concat(o.photo,"</img>\n             <p>E-mail : ").concat(o.mail,"</p>\n             <p>Github : ").concat(o.git,"</p>\n        </li>")})).join("");i.innerHTML=n;var a=document.querySelector("#myModal"),m=document.querySelector("#myBtn"),e=document.querySelector(".close");m.onclick=function(){a.style.display="block"},e.onclick=function(){a.style.display="none"},window.onclick=function(o){o.target===a&&(a.style.display="none")},fetch(/discovery/v2/events/{id:id}).then((function(o){return o.json()})).then((function(o){return console.log(o)}))}();
//# sourceMappingURL=about-us.f19658e3.js.map
