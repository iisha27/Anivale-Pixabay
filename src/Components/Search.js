import React, { Component } from "react"
import "./Search.css"
import axios from 'axios'
import ImageResults from "./ImageResults"
class Search extends Component{
  state={
    searchText:'',
    apiUrl:'https://pixabay.com/api',
    apiKey:'29140947-e81d3eac779c40acd3c3d58d8',
    images:[]
  }
  onTextChange=e=>{
    const val=e.target.value;
    this.setState({[e.target.name]:val},()=>{
      if(val===''){
        this.setState({images:[]});
      }else{
      axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safeSearch=true`)
      .then(res=>this.setState({images:res.data.hits}))
      .catch(err=>console.log(err));
      }
    });
  }
  render(){
    console.log(this.state.images);
    return(
      <div>
        <input className='search' type="text" placeholder="Search for images" name="searchText" value={this.state.searchText} onChange={this.onTextChange}></input>
        {this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
      </div>
    )
  }
}
export default Search