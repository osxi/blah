Meteor.methods({
  newMessage(channelName, body) {
    Messages.insert({
      userName: "Anonymous",
      channelName: channelName,
      body: body
    });
  }
});
