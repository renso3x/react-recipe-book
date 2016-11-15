import { applyMiddleware, createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import axios from 'axios';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducers, middleware);

store.dispatch((dispatch) => {
    dispatch({
        type: 'FETCH_USERS',
        payload: axios('http://rest.learncode.academy/api/johnbob/friends')
    })
})

export const history = syncHistoryWithStore(browserHistory, store);

export default store;


