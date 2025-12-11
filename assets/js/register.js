const Newnav =document.querySelector(".navbar");
const back=document.querySelector(".back");
window.onscroll=function(e){
    if(window.scrollY>=back.offsetTop){
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