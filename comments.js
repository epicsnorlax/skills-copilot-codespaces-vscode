// Create web server
// Create a web server that listens to the port 3000 and returns the comments.json file when the path /comments is requested. The comments.json file is in the same folder as comments.js.

// Use the createServer method from the http module to create the server.

// Use the fs module to read the comments.json file.

// Use the res.write method to write the contents of the comments.json file to the response.

// Use the res.end method to end the response.

// Finally, listen to the port 3000 using the listen method.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        res.write(data);
        res.end();
    });
});

server.listen(3000);