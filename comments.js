//create web server
const express = require('express');
const app = express();

//create a web server
app.get('/comments', (req, res) => {
  res.send('This is a web server for comments');
});

//start the web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});