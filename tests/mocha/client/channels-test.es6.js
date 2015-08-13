"use strict";

if (typeof MochaWeb !== 'undefined') {
  MochaWeb.testOnly(() => {
    describe('channels', () => {
      it('can create channels', () => {
        return MTT.clickOn('+ New Channel')
          .then(() => MTT.fillIn('It types something here', 'foo'))
          .then(() => MTT.clickOn('Create'))
          .then(() => {
            var newChannel = $(".side-bar-container a:contains('foo')");
            chai.expect(newChannel.length).to.be.eq(1);
          });
      });

      it.skip('shows Nothing to See Here by default', () => {
        var defaultText = $("h3:contains('Nothing to See Here')");
        chai.expect(defaultText.length).to.eql(1);
      })
    });
  });
}
