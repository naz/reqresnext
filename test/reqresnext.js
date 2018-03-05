import chai from 'chai'
import reqresnext from '../src/reqresnext'

const { expect } = chai

describe('reqresnext', () => {
  it('generates proper map', () => {
    const {req, res, next} = reqresnext()

    expect(req).to.be.an('object')
    expect(res).to.be.an('object')
    expect(next).to.be.a('function')
  })
})
