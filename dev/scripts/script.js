// Write your JavaScript here...

// Hamburger menu

// Get the hamburger icon and navigation elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const mainNav = document.getElementById('main-nav');

// Function to close the hamburger menu
function closeHamburgerMenu() {
  mainNav.classList.remove('active');
}

// Add an event listener to the hamburger icon
hamburgerIcon.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation
  mainNav.classList.toggle('active');
});

// Add a resize event listener to close the hamburger menu when screen size is greater than 500px
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 500) {
    closeHamburgerMenu();
  }
});