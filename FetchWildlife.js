fetch('WildlifeJSON.json') 
    .then(response => response.json())
    .then(data => {
        const jsonDataContainer = document.getElementById('jsonDataContainer');


        data.sections.forEach(section => {

            const sectionDiv = document.createElement('div');
            const titleHeading = document.createElement('h2');
            const contentParagraph = document.createElement('h3');
            const descriptionParagraph = document.createElement('p');


            titleHeading.textContent = section.title;
            contentParagraph.textContent = section.content;
            if (section.description) {
                descriptionParagraph.textContent = section.description;
            }


            sectionDiv.appendChild(titleHeading);
            sectionDiv.appendChild(contentParagraph);
            if (section.description) {
                sectionDiv.appendChild(descriptionParagraph);
            }
            jsonDataContainer.appendChild(sectionDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });