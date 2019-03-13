// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

//for loading check storage
var checked = JSON.parse(sessionStorage.getItem("change-theme"));
document.getElementById("change-theme").checked = checked;
//
if (JSON.parse(sessionStorage.getItem('dark-theme-enabled'))) {
  document.body.classList.add('light-mode');
}

//click on theme change
document.getElementById('change-theme').addEventListener('click', function () {
  //setting checkbox active status
  var checkbox = document.getElementById("change-theme");
  sessionStorage.setItem("change-theme", checkbox.checked);
  //theme changing with light mode
  let darkThemeEnabled = document.body.classList.toggle('light-mode');
  sessionStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});