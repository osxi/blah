let { createMessage, receiveMarkdown } = Actions;

var initialState = {};

appReducer = function appReducer(state, action) {
  state = state || initialState;

  switch (action.type) {
    case 'CREATE_MESSAGE':
      return state;
    case 'RECEIVE_MARKDOWN':
      return {
        ...state,
        markdown: action.markdown
      };
    default:
      return state;
  }
}
