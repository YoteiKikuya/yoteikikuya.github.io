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
  