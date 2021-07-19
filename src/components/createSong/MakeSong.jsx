import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // SongId:'',
      SongTitle: "",
      SongArtist: "",
      SongAlbum: "",
      SongReleaseDate: "",
      SongGenre: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const song = {
      // SongId: this.state.SongId,
      title: this.state.SongTitle,
      artist: this.state.SongArtist,
      album: this.state.SongAlbum,
      release_date: this.state.SongReleaseDate,
      genre: this.state.SongGenre,
    };
    console.log(song);
    this.props.addSong(song);
    this.setState(
      {
        // newSongId: this.state.newSongId,
        newSongTitle: this.state.newSongTitle,
        newSongArtist: this.state.newSongArtist,
        newSongAlbum: this.state.newSongAlbum,
        newSongReleaseDate: this.state.newSongReleaseDate,
        newSongGenre: this.state.newSongGenre,
      },
      console.log(this)
    );
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Song Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="SongTitle"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
                <label>Artist</label>
                <input
                  type="text"
                  className="form-control"
                  name="SongArtist"
                  onChange={this.handleChange}
                  value={this.state.artist}
                />
                <label>Album</label>
                <input
                  type="text"
                  className="form-control"
                  name="SongAlbum"
                  onChange={this.handleChange}
                  value={this.state.album}
                />
                <label>Release Date</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="SongReleaseDate"
                  onChange={this.handleChange}
                  value={this.state.release_date}
                />
                <label for="title">Genre</label>
                <input
                  type="text"
                  className="form-control"
                  name="SongGenre"
                  onChange={this.handleChange}
                  value={this.state.genre}
                />
              </div>
              <button type="submit"> Submit </button>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SongForm;
