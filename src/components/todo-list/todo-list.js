import React, {Component} from 'react';
import ToDoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const FilterType = {
  ALL: 'All',
  ACTIVE: 'Active',
  DONE: 'Done'
}


export default class ToDoList extends Component {
  filterItems = (array, filterType = 'All') => {
    // eslint-disable-next-line
    switch (filterType) {
      case FilterType.ALL:
        return array.filter((item) => item);
      case FilterType.ACTIVE:
        return array.filter((item) => !item.done);
      case FilterType.DONE:
        return array.filter((item) => item.done);
    }
  }
  render() {
    const {todos, onDeleted, onToggleDone, onToggleImportant, currentFilter, searchBarValue} = this.props;
    let filteredArray = this.filterItems(todos, currentFilter);
    if (searchBarValue.length !== 0) {
      filteredArray = filteredArray.filter((item) => item.label.toLowerCase().includes(searchBarValue.toLowerCase()));
    }
    const elements = filteredArray.map((item) => {
      const {id, label, ...todos} = item;
      return (
        <li key={id} className="list-group-item">
          <ToDoListItem todos={todos} label={label} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} onToggleImportant={() => onToggleImportant(id)}/> {/* Затем передаем этот props ниже чилдрену вместе с айдишником */}
        </li>
      )
    });
    return (
      <ul className="list-group todo-list">
       { elements }
      </ul>
    );
  }
}
