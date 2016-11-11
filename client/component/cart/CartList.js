import React from 'react';

import CartRow from './CartRow';

class CartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        const { cart } = nextProps;
        const total = cart.map(product => parseFloat(product.price)).reduce((p, n) => p + n);
        this.setState({ totalPrice: total});
    }

    render() {
        const { cart, removeProduct } = this.props;

        return (
            <div class="col-md-6">
                <h2>Shopping Cart</h2>
                <ul class="list-group">
                    {
                        cart.map((product, i) =>
                            <CartRow
                                key={product.id}
                                product={product.product}
                                price={product.price}
                                onClick={()=> {
                                    removeProduct(i)
                                }}
                            />
                        )
                    }
                </ul>
                <p class="pull-right">Total: {this.state.totalPrice.toFixed(2)} </p>
            </div>
        );
    }
}

//Check prop types
CartList.propTypes = {
    cart: React.PropTypes.array,
    removeProduct: React.PropTypes.func
}

export default CartList;
