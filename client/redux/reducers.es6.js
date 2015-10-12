let { createMessage, receiveMarkdown } = Actions;

var initialState = mori.hashMap();

appReducer = function appReducer(state, action) {
  state = state || initialState;

  switch (action.type) {
    case 'CREATE_MESSAGE':
      return state;
    case 'RECEIVE_MARKDOWN':
      return mori.merge(
        state,
        mori.hashMap('markdown', action.markdown)
      );
    default:
      return state;
  }
}
