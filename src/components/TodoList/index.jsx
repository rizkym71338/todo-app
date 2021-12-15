import React from 'react';
import TodoListItem from '../TodoListItem';

const TodoList = ({ todoData, onDeleted, onToggleImportant, onToggleDone }) => {

    const items = todoData.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {items}
        </ul>
    );
};

export default TodoList;
