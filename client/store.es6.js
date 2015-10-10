let { createStore, combineReducers, applyMiddleware } = Redux;

let createStoreWithMiddleware = applyMiddleware(logger)(createStore);

store = createStoreWithMiddleware(appReducer);

store.getReactiveState = function(key) {
  return store.getState().get(key);
};
