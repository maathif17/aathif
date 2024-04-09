fetch('YalaJSON.json') 
    .then(response => response.json())
    .then(data => {
        const jsonDataContainer = document.getElementById('jsonDataContainer7');

        Object.entries(data).forEach(([title, content]) => {
            const sectionDiv = document.createElement('div');
            const titleHeading = document.createElement('h2');
            const contentParagraph = document.createElement('p');
            const descriptionParagraph = document.createElement('p');

            titleHeading.textContent = title;
            contentParagraph.textContent = content;

            sectionDiv.appendChild(titleHeading);
            sectionDiv.appendChild(contentParagraph);
            jsonDataContainer.appendChild(sectionDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });