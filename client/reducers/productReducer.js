import productsData from '../data/products';

import update from 'react-addons-update';

const products = (state=productsData, action) => {
    switch (action.type) {
        case 'UPDATE_PRODUCT_NAME':
            return state.map((item, index) => {
                if(index !== action.index) {
                    return item;
                }

                return {
                    ...item,
                    product: action.product
                }
            });
        default:
            return state;
    }
}

export default products;