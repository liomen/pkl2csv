const { exec } = require('child_process');
const path = require('path');


function convertToCsv(inputFile) {
    const scriptPath = path.join(__dirname, 'convert_to_csv.py');
    exec(`python ${scriptPath} ${inputFile}`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

module.exports = { convertToCsv };
