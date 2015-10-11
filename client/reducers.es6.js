let { createMessage, receiveMarkdown } = Actions;

var reactiveState = new ReactiveDict('redux-state');

appReducer = function appReducer(state, action) {
  state = state || reactiveState;

  switch (action.type) {
    case 'CREATE_MESSAGE':
      return state;
    case 'RECEIVE_MARKDOWN':
      state.set('markdown', action.markdown);
      return state;
    default:
      return state;
  }
}
