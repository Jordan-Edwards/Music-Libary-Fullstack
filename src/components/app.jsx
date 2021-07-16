import React, { Component } from "react";
<<<<<<< HEAD
=======
// import Song from './musicTable/musictable';
>>>>>>> 13bfb6ea15da9569ac1eb45aa28168b8c37917aa
import axios from 'axios'


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs:[ 
            {title:''},
            {artist:''},
            {album:''},   
            {release_date:null},
            ]
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/music/').then(response => 
        this.setState({
            songs: response.data
        }));
    }


    render(){
<<<<<<< HEAD
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

=======
        return(
          <div>              
                  return(
                      <table>
                          <thead>
                              <tr>
                                  <th>
                                      Head
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              {this.state.songs.map((songs) =>{
                                  return(
                                      <tr>
                                            <td>{songs.title}</td>
                                            <td>{songs.artist}</td>
                                            <td>{songs.album}</td>
                                            <td>{songs.release_date}</td>
                                      </tr>
                                  )
                              } )}
                          </tbody>
                      </table>
                  )  
          </div>
           )
        }
    }
>>>>>>> 13bfb6ea15da9569ac1eb45aa28168b8c37917aa
export default App;


