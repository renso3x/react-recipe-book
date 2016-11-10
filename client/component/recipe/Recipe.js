import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions/recipeActions';

import RecipeList from './RecipeList';

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product))
        }
    }
};

const Recipe = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeList);

export default Recipe;

