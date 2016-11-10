import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Cart from './component/cart/Cart';
import Recipe from './component/recipe/Recipe';

const MainLayout = () => (
    <div class="container">
        <Recipe />
        <Cart />
    </div>
)

render(
    <Provider store={store}>
        <MainLayout/>
    </Provider>,
    document.getElementById('root')
)

