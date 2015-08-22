"use strict";

if (typeof MochaWeb !== 'undefined') {
  MochaWeb.testOnly(() => {
    beforeEach(done => {
      Messages.insert({
        userName: 'blahbot',
        channelName: 'general',
        body: 'Welcome to #general!'
      });
      done();
    });

    describe('channels', () => {
      it('can create channels', () => {
        return MTT.clickOn('+ New Channel')
          .then(MTT.fillIn('It types something here', 'foo'))
          .then(MTT.clickOn('Create'))
          .then(() => {
            var newChannel = $(".side-bar-container a:contains('foo')");
            chai.expect(newChannel.length).to.be.eq(1);
          });
      });

      it('can add new messages', () => {
        return MTT.fillIn('Say Something!', 'pringles')
          .then(MTT.clickOn('Send'))
          .then(() => {
            var newMessage = Messages.findOne({
              channelName: 'general',
              body: 'Welcome to #general!'
            });

            chai.expect(newMessage).to.not.eql(undefined);
          });
      });

      it('shows Nothing to See Here by default', () => {
        var defaultText = $("h3:contains('Nothing to See Here')");
        chai.expect(defaultText.length).to.eql(1);
      })
    });
  });
}
