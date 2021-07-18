//Cursor Animation
gsap.set('.follower', { xPercent: -50, yPercent: -50 });
gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

var follow = document.querySelector('.follower')
var cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', e => {
    gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY });
    gsap.to(follow, 0.9, { x: e.clientX, y: e.clientY });
})

//Hello fly in animation
gsap.from('.hello', { duration: 1, x: '-100vw', delay: 0.5, ease: 'power.in' })
gsap.from('.cog-container', { duration: 1, x: '200vw', delay: 0.5, ease: 'power.in' })

//Spinning links navbar animation
gsap.fromTo('.navnavlink', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 2.5, opacity: 1, scale: 1, rotation: 0 })

//Variables Navbar Menu
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')


function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)