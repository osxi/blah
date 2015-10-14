const { createMessage, receiveMarkdown } = Actions;

const initialState = mori.hashMap();

appReducer = function appReducer(state=initialState, action) {
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
