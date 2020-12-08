/* == MENU SHOW Y HIDDEN */
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close'),

// Show
toggleMenu.addEventListener('click', ()=>){
  navMenu.classList.toggle('show')
)}

// HIDDEN
closeMenu.addEventListener('click', ()=>){
  navMenu.classList.remove('show')
)}
