import React from "react";

function SingleSongTable(props) {
  return (
    <tbody>
      {console.log("SingleSongTable props", props)}
      {props.songs.map((song, id) => {
        return (
          <tr>
            <td>{song.id}</td>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
export default MusicTable;
