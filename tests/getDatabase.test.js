const request = require('supertest')
const app = require('../server/index.js')

jest.useFakeTimers();

describe('Server Endpoints', () => {
  it('should return a response of 200', async done => {
    const res = await request(app)
    .get('/')

    expect(200, done)
  })
})