const server = require('./server');
const request = require('supertest');
const assert = require('assert');

afterEach(() => {
    server.close();
});

describe('proxy', () => {
    it('is health', async () => {
        const response = await request(server).get('/health-check');
        assert.equal(response.status, 200);
        assert.equal(response.type, 'text/plain');
        assert.equal(response.text, 'alive');
    });

    it('proxy requests', async () => {
        const response = await request(server)
            .post('/your-proxy')
            .send({
                uri: 'http://www.baidu.com',
                method: 'get'
            })
        ;

        assert.equal(response.status, 200);
        assert.equal(response.type, 'text/html');
        assert.equal(response.text.startsWith('<!DOCTYPE html>'), true);
    });
});