import { Component, createRef } from 'react';

const initialState = {
  search: 'matrix',
  type: 'all',
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchRef = createRef();
  }

  state = initialState;

  handleChangeStateData = () => {
    this.props.setCurrentMovieType(this.state.search, this.state.type);
    this.searchRef.current.focus();
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.handleChangeStateData();
    }
  };

  handleFilter = (event) => {
    this.setState((prevState) => ({ ...prevState, type: event.target.dataset.type }), this.handleChangeStateData);
  };

  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            id='email_inline'
            placeholder='search'
            type='search'
            ref={this.searchRef}
            className='validate'
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
            autoFocus
          />
          <button className='btn search-btn' onClick={() => this.handleChangeStateData()}>
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='all'
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='episode'
              onChange={this.handleFilter}
              checked={this.state.type === 'episode'}
            />
            <span>Episodes only</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
