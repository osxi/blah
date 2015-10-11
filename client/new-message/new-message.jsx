const { TextField } = mui;

NewMessage = React.createClass({
  _submitHandler() {
    if (!!!this.refs.newMessage.getValue()) {
      return;
    }

    store.dispatch(Actions.createMessage({
      author: 'Me',
      body: marked(this.refs.newMessage.getValue(), {
        santitize: true
      })
    }));

    this.refs.newMessage.clearValue();
  },

  render() {
    return (
      <div className="new-message">
        <TextField ref="newMessage" hintText="Type something and press enter!" fullWidth={true} onEnterKeyDown={this._submitHandler} />
      </div>
    );
  }
});