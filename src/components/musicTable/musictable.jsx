import React from 'react';


function Song(props){
    return(
        <div className="book">
            <div className="cover">
                <h1 className="title">{props.song.title}</h1>
                <h4 className="description">{props.song.artist}</h4>
            </div>
        </div>
    );
}
export default Song;