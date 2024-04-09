const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/updateWildlifeJSON', (req, res) => {
    const updatedData = req.body;

    fs.readFile('WildlifeJSON.json', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ success: false, message: 'Failed to read JSON file' });
        }

        const mergedData = { ...JSON.parse(data), ...updatedData };

        fs.writeFile('WildlifeJSON.json', JSON.stringify(mergedData, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ success: false, message: 'Failed to write JSON file' });
            }

            res.status(200).json({ success: true, message: 'Changes saved successfully' });
        });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});