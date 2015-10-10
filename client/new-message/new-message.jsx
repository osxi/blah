const { TextField } = mui;

NewMessage = React.createClass({
  _submitHandler() {
    store.dispatch(Actions.createMessage({
      author: 'Me',
      body: this.refs.newMessage.getValue()
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