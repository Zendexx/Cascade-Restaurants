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


// Get the first element with the class name "slideshow"
var slideshow = document.getElementsByClassName("slideshow")[0];

// Get the images inside the slideshow element
var images = slideshow.getElementsByTagName("img");

// Get the back and forward buttons by their ids
var back = document.getElementById("prev");
var forward = document.getElementById("next");

// Set the current image index to 0
var current = 0;

// Show the first image and hide the rest
images[current].style.display = "block";
for (var i = 1; i < images.length; i++) {
  images[i].style.display = "none";
}

// Add a click event listener to the back button
back.addEventListener("click", function() {
  // Hide the current image
  images[current].style.display = "none";
  // Decrease the current image index by 1
  current--;
  // If the current image index is less than 0, wrap it to the last image index
  if (current < 0) {
    current = images.length - 1;
  }
  // Show the current image
  images[current].style.display = "block";
});

// Add a click event listener to the forward button
forward.addEventListener("click", function() {
  // Hide the current image
  images[current].style.display = "none";
  // Increase the current image index by 1
  current++;
  // If the current image index is greater than or equal to the number of images, wrap it to 0
  if (current >= images.length) {
    current = 0;
  }
  // Show the current image
  images[current].style.display = "block";
});
