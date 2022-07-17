const crew = [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];

const crewDesignation = document.querySelector('#crew-designation');
const crewMemberName = document.querySelector('#crew-member-name');
const crewMemberDescription = document.querySelector('#crew-member-description');
const crewMemberImage = document.querySelector('#crew-member-image');
const buttons = document.querySelectorAll('[role="button"]');
buttons.forEach(btn => {
    btn.addEventListener('click', switchCrewMember);
    btn.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            switchCrewMember(event);
        }
    });
});

function switchCrewMember(e) {
    const member = e.target;
    const selectedDesignation = member.getAttribute('data-btn');
    const memberId = crew.findIndex(member => member.role.toLowerCase() === selectedDesignation.toLowerCase());
    if (memberId > -1) {
        buttons.forEach(btn => {
            btn.id = '';
        });
        member.id = 'selected-crew-member';
        crewDesignation.innerText = crew[memberId].role;
        crewMemberName.innerText = crew[memberId].name;
        crewMemberDescription.innerText = crew[memberId].bio;
        crewMemberImage.setAttribute('src', crew[memberId].images.png);
    }
}