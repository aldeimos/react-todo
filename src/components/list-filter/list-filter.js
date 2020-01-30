import React, {Component} from 'react';

export default class ListFilter extends Component {
  onFilterClick(e) {

  }
  render() {
    const {setFilterType} = this.props;
    return (
      <div className="button-group">
        <button  data-sort-type="All" className="btn btn-outline-secondary btn-info" type="button" onClick={(e) => setFilterType(e.target.dataset.sortType)}>All</button>
        <button data-sort-type="Active" className="btn btn-outline-secondary" type="button" onClick={(e) => setFilterType(e.target.dataset.sortType)}>Active</button>
        <button data-sort-type="Done" className="btn btn-outline-secondary" type="button" onClick={(e) => setFilterType(e.target.dataset.sortType)}>Done</button>
      </div>
    )
  }
}