const iconToggle = document.querySelector('.container-button');

iconToggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active-nav');
});