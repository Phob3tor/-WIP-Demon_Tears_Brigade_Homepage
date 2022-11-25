// Function to toggle the hamburger-menu
const toggleBurgerMenu = (event) => {
    hamburgerMenu.classList.toggle("toggleMenu");
    hamburgerButton.classList.toggle("toggleWhite");
}

// Function to hide the disclaimer and the blur
const hideDisclaimer = (event) => {
    disclaimer.classList.remove("showDisc");
    disclaimer.classList.add("hideDisc");
    blurDiv.classList.add("hideDisc");
}

// This event-listener waits for the DOM to load before grabbing the elements
document.addEventListener("DOMContentLoaded", (event) => {
    // Object with the Elements of the Website
    const elements = {
        hamburgerButton: document.getElementById("hamburgerButton"),
        hamburgerMenu: document.getElementById("hamburgerMenu"),
        discExitBtn: document.getElementById("discExitBtn"),
        disclaimer: document.getElementById("disclaimer"),
        blurDiv: document.getElementById("blurDiv"),
    }
});

// Adding event-listener to the hamburger-button to toggle the burger-menu and white color for the button
hamburgerButton.addEventListener("click", (e) => {
    toggleBurgerMenu();
});

// Adding event-listener to the exit button for the disclaimer to add a class to hide the disclaimer
discExitBtn.addEventListener("click", (e) => {
    hideDisclaimer();
});