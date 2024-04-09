const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Endpoint to handle PUT requests to update JSON file
app.put('/updateJsonFile', (req, res) => {
    // Assuming the JSON file path is 'WildlifeJSON.json'
    const filePath = 'WildlifeJSON.json';

    // Read existing JSON data from file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        let jsonData;
        try {
            // Parse existing JSON data
            jsonData = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Update JSON data with the data received in the PUT request body
        const updatedData = req.body;

        // Write updated JSON data back to the file
        fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error writing file:', writeErr);
                res.status(500).send('Internal Server Error');
                return;
            }

            console.log('JSON file updated successfully.');
            res.sendStatus(200);
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});