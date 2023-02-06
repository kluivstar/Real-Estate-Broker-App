/* Nav Toggle */

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(s){
    s.name = s.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
}

