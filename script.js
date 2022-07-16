const primaryNav = document.querySelector('.primary-nav');
const mobileNavToggle = document.querySelector('.mobile-menu-toggle');

const spaceTourismLogo = document.querySelector('#space-tourism-logo');

mobileNavToggle.addEventListener('click', openCloseNav => {
    const visibility = primaryNav.getAttribute('data-visibility');
    if (primaryNav.getAttribute('data-visibility') === 'false') {
        primaryNav.setAttribute('data-visibility', true);
        mobileNavToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visibility', false);
        mobileNavToggle.setAttribute('aria-expanded', false);
    }
});

spaceTourismLogo.addEventListener('click', navToHome => {
    window.location.href = 'index.html';
});