Template.Channel.helpers({
  channelName() {
    try {
      return "#" + this.messages().fetch()[0].channelName;
    } catch(_e) {
      return "Channel does not exist";
    }
  }
});

Template.Channel.onRendered(() => {
  $('.big-input input').focus();
});

Template.Channel.events({
  "submit .big-input"(e) {
    var input = $(e.target).find('input');
    var body = input.val();
    var channelName = Router.current().params.channel_name;

    Meteor.call('newMessage', channelName, body, (err, res) => {
      if (err) { console.log('something went wrong: ', err) }

      input.val('');
    });
  }
});
