
import React, {Component} from 'react'
import { List } from './ImageGalleryStyled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import Button from '../Button/Button';

class ImageGallery extends Component {

  state = {
    checking: true,
    image: [],
    count:1

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue === this.props.searchValue) {
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=HXcBelphjsOPPLP8Rj53WmpL4ZQTJ6kf&q=${this.props.searchValue}&offset=${this.state.count}&limit=12`)
        .then(res => res.json())
        .then(img => {
          
          if (this.state.checking) {
            prevState.image.push(img.data)
            this.setState({image: prevState.image})
            this.setState({checking: false})
          }        
        })
    } else {

      this.setState({count:1, image:[], checking: true})
      prevState.image.splice(0, prevState.image.length)
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=HXcBelphjsOPPLP8Rj53WmpL4ZQTJ6kf&q=${this.props.searchValue}&offset=${this.state.count}&limit=12`)
        .then(res => res.json())
        .then(img => {
          if (this.state.checking) {
            prevState.image.push(img.data)
            this.setState({image: prevState.image})
            this.setState({checking: false})
          }        
        })

    }
  }


  handleButton = () => {
    this.setState((prevState) => ({count: prevState.count+=1, checking: true}) )
  }

  render () {
    
      return (
          <>
            <List className="gallery">
              {this.state.image.length ? this.state.image.map((img) => {
                return img.map((image) => {
                  return <ImageGalleryItem data={image}/>
                }
                )
            }
              )
              : <p>Enter request</p>}
            </List>
            <Button onClick={this.handleButton}/>
          </>
            
          )
        }   
      }
    
    export default ImageGallery
    
