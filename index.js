const express = require('express');
// const env = require('env');

const app = express();


app.get('/', (req, res) => {
res.send('Hello, World! This is the root path.');
});



app.get('/test', (req, res) => {
res.send('This is a test route.');
});

app.use('/any', (req, res) => {
    res.send('This is a test route for any.');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});