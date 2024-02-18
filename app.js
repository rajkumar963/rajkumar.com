let menuIcon= document.querySelector('#menu');//taggle icon navbar
let navbar= document.querySelector('.navbar');

menuIcon.onclick= ()=>{
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section= document.querySelector('section');//scroll section active
let navlinks= document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.gatAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
    
    let header= document.querySelector('header');//sticky navbar
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('fa-times');//remove toggle icon
    navbar.classList.remove('active');
};

//   scroll reveal

ScrollReveal({ 
   // reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.content, .heading', { origin: 'top' });
ScrollReveal().reveal('.imag1,.imag2, .skill-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.imag2', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .content', { origin: 'right' });

//typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});