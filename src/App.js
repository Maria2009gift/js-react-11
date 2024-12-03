import "./App.css";
import React, { Component } from "react";
import SearchBar from "./component/Searchbar/Searchbar";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import { Modal } from "./component/Modal/Modal";

class App extends Component {
  state = {
    searchValue: "",
    modalVisibility: false,
  };

  getSearchValue = (value) => {
    this.setState({ searchValue: value });
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modalVisibility: !prevState.modalVisibility,
    }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.getSearchValue} />
        <ImageGallery searchValue={this.state.searchValue} />
        <Modal></Modal>
      </>
    );
  }
}

export default App;
