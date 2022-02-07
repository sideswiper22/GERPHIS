

var nav = 0;
var scroll = 0;
var currentscroll = 0;
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const mainContent = document.querySelector('.main-content');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');
const circle4 = document.querySelector('.circle4');
const circle5 = document.querySelector('.circle5');
const circle6 = document.querySelector('.circle6');
window.addEventListener('load', OnPageLoad());
//function that disables the loading screen once the page loads completely
function OnPageLoad() {
    const preload = document.querySelector('.preload');
    if (preload != null)
    {
        preload.classList.add('hidden');
    }

    upButton.classList.add('hidden');
    downButton.querySelector('.material-icons.md-72').classList.add('anim');
    circle1.classList.add('circleactive');
    scroll = 0;

    tl.fromTo(".landing", {y:-50,opacity: 0}, {y:0,opacity:1,duration: 0.5, delay: 0.5});
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

function ScrollDown() {
    if (x=1)
    {
        scroll += 1;
        tl.to(mainContent, {duration: 0.5, scrollTo: document.querySelector('.landing').offsetHeight*scroll});
        console.log(scroll);
    }
}

function ScrollUp() {
    if (x=1)
    {
        scroll -= 1;
        tl.to(mainContent, {duration: 0.5, scrollTo: document.querySelector('.landing').offsetHeight*scroll});
        console.log(scroll);
    }
}

mainContent.addEventListener("scroll", () => {
    if (mainContent.scrollTop <= document.querySelector('.landing').offsetHeight*0.5)
    {
        upButton.classList.add('hidden');
        circle1.classList.add('circleactive');
        circle2.classList.remove('circleactive');
        circle3.classList.remove('circleactive');
        circle4.classList.remove('circleactive');
        circle5.classList.remove('circleactive');
        circle6.classList.remove('circleactive');
        downButton.querySelector('.material-icons.md-72').classList.add('anim');
        scroll = 0;
        if (scroll != currentscroll)
        {
            tl.to(mainContent, {duration: 0.5, scrollTo: document.querySelector('.landing').offsetHeight*scroll});
            currentscroll = scroll;
        }
    }
    else if (mainContent.scrollTop > document.querySelector('.landing').offsetHeight*0.5 && mainContent.scrollTop <= document.querySelector('.landing').offsetHeight*1.5)
    {
        upButton.classList.remove('hidden');
        circle1.classList.remove('circleactive');
        circle2.classList.add('circleactive');
        circle3.classList.remove('circleactive');
        circle4.classList.remove('circleactive');
        circle5.classList.remove('circleactive');
        circle6.classList.remove('circleactive');
        downButton.querySelector('.material-icons.md-72').classList.remove('anim');
        scroll = 1;
        if (scroll != currentscroll)
        {
            tl.to(mainContent, {duration: 0.5, scrollTo: document.querySelector('.landing').offsetHeight*scroll});
            currentscroll = scroll;
        }
    }
    else if (mainContent.scrollTop > document.querySelector('.landing').offsetHeight*1.5 && mainContent.scrollTop <= document.querySelector('.landing').offsetHeight*2.5)
    {
        upButton.classList.remove('hidden');
        circle1.classList.remove('circleactive');
        circle2.classList.remove('circleactive');
        circle3.classList.add('circleactive');
        circle4.classList.remove('circleactive');
        circle5.classList.remove('circleactive');
        circle6.classList.remove('circleactive');
        scroll = 2;
        if (scroll != currentscroll)
        {
            tl.to(mainContent, {duration: 0.5, scrollTo: document.querySelector('.landing').offsetHeight*scroll});
            currentscroll = scroll;
        }
    }
    else if (mainContent.scrollTop > document.querySelector('.landing').offsetHeight*2.5 && mainContent.scrollTop <= document.querySelector('.landing').offsetHeight*3.5)
    {
        upButton.classList.remove('hidden');
        circle1.classList.remove('circleactive');
        circle2.classList.remove('circleactive');
        circle3.classList.remove('circleactive');
        circle4.classList.add('circleactive');
        circle5.classList.remove('circleactive');
        circle6.classList.remove('circleactive');
        upButton.querySelector('.material-icons.md-72').classList.remove('anim');
        scroll = 3;
        if (scroll != currentscroll)
        {
            tl.to(mainContent, {duration: 0.5, scrollTo: document.querySelector('.landing').offsetHeight*scroll});
            currentscroll = scroll;
        }
    }

    else if (mainContent.scrollTop > document.querySelector('.landing').offsetHeight*3.5 && mainContent.scrollTop <= document.querySelector('.landing').offsetHeight*4.5)
    {
        upButton.classList.remove('hidden');
        circle1.classList.remove('circleactive');
        circle2.classList.remove('circleactive');
        circle3.classList.remove('circleactive');
        circle4.classList.remove('circleactive');
        circle5.classList.add('circleactive');
        circle6.classList.remove('circleactive');
        upButton.querySelector('.material-icons.md-72').classList.remove('anim');
        scroll = 4;
        if (scroll != currentscroll)
        {
            tl.to(mainContent, {duration: 0.5, scrollTo: document.querySelector('.landing').offsetHeight*scroll});
            currentscroll = scroll;
        }
    }

    else if (mainContent.scrollTop > document.querySelector('.landing').offsetHeight*4.5 && mainContent.scrollTop <= document.querySelector('.landing').offsetHeight*5.5)
    {
        upButton.classList.remove('hidden');
        circle1.classList.remove('circleactive');
        circle2.classList.remove('circleactive');
        circle3.classList.remove('circleactive');
        circle4.classList.remove('circleactive');
        circle5.classList.remove('circleactive');
        circle6.classList.add('circleactive');
        upButton.querySelector('.material-icons.md-72').classList.add('anim');
        scroll = 5;
        if (scroll != currentscroll)
        {
            tl.to(mainContent, {duration: 0.5, scrollTo: document.querySelector('.landing').offsetHeight*scroll});
            currentscroll = scroll;
        }
    }


    if (mainContent.scrollTop < document.querySelector('.landing').offsetHeight*5-100)
    {
        downButton.classList.remove('hidden');
    }
    else
    {
        downButton.classList.add('hidden');
    }
})
