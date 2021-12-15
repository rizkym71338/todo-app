import React from 'react';

const buttonLabels = [
    { name: `all`, label: `All` },
    { name: `active`, label: `Active` },
    { name: `done`, label: `Done` },
];

const ItemStatusFilter = ({ filterName, onFilterBtnClick }) => {

    const buttons = buttonLabels.map(({ name, label }) => (
        <button
            type="button"
            key={name}
            className={`py-1 px-3 rounded duration-300 hover:bg-slate-500 hover:text-white ${filterName === name ? `bg-blue-500 text-white` : ``}`}
            onClick={() => onFilterBtnClick(name)}>
            {label}
        </button>
    ));

    return (
        <div className="flex w-auto mx-auto my-3">
            {buttons}
        </div>
    );
};

export default ItemStatusFilter;
