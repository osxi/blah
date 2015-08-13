Messages = new Meteor.Collection('messages');

Messages.attachSchema(new SimpleSchema({
  userName: {
    type: String
  },
  channelName: {
    type: String
  },
  body: {
    type: String
  }
}));

Messages.allow({
  insert() {
    return true;
  }
});

Messages.hooks = {
  before: {
    insert(doc) {
      doc.userName = 'blahbot';
      doc.body     = 'Welcome to #' + doc.channelName + '!';

      return doc;
    }
  }
}
