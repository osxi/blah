const { TextField } = mui;

NewMessage = React.createClass({
  _submitHandler() {
    let { newMessage } = this.refs;

    if (!!!newMessage.getValue()) {
      return;
    }

    store.dispatch(Actions.createMessage({
      author: Meteor.user().profile.name,
      body: marked.inlineLexer(newMessage.getValue(), [], {
        santitize: true
      })
    }));

    newMessage.clearValue();
  },

  componentDidMount() {
    this.refs.newMessage.focus();
  },

  render() {
    return (
      <TextField ref="newMessage" hintText="Type something and press enter!"
                 fullWidth={true} onEnterKeyDown={this._submitHandler} />
    );
  }
});