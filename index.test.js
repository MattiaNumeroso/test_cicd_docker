const request = require('supertest');
const { app, close } = require('./index');
const { response } = require('express');

describe('TEST DEGLI ENDPOINTS', () => {
    it('Deve tornare hello world', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello World!');
    })

    it('deve tornare hello client', async () => {
        const res = await request(app).get('/client');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello client!');
    })

    afterAll((done) => {
        close();
        done();
    })
})
