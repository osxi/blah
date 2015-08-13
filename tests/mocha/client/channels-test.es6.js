"use strict";

if (typeof MochaWeb !== 'undefined') {
  MochaWeb.testOnly(() => {
    describe('channels', () => {
      it('is ready to be tested', () => {
        chai.expect(true).to.eql(true)
      });
    });
  });
}
