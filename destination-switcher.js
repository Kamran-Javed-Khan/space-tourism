const destinations = [
    {
        "name": "Moon",
        "images": {
            "png": "./assets/destination/image-moon.png",
            "webp": "./assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    },
    {
        "name": "Mars",
        "images": {
            "png": "./assets/destination/image-mars.png",
            "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
    },
    {
        "name": "Europa",
        "images": {
            "png": "./assets/destination/image-europa.png",
            "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
    },
    {
        "name": "Titan",
        "images": {
            "png": "./assets/destination/image-titan.png",
            "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
    }
];

const destinationImage = document.querySelector('#destination-image');
const destinationListTitle = document.querySelector('#destination-list-title');
const destinationTitle = document.querySelector('#destination-title');
const destinationParagraph = document.querySelector('#destination-paragraph');
const destinationDistance = document.querySelector('#destination-distance');
const destinationTravelTime = document.querySelector('#destination-travel-time');

const destinationList = document.querySelectorAll('[role="tablist"]');
destinationList.forEach(destination => {
    destination.addEventListener('click', switchDestination);
    destination.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            switchDestination(event);
        }
    });
});

function switchDestination(e) {
    const dest = e.target;
    const title = dest.innerText;
    const destIndex = destinations.findIndex(destination => destination.name.toLowerCase() === title.toLowerCase());
    if (destIndex > -1) {
        destinationList.forEach(destination => {
            destination.classList.remove('selected-destination-title');
        });
        dest.classList.add('selected-destination-title');
        destinationImage.setAttribute('src', destinations[destIndex].images.png);
        destinationTitle.innerText = destinations[destIndex].name;
        destinationParagraph.innerText = destinations[destIndex].description;
        destinationDistance.innerText = destinations[destIndex].distance;
        destinationTravelTime.innerText = destinations[destIndex].travel;
    }
}