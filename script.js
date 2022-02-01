
// toggle - toggles class

//get classes
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

//TOGGLE NAV LINKS - ON SMALLER SCREENS
navToggle.addEventListener("click", function(){
                // toggle nav
    links.classList.toggle("show-links")         
})


