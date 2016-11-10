let cartId = 0;
export function addToCart(product) {
    return {
        type: 'ADD_TO_CART',
        id: cartId++,
        product
    }
}

export function removeProduct(id) {
    return {
        type: 'REMOVE_IN_CART',
        id
    }
}