// Fetch the JSON file
fetch('valdas_spire_of_secrets.json')
    .then(response => response.json())
    .then(data => {
        // Display the JSON data
        const jsonContent = document.getElementById('json-content');
        
        // Format the JSON data as a string and insert it into the div
        jsonContent.textContent = JSON.stringify(data, null, 2); // Pretty print the JSON
        jsonContent.style.whiteSpace = 'pre'; // Maintain formatting for readability
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
