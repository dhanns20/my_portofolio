function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.querySelector('.toggle-button');

    navLinks.classList.toggle('show');
    toggleButton.classList.toggle('open');
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
