
// toggle - toggles class

//get classes
const navToggle = document.querySelector('.nav-toggle')
const menu = document.querySelector('.menu')

//TOGGLE NAV menu - ON SMALLER SCREENS
navToggle.addEventListener("click", function(){
                // toggle nav
    menu.classList.toggle("show-menu")         
})


