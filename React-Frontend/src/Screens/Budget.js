import React from 'react';
import Upper from "../Components/Upper";
import SongHandler from "../SongHandler"

export default class Budget extends React.Component{
    constructor(props){
        super(props);
        let id = this.props.match.params.pushId;
        //use this.song_handler.set
        this.song_handler = new SongHandler(id , 
            JSON.parse(localStorage.getItem("user")).uid)
    }

render(){ 

    return(
    <div className="logged-in-container">

    <br/>
    </div>
    );
}
}