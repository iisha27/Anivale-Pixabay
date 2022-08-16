import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem';
import Zoom from '@mui/icons-material/ZoomIn';
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton'


import Button from '@mui/material/Button';
import { DialogActions, DialogContent } from '@mui/material';
 class ImageResults extends Component {
    state={
        open:false,
        currentImg:''
    } 
    handleOpen=img=>{
        this.setState({open:true, currentImg:img})
    }
    handleClose=()=>{
        this.setState({open:false})
    }
  render() {
    
    let imageLists;
    const {images}=this.props
    if(images)
    {
        imageLists=(
            <ImageList cols={4} gap={20}>
                {
                    images.map((img)=>(
                        <ImageListItem
                        key={img.id}
                          >
                            <img src={img.largeImageURL} alt="" />
                            <ImageListItemBar  
                            title={img.tags} 
                            actionIcon={
                            <IconButton onClick={()=>this.handleOpen(img.largeImageURL)} >
                            <Zoom style={{color:"white"}} />
                            </IconButton>
                        }/>
                        </ImageListItem>
                    ))
                }
                
            </ImageList>
        )
    }
    else{
        imageLists=null;
    }
    return (


      <div style={{marginLeft:50, marginRight:50, marginTop:20}}>
        {imageLists}
        <Dialog 
            open={this.state.open}
            onClose={this.handleClose}>
            <DialogContent>
            <img src={this.state.currentImg} alt="" style={{width:'100%'}}> 
            </img>
            </DialogContent>
        
        <DialogActions>  
         <Button onClick={this.handleClose}>Close </Button>
        </DialogActions>
        </Dialog>
       
      </div>
    )
  }
}
ImageResults.propTypes={
    images:PropTypes.array.isRequired
}

export default ImageResults
