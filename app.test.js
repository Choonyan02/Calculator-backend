const request = require('supertest');
const app = require('./app');

describe('always true', () => {
  it('responds with status message', async () => {
    expect(true).toBe(true);
  });
});

describe('GET /status', () => {
  it('responds with status message', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ "Status": "Running?" });
  });
});

describe('POST /add', () => {
  it('adds two numbers and responds with the result', async () => {
    const requestBody = { number1: 5, number2: 3 };
    const response = await request(app)
    .post('/add')
    .send(requestBody);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ "result": 8 });
  });
});

describe('POST /subtract', () => {
  it('subtracts two numbers and responds with the result', async () => {
    const requestBody = { number1: 10, number2: 3 };
    const response = await request(app)
    .post('/subtract')
    .send(requestBody);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ "result": 7 });
  });
});