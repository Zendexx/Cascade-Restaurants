window.onload = function() {
  // Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
const navbarElement = selectElement('#header'); 
if(this.scrollY >= 15) {
    navbarElement.classList.add('activated');
} else {
    navbarElement.classList.remove('activated');
}
}

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Get the first element with the class name "my-link"
var element = document.getElementsByClassName("list-link");

// Add a click event listener to the element
element.addEventListener("click", function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();
  // Get the href attribute of the element
  var href = element.getAttribute("href");
  // Redirect the page to the href value
  window.location.href = href;
});





// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');


// Check to see if there is a theme preference in local Storage, if so add the light theme to the body
if (currentTheme) {
  body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
  // Add light theme on click
  body.classList.toggle('light-theme');

  // If the body has the class of light theme then add it to local Storage, if not remove it
  if (body.classList.contains('light-theme')) {
      localStorage.setItem('currentTheme', 'themeActive');
  } else {
      localStorage.removeItem('currentTheme');
  }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slide");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}

function automateScrolling() {
  const slides = document.querySelectorAll('.product-slide');
  const interval = 2000; // Set the interval time in milliseconds (e.g., 2000ms = 2 seconds)
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  setInterval(nextSlide, interval);
}

document.addEventListener('DOMContentLoaded', automateScrolling);

};