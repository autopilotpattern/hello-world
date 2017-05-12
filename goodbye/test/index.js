'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Wreck = require('wreck');
const Hello = require('../');


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('Goodbye', () => {
  it('responds with a 200 and the word "Goodbye"', (done) => {
    Wreck.get(`http://localhost:${Goodbye.address().port}/`, (err, res, payload) => {
      expect(err).to.not.exist();
      expect(res.statusCode).to.equal(200);
      expect(payload.toString()).to.equal('Goodbye');
      done();
    });
  });
});
