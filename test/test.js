const assert = require('assert');
const app = require('./app');

describe('App', function() {
  it('should return 200', function() {
    return app()
      .then(response => {
        assert.equal(response.statusCode, 200);
      });
  });
});