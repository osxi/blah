Template.SideBar.events({
  'click .new-channel-modal-link'() {
    $('.new-channel-modal').modal('show');

    // todo: put this in a better place
    $('.create-channel-btn').on('click', () => {
      $('#new-channel-form').submit();
    });

    // todo: put this in a better place
    $('.close-create-channel-modal').on('click', () => {
      $('.new-channel-modal').modal('hide');
    });
  }
});

Template.SideBar.helpers({
  channels() {
    return _.uniq(Messages.find({}, {
      sort: {channelName: 1},
      fields: {channelName: true}
    }).fetch().map(channel => channel.channelName), true);
  }
});
