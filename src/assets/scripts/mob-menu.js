let menuButton = document.querySelector('.menu-button ');
let menu = document.querySelector('.menu-container ');
menuButton.addEventListener('click', () => {
    menu.classList.add('menuOpen');
    menu.classList.add('opened');
    menu.querySelector('.close').addEventListener('click', () => {
        menu.classList.remove('menuOpen');
        menu.classList.add('menuClose');
        setTimeout(() => {
            menu.classList.remove('opened');
            menu.classList.remove('menuClose');
        }, 400);

    })
})