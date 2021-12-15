import React, { useState } from 'react';

const ItemAddForm = ({ onAddItem }) => {

    const [label, setLabel] = useState(``);

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        onAddItem(label);
        setLabel(``);
    };

    return (
        <form
            className="item-add-form d-flex flex-col mt-5"
            onSubmit={onFormSubmit}>
            <input
                type="text"
                className="form-control"
                onChange={({ target }) => setLabel(target.value)}
                value={label}
                placeholder="What needs to be done" />

            <button
                type="submit"
                className="btn btn-outline-secondary mt-3 mb-10">
                Add Element
            </button>
        </form>
    );
};

export default ItemAddForm;
