AppDefault = React.createClass({
  styles() {
    return {
      padding: '10px'
    };
  },

  render() {
    return (
      <div className="app-loading" style={this.styles()}>
        Welcome!
      </div>
    );
  }
});