import React, {Component} from 'react'
import { Item, Image } from './ImageGalleryItemStyled';

class ImageGalleryItem extends Component {


    render () {
        return (
            <Item>
                {this.props.data.map((image) => (
                    <div className="gallery-item">
                        <Image src={image.webformatURL} alt="" />
                    </div>
                ))}
            </Item>
        );
      }
}
  
  export default ImageGalleryItem