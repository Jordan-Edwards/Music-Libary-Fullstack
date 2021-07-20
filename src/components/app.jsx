import React, { Component } from "react";
import MusicTable from "./musicTable/musictable";
import axios from "axios";
import "./app.css";
import SongMaker from "./createSong/SongMaker";
import SearchBar from './searchBar/SearchBar'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        { title: "" },
        { artist: "" },
        { album: "" },
        { release_date: "" },
        { genre: "" },
      ],
    };
  }


  componentDidMount() {
    this.getAllSongs()
  }
  
  getAllSongs= async ()=>{
    axios.get("http://127.0.0.1:8000/music/").then((response) =>
    this.setState({
      songs: response.data,
    })
  );
  }
  //delete button added / not yet functional//





// ^^^^TypeError: props.delete is not a function//


  addSong = (data) => {
    console.log(data)
    axios.post("http://127.0.0.1:8000/music/", data).then((response) =>
      this.getAllSongs()
    );
  };

  //Delete Song
  deleteSong= (id)=>{
   axios.delete("http://127.0.0.1:8000/music/" + id + "/")
  }
  render() {
    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Song Name</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Release Date</th>
              <th>Genre</th>
            </tr>
          </thead>
          <MusicTable songs={this.state.songs} deleteSong = {this.deleteSong}/>
        </table>
        <div>
          
            <SongMaker onAdd={this.addSong} />
         
          <div><SearchBar/></div>
        </div>
      </div>
    );
  }
}
export default App;
