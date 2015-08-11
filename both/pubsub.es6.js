if (Meteor.isServer) {
  Meteor.publish('messages', () => Messages.find());
}
