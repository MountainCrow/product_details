/* eslint-disable */
const request = require('supertest')
const app = require('../server/index.js')

jest.useFakeTimers();

describe('Server Endpoints', () => {
  it('should return a response of 200', async done => {
    const res = await request(app)
    .get('/')

    expect(res.status).toBe(200)
    done();
  }),

  it('Should return an array of documents from the database', async done => {
    const res = await request(app)
    .get('/database')

    expect(res.body.length).toBe(1)
    done()
  })
})