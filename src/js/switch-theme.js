const refs = {
    btnSwitchTheme: document.querySelector('.switch-theme'),
    switchPage: document.querySelector('.tui-page-btn'),
}

const bodyElment = document.body

refs.btnSwitchTheme.addEventListener('click', switchTheme);

function switchTheme() {
    bodyElment.classList.toggle('light-theme');
    document.refs.switchPage.classList.toggle('switch-page')
}