import React, { Component } from "react";
import MusicTable from './musicTable/musictable';
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
                   <table>
                          <thead>
                              <tr>
                                  <th>
                                      Head
                                  </th>
                              </tr>
                          </thead>
                        < MusicTable songs={this.state.songs}/>
                      </table>
                    
          </div>
           )
        }
    }
export default App;


