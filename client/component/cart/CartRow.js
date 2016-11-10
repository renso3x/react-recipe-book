import React from 'react';

const CartRow = ({
    product,
    onClick
}) => (
    <li class="list-group-item"
        key={product.id} >
        <a class="badge" onClick={onClick} >x</a>
        <span class="badge">{product.price}</span>
        {product.product}

    </li>
)

export default CartRow;