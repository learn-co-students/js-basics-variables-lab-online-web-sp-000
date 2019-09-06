const chai = require('chai')
const expect = chai.expect;
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')



describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/, "Expected companyName to be a const");
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('does not raise error if the mostProfitableNeighborhood is changed', function () {
      expect(function () { mostProfitableNeighborhood = 'Upper West Side' }).to.not.throw(TypeError);
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('does not raise error if the companyCeo is changed', function () {
      expect(function () { companyCeo = 'Lauren Hart' }).to.not.throw(TypeError);
    });
  });
});

// NOTES:

// describe
// a function provided by our test library, Mocha.

// it's used to hold your tests.
// after the word 'describe' is information about your tests.

// tests are used as a way to document the behavior of a function to developers

// example:
// the next word 'describe' is followed by the word 'companyName'

// here the test is telling you that the tests that come afterwards
// will be about companyName.

// then comes the word 'it', where you see the following:

it('is set as Scuber', function () {
  // tests are here
});

// this is telling us that the companyName should be set to Scuber.
// finally, filling in the missing part of the it code, you see:

it('is set as Scuber', function () {
  expect(companyName).to.equal('Scuber');
});

// this example shows that the test expects companyName to equal Scuber.
// the 'expect' and 'to.equal' are essentially doing the same thing as
// companyName == 'Scuber'

// in other words, expect(companyName).to.equal('Scuber') is running code
// that will have this first test pass if companyName equals Scuber
// and fail if it does not.
