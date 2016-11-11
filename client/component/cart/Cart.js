import React from 'react';
import createFragment from 'react-addons-create-fragment';

import { connect } from 'react-redux';

import { removeProduct } from '../../actions/recipeActions';

import CartList from './CartList';

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (
    dispatch
) => {
    return {
        removeProduct: (id) => {
            dispatch(removeProduct(id))
        }
    }
};

const Cart = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartList);

export default Cart;