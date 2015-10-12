# blah

WIP: Realtime chat powered by Meteor

## background

This app is a demo/showcase of the following technologies:
  - Meteor
  - React
  - React Router
  - Redux
  - Radium

## notes

### Redux

To fiddle around with Redux, you can visit the Home/default page of the app, open up your Javascript console, then type `store.dispatch(Actions.receiveMarkdown('Something original'))`. This should dispatch the `RECEIVE_MARKDOWN` action and update the state (corresponding reducer returns a **new** object, representative of the current application state).
