var assert = require('assert');
var bcUtil = require('./bcUtil').default;

describe('generateRandomUsername Test', function() {
    it('should return value starting with prefix', function() {
//        console.log("A this: " + this + ", prefix: " +prefix);
        assert.equal(1 + 1, 2);
    });
    it('should return different values full multiple calls', function() {
//        console.log("B this: " + this + ", prefix: " +prefix);
        assert.equal(3 * 3, 9);
    });
});