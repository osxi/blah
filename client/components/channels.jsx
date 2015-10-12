Channels = React.createClass({
  mixins: [ReactMeteorData],

  contextTypes: {
    router: React.PropTypes.func
  },

  getMeteorData() {
    return {
      messages: Messages.find().fetch()
    };
  },

  componentWillUpdate(_nextProps, _nextState) {
    this._scrollToBottom();
  },

  componentDidMount() {
    this._scrollToBottom();
  },

  _scrollToBottom() {
    $('.messages').animate({scrollTop: $(document).height()}, 200);
  },

  styles: {
    channels: {
      padding: '10px',
      height: 'calc(100vh - 102px)',
      overflow: 'scroll'
    },
    messages: {
      height: '85%',
      overflow: 'auto'
    }
  },

  _mapMessages(message) {
    return (<Message key={message._id} author={message.author}
      body={message.body} />);
  },

  render() {
    var params = this.context.router.getCurrentParams();

    var messages = this.data.messages.map(this._mapMessages);

    return (
      <div className="channels" style={this.styles.channels}>
        <h3>#{params.channelName}</h3>

        <div className="messages" style={this.styles.messages}>
          {messages}
        </div>

        <NewMessage />
      </div>
    );
  }
});