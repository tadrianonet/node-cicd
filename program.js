const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/json', (req, res) => {
    res.json({ message: 'Hello, CI/CD!' });
});

app.post('/json', (req, res) => {
    res.json({ message: 'Data received!' });
});

app.put('/json', (req, res) => {
    res.json({ message: 'Data updated!' });
});

app.delete('/json', (req, res) => {
    res.json({ message: 'Data deleted!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});