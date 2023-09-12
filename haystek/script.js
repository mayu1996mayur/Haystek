
const peopleData = [
    {
        "name": "John Smith",
        "location": "New York, NY"
    },
    {
        "name": "Jane Doe",
        "location": "Los Angeles, CA"
    },
    {
        "name": "Bob Johnson",
        "location": "Chicago, IL"
    },
    {
        "name": "Emily Davis",
        "location": "Houston, TX"
    },
    {
        "name": "Michael Brown",
        "location": "Phoenix, AZ"
    },
    {
        "name": "Sarah Miller",
        "location": "Philadelphia, PA"
    }
];

const personContainer = document.getElementById('person-container');
const peopleCountElement = document.getElementById('people-count');
const peopleShownElement = document.getElementById('people-shown');
const nextPersonButton = document.getElementById('next-person');

let currentPersonIndex = 0;

function showPerson(index) {
    const person = peopleData[index];
    const personBox = document.createElement('div');
    personBox.className = 'person-box';
    personBox.innerHTML = `
    <div class="person-number">${index + 1}</div>
        <div class="person-info">
        
            <div class="name">Name: ${person.name}</div>
            <div class="location">Location: ${person.location}</div>
        </div>
    `;
    
    personContainer.appendChild(personBox);
}

function updateCounter() {
    peopleShownElement.textContent = `CURRENTLY  ${currentPersonIndex + 1} PEOPLE SHOWING`;
    if (currentPersonIndex === peopleData.length - 1) {
        alert("No more people to show.");
    }
}

nextPersonButton.addEventListener('click', () => {
    currentPersonIndex = (currentPersonIndex + 1) % peopleData.length;
    showPerson(currentPersonIndex);
    updateCounter();
});

showPerson(currentPersonIndex);
updateCounter();
