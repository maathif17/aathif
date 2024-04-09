fetch('WildlifeJSON.json')
    .then(response => response.json())
    .then(data => {
        editContent(data);
    })
    .catch(error => console.error('Error fetching JSON:', error));

function editContent(data) {
    document.getElementById("section1").value = data.sections[0].title;
    document.getElementById("section1Content").value = data.sections[0].content;
    document.getElementById("section2").value = data.sections[1].title;
    document.getElementById("section2Content").value = data.sections[1].content;
    document.getElementById("section3").value = data.sections[2].title;
    document.getElementById("section3Content").value = data.sections[2].content;
    document.getElementById("section3Description").value = data.sections[2].description;
    document.getElementById("section4").value = data.sections[3].title;
    document.getElementById("section4Content").value = data.sections[3].content;
    document.getElementById("section4Description").value = data.sections[3].description;
    document.getElementById("section5").value = data.sections[4].title;
    document.getElementById("section5Content").value = data.sections[4].content;
    document.getElementById("section6").value = data.sections[5].title;
    document.getElementById("section6Content").value = data.sections[5].content;
}

document.getElementById("contentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const updatedData = {
        sections: [
            {
                title: document.getElementById("section1").value,
                content: document.getElementById("section1Content").value
            },
            {
                title: document.getElementById("section2").value,
                content: document.getElementById("section2Content").value
            },
            {
                title: document.getElementById("section3").value,
                content: document.getElementById("section3Content").value,
                description: document.getElementById("section3Description").value
            },
            {
                title: document.getElementById("section4").value,
                content: document.getElementById("section4Content").value,
                description: document.getElementById("section4Description").value
            },
            {
                title: document.getElementById("section5").value,
                content: document.getElementById("section5Content").value
            },
            {
                title: document.getElementById("section6").value,
                content: document.getElementById("section6Content").value
            }
        ]
    };

    fetch('WildlifeJSON.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => {
        if (response.ok) {
            console.log('JSON data updated successfully.');
            window.location.reload();
        } else {
            console.error('Failed to update JSON data.');
        }
    })
    .catch(error => {
        console.error('Error updating JSON:', error);
    });

    alert("Changes saved successfully!");
});

//NOTE: The  following is not my code as it is server-side programming for the PUT method of updating data, which proved too extensive for me to attempt by myself
fetch('http://localhost:3000/updateJsonFile', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})
.then(response => {
    if (response.ok) {
        console.log('JSON data updated successfully.');
        alert("Changes saved successfully!");
        window.location.reload(); 
    } else {
        console.error('Failed to update JSON data.');
        alert("Failed to save changes. Please try again.");
    }
})
.catch(error => {
    console.error('Error updating JSON:', error);
    alert("Failed to save changes. Please try again.");
});