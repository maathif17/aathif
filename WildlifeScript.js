fetch('WildlifeJSON.json')
    .then(response => response.json())
    .then(data => processContent(data))
    .catch(error => console.error('Error fetching JSON:', error));

function processContent(data) {
    let sectionsHTML = "";
    for (let section of data.sections) {
        sectionsHTML += `
            <div>
                <h2>${section.title}</h2>
                <p>${section.content}</p>
                ${section.description ? `<p>${section.description}</p>` : ''}
            </div>
        `;
    }
    document.body.innerHTML = sectionsHTML;
}