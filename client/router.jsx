const {
  Route,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

const routes = (
  <Route name="root" path="/" handler={App}>
    <Route name="channels" path="channels/:channelName" handler={Channels} />
    <Route name="settings" path="settings" handler={Settings} />
    <Route name="login" path="login" handler={Login} />
    <DefaultRoute handler={AppDefault} />
    <NotFoundRoute handler={AppNotFound} />
  </Route>
)

const router = ReactRouter.create({
  routes: routes,
  location: ReactRouter.HistoryLocation
});

Meteor.startup(function () {
  router.run(function (Handler, state) {
    React.render(
      <Provider store={store}>
        {() => <Handler routerState={state} />}
      </Provider>,
      document.getElementById("app-container")
    );
  });
});