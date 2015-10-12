const { TextField } = mui;

NewMessage = React.createClass({
  _submitHandler() {
    if (!!!this.refs.newMessage.getValue()) {
      return;
    }

    store.dispatch(Actions.createMessage({
      author: 'Me',
      body: marked.inlineLexer(this.refs.newMessage.getValue(), [], {
        santitize: true
      })
    }));

    this.refs.newMessage.clearValue();
  },

  componentDidMount() {
    this.refs.newMessage.focus();
  },

  render() {
    return (
      <div className="new-message">
        <TextField ref="newMessage" hintText="Type something and press enter!" fullWidth={true} onEnterKeyDown={this._submitHandler} />
      </div>
    );
  }
});