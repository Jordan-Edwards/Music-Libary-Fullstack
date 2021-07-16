import React, { Component } from "react";
import axios from 'axios'


class App extends Component{
    state = {
        songs:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/music/').then(response => 
        this.setState({
            songs: response.data
        }));
    }


    render(){
        return ( 
            <table>
                <thead>
                  <tr>
                    <th>Head</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.songs.map((song) => {
                    return(
                      <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                      </tr>
                    )
                  })}
                  
                </tbody>
            </table>
           );
        }
    }

export default App;


