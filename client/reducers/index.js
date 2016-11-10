import { combineReducers } from 'redux';

import products from './productReducer';
import cart from './cartReducer';

const reducers = combineReducers({
    cart,
    products
})

export default reducers;