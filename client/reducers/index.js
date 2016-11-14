import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './productReducer';
import cart from './cartReducer';

const reducers = combineReducers({
    cart,
    products,
    routing: routerReducer
})

export default reducers;