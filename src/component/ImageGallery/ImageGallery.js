
import React, {Component} from 'react'
import { List, Container } from './ImageGalleryStyled';
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
      fetch(`https://pixabay.com/api/?q=${this.props.searchValue}&page=${this.state.count}&key=44002611-c1194520823d769ac47082ab5&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(img => {
          if (this.state.checking) {
            prevState.image.push(img.hits)
            this.setState({image: prevState.image})
            this.setState({checking: false})
          }        
        })
    } else {
      console.log(prevState);
      
      this.setState({count:1, image:[], checking: true})
      prevState.image.splice(0, prevState.image.length)
      fetch(`https://pixabay.com/api/?q=${this.props.searchValue}&page=${this.state.count}&key=44002611-c1194520823d769ac47082ab5&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(img => {
          if (this.state.checking) {
            prevState.image.push(img.hits)
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
          <Container>
            <List className="gallery">
              {this.state.image.length ? this.state.image.map((img) => 
              <ImageGalleryItem data={img}/>)
              : <p>Enter request</p>}
            </List>
            <Button onClick={this.handleButton}/>
          </Container>
            
          )
        }   
      }
    
    export default ImageGallery
    
