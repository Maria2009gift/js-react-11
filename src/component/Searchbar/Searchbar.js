import React, {Component} from 'react'
import { Container } from './SearchBarStyled'

class SearchBar extends Component {

    state = {
        searchValue: ""
    }

    getValueSearch = (event) => {
        this.setState({searchValue: event.currentTarget.value})
    }

    sendSearchValue = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.searchValue)
    }

    render() {
      return (
        <Container className="searchbar">
            <form className="form" onSubmit={this.sendSearchValue}>
                <button type="submit" className="button">
                <span className="button-label">Search</span>
                </button>

                <input
                className="input"
                type="text"
                name='search'
                value={this.state.searchValue}
                autoComplete="off"
                onChange={this.getValueSearch}
                autoFocus
                placeholder="Search images and photos"
                />
            </form>
        </Container>
      );
    }
  }
  
  export default SearchBar;





