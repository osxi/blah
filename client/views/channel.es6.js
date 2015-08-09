Template.Channel.helpers({
  channelName() {
    try {
      return "#" + this.messages().fetch()[0].channel_name;
    } catch(_e) {
      return "Channel does not exist";
    }
  }
});
