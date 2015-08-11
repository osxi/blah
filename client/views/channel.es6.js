Template.Channel.helpers({
  channelName() {
    try {
      return "#" + this.messages().fetch()[0].channelName;
    } catch(_e) {
      return "Channel does not exist";
    }
  }
});
