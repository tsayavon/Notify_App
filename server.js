// Require dependencies
const express = require ('express');


// Initialize the express app
const app = express();

// Configure app settings

// Mount middleware

// Mount routes
app.get('/', (req, res) => {
    res.send('<h1> Hello World!</h1>');
});

// Tell the app to listen for requests from client
app.listen(3000, () => {
    console.log(`Express is listening for request on pot:3000`);
});
// 