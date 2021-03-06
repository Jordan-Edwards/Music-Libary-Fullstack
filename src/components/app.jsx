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

  addSong = (data) => {
    console.log(data)
    axios.post("http://127.0.0.1:8000/music/", data).then((response) =>
      this.getAllSongs()
    );
  };

  //Delete Song
  deleteSong= (id)=>{
   axios.delete("http://127.0.0.1:8000/music/" + id + "/").then((response) =>
      this.getAllSongs()
   )
  }

  filterSongs = (arrayOfSongs) =>{
    console.log(arrayOfSongs)
    this.setState({
        songs: arrayOfSongs
    })
}

  render() {
    return (
      <div>
        <div className="p-3 mb-2 bg-secondary table-wrapper-scroll-y my-custom-scrollbar">
          <table className="table table-hover table-striped mb-0 table-bordered border-primary">
            <thead>
              <tr>
                <th>Song Name</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
              </tr>
            </thead>
            <MusicTable songs={this.state.songs} deleteSong={this.deleteSong} />
          </table>
        </div>
        <div className="container-fluid">
          <SongMaker onAdd={this.addSong} />
          <SearchBar
            search={this.state.songs}
            filterTrigger={this.filterSongs}
          />
        </div>
      </div>
    );
  }
}
export default App;
