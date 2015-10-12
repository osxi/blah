injectTapEventPlugin();

const {
  AppBar,
  Card,
  LeftNav,
  MenuItem,
  Styles
} = mui;

const AppTheme = new Styles.ThemeManager();

AppTheme.setTheme(AppTheme.types.DARK);

const {
  RouteHandler
} = ReactRouter;

menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: 'Channels' },
  {
    route: 'channels',
    params: {
      channelName: 'General'
    },
    text: 'General'
  },
  { type: MenuItem.Types.SUBHEADER, text: 'About' },
  { route: 'root', text: 'Home' },
  { route: 'settings', text: 'Settings' },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/osxi/blah',
     text: 'Fork Me'
  }
];

App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  styles: {
    appBar: {
      backgroundColor: '#1E1E1E'
    },

    appCard: {
      color: '#fff'
    }
  },

  getChildContext() {
    return {
      muiTheme: AppTheme.getCurrentTheme()
    };
  },

  _onLeftNavChange(_e, _key, payload) {
    this.context.router.transitionTo(payload.route, payload.params);
  },

  _toggleNav() {
    this.refs.leftNav.toggle();
  },

  render() {
    return (
      <div className="app">
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} onChange={this._onLeftNavChange} />

        <AppBar title="Blah" onLeftIconButtonTouchTap={this._toggleNav} style={this.styles.appBar} />

        <Card style={this.styles.appCard}>
          <RouteHandler />
        </Card>
      </div>
    );
  }
});