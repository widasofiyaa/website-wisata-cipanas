const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 5) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

var swiperRekomendasi = new Swiper(".discover-container", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 32,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});

var swiperTestimonial = new Swiper('.testimonial-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568:{
            slidesPerView:2,
        }
    }
});


const mixer = mixitup('.explore-container', {
    selectors: {
        target: '.explore-content'
    },
    animation: {
        duration: 400
    }
});

const linkExplore = document.querySelectorAll('.explore-item')

function activeExplore(){
    if(linkExplore){
        linkExplore.forEach(l => l.classList.remove('active-explore'))
        this.classList.add('active-explore')
    }
}

linkExplore.forEach(l => l.addEventListener('click',activeExplore))

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("button-detail")) {
      toggleExplorePopup();
      document.querySelector(".explore-popup").scrollTo(0, 0);
      ExploreItemDetails(e.target.parentElement);
    }
});
function toggleExplorePopup() {
    document.querySelector(".explore-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
    document.querySelector(".header").classList.toggle("fade-out");
}
document.querySelector(".ep-close").addEventListener("click", toggleExplorePopup);
document.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.classList.contains("ep-inner")) {
      toggleExplorePopup();
    }
});
function ExploreItemDetails(exploreItem) {
    document.querySelector(".ep-thumbnail img").src = exploreItem.querySelector(".explore-content img").src;
    document.querySelector(".ep-header h3").innerHTML = exploreItem.querySelector(".explore-title").innerHTML;
    document.querySelector(".ep-body").innerHTML = exploreItem.querySelector(".explore-detail").innerHTML;
}
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.reveal(`.home-text, .home-social-link,
           .discover-container,
           .footer-text, .footer-rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about-text, 
           .subscribe-description`,{
    origin: 'left',
})

sr.reveal(`.about-img-overlay, 
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})