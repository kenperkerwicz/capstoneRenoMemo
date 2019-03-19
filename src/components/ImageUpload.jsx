import React, {Component} from 'react';
import {storage} from '../firebase/index'

class ImageUpload extends Component {
  constructor(props) {
        super(props);
        this.state = {
          image: null,
          url: ''
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this)
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const {image} = e.target.files[0];
      this.setState(() => ({image}))
    }
  }

  handleUpload = () => {
    const {image} = this.state;
     const uploadTask = storage.ref(`images/${image.name}`).put(image)
     uploadTask.on(`state_changed`,
      (snapshot) => {
          //progress function
      }
     , (error) => {
       console.log(error)
          //error function
     }, () => {
          // complete function
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url)
          })
     })
  }

  render () {
    const style = {
      height: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
 return (
   <div style={style}>
     <input type="file" onChange={this.handleChange}/>
     <button onClick={this.handleUpload}> Upload </button>
   </div>
 )
  }


}

export default ImageUpload