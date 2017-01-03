var Q = require('q');

module.exports = {
  start: function() {
    var q = Q.defer();
    q.resolve();

    console.log('Starting Start Wizard');
    
    return q.promise;
  }
}
