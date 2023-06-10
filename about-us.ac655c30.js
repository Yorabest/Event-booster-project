const e=document.querySelector("#myModal"),n=document.querySelector("#myBtn"),o=document.querySelector(".close");n.onclick=function(){e.style.display="block"},o.onclick=function(){e.style.display="none"},window.onclick=function(n){n.target===e&&(e.style.display="none")},fetch(/discovery/v2/events/{id:id}).then((e=>e.json())).then((e=>console.log(e)));
//# sourceMappingURL=about-us.ac655c30.js.map
