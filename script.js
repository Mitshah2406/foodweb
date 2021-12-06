let navlist = document.querySelector('.navlist');
let hamburgerMenu = document.querySelector('#hamburgerMenu');
hamburgerMenu.onclick = function(){
    hamburgerMenu.classList.toggle('fa-times');
    navlist.classList.toggle('active');
}

  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

function loader() {
  document.querySelector('#loader').classList.add('active');
}

function active() {
  setInterval(loader,3000)
}
window.onload = active
  
