"use strict";

if (typeof MochaWeb !== 'undefined') {
  MochaWeb.testOnly(() => {
    describe('channels', () => {
      it('is ready to be tested', () => {
        return MTT.clickOn('+ New Channel')
          .then(() => MTT.fillIn('It types something here', 'foo'))
          .then(() => MTT.clickOn('Create'))
          .then(() => {
            var newChannel = $(".side-bar-container a:contains('foo')");
            chai.expect(newChannel.length).to.be.eq(1);
          });
      });
    });
  });
}
