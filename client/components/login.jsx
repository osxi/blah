Login = React.createClass({
  styles: {
    padding: '10px'
  },

  render() {
    return (
      <div style={this.styles}>
        <h1>Login via...</h1>

        <LoginButtons />
      </div>
    );
  }
});