function highlightMenuItem(menuItemID, highlighted) {
  const elem = document.getElementById(menuItemID);
  if (highlighted) {
    elem.style.fontSize = '1.2rem';
    elem.style.textDecoration = 'underline';
  } else {
    elem.style.fontSize = '0.938rem';
    elem.style.textDecoration = 'none';
  }
}

/* toggle Menu button Event */
const menu = document.getElementById('mobile-nav');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
openMenu.addEventListener('click', () => {
  menu.style.right = '0';
});
closeMenu.addEventListener('click', () => {
  menu.style.right = '-100vw';
});

document.getElementById('works-mobile-menu-item').addEventListener('click', () => { closeMenu.click(); });
document.getElementById('about-me-mobile-menu-item').addEventListener('click', () => { closeMenu.click(); });
document.getElementById('footer-mobile-menu-item').addEventListener('click', () => { closeMenu.click(); });

/* highlight displayed section */
const workSection = document.getElementById('works');
const aboutMeSection = document.getElementById('about-me');
const footerSection = document.getElementById('footer');

workSection.addEventListener('mouseover', () => { highlightMenuItem('works-desktop-menu-item', true); });
aboutMeSection.addEventListener('mouseover', () => { highlightMenuItem('about-me-desktop-menu-item', true); });
footerSection.addEventListener('mouseover', () => { highlightMenuItem('footer-desktop-menu-item', true); });

workSection.addEventListener('mouseout', () => { highlightMenuItem('works-desktop-menu-item', false); });
aboutMeSection.addEventListener('mouseout', () => { highlightMenuItem('about-me-desktop-menu-item', false); });
footerSection.addEventListener('mouseout', () => { highlightMenuItem('footer-desktop-menu-item', false); });
