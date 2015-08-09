if (Meteor.isServer) {
  Meteor.publish('messages', () => Messages.find());
}

if (Meteor.isClient) {
  Meteor.subscribe('messages');
}
