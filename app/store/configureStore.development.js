import { compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
// import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import rootEpic from '../epics/index.js';


const logger = createLogger({
  level: 'info',
  collapsed: true
});

const epicMiddleware = createEpicMiddleware(rootEpic);

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(epicMiddleware, router, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
