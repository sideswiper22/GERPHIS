

var nav = 0;
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
window.addEventListener('load', OnPageLoad());

//function that disables the loading screen once the page loads completely
function OnPageLoad() {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');

    tl.fromTo(".landing", {y:-50,opacity: 0}, {y:0,opacity:1,duration: 0.5, delay: 0.5});
}

function ToggleNav() {
    if (nav==0) {
        tl.fromTo('.sidebar', {x:-256}, {x:0,duration: 0.25});
        nav = 1;
    }
    else {
        tl.fromTo('.sidebar', {x:0}, {x:-256, duration: 0.25});
        nav = 0;
    }

    
}