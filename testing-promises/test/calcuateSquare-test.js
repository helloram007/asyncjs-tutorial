// Import chai and chai-as-promised
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import calculateSquare from '../src/calculateSquare.js';

// Use chai-as-promised plugin
chai.use(chaiAsPromised);

// Access named exports using the chai namespace object
const expect = chai.expect;

describe('calculateSquare', function (){
    it('should resolve with number 4 if passed number 2(with return statement)', function () {
        return expect(calculateSquare(2)).to.eventually.be.equal(4);
    });

    it('should resolve with number 4 if passed number 2(with notify)', function (done) {
        expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
    });

    it('should become fulfilled when passed number 2', function (done) {
        expect(calculateSquare(2)).to.be.fulfilled.notify(done);
    });

    it('should become rejected if passed a string instead of a number', function (done) {
        expect(calculateSquare('str')).to.be.rejected.notify(done);
    });
});

