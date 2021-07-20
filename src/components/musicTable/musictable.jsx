import React from "react";

function MusicTable(props) {
  return (
    <tbody>
      {console.log("MusicTable props", props)}
      {props.songs.map((song,index ) => {
        return (
          <tr key={index}>
            <td>{song.id}</td>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
            <button onClick={() => props.deleteSong(song.id)}>Delete</button>
          </tr>
        );
      })}
    </tbody>
  );
}
export default MusicTable;
