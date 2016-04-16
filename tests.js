var assert = require('assert'),
  pangram = require('./lib/pangram.js');

exports = module.exports = (function() {
  'use strict';

  describe('Testing with known pangrams', function() {
    var tests = [{
      str: 'how razorback jumping frogs can level six piqued gymnasts',
      output: 1
    }, {
      str: 'we promptly judged antique ivory buckles for the next prize',
      output: 1
    }, {
      str: 'waltz, nymph, for quick jigs vex bud',
      output: 1
    }, {
      str: 'mr. jock, tv quiz phd, bags few lynx',
      output: 1
    }, {
      str: 'cwm fjord-bank glyphs vext quiz',
      output: 1
    }, {
      str: "blowzy night-frumps vex'd jack q",
      output: 1
    }, {
      str: 'squdgy fez, blank jimp crwth vox',
      output: 1
    }, {
      str: 'tv quiz drag nymphs blew jfk cox.',
      output: 1
    }, {
      str: "q-kelt vug dwarf combs jynx phiz.",
      output: 1
    }];

    tests.forEach(function(test) {
      it("should return " + test.output + " for - " + test.str.toLowerCase(), function() {
        var res = pangram.test(test.str);
        assert.equal(test.output, res);
      });
    });

  });

  describe('Testing with known faulty pangrams', function() {
    var tests = [{
      str: 'The quick brown fox jumps over busy dog.',
      output: "alz"
    }, {
      str: "mr. jock, tv quiz phd, bags few",
      output: "lnxy"
    }, {
      str: "blowzy night-frumps vex'd q",
      output: "acjk"
    }, {
      str: ' b cd x rs  ijk pno f vu',
      output: "aeghlmqtwyz"
    }, {
      str: "the quick brown fox jump over the lazi dog",
      output: "sy"
    }, {
      str: "squdgy fez, blank jimp crwth",
      output: "ovx"
    }, {
      str: "we promptly judge antique ivory buckles for the prize",
      output: "x"
    }];

    tests.forEach(function(test) {
      it("should return " + test.output + " for - " + test.str, function() {
        var res = pangram.test(test.str);
        assert.equal(test.output, res);
      });
    });

  });

})();
