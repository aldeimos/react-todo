import React, {Component} from 'react';
import './app-header.css';

export default class AppHeader extends Component {



  render() {
    const {todos} = this.props;

    const doneItems = todos.filter((item) => item.done);
    const todoItems = todos.filter((item) => !item.done);

    return (
      <div className="app-header">
        <h1>Ультимативный туду лист v1</h1>
        <h2> {todoItems.length === 0 ? 0 : todoItems.length} more to do, {doneItems.length === 0 ? 0 : doneItems.length} done</h2>
      </div>
    )
  }
}

