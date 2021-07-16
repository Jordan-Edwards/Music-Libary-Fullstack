import React, { Component } from "react";
import Song from './musicTable/musictable';
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
        return(
            <div>React App
                {console.log(this.state.songs)}
            </div>




        )


    }
}
export default App;


