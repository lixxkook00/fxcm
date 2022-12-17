const bind1 = document.querySelector.bind(document)
const bind2 = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    bind1('.soft-menu').classList.toggle('open')
    bind1('.soft-menu__list').classList.toggle('open')
}

bind2('.soft-menu__item').forEach((element) => {
  element.onclick = () => {
    toggleNavMobile()
  }
})

bind1('.scroll-to-top').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}

// loading animation
window.addEventListener('load', (event) => {
  bind1('.loading').style.display = "none"
});

// handle animation on scroll
let animationWorkFlow = false;

document.addEventListener('scroll', function() {

  if(bind1("#workflow").getBoundingClientRect().top < 200 && !animationWorkFlow){
    bind1('#workflow-img').classList.add('active')
    animationWorkFlow = true
  }
})



// SLIDER
var swiper4 = new Swiper(".swiper-product-1", {
    slidesPerView: 3,
    spaceBetween: 10,
    // auto
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    loop:true,
    loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 4000,
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
        slidesPerView: 2,
        spaceBetween: 10
        },
        1023: {
        slidesPerView: 5,
        spaceBetween: 20
        }
    },
});