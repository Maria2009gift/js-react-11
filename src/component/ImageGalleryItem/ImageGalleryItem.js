import React, { Component } from "react";
import { Item } from "./ImageGalleryItemStyled";

class ImageGalleryItem extends Component {
  state = {
    modalObject: "",
  };

  takeImage = (event) => {
    this.setState({ modalObject: event.currentTarget.alt });
    console.log(event.currentTarget.alt);
    
  };

  render() {
    return (
      <Item key={this.props.data.id} onClick={this.takeImage}>
        {
          <img
            src={this.props.data.images.downsized.url}
            alt={this.props.data}
            width="400px"
            height="400px"
          />
        }
      </Item>
    );
  }
}

export default ImageGalleryItem;
