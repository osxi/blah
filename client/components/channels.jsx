const { findDOMNode } = React;

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
    let messages = findDOMNode(this.refs.messages);

    $(messages).animate({
      scrollTop: $(messages).height()
    }, 200);
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

  _channelName() {
    return this.context.router.getCurrentParams().channelName;
  },

  _mapMessages(message) {
    return (<Message key={message._id} author={message.author}
                     body={message.body} />);
  },

  render() {
    let { styles }  = this;
    let messages    = this.data.messages.map(this._mapMessages);
    let channelName = this._channelName();

    return (
      <div style={styles.channels}>
        <h3>#{channelName}</h3>

        <div ref="messages" style={styles.messages}>
          {messages}
        </div>

        <NewMessage />
      </div>
    );
  }
});