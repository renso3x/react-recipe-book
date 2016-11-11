import React from 'react';

const EditForm = ({
    product,
    onSave,
    onClick
}) => {
    const handleUpdate = () => {
        onSave(product, false);
    }
    return (
        <div>
            <input defaultValue={product} onChange={(e) => {
                product = e.target.value;
            }}/>
            <button class="btn btn-primary" onClick={handleUpdate}> Save </button>
            <button class="btn btn-default" onClick={onClick}> Cancel </button>
        </div>
    )
}

export default EditForm;