import React from 'react';

import CartRow from './CartRow';

const CartList = ({
    cart,
    removeProduct
}) => (
    <div class="col-md-6">
        <h2>Shopping Cart</h2>
        <ul class="list-group">
            {
                cart.map((product, i) =>
                    <CartRow
                        key={i}
                        product={product}
                        onClick={()=> {
                            removeProduct(i)
                        }}
                    />
                )
            }
        </ul>

        <p class="pull-right">Total: </p>
    </div>
)

export default CartList;
