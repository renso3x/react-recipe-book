import React from 'react';

import RecipeRow from './RecipeRow';

const RecipeList = ({
    products,
    addToCart
}) => (
    <div class="col-md-6">
        <h2>List of Products </h2>
        <div class="list-group">
            {
                products.map(product =>
                    <RecipeRow
                        key={product.id}
                        {...product}
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                    />
                )
            }
        </div>
    </div>
)


export default RecipeList;