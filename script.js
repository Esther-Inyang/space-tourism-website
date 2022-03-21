
/////////////////////////HOME///////////////////////////

//ACTIVE HOME MENU

const explore = document.querySelector(".explore")
const destMenu = document.querySelector(".dest-menu")
const homeMenu = document.querySelector(".home-menu")
const homeSection = document.querySelector(".home-section")
const destinationSection = document.querySelector(".destination-section")

explore.addEventListener("click", ()=>{
    //add active to destination menu
    destMenu.classList.add("active-menu-link")
    //remove active from other sibling (home-menu)
    homeMenu.classList.remove("active-menu-link")

    //Add Active to contents
    homeSection.classList.remove("active-page")
    destinationSection.classList.add("active-page")
})


//TOGGLE HOME MENU

//selecting menu
// const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.nav')
const hamburgerClose = document.querySelector('.hamburger-close')
const hamburgerOpen = document.querySelector('.hamburger-open')

hamburgerOpen.addEventListener("click", ()=>{
    nav.classList.add("show-nav")  
    hamburgerOpen.style.display = "none";
})

hamburgerClose.addEventListener("click", ()=>{
    nav.classList.remove("show-nav")
    hamburgerOpen.style.display = "block";
})

// //TOGGLE NAV menu - ON SMALLER SCREENS
// navToggle.addEventListener("click", ()=>{
//     nav.classList.add("show-nav")  
//     hamburgerOpen.style.display = "none";
// })

// hamburgerClose.addEventListener("click", ()=>{
//     nav.classList.remove("show-nav")
//     hamburgerOpen.style.display = "block";
// })

//*************HOME-SECTION**************//
const mainPage = document.querySelector(".main-page")
const pages = document.querySelectorAll(".page")
const menuLinks = document.querySelectorAll(".menu-link")

mainPage.addEventListener("click", (e)=>{
    //when clicked, get the data-id
    const pageId = e.target.dataset.id;

    if(pageId){  
        //FOR HOME MENU
        menuLinks.forEach((menuLink)=>{
            menuLink.classList.remove("active-menu-link")
            e.target.classList.add("active-menu-link")
        })

        //FOR PLANET CONTENTS
        pages.forEach((page)=>{
            page.classList.remove("active-page")
        })

        const pageIdElement = document.getElementById(pageId)
        pageIdElement.classList.add("active-page")
    }
})


//*************DESTINATION-SECTION**************//

//ACTIVE PLANET MENU
const planetMenuParent = document.querySelector(".planet-menu-container")
const planetMenus = document.querySelectorAll(".planet-menu")

planetMenus.forEach((planetMenu)=>{
    planetMenu.addEventListener("click",()=>{
        planetMenuParent.querySelector(".active-planet-menu").classList.remove("active-planet-menu")

        planetMenu.classList.add("active-planet-menu")
    })
})

//ACTIVE PLANET CONTENTS
const planets = [
    {   
        id: 1,
        img: "./images/destination/image-moon.png",
        title: "Moon",
        text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        kilometer: "384,400 km",
        travelTime: "3 Days"
    },
    {   
        id: 2,
        img: "./images/destination/image-mars.png",
        title: "Mars",
        text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        kilometer: "225 mil. km",
        travelTime: "9 months"
    },
    {   
        id: 3,
        img: "./images/destination/image-europa.png",
        title: "Europa",
        text: "The smallest of the four Galilean moons orbiting Jupiter, europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        kilometer: "628 mil. km",
        travelTime: "3 Years"
    },
    {   
        id: 4,
        img: "./images/destination/image-titan.png",
        title: "Titan",
        text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        kilometer: "1.6 bil. km",
        travelTime: "7 years"
    }
]

//Selecting Planet Items
const planetImg = document.querySelector(".planet-image")
const planetTitle = document.querySelector(".dest-planet-title")
const planetText  = document.querySelector(".dest-planet-text")
const planetKm = document.querySelector(".dest-km")
const planetTravelTime = document.querySelector(".dest-travel-duration")

const planetMoon = document.querySelector(".planet-moon")
const planetMars = document.querySelector(".planet-mars")
const planetEuropa = document.querySelector(".planet-europa")
const planetTitan = document.querySelector(".planet-titan")

//for each planet in the array
//moon
function moonContents(){
    planetImg.src = planets[0].img;
    planetTitle.textContent = planets[0].title;
    planetText.textContent = planets[0].text;
    planetKm.textContent = planets[0].kilometer;
    planetTravelTime.textContent = planets[0].travelTime;
}

planetMoon.addEventListener("click",()=>{
    moonContents()
})

//mars
function marsContents(){
    planetImg.src = planets[1].img;
    planetTitle.textContent = planets[1].title;
    planetText.textContent = planets[1].text;
    planetKm.textContent = planets[1].kilometer;
    planetTravelTime.textContent = planets[1].travelTime;
}

planetMars.addEventListener("click",()=>{
    marsContents()
})

//Europa
function europaContents(){
    planetImg.src = planets[2].img;
    planetTitle.textContent = planets[2].title;
    planetText.textContent = planets[2].text;
    planetKm.textContent = planets[2].kilometer;
    planetTravelTime.textContent = planets[2].travelTime;
}

planetEuropa.addEventListener("click",()=>{
    europaContents()
})

//Titan
function titanContents(){
    planetImg.src = planets[3].img;
    planetTitle.textContent = planets[3].title;
    planetText.textContent = planets[3].text;
    planetKm.textContent = planets[3].kilometer;
    planetTravelTime.textContent = planets[3].travelTime;
}

planetTitan.addEventListener("click",()=>{
    titanContents()
})

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

//adding click event to the crew slider buttons
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


/////////////////////TECHNOLOGY SECTION//////////////////////////////

//SELECTING ITEMS (to be replaced with the contents in the Techs Array)
const imageContainer = document.querySelector(".technology-image_container")
const techName = document.querySelector(".technology-name")
const text = document.querySelector(".technology-text")

//SELECTING BUTTONS
const btnsParent = document.querySelector(".tech-btns_container")
const allTechBtns = document.querySelectorAll(".tech-btn")
const techBtn1 = document.querySelector(".tech-btn1")
const techBtn2 = document.querySelector(".tech-btn2")
const techBtn3 = document.querySelector(".tech-btn3")


//*******ACTIVE BUTTONS*******//
allTechBtns.forEach((techBtn)=>{
    techBtn.addEventListener("click", ()=>{
        btnsParent.querySelector(".active-technology").classList.remove("active-technology")

        techBtn.classList.add("active-technology")
    })
})


//*******IMAGE SLIDER AND CONTENTS*******//
const technologys = [
    {
        id: 1,
        img1: "url(./images/technology/image-launch-vehicle-portrait.jpg)",
        img2: "url(./images/technology/image-launch-vehicle-landscape.jpg)",
        title: "The Terminology...",
        name: "Launch vehicle",
        text: "A launch vehicle or carrier rocket is a rocket-propelled      vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },

    {
        id: 2,
        img1: "url(./images/technology/image-spaceport-portrait.jpg)",
        img2: "url(./images/technology/image-spaceport-landscape.jpg)",
        title: "The Terminology...",
        name: "Spaceport",
        text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },

    {
        id: 3,
        img1: "url(./images/technology/image-space-capsule-portrait.jpg)",
        img2: "url(./images/technology/image-space-capsule-landscape.jpg)",
        title: "The terminology...",
        name: "Space capsule",
        text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where  you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]

window.addEventListener("DOMContentLoaded", () =>{
    techOne()
    techTwo()
    techThree()
})

techBtn1.addEventListener("click", function(){
    techOne()
})

techBtn2.addEventListener("click", function(){
    techTwo()
})

techBtn3.addEventListener("click", function(){
    techThree()
})

function techOne(){
    techName.textContent = technologys[0].name;
    text.textContent = technologys[0].text;

    let screenWidth = screen.width;
    // console.log(screen.width)
    
    if(screenWidth >= 992){  //from 992 up
        imageContainer.style.backgroundImage = technologys[0].img1;
    } else if(screenWidth >= 768){ //between 768 - 992
        imageContainer.style.height = "42rem";
        imageContainer.style.backgroundImage = technologys[0].img2;
    }
    else{  //below 992
        imageContainer.style.backgroundImage = technologys[0].img2;
    }
}

function techTwo(){
    techName.textContent = technologys[1].name;
    text.textContent = technologys[1].text;

    let screenWidth = screen.width;
    // console.log(screen.width)

    if(screenWidth >= 992){  //from 992 up
        imageContainer.style.backgroundImage = technologys[1].img1;
    } else if(screenWidth >= 768){ //between 768 - 992
        imageContainer.style.height = "42rem";
        imageContainer.style.backgroundImage = technologys[1].img2;
    }
    else{  //below 992
        imageContainer.style.backgroundImage = technologys[1].img2;
    }
}

function techThree(){
    techName.textContent = technologys[2].name;
    text.textContent = technologys[2].text;

    let screenWidth = screen.width;
    // console.log(screen.width)

    if(screenWidth >= 992){  //from 992 up
        imageContainer.style.backgroundImage = technologys[2].img1;
    } else if(screenWidth >= 768){ //between 768 - 992
        imageContainer.style.height = "42rem";
        imageContainer.style.backgroundImage = technologys[2].img2;
    }
    else{  //below 992
        imageContainer.style.backgroundImage = technologys[2].img2;
    }
}