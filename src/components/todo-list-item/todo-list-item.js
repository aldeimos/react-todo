import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  
  render() {
    const {todos: {important, done}, label, onDeleted, onToggleDone, onToggleImportant} = this.props; /* Принимаем пропс onDeleted */
   
    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important'
    }
    
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={ onToggleDone }>
          {label}
        </span>
        <button className="btn btn-outline-danger btn-sm" type="button" onClick={onDeleted}> {/* Вызываем props onDeleted по клику */}
          <i className="fa fa-trash-o"></i>
        </button>
        <button className="btn btn-outline-success btn-sm" type="button" onClick={ onToggleImportant }>
          <i className="fa fa-exclamation"></i>
        </button>
      </span>
    );
  }
}