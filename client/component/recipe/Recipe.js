import React from 'react';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: []};
    }

    componentDidMount() {
        const index= this.props.products.findIndex((prod) => prod.id == this.props.params.prodId);
        this.setState({
            product: this.props.products[index]
        });
    }

    render() {
        const { product } = this.state;
        return (
            <div class="container">
                <h2>{product.product}</h2>
                <h4 class="list-group-item-heading">{product.price}</h4>
            </div>
        )
    }
}
export default Recipe;