const fs = require('fs');
const path = require('path');

function ensureDirectories() {
    // List of required directories
    const dirs = [
        'logs',
        'uploads',
        'uploads/assignments',
        'uploads/solutions'
    ];

    dirs.forEach(dir => {
        const dirPath = path.join(__dirname, '..', dir);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            console.log(`Created directory: ${dirPath}`);
        }
    });
}

module.exports = ensureDirectories;
