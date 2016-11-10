const cartCompose = (state, action) => {
    switch(action.type) {
         case 'ADD_TO_CART':
            return {
                id: action.id,
                product: action.product.product,
                price: action.product.price
            };
        default:
            return state;
    }
}

const cart = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                cartCompose(null, action)
            ];
        case 'REMOVE_IN_CART':
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];
        default:
            return state;
    }
}

export default cart;