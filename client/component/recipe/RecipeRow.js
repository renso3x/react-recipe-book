import React from 'react';

const RecipeRow = ({
    product,
    price,
    onClick
}) => (
    <a  href="#"
        class="list-group-item"
        onClick={onClick}>
        <h4 class="list-group-item-heading">{product}</h4>
        <p class="list-group-item-text">{price}</p>
    </a>
)

RecipeRow.propTypes = {
    product: React.PropTypes.string,
    price: React.PropTypes.string,
    onClick: React.PropTypes.func,
}

export default RecipeRow;