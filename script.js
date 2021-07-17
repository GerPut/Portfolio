//Cursor

gsap.set('.follower', { xPercent: -50, yPercent: -50 });
gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

var follow = document.querySelector('.follower')
var cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', e => {
    gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY });
    gsap.to(follow, 0.9, { x: e.clientX, y: e.clientY });
})


//Variables

const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')


function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)