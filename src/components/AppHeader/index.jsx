import React from 'react';

const AppHeader = ({ toDo, done }) => {

    return (
        <div className="d-flex items-end">
            <h1 className="text-3xl font-bold flex-grow">Todo List</h1>
            <h2 className="text-xl text-gray-500">{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;
