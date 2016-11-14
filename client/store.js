import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducers from './reducers';

const store = createStore(reducers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;


