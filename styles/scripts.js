// scripts.js
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    const banner = document.querySelector('.banner-container');
    
    // Get the position of the banner (top of the banner relative to the top of the page)
    const bannerBottom = banner.getBoundingClientRect().bottom;
    
    // If the bottom of the banner is above the top of the viewport, show the header
    if (bannerBottom < 0) {
      header.classList.add('show-header');
    } else {
      header.classList.remove('show-header');
    }
  });

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
  
    // Ensure the index wraps around when going past the number of slides
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
  
    // Hide all slides initially
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Add "active" class to the current dot
    dots[slideIndex - 1].className += " active";
  }
  
  // Initialize the first slide as visible on page load
  document.addEventListener('DOMContentLoaded', function () {
    showSlides(slideIndex);
  });
  
  
  