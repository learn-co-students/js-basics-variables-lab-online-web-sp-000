const expect = chai.expect;

describe('index.js', () => {
  describe('companyName', () => {
    it('is set as Scuber', () => {
      expect(companyName).to.equal('Scuber');
    });

    it('raises error if the companyName is changed', () => {
      expect(() => { companyName = 'specialCompany' }).to.throw(TypeError);
    });
  });

  describe('mostProfitableNeighborhood', () => {
    it('is declared as equal to Chelsea', () => {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('does not raise error if the mostProfitableNeighborhood is changed', () => {
      expect(() => { mostProfitableNeighborhood = 'Upper West Side' }).to.not.throw(TypeError);
    });
  });

  describe('companyCeo', () => {
    it('is declared as equal to Susan Smith', () => {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('does not raise error if the companyCeo is changed', () => {
      expect(() => { companyCeo = 'Lauren Hart' }).to.not.throw(TypeError);
    });
  });
});
