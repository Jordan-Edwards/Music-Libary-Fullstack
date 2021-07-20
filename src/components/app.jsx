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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const song = {
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      release_date: this.state.release_date,
      genre: this.state.genre,
    };
    this.props.addNewSong(song);
    this.setState({
      title: "",
      artist: "",
      album: "",
      relese_date: "",
      genre: "",
    });
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/music/").then((response) =>
      this.setState({
        songs: response.data,
      })
    );
  }
  deleteSong(songId){
    return axios.delete("http://127.0.0.1:8000/music/"  + songId);
}
   delete = (id) => {
    axios.delete(`http://127.0.0.1:8000/music/${id}/`)        
      .then(response => {
      console.log(response);
      console.log(response.data);      
    })
    console.log(this)
    this.setState({})
  }
  // // Add Song
  // addSong = (song) => {
  //   console.log(song);
  //   console.log(this.state.songs);
  //   axios.post(`http://127.0.0.1:8000/music/`, song);
  //   this.setState({
  //     songs: [...this.state.songs, song],
  //     title: "",
  //     album: "",
  //     artist: "",
  //     release_date: "",
  //     genre: "",
  //   });
  // };
  // AddSong
  addSong = (data) => {
    axios.post("http://127.0.0.1:8000/music/", data).then((response) =>
      this.setState({
        songs: response.data,
      })
    );
  };

  //Delete Song
  // const deleteSong= (id)=>{
  //   this.setState(songs.filter((song) => song.id !== id))
  // }
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
          <MusicTable songs={this.state.songs} />
        </table>
        <div>
          <form>
            <SongMaker onAdd={this.addSong(this.state.songs)} />
          </form>
          <div><SearchBar/></div>
        </div>
      </div>
    );
  }
}
export default App;
