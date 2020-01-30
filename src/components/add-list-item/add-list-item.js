import React, {Component} from 'react';
import './add-list-item.css';

export default class AddListItem extends Component {
  constructor() {
    super();

    this.state = {
      label: '',
    }
  }

  getItemLabel = (e) => {
    const inputValue = e.target.value;
    this.setState(({label}) => {
      return {
        label: inputValue
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: ''
    })
  }

  render() {
    
    return (
      <form className="add-item-wrapper" onSubmit={this.onSubmit}>
        <input className="add-item-input" type="text" placeholder="type text here and press +" value={this.state.label} onChange={this.getItemLabel}/>
        <button className="add-item-button">
          <i className="fa fa-plus-circle"></i>
        </button>
      </form>
    )
  }
}

// Получить значение вводы
