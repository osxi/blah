Router.route('/', function() {
  this.layout('blah');

  this.render('NothingToSeeHere');
}, {
  waitOn() {
    return Meteor.subscribe('messages');
  }
});
