// ===== Sticky Header on Scroll =====
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header-container');
  const banner = document.querySelector('.banner-container');
  const bannerBottom = banner.getBoundingClientRect().bottom;

  if (bannerBottom < 0) header.classList.add('show-header');
  else header.classList.remove('show-header');
});

document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = [].slice.call(document.querySelectorAll('img[data-src]'));

  if ('IntersectionObserver' in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          lazyImageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function (img) {
      lazyImageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    const lazyLoad = function () {
      lazyImages.forEach(function (img) {
        if (img.getBoundingClientRect().top < window.innerHeight && img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
    };
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
    lazyLoad();
  }
});

// ===== Slideshow =====
let slideIndex = 1;

document.addEventListener('DOMContentLoaded', function () {
  // ===== Image Modal Setup =====
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

const openModal = (img) => {
  modal.style.display = "block";
  modalImg.src = img.src;
  // Prefer data-caption, fallback to alt
  captionText.innerHTML = img.dataset.caption || img.alt || "";
};

  // Event delegation: works for both .column img and .mySlides img
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".column img, .mySlides img");
    if (img) openModal(img);
  });

  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });

  // Show first slide (after modal is wired up)
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (dots.length > 0) {
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
  }

  slides[slideIndex - 1].style.display = "block";
}

