import React, { PureComponent } from 'react';

import AppHeader from '../../components/AppHeader';
import SearchPanel from '../../components/SearchPanel';
import ItemStatusFilter from '../../components/ItemStatusFilter';
import TodoList from '../../components/TodoList';
import ItemAddForm from '../../components/ItemAddForm';

export default class App extends PureComponent {

    static getIndexItem(arr, id) {
        return arr.findIndex((it) => it.id === id);
    }

    static search(items, term) {
        return term.length === 0
            ? items
            : items.filter(({ label }) => label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    static getFilteredItems(items, filterName) {
        switch (filterName) {
            case `all`:
                return items;
            case `active`:
                return items.filter((it) => !it.done);
            case `done`:
                return items.filter((it) => it.done);
            default:
                return items;
        }
    }

    static togglePropItem(arr, id, propName) {
        const indexUpdatedItem = App.getIndexItem(arr, id);
        const oldItem = arr[indexUpdatedItem];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        const newData = [
            ...arr.slice(0, indexUpdatedItem),
            newItem,
            ...arr.slice(indexUpdatedItem + 1),
        ];

        return newData;
    }

    maxId = 100;

    state = {
        todoData: [
            this._createTodoItem(`Drink Coffee`),
            this._createTodoItem(`Make Awesome App`),
            this._createTodoItem(`Have A Lunch`),
        ],
        term: ``,
        filterName: `all`,
    };

    _handleDeletedItemClick = (id) => {
        this.setState((prevState) => {
            const deletedIndexItem = App.getIndexItem(prevState.todoData, id);
            const newData = [
                ...prevState.todoData.slice(0, deletedIndexItem),
                ...prevState.todoData.slice(deletedIndexItem + 1),
            ];

            return { todoData: newData };
        });
    };

    _handelAddItemClick = (label) => {
        this.setState((prevState) => {
            const newData = [this._createTodoItem(label), ...prevState.todoData];

            return { todoData: newData };
        });
    };

    _handelToggleImportantClick = (id) => {
        this.setState((prevState) => {
            return { todoData: App.togglePropItem(prevState.todoData, id, `important`) };
        });
    };

    _handelToggleDoneClick = (id) => {
        this.setState((prevState) => {
            return { todoData: App.togglePropItem(prevState.todoData, id, `done`) };
        });
    };

    _handleFilterBtnClick = (filterName) => {
        this.setState({ filterName });
    };

    _handleSearchChange = (evt) => {
        this.setState({ term: evt.target.value });
    };

    _createTodoItem(label) {
        this.maxId += 1;
        return { label, important: false, done: false, id: this.maxId };
    }

    render() {
        const { todoData, filterName, term } = this.state;
        const visibleItems = App.getFilteredItems(App.search(todoData, term), filterName);
        const doneCount = todoData.filter((it) => it.done).length;
        const toDoCount = todoData.length - doneCount;

        return (
            <div className="max-w-3xl mt-8 mx-auto px-3">
                <AppHeader toDo={toDoCount} done={doneCount} />
                <div className="flex flex-col my-4 w-full">
                    <SearchPanel searchValue={term} onSearchChange={this._handleSearchChange} />
                    <ItemStatusFilter filterName={filterName} onFilterBtnClick={this._handleFilterBtnClick} />
                </div>

                <TodoList
                    todoData={visibleItems}
                    onDeleted={this._handleDeletedItemClick}
                    onToggleImportant={this._handelToggleImportantClick}
                    onToggleDone={this._handelToggleDoneClick} />
                <ItemAddForm onAddItem={this._handelAddItemClick} />
            </div>
        );
    }

}
