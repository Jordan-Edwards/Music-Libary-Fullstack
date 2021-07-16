import React, { Component } from "react";
// import Song from './musicTable/musictable';
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
export default App;


