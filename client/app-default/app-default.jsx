AppDefault = React.createClass({
  styles: {
    padding: '10px'
  },

  getInitialState() {
    return {markdown: 'Loading...'};
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
    let markdown = store.getReactiveState('markdown');

    return (
      <span dangerouslySetInnerHTML={{__html: markdown}} />
    );
  },

  render() {
    return (
      <div className="app-loading" style={this.styles}>
        {this.markdown()}
      </div>
    );
  }
});