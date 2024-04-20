// Import chai and chai-as-promised
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import calculateSquare from '../src/calculateSquare-with-delay.js';

// Use chai-as-promised plugin
chai.use(chaiAsPromised);

// Access named exports using the chai namespace object
const expect = chai.expect;

describe('calculateSquare', function (){
    this.timeout(4000);
    it('should resolve with number 4 if passed number 2(with return statement)', function () {
        return calculateSquare(2).then(result => {
            expect(calculateSquare(2)).to.eventually.be.above(3);
            expect(calculateSquare(2)).to.eventually.be.equal(4);
        })
    });

    it('should return a rejected promise when a string is passed', function (){
        return calculateSquare('string').catch((reason) => {
            expect(reason).to.not.equal(null);
            expect(reason.message).to.equal('Argument of type number is expected');
        });
    });
});

