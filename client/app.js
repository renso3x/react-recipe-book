import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions/recipeActions';

import Main from './main';

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default App;