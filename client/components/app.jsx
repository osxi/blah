injectTapEventPlugin();

const {
  AppBar,
  Card,
  LeftNav,
  MenuItem,
  Styles
} = mui;

const { ThemeManager } = Styles;

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

  getChildContext() {
    return {
      muiTheme: ThemeManager().getCurrentTheme()
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

        <AppBar title="Blah" onLeftIconButtonTouchTap={this._toggleNav} />

        <Card>
          <RouteHandler />
        </Card>
      </div>
    );
  }
});