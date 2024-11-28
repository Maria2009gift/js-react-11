
import './App.css';
import React, {Component} from 'react'
import SearchBar from './component/Searchbar/Searchbar';
import ImageGallery from './component/ImageGallery/ImageGallery';

class App extends Component {

  state = {
    searchValue: "",
  }

  getSearchValue = (value) => {
    this.setState({searchValue: value})

  }

  render () {
    return (
      <>
        <SearchBar onSubmit={this.getSearchValue}/>
        <ImageGallery searchValue={this.state.searchValue} />
      </>
    );
  }
}

export default App;
