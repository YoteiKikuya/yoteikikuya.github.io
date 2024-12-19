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

  document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0; // Index of the current slide
  
    // Function to show a specific slide
    function showSlide(index) {
      const slides = document.querySelectorAll('.slide');
  
      // Wrap around the slide index
      if (index >= slides.length) {
        currentSlide = 0; // Go to the first slide
      } else if (index < 0) {
        currentSlide = slides.length - 1; // Go to the last slide
      } else {
        currentSlide = index; // Update current slide
      }
  
      // Hide all slides and show only the current one
      slides.forEach((slide, idx) => {
        slide.style.display = idx === currentSlide ? 'block' : 'none';
      });
    }
  
    // Function to change the slide (forward or backward)
    function changeSlide(direction) {
      showSlide(currentSlide + direction);
    }
  
    // Initialize the slideshow by showing the first slide
    showSlide(currentSlide);
  
    // Add event listeners for arrows
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', function () {
        changeSlide(-1); // Show previous slide
      });
  
      nextButton.addEventListener('click', function () {
        changeSlide(1); // Show next slide
      });
    } else {
      console.warn('Slideshow navigation arrows are missing.');
    }
  });
  
  