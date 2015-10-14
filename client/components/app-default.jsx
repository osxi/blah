AppDefault = React.createClass({
  styles: {
    padding: '10px'
  },

  propTypes: {
    markdown: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(Actions.receiveMarkdown('Loading...'));
  },

  componentDidMount() {
    let url = 'https://raw.githubusercontent.com/osxi/blah/master/README.md';

    HTTP.get(url, {}, (err, res) => {
      if (!!err) { throw err; }

      let html = marked(res.content, {
        sanitize: true
      });

      store.dispatch(Actions.receiveMarkdown(html));
    });
  },

  markdown() {
    let { markdown } = this.props;

    return (
      <span dangerouslySetInnerHTML={{__html: markdown}} />
    );
  },

  render() {
    return (
      <div style={this.styles}>
        {this.markdown()}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    markdown: mori.get(state, 'markdown')
  };
};

AppDefault = connect(mapStateToProps)(AppDefault);