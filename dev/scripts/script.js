// Write your JavaScript here...

// Hamburger menu

// Get the hamburger icon and navigation elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const mainNav = document.getElementById('main-nav');

// Add an event listener to the hamburger icon
hamburgerIcon.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation
  mainNav.classList.toggle('active');
});