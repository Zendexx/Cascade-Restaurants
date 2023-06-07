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

const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');
const allArticles = document.querySelectorAll('.article');

function search() {
  const searchTerm = searchBar.value.toLowerCase();
  allArticles.forEach(function(article) {
    const title = article.querySelector('.article-title').textContent.toLowerCase();
    if (title.indexOf(searchTerm) === -1) {
      article.style.display = 'none';
    } else {
      article.style.display = 'block';
    }
  });
}

searchButton.addEventListener('click', search);

searchBar.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    search();
  }
});

  // Get all the details elements
  var details = document.getElementsByTagName("details");
  // Loop through them and add a click event listener
  for (var i = 0; i < details.length; i++) {
    details[i].addEventListener("click", function() {
      // Get the summary element inside the details element
      var summary = this.getElementsByTagName("summary")[0];
      // Get the span element inside the summary element
      var span = summary.getElementsByTagName("span")[0];
      // Toggle the plus and minus signs
      if (this.hasAttribute("open")) {
        span.innerHTML = "&#x2795;";
      } else {
        span.innerHTML = "&#x2796;";
      }
    });
  }