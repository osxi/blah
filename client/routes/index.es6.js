Router.route('/', function() {
  this.layout('blah');
  // TODO: render placeholder or last visited channel
});

Router.route('/channel/:channelName', function() {
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
});
