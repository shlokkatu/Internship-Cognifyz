const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  if (menu.style.right === "0px") {
    menu.style.right = "-250px";
  } else {
    menu.style.right = "0px";
  }
});

// slide
let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

function next() {
  let nextSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'none';
  slides[nextSlide].style.display = 'block';
  currentSlide = nextSlide
}
nextBtn.addEventListener('click',next )

prevBtn.addEventListener('click', function() {
  let prevSlide = (currentSlide == 0 ? slides.length - 1 : currentSlide - 1);
  slides[currentSlide].style.display = 'none';
  slides[prevSlide].style.display = 'block';
  currentSlide = prevSlide
})

setInterval( next, 3000);