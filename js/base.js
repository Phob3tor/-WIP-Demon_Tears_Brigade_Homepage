// Function to toggle the hamburger-menu
const toggleBurgerMenu = (event) => {
    hamburgerMenu.classList.toggle("toggleMenu");
    hamburgerButton.classList.toggle("toggleWhite");
}

// This event-listener waits for the DOM to load before grabbing the elements
document.addEventListener("DOMContentLoaded", (event) => {
    // Object with the Elements of the Website
    const elements = {
        hamburgerButton: document.getElementById("hamburgerButton"),
        hamburgerMenu: document.getElementById("hamburgerMenu")
    }
});

// Adding event-listener to the hamburger-button to toggle the burger-menu and white color for the button
hamburgerButton.addEventListener("click", (e) => {
    toggleBurgerMenu();
});