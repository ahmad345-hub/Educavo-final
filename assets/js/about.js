const Newnav =document.querySelector(".navbar");
const back=document.querySelector(".back");
window.onscroll=function(e){
    if(window.scrollY>=back.offsetTop){
     Newnav.classList.add("change");
    }else{
        Newnav.classList.remove("change");
    }
}


function startCountK(id, endValue, duration = 2000) {
    let element = document.getElementById(id);
    let start = 0;
    let stepTime = Math.abs(Math.floor(duration / endValue));

    let counter = setInterval(() => {
        start++;
        element.textContent = start + "K"; // هنا نضيف K
        if (start >= endValue) {
            clearInterval(counter);
        }
    }, stepTime);
}

let started = false;
window.addEventListener("scroll", function () {
    let section = document.querySelector(".statics");
    if (!started && window.scrollY + window.innerHeight >= section.offsetTop) {
        started = true;
        startCountK("counter1", 2); // 2K
        startCountK("counter2", 3); // 3K
        startCountK("counter3", 95); // هذا ممكن يبقى %
    }
});



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
