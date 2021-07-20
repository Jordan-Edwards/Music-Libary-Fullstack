import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
         searchTerm:""
        }
      }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit =(event) => {
        console.log(this.state.searchTerm)
        event.preventDefault();
        let filteredResults = this.props.search.filter(song => {
            if (song.artist===this.state.searchTerm){
                return song
            }
              else if (song.title===this.state.searchTerm){
                  return song
              }
              else if  (song.album===this.state.searchTerm){
                  return song
              }
              else if (song.genre===this.state.searchTerm){
                  return song
              }
              else if (song.release_date===this.state.searchTerm){
                  return song
              }
              else {

        }});
        this.setState({
            searchTerm:""
        })
        this.props.filterTrigger(filteredResults)
    }
   render(){

    return (  
        <React.Fragment>
            <center>
            <form onSubmit={this.handleSubmit}>
               <label>Search For Song, Artist, Album, Genre, or Release Date:</label>
                <div className="col-md-4">
                    <input size="40" title="search" type='text' name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <input type="button" value="search" type="submit" />
                </div>
            </form>
            </center>
        </React.Fragment>
    );
   }
}
 
export default SearchBar;