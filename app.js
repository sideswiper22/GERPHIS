var nav = 0;
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.fromTo(".landing", {y:-50,opacity: 0}, {y:0,opacity:1,duration: 0.5});

function ToggleNav(){
    if (nav==0) {
        tl.fromTo(".nav-menu", {x:-200}, {x:0,duration: 0.25});
        nav = 1;
    }
    else {
        tl.fromTo(".nav-menu", {x:0}, {x:-200, duration: 0.25});
        nav = 0;
    }

    
}