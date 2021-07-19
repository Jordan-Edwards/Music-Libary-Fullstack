import React, { Component } from "react";


class SongMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      album: "",
      release_date: "",
      genre: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const song = {
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      release_date: this.state.release_date,
      genre: this.state.genre,
    };
    console.log(song);
    this.props.addSong(song);
    this.setState(
      {
      newTitle: this.state.newTitle,
      newArtist: this.state.newArtist,
      newAlbum: this.state.newAlbum,
      newRelease_date: this.state.newRelease_date,
      newGenre: this.state.newGenre,
    },
    console.log(this)
    
    );
    
  };
  render() {
    return (
      <div>
        <hr />
        <React.Fragment>
          <center>
            <h3>Add a New Song!!!</h3>
          </center>
          
            <div onSubmit={this.handleSubmit} className="container">
              <div className="row col-align">
                <div className="form-group">
                  <div className="col-md-4">
                    <label>Song Title</label>
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Artist:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="artist"
                      value={this.state.artist}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Album:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="album"
                      value={this.state.album}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Release Date:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="release_date"
                      value={this.state.release_date}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Genre:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="genre"
                      value={this.state.genre}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <input type="submit" value="Add" />
                  </div>
                </div>
              </div>
            </div>
          
        </React.Fragment>
      </div>
    );
  }
}

export default SongMaker;
