const Newnav =document.querySelector(".navbar");
const contact =document.querySelector(".contact-info-section");
window.onscroll=function(e){
    if(window.scrollY>=contact.offsetTop){
     Newnav.classList.add("change");
    }else{
        Newnav.classList.remove("change");
    }
}

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