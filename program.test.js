const request = require('supertest');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/json', (req, res) => {
    res.json({ message: 'Hello, CI/CD!' });
});

app.get('/', (req, res) => {
    res.send('Hello, CI/CD!');
});

describe('GET /json', () => {
    it('should return JSON with message "Hello, CI/CD!"', async () => {
        const response = await request(app).get('/json');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, CI/CD!' });
    });
});

describe('GET /', () => {
    it('should return "Hello, CI/CD!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, CI/CD!');
    });
});