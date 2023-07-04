const refs = {
    switcher: document.querySelector('.js-switch'),
    switchPage: document.querySelector('.tui-is-selected'),
}


refs.switcher.addEventListener('change', switchTheme);

function switchTheme() {
    if (refs.switcher.checked === true) {
        document.body.classList.add("light-theme");
        document.querySelector('.tui-is-selected').classList.add("switch-page");
      
    } else {
        document.body.classList.remove("light-theme");
        document.querySelector('.tui-is-selected').classList.remove("switch-page");
    }
}