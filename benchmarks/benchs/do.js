const assert = require('assert');

module.exports.title = 'do <random number>';
module.exports.displaySql = 'do ?';
module.exports.benchFct = function (conn, deferred) {
  conn
    .query('do ?', [Math.floor(Math.random() * 50000000)])
    .then((rows) => {
      // let val = Array.isArray(rows) ? rows[0] : rows;
      // assert.equal(1, val.info ? val.info.affectedRows : val.affectedRows);
      deferred();
    })
    .catch((err) => {
      throw err;
    });
};
