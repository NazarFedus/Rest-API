const express = require('express');
const path = require('path');
const app = express();














app.use(express.static(path.resolve(__dirname, 'client')));

// to handle all the routes
app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'client', 'index.html')); // send the index.html file
})

app.listen(3000, () => {
     console.log('Server is running on port 3000...');
})
