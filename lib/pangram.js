/*jshint esnext: true */

exports = module.exports = {
  test: function(str) {
    return checkForPangram(str);
  },
  startTesting: function(input) {
    "use strict";

    let args = input.split(",");

    if (args.length <= 0) {
      throw new Error("No input available");
    }

    let numOfStrings = parseInt(args[0]);

    if (isNaN(numOfStrings) || numOfStrings <= 0) {
      throw new Error('Number of strings must be a positive integer');
    }

    if (args.length - 1 !== numOfStrings) {
      throw new Error("Number of input strings does not match the number of strings entered");
    }

    let responses = [];
    args.shift();

    args.forEach(function(str) {
      let res = checkForPangram(str);
      responses.push(res);
    });

    return responses.join("\n");
  }
};

/**
 * Will return 1 if it is a pangram,
 * else returns the missing alphabets
 * @param  {[type]} str Lower cased input string
 * @return {[type]}     [description]
 */

function checkForPangram(str) {
  "use strict";

  str = str.toLowerCase();

  if (str.length < 1 || str.length > Math.pow(10, 5)) {
    throw new Error('String out of bounds');
  }

  let alphs = str.split(""),
    asciiMap = {},
    missingAlphs = '';

  let start = "a".charCodeAt(),
    end = "z".charCodeAt();

  for (let i of alphs) {
    if (!asciiMap[i] && i !== ' ') {
      asciiMap[i.charCodeAt()] = {};
    }
  }

  for (let i = start; i <= end; i++) {
    if (!asciiMap[i]) {
      missingAlphs += String.fromCharCode(i);
    }
  }

  return missingAlphs === '' ? 1 : missingAlphs;
}
