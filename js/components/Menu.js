
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
    menu.classList.toggle('menu--open');
    console.log(menu);
    menu.classList.add('moving-menu');
}


const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
