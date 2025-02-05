// create web server using express
const express = require('express');
const app = express();
const port = 3000;

// use the static files in the public folder
app.use(express.static('public'));

// use the comments.js file in the public folder
app.use('/comments', require('./public/comments.js'));

// start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});