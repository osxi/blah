let { createStore, combineReducers, applyMiddleware } = Redux;

let createStoreWithMiddleware = applyMiddleware(logger)(createStore);

store = createStoreWithMiddleware(appReducer);
