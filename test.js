const assert = require('assert')
const getpreciofinal = require('./trabajo').preciofinalpt1


describe("resultado del precio final numero 1", function(){
    it("producto del precio final 1 - descuento 1",function(){
        var expected =90;

        var actual  = getpreciofinal(100, 10);
        assert.equal(actual, expected);
});

});