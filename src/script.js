const fs = require('fs');
const LemnAPI = require('./index'); // Adjust the path based on your file structure

async function testImageUpload(filePath) {
    const apiKey = '';
    const client = new LemnAPI(apiKey);
    const fileStream = fs.createReadStream(filePath);
    console.log(await client.broadcasts.uploadFile(fileStream));
}

// Run the test
testImageUpload('./image.jpg').catch(console.error);