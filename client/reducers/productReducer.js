//import default product values;
import productsData from '../data/products';

const products = (state=productsData, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default products;