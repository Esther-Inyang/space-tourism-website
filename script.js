
// toggle - toggles class

//get classes
const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.nav')
const hamburgerClose = document.querySelector('.hamburger-close')
const hamburgerOpen = document.querySelector('.hamburger-open')

//TOGGLE NAV menu - ON SMALLER SCREENS
navToggle.addEventListener("click", function(){
                // toggle nav
    // nav.classList.toggle("show-nav")
    nav.classList.add("show-nav")  
    hamburgerOpen.style.display = "none";
})

hamburgerClose.addEventListener("click",function(){
    nav.classList.remove("show-nav")
    hamburgerOpen.style.display = "block";
})

//slider
const workers = [
    {
     name: "James Lee",
     Job: "Pilot",
    },
]

//for active planet-menu
const menu = document.querySelector(".menu")
const menuLinks = document.querySelectorAll(".menu-link")

menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener("click", ()=>{
        menu.querySelector(".active").classList.remove("active")
        menuLink.classList.add("active");
    })
    
})