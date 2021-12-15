import React from 'react';

const SearchPanel = ({ searchValue, onSearchChange }) => {

    return (
        <input
            type="text"
            className="form-control w-auto flex-grow"
            placeholder="type to search"
            value={searchValue}
            onChange={onSearchChange} />
    );
};

export default SearchPanel;
