import React, {Component} from 'react';

export default class ListFilter extends Component {

  constructor() {
    super();
    this.buttons = [
      {filter: 'all', label: 'All' },
      {filter: 'active', label: 'Active' },
      {filter: 'done', label: 'Done' },
    ]
  }

  onFilterClick(e) {

  }
  render() {
    const {setFilterType, filterType} = this.props;
    
    const buttons = this.buttons.map((button) => {
      const className = button.label === filterType ? 'btn-info' : 'btn btn-outline-secondary';
      return <button key={button.filter} data-sort-type={button.label} className={`btn ${className}`} type="button" onClick={(e) => setFilterType(e.target.dataset.sortType)}>{button.label}</button>
    });
    return (
      <div className="button-group">
        {buttons}
      </div>
    )
  }
}