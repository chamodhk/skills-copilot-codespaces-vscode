const http = require('http');

//create web server
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Run the server using node comments.js
// Go to your browser and navigate to http://localhost:3000/ and you should see "Hello, World!" displayed
// In the response, we have the status code 200, the content type text/plain, and the message 'Hello, World!' being displayed.
// This is a simple example of a web server using Node.js.
// However, this is just the beginning. Node.js is a powerful tool that can be used for a wide range of applications, including building APIs, web applications, and more. 
// With Node.js, you can write server-side code using JavaScript, which makes it easier to build full-stack applications.