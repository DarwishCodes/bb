// Footer Accordian
// Adapted from W3 Schools Collapsible guide
var coll = document.getElementsByClassName("expander__toggle");
var i;

  for (i = 0; i < coll.length; i++) {
    this.isExpanded = false;

    coll[i].addEventListener("click", function() {
      // toggles active or not
    //   alert("test");
      if (this.isExpanded == true) {
        this.querySelector(".expander__icon").innerHTML = '<i class="fa fa-plus"></i>';
        this.isExpanded = false;
      } else {
        this.querySelector(".expander__icon").innerHTML = '<i class="fa fa-minus"></i>';
        this.isExpanded = true;
      }
      this.classList.toggle("expander--active");
      this.classList.toggle("expander--active");
      var content = this.nextElementSibling;
      // toggle hiding or showing
      if (content.classList.contains("expander__panel--show")){
        content.classList.remove("expander__panel--show");
        content.classList.add("expander__panel--hide");
    } else {
      content.classList.add("expander__panel--show");
      content.classList.remove("expander__panel--hide");
    }
  });
}

// Navigation Menu Toggle

var navMenu = document.getElementById("navMenu");
var btn = document.getElementById("menuBtn");
var menuActive = false;

btn.onclick = function() {
  navMenu.classList.toggle("showMenu");

  if (menuActive == true) {
    btn.innerHTML = '<i class="fa fa-bars"></i>';
    menuActive = false;
  } else {
    btn.innerHTML = '<i class="fa fa-times" style="width: 16.719px"></i>';
    menuActive = true;
  }
}

// Slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}