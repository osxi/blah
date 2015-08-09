Template.ChannelMessage.helpers({
  avatarFallback() {
    let rand = function*() {
      while(true) {
        yield Math.random();
      }
    };

    return "http://api.adorable.io/avatars/65/" + rand().next().value + ".png";
  }
});
