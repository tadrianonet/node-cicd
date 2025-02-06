const request = require('supertest');
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

describe('API Endpoints', () => {
    it('GET /json should return Hello, CI/CD!', async () => {
        const res = await request(app).get('/json');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello, CI/CD!');
    });

    it('POST /json should return Data received!', async () => {
        const res = await request(app).post('/json');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Data received!');
    });

    it('PUT /json should return Data updated!', async () => {
        const res = await request(app).put('/json');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Data updated!');
    });

    it('DELETE /json should return Data deleted!', async () => {
        const res = await request(app).delete('/json');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Data deleted!');
    });
});