import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import AddListItem from '../add-list-item';
import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.initId = 1;
    this.state = {
      toDoData: [
        this.createTodoItem('Написать функцию'),
        this.createTodoItem('Отфильтровать массив'),
        this.createTodoItem('Посмотреть мемы'),
      ],
      currentFilter: 'All',
      searchBarValue: ''
    }
  }

  createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: this.initId++
    }
  }

  deleteItem = (id) => {
    this.setState(({toDoData}) => {
      return {
        toDoData: toDoData.filter((item) => item.id !== id)
      }
    })
  }

  addItem = (text) => {
    this.setState(({toDoData}) => {
      const newArray = toDoData.slice();
      newArray.push(this.createTodoItem(text))
      return {
        toDoData: newArray
      }
    })
  }

  toggleProp = (id, prop) => {
    this.setState(({toDoData}) => {
      const newArray = [...toDoData];
      const  [targetItem]  = newArray.filter((item) => item.id === id);
      targetItem[prop] = !targetItem[prop];
      return {
        toDoData: newArray
      }
    })
  }

  onToggleDone = (id) => {
    this.toggleProp(id, 'done');
  }

  onToggleImportant = (id) => {
    this.toggleProp(id, 'important');
  }
  
  setFilterType = (filterType) => {
    this.setState({
      currentFilter: filterType
    })
  }

  setSearchBarValue = (value) => {
    console.log(value);
    this.setState({
      searchBarValue: value
    })
  }

  render() {
    return (
      <div className="app-wrapper">
        <AppHeader todos={this.state.toDoData}/>
        <SearchPanel setSearchBarValue={this.setSearchBarValue} setFilterType={this.setFilterType} filterType={this.state.currentFilter}/>
        <ToDoList searchBarValue={this.state.searchBarValue} currentFilter={this.state.currentFilter} todos={this.state.toDoData} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant}/> {/* Передаем onDeleted props, который содержит в себе функцию */}
        <AddListItem onAdded={this.addItem}/>
      </div>
    )
  }
}

// По клику на кнопку должно меняться количество элементов в стейте