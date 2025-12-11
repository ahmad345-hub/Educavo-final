const Newnav =document.querySelector(".navbar");
const Categoriess=document.querySelector(".Categories");
window.onscroll=function(e){
    if(window.scrollY>=Categoriess.offsetTop){
     Newnav.classList.add("change");
    }else{
        Newnav.classList.remove("change");
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper(".mySwiper", {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    }
  });
});



// أولاً نجيب العناصر
const menuIcon = document.getElementById('menuIcon');
const infoSection = document.querySelector(".info-section");

// نضيف حدث عند الضغط على الأيقونة
menuIcon.addEventListener("click", () => {
  console.log("hhh");
infoSection.classList.toggle("d-none");
});


const xmark = document.querySelector(".fa-xmark");


// نضيف حدث عند الضغط على الأيقونة
xmark.addEventListener("click", () => {
  console.log("hhh");
infoSection.classList.toggle("d-none");
});


