let menuIcon= document.querySelector('#menu');//taggle icon navbar
let navbar= document.querySelector('.navbar');

menuIcon.onclick= ()=>{
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section= document.querySelector('section');//scroll section active
let navlinks= document.querySelectorAll('header nav a');

window.onscroll= ()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.gatAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })
    
    let header= document.querySelector('header');//sticky navbar
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
}