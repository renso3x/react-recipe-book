import React from 'react';

import Cart from '../cart/Cart';
import Recipes from './Recipes';

const RecipeLayout = () => (
    <div class="container">
        <Recipes />
        <Cart />
    </div>
);

export default RecipeLayout;