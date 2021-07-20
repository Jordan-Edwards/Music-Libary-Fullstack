import React, { useState } from "react";



const CreateSong = ({onAdd}) => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [album, setAlbum] = useState("")
  const [release_date, setRelease_date] = useState(null);
  const [genre, setGenre] = useState("")

const onSubmit = (e)=>{
  e.preventDefault()
  if(!title){
    alert('Please try again')
    return
  }

  onAdd({title, artist, album, release_date, genre})
  setTitle('')
  setArtist('')
  setAlbum('')
  setRelease_date('')
  setGenre('')
}

  return (
    <div>
      <center className="col-md-4 row col-align">
        <h1>Add A Song</h1>
        <div className="container">
          <form onSubmit={onSubmit} className="form-group">
            <div className="form-control">
              <div className="form-group">
                <div className="col-md-4">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-4">
                  <label>Artist:</label>
                  <input
                    type="text"
                    name="artist"
                    value={artist}
                    onChange={(event) => setArtist(event.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-4">
                  <label>Album</label>
                  <input
                    type="text"
                    name="album"
                    value={album}
                    onChange={(event) => setAlbum(event.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-4">
                  <label>Release Date</label>
                  <input
                    type="text"
                    name="release date"
                    value={release_date}
                    onChange={(event) => setRelease_date(event.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-4">
                  <label>Genre</label>
                  <input
                    type="text"
                    name="genre"
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <input type="submit" value="Add" onClick={CreateSong} />
              </div>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};
export default CreateSong;




