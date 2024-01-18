document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('nav button');
    const menuItems = document.querySelector('nav .md:hidden');

    menuButton.addEventListener('click', () => {
        menuItems.classList.toggle('hidden');
    });
});
