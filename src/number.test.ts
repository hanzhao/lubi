import './number'

import {expect} from 'chai'
import 'mocha'

describe('Number', () => {
  describe('#downto', () => {
    it('generates correct number array', () => {
      expect(10..downto(1)).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
      expect(3..downto(-3)).to.deep.equal([3, 2, 1, 0, -1, -2, -3])
      expect(3.5.downto(-3)).to.deep.equal([3.5, 2.5, 1.5, 0.5, -0.5, -1.5, -2.5])
      expect(2..downto(5)).to.deep.equal([])
      expect(1.5.downto(1.5)).to.deep.equal([1.5])
    })
  })

  describe('#forEach', () => {
    it('loops with expected args', () => {
      const res: number[] = []
      4..forEach((value: number, i: number): void => {
        expect(value).to.equal(i)
        res.push(i)
      })
      expect(res).to.deep.equal([0, 1, 2, 3])
    })
    it('never loops for zero', () => {
      0..forEach(() => expect.fail())
    })
  })

  describe('#map', () => {
    it('maps value as expected', () => {
      expect(3..map((x: number) => x * 2)).to.deep.equal([0, 2, 4])
      expect(0..map((x: number) => x * 2)).to.deep.equal([])
    })
  })

  describe('#to', () => {
    it('generates correct number array', () => {
      expect(1..to(10)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      expect((-3).to(3)).to.deep.equal([-3, -2, -1, 0, 1, 2, 3])
      expect((-3.5).to(3)).to.deep.equal([-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5])
      expect(5..to(2)).to.deep.equal([])
      expect(1.5.to(1.5)).to.deep.equal([1.5])
    })
  })

  describe('#toInt', () => {
    it('truncates number', () => {
      expect(1.5.toInt()).to.equal(1)
      expect((-1.5).toInt()).to.equal(-1)
      expect(50..toInt()).to.equal(50)
      expect(Number.MAX_SAFE_INTEGER.toInt()).to.equal(Number.MAX_SAFE_INTEGER)
      expect(Number.MIN_SAFE_INTEGER.toInt()).to.equal(Number.MIN_SAFE_INTEGER)
    })
  })
})
