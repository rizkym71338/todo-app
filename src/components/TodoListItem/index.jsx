import React from 'react';

const TodoListItem = ({ label, done, important, onDeleted, onToggleImportant, onToggleDone }) => {

    const classNames = `todo-list-item ${done ? `done` : ``} ${important ? `important` : ``}`;

    const style = {
        color: important ? `steelblue` : `black`,
        fontWeight: important ? `bold` : `normal`,
    };

    return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                style={style}
                onClick={onToggleDone}
                onKeyDown={onToggleDone}
                role="button"
                tabIndex={0}>
                {label}
            </span>

            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right w-8 mx-1"
                onClick={onToggleImportant}>
                <i className="fa fa-exclamation" />
            </button>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right w-8 mx-1"
                onClick={onDeleted}>
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
};

export default TodoListItem;
