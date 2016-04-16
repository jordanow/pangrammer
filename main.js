var pangram = require('./lib/pangram.js');

exports = module.exports = (function() {
  'use strict';

  function getStarted() {
    try {
      var args = process.argv[2];
      var response = pangram.startTesting(args);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  getStarted();
})();
