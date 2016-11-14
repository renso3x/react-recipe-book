import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link } from 'react-router';

import store, { history } from './store';

import App from './app';
import RecipeLayout from './component/recipe/RecipeLayout';
import Recipe from './component/recipe/Recipe';

const MainLayout = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute name="recipes" component={RecipeLayout} />
                <Route path="product/:prodId" name="recipe" component={Recipe} />
            </Route>
        </Router>
    </Provider>
)

render(<MainLayout />, document.getElementById('root'))

