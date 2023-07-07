const refs = {
    switcher: document.querySelector('.js-switch'),
    switchPage: document.querySelector('.tui-is-selected'),
}

const currentTheme = localStorage.getItem('theme')

if (currentTheme === 'light') {
  refs.switcher.checked = true;
  document.body.classList.add('light-theme');
 } 

refs.switcher.addEventListener('change', switchTheme);


function switchTheme() {

  if (refs.switcher.checked === true) {
    document.body.classList.add('light-theme');
    document.querySelector('.tui-is-selected').classList.add("switch-page");
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    document.querySelector('.tui-is-selected').classList.remove("switch-page");
    localStorage.setItem('theme', 'dark');
  }
}