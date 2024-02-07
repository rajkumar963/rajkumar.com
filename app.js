
function loading(){
    var t1=gsap.timeline();
t1.to("#yellow", {
    top:"-100%",
    delay:0.5,
    duration:1.5,
    ease:"expo.out"
})
t1.from("#yellow1", {
    top:"100%",
    delay:0.6,
    duration:0.9,
    ease:"expo.out" 
},
"anim"
);
    
t1.to("#loader h1",{
    delay:0.6,
    duration:0.7,
   color:"black",
},"anim")

t1.to("#loader",{
    display:"none"
})
t1.to("#loader",{
    opacity:0
})
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
//lerp: 0.02
});
