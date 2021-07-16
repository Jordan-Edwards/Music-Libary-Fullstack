import React, { Component } from "react";
import Song from './musicTable/musictable';


class App extends Component{
    state = {
        song:[]
    }
}
componentDidMount(){
    axios.get('http://127.0.0.1:8000/music/').then(responce => this.setState({songs: Response.data}));
}

export default App;


