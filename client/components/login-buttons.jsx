const {
  TextField,
  RaisedButton,
  FontIcon,
  Snackbar
} = mui;

LoginButtons = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  _loginWithGithub() {
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, err => {
      if (!!err) { throw err; }

      this.context.router.transitionTo('root');
    });
  },

  _loginWithPassword() {
    this.refs.todoSnackbar.show();
  },

  render() {
    return (
      <div className="login-buttons">
        <RaisedButton linkButton={true} label="Github"
                      onClick={this._loginWithGithub}/>

        <p><em>OR</em></p>

        <Snackbar message="TODO: Implement this"
                  ref="todoSnackbar" autoHideDuration={3000} />

        <TextField hintText="Username" fullWidth={true}
                   onEnterKeyDown={this._loginWithPassword} />
        <TextField hintText="Password" fullWidth={true}
                   onEnterKeyDown={this._loginWithPassword} />
        <RaisedButton linkButton={true} label="Log In"
                      onClick={this._loginWithPassword} />
      </div>
    );
  }
});