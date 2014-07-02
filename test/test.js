var assert    = require("assert");
var blankline = require("./../index.js");

var tmp = 0;
var log = console.log;

console.log = function(){
  tmp += 1;
  log.apply(console, arguments);
}

describe('blankline', function(){
  describe('function call', function(){
    it('should return as many console log as provided', function(){
      blankline(5);
      assert.equal(5, tmp);
    });

    it('should call one console log without arguments', function(){
      tmp = 0;
      blankline();
      assert.equal(1, tmp);
    });
  })
})

