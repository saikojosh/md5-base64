'use strict';

/*
 * MD5-BASE64
 */

const crypto = require('crypto');

module.exports = function (input) {

  // Create the algorithm.
  const algo = crypto.createHash('md5');

  // Create the base64 encoded hash.
  algo.update(input);
  return algo.digest('base64');

};
