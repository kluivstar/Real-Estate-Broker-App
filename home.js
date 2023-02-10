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

/* Scroll Reveal */
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.quote-one', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.quote-two', { delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.info-box', { delay: 900, origin: 'right'});

/* Why Choose Us Scroll in */
ScrollReveal().reveal('.consultation', { delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.variety', { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.dedicated', { delay: 600, origin: 'bottom'});
