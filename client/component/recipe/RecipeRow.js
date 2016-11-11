import React from 'react';

import EditForm from './EditForm';

class RecipeRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editable: false};
        this.onEdit = this.onEdit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancelEdit = this.onCancelEdit.bind(this);
    }

    onEdit() {
        this.setState({editable: true});
    }

    onUpdate(product, canEdit) {
        const { onUpdate } = this.props;
        onUpdate(product);
        this.setState({editable: canEdit});
    }

    onCancelEdit() {
        this.setState({editable: false});
    }

    render() {
        const { product, price, onClick } = this.props;

        return (
            <div class="list-group-item">
                {
                    this.state.editable ?
                        <EditForm
                            product={product}
                            onSave={this.onUpdate}
                            onClick={this.onCancelEdit}
                        /> :
                        <div>
                            <a href="#">
                                <h4 class="list-group-item-heading">{product}</h4>
                                <p class="list-group-item-text">{price}</p>
                            </a>
                            <button class="btn btn-info" onClick={this.onEdit}> Edit </button>
                            <button class="btn btn-success" onClick={onClick}> Add To Cart</button>
                        </div>
                }
            </div>
        )
    }
}

RecipeRow.propTypes = {
    product: React.PropTypes.string,
    price: React.PropTypes.string,
    onClick: React.PropTypes.func,
}

export default RecipeRow;