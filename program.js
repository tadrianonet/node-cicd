const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/json', (req, res) => {
    res.json({ message: 'Hello, CI/CD!' });
});

app.get('/', (req, res) => {
    res.send('Hello, CI/CD!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});