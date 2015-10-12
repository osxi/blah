logger = store => next => action => {
  log('\n[Dispatching]', action);
  let result = next(action);
  log('[Store]', Object.keys(store.getState()));
  return result;
};

function log() {
  if (__debug_redux) {
    console.log.apply(console, arguments);
  }
}
__debug_redux = true
