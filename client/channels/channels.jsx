Channels = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      messages: Messages.find().fetch()
    };
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  styles() {
    return {
      padding: '10px'
    };
  },

  _mapMessages(message) {
    return (<Message key={message._id} author={message.author}
      body={message.body} />);
  },

  render() {
    var params = this.context.router.getCurrentParams();

    var messages = this.data.messages.map(this._mapMessages);

    return (
      <div className="channels" style={this.styles()}>
        <h3>#{params.channelName}</h3>

        <div className="messages">
          {messages}
        </div>

        <NewMessage />
      </div>
    );
  }
});