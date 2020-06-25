import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './demo.css'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            value:'all'
          };
    }
    apiCall(term){
      console.log(term);
      
  
    fetch("https://itunes.apple.com/search?term="+term)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result.results)
          this.setState({
            items: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
        }
      )
  }
  handleChange(e){
    console.log(e.target.value);
    if (e.target.value ===""){
      this.apiCall("all");
    }else{
      this.apiCall(e.target.value);
    }
    
}
renderSongs = () => {
    const { items } = this.state;
return items.map((item,index) => {
   return  <div key={index}  className="card col-lg-3 text-center float-left">
                <a target="_blank" href={item.artistViewUrl}>
                    <div className="song-image">
                        <img src={item.artworkUrl100} />
                    </div>
                </a>
                <div className="song-title">
                { item.collectionCensoredName ? item.collectionCensoredName : '' }
                </div>
            </div>
    })
}

    componentDidMount() {
        this.apiCall(null);
      }

    
   
   render() {
   
      return (
        <section className="position-relative">
            <div className="container">
            <div className="float-left w-100">

            <div className='row'>
                <div className='col-md-6'>
                <div className='search-box'>
                    <input className='form-control' onChange={this.handleChange.bind(this)} placeholder='search' type='text' />
                    {/* <button className='btn btn-link search-btn '>
                    <i className="fa fa-search"></i>
                    </button> */}
                </div>
                </div>
            </div>
                {/* <div className="float-left w-100">
                    <input type="text" onChange={this.handleChange.bind(this)}></input>
                </div>    */}
                <div className="float-left w-100 pt-2">
                     {(this.state.items.length > 0) ? (this.renderSongs()) : ''}
                </div>
            </div>     
            </div>
              
         </section>
      );
   }
}

export default Home;

