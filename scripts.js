const navSlide=()=>{
    const burger=document.querySelector('.burger');
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

var lastScrollTop=0;
navbar=document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop=window.pageYOffset|| this.document.documentElement.scrollTop;
    if (scrollTop>lastScrollTop){
        navbar.style.top="-80px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop=scrollTop;

})