import chai from "chai"
import {getPrimes} from "../app"

let expect = chai.expect
let should = chai.should()
let assert = chai.assert

describe("Test the behavior of getPrimes()", function () {
    it('should return an array that includes 2 when given 10 via expect()',
    function () {
        expect(getPrimes(10)).to.be.an('array').that.includes(3)
    })
    it('should return an array when given 10 via expect()', function () {
        expect(getPrimes(10)).to.be.an('array')

    })
    it('should return an array in a given order when given 10 via expect()',
    function () {
        expect(getPrimes(10)).to.have.ordered.members([2,3,5,7])
          .but.not.have.ordered.members([7,5,3,2]);
    })
    it('should return undefined if getprimes is passed with empty args via expect()',
    function () {
        expect(getPrimes()).to.be.false;
    })
    it('should return ok if getprimes is passed a number via expect()',
    function () {
        expect(getPrimes(2)).to.be.ok;
    })
    it('should return NaN if getPrimes is passed without args via assert',
    function () {
        assert.isNotNaN(getPrimes(), '[] is not NaN');
    })
    it('should return false if getprimes is passed a string via assert',
    function () {
        assert.isFalse(getPrimes('louis'), 'False')

    })
    it('should return length of array return when passed an arg(s) via expect()',
    function () {
        expect(getPrimes(10)).to.have.lengthOf(4);
    })
    it('should return true based on expected result via expect()',
    function () {
        expect(getPrimes(10)).to.have.members([2,3,5,7])
    })
    it('should return true based on expected result via expect()',
    function () {
        expect(getPrimes(10)).to.not.have.property(4);
        expect([1, 2]).to.be.an('array').that.does.not.include(3)
    })
    it('should return true based on expected result via expect()',
    function () {
        expect(getPrimes(10)).to.not.have.property(4);
        expect(getPrimes(10)).to.be.an('array').that.does.not.include(10)
    })

})
