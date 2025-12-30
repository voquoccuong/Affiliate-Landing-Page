const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.header__nav');

if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', () => {
        const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', !isExpanded);

        // Simple toggle for the nav
        if (nav.style.display === 'flex') {
            nav.style.display = ''; // Reset to let CSS handle it (hidden on mobile)
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.backgroundColor = 'white';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }
    });

    // Reset on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            nav.style.display = '';
            nav.style.flexDirection = '';
            nav.style.position = '';
            nav.style.boxShadow = '';
        }
    });
}
