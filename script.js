
// toggle - toggles class

//get classes
// const navToggle = document.querySelector('.nav-toggle')
// const nav = document.querySelector('.nav')
// const hamburgerClose = document.querySelector('.hamburger-close')
// const hamburgerOpen = document.querySelector('.hamburger-open')

// //TOGGLE NAV menu - ON SMALLER SCREENS
// navToggle.addEventListener("click", function(){
//                 // toggle nav
//     // nav.classList.toggle("show-nav")
//     nav.classList.add("show-nav")  
//     hamburgerOpen.style.display = "none";
// })

// hamburgerClose.addEventListener("click",function(){
//     nav.classList.remove("show-nav")
//     hamburgerOpen.style.display = "block";
// })

//*************DESTINATION-SECTION**************//

// //for active planet-menu
// const menu = document.querySelector(".menu")
// const menuLinks = document.querySelectorAll(".menu-link")

// menuLinks.forEach((menuLink)=>{
//     menuLink.addEventListener("click", ()=>{
//         menu.querySelector(".active").classList.remove("active")
//         menuLink.classList.add("active");
//     })
    
// })

//*************CREW-SECTION**************//

//Array of Crew Members
const crews = [
    {
        id: 1,
        img: "./images/crew/image-douglas-hurley.png",
        title: "Commander",
        name: "Douglas Hurley",
        text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },

    {
        id: 2,
        img: "./images/crew/image-mark-shuttleworth.png",
        title: "Mission specialist",
        name: "Mark Shuttleworth",
        text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        id: 3,
        img: "./images/crew/image-victor-glover.png",
        title: "Pilot",
        name: "Victor Glover",
        text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    },

    {
        id: 4,
        img: "./images/crew/image-anousheh-ansari.png",
        title: "Flight Engineer",
        name: "Anousheh Ansari",
        text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    }
]

//Selecting Crew Items
const crewImg = document.querySelector(".crew-img")
const crewTitle = document.querySelector(".crew-title")
const crewName = document.querySelector(".crew-name")
const crewText = document.querySelector(".crew-text")

const crewBtn1 = document.querySelector(".crew-btn1")
const crewBtn2 = document.querySelector(".crew-btn2")
const crewBtn3 = document.querySelector(".crew-btn3")
const crewBtn4 = document.querySelector(".crew-btn4")

//for each crew member in the array
function crewOne(){
    crewImg.src = crews[0].img;
    crewTitle.textContent = crews[0].title;
    crewName.textContent = crews[0].name;
    crewText.textContent = crews[0].text;
}

function crewTwo(){
    crewImg.src = crews[1].img;
    crewTitle.textContent = crews[1].title;
    crewName.textContent = crews[1].name;
    crewText.textContent = crews[1].text;
}


function crewThree(){
    crewImg.src = crews[2].img;
    crewTitle.textContent = crews[2].title;
    crewName.textContent = crews[2].name;
    crewText.textContent = crews[2].text;
}

function crewFour(){
    crewImg.src = crews[3].img;
    crewTitle.textContent = crews[3].title;
    crewName.textContent = crews[3].name;
    crewText.textContent = crews[3].text;
}

//buttons
crewBtn1.addEventListener("click",()=>{
    crewOne()
})

crewBtn2.addEventListener("click",()=>{
    crewTwo()
})

crewBtn3.addEventListener("click",()=>{
    crewThree()
})

crewBtn4.addEventListener("click",()=>{
    crewFour()
})

//change active button
const crewBtnContainer = document.querySelector(".crew-btns_container")
const allCrewBtns = document.querySelectorAll(".crew-btn")

allCrewBtns.forEach((crewBtn)=>{
    crewBtn.addEventListener("click",()=>{
        //remove active class from all child elements
        crewBtnContainer.querySelector(".active-crew").classList.remove("active-crew")

        //add active class to the child element that is clicked
        crewBtn.classList.add("active-crew")
    })
})


// //SLIDER - FOR TECHNOLOGY SECTION
// console.log("Call Me Mr Technology")

// const technologys = [
//     {
//         id: 1,
//         img1: "./images/technology/image-launch-vehicle-portrait.jpg",
//         img2: "./images/technology/image-launch-vehicle-landscape.jpg",
//         title: "The Terminology...",
//         name: "Launch vehicle",
//         text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
//     },

//     {
//         id: 2,
//         img1: "./images/technology/image-spaceport-portrait.jpg",
//         img2: "./images/technology/image-spaceport-landscape.jpg",
//         title: "The Terminology...",
//         name: "Spaceport",
//         text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
//     },

//     {
//         id: 3,
//         img1: "./images/technology/image-space-capsule-portrait.jpg",
//         img2: "./images/technology/image-space-capsule-landscape.jpg",
//         title: "The terminology...",
//         name: "Space capsule",
//         text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where  you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
//     }
// ]