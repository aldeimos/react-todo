import React, {Component} from 'react';
import ListFilter from '../list-filter/list-filter';
import './search-panel.css';

export default class SearchPanel extends Component {

  onSearchBarChange = (e) => {
    const {setSearchBarValue} = this.props;
    setSearchBarValue(e.target.value);
  }

  render() {
    const {setFilterType} = this.props;

    const searchPanelPlaceHolder = `Hey b0ss type smth here`;
    return (
      <div className="search-panel-wrapper">
        <input className="search-panel-bar" placeholder={searchPanelPlaceHolder} onChange={this.onSearchBarChange}/>
        <ListFilter setFilterType={setFilterType}/>
      </div>
    );
  }
}

