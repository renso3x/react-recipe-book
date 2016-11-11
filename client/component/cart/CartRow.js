import React from 'react';

const CartRow = ({
    product,
    price,
    onClick
}) => (
    <li class="list-group-item">
        <a class="badge" onClick={onClick} >x</a>
        <span class="badge">{price}</span>
        {product}
    </li>
)

CartRow.propTypes = {
    product: React.PropTypes.string,
    price: React.PropTypes.string,
    onClick: React.PropTypes.func
}
export default CartRow;