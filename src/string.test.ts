import './string'

import {expect} from 'chai'
import 'mocha'

describe('String', () => {
  describe('#toInt', () => {
    it('parses string to integer', () => {
      expect('1.23'.toInt()).to.equal(1)
      expect('10'.toInt()).to.equal(10)
      expect('10'.toInt(2)).to.equal(2)
      // tslint:disable-next-line no-unused-expression
      expect('_10'.toInt(2)).to.be.NaN
    })
  })
  describe('#toFloat', () => {
    it('parses string to float', () => {
      expect('1.23'.toFloat()).to.equal(1.23)
      expect('10'.toFloat()).to.equal(10)
      // tslint:disable-next-line no-unused-expression
      expect('_10'.toFloat()).to.be.NaN
    })
  })
})
