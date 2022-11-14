/* toggle Menu button Event */
var menu = document.getElementById("mobile-nav")
var openMenu = document.getElementById("open-menu")
var closeMenu = document.getElementById("close-menu")
openMenu.addEventListener('click',function() {
  menu.style.right = "0"
});
closeMenu.addEventListener('click',function() {
  menu.style.right = "-100vw"
});

/* highlight displayed section */
var workSection = document.getElementById("works")
var aboutMeSection = document.getElementById("about-me")
var footerSection = document.getElementById("footer")

workSection.addEventListener('mouseover',function() {highlightMenuItem("works-desktop-menu-item", true)});
aboutMeSection.addEventListener('mouseover',function() {highlightMenuItem("about-me-desktop-menu-item", true)});
footerSection.addEventListener('mouseover',function() {highlightMenuItem("footer-desktop-menu-item", true)});

workSection.addEventListener('mouseout',function() {highlightMenuItem("works-desktop-menu-item", false)});
aboutMeSection.addEventListener('mouseout',function() {highlightMenuItem("about-me-desktop-menu-item", false)});
footerSection.addEventListener('mouseout',function() {highlightMenuItem("footer-desktop-menu-item", false)});

function highlightMenuItem(menuItemID, highlighted){
  if(highlighted){
    var elem = document.getElementById(menuItemID)
    elem.style.fontSize = "1.2rem"
    elem.style.textDecoration = "underline"
  }else {
    var elem = document.getElementById(menuItemID)
    elem.style.fontSize = "0.938rem"
    elem.style.textDecoration = "none"
  }
}