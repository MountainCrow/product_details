/* eslint-disable */
const request = require('supertest')
const app = require('../server/index.js')
const router = require('../routes/router.js');
const helpers= require('./helpers.js')

jest.useFakeTimers();

describe('Server Endpoints', () => {

  it('should return 200 code', async done=>{
    var code = await helpers.getStatus();
    expect(code).toStrictEqual('OK')
    done();
  })
  it('should return array holding an object at position 0', async done=>{
    var productArr = await helpers.getProduct();
    expect(Array.isArray(productArr)).toStrictEqual(true)
    expect(typeof productArr[0]).toStrictEqual('object')
    expect(productArr.length).toStrictEqual(1)
    done();
  })

})