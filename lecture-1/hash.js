const crypto = require('crypto');

const hashSecret = 'This_is_just_an_optional_secret_we_can_use';

module.exports = {

  create: (message) => {
    // Creating a 256bit hash using SHA256
    // output in hex form
    const hash = crypto.createHmac('sha256', hashSecret)
                       .update(message)
                       .digest('hex');
    return hash;
  },

  verify: (message, hash) => {
    // Validating a 256bit hash with SHA256
    // If we receive a hash, then we just recreate the hash, and compare them

    // using the same input and the output hash from before ^
    const newHash = crypto.createHmac('sha256', hashSecret)
                          .update(message)
                          .digest('hex');
    return newHash === hash;
  }

};
