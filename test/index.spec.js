import fpSwitch  from '../src/index.js';
import chai from 'chai';
chai.should();

describe('Functional switch', function() {
    this.timeout(10);
    it('should be curried', function () {
        const args = [null, {3: 2}, 3];
        fpSwitch(...args).should.equal(fpSwitch(args[0])(args[1])(args[2]))
    });

    it('should return first argument if provided value not in cases', function() {
        const expectedResult = 'default value';
        fpSwitch(expectedResult, {3:2}, null).should.equal(expectedResult);
    });

    it('should return case value if provided value equals case key', function () {
        const expectedResult = 2;
        fpSwitch('default value', {3: 2}, 3).should.equal(expectedResult);
    });

    it('should return case value if provided 3 (number) and case key is 3', function() {
        const expectedResult = 2;
        fpSwitch('default value', {3:2}, 3).should.equal(expectedResult);
    });

    it('should run case function if provided value equals case key', function() {
        const expectedResult = 'kek!';
        fpSwitch('default value', {3: () => 'kek!'}, 3).should.equal(expectedResult);
    });

    it('should use provided value as argument of case function if keys matched', function() {
        let used = false;
        fpSwitch('default value', {3: (v) => used = v}, 3);
        (used).should.be.equal(3);
    });

    it('should run defaultcase if default case is function', function () {
        const defaultCase = () => true;
        fpSwitch(defaultCase, {2: 3}, 3).should.be.true;
    })
});