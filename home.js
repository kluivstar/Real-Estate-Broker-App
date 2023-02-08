/* Nav Toggle */

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(s){
    s.name = s.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
}

/* Parallax Scroll */

var scroll = document.getElementById("about");
window.addEventListener('scroll', function(){
    var value = window.scrollY;

    scroll.style.bottom = value + 0.5 + 'px';
})

/* Circle */
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');