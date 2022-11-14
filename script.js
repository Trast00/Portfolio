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

