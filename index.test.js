const request = require('supertest');
const app = require('./index');

describe('Test the endpoint', () => {
  test('It should respond with status 200', async () => {
    const response = await request(app).get('/alumnos');
    expect(response.statusCode).toBe(200);
  });
});