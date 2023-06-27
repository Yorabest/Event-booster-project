const refs = {
    switcher: document.querySelector('.js-switch'),
    switchPage: document.querySelector('.tui-page-btn'),
}


refs.switcher.addEventListener('change', switchTheme);

function switchTheme() {
    if (refs.switcher.checked === true) {
        document.body.classList.add("light-theme");
      
    } else {
        document.body.classList.remove("light-theme");
    }
}