//Cursor Animation GSAP
gsap.set('.follower', { xPercent: -50, yPercent: -50 });
gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

var follow = document.querySelector('.follower')
var cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', e => {
    gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY });
    gsap.to(follow, 0.9, { x: e.clientX, y: e.clientY });
})

//Hello fly in animation GSAP
gsap.from('.hello', { duration: 1, x: '-100vw', delay: 0.5, ease: 'power.in' })
gsap.from('.cog-container', { duration: 1, x: '200vw', delay: 0.5, ease: 'power.in' })

//Spinning links navbar animation GSAP
gsap.fromTo('.nav-list-link', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 2.5, opacity: 1, scale: 1, rotation: 0 })


//Scrolling Animations with Scroll Magic
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
    triggerElement: '.project-card',
    reverse: false
}).setClassToggle('.project-card', 'fade-in').addTo(controller)

//About Info animation with Scroll Magic
var controllerThree = new ScrollMagic.Controller();

var ourSceneThree = new ScrollMagic.Scene({
    triggerElement: '.about',
    reverse: false
}).setClassToggle('.information', 'fade-in').addTo(controllerThree)

//Contact Form animation with Scroll Magic  
var controllerTwo = new ScrollMagic.Controller();

var ourSceneTwo = new ScrollMagic.Scene({
    triggerElement: '.contact-form',
    reverse: false
}).setClassToggle('.contact-form', 'fade-forward').addTo(controllerTwo)


//Variables Navbar Menu
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')


function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)