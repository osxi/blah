Router.route('/channels/:channel_name', function() {
  var params = this.params;

  this.layout('blah');

  this.render('Channel', {
    data: {
      messages() {
        return Messages.find({
          channelName: params.channel_name
        });
      }
    }
  });
}, {
  name: 'channels.show',
  waitOn() {
    return Meteor.subscribe('messages');
  }
});
