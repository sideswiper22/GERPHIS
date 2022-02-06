var nav = 0;
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const content = document.querySelector('.content');

const preload = document.querySelector('.preload');
const cards = document.querySelector('.member-card');
const topic = document.querySelector('.topic');

window.addEventListener('load', OnPageLoad());

function OnPageLoad() {
    tl.fromTo(".content", {opacity: 0}, {opacity:1,duration: 0.25});

    
    if (preload != null)
    {
        preload.classList.add('hidden');
    }
    
    
    if (cards != null)
    {
        tl.fromTo(".member-card", {opacity: 0, y:-25}, {opacity: 1, y:0,duration: 0.25, stagger: 0.1});
    }
    else if (topic != null)
    {
        tl.fromTo(".topic", {opacity: 0}, {opacity: 1,duration: 0.25, stagger: 0.1});
    }
}

function ToggleNav() {
    if (nav==0) {
        tl.fromTo('.sidebar', {x:-300}, {x:0,duration: 0.25});
        nav = 1;
    }
    else {
        tl.fromTo('.sidebar', {x:0}, {x:-300, duration: 0.25});
        nav = 0;
    }
}