const refs = {
    btnSwitchTheme: document.querySelector('.switch-theme'),
}

const bodyElment = document.body

refs.btnSwitchTheme.addEventListener('click', switchTheme);

function switchTheme () {
    bodyElment.classList.toggle('light-theme');
}