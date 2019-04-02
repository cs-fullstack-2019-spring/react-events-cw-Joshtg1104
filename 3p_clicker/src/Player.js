import React, {Component} from 'react';
import './App.css';
import NumberPoints from './NumberPoints'

class Player extends Component{

    constructor(props){
        super(props);
        this.state = {points: 0}
    }
    //Increases number by 1
    score= (e) =>{
        this.setState({points: this.state.points+1})
    };

    render(){
        return(
            <div>
                <h2>Player {this.props.playerNum}</h2>
                <h2>Score: {this.state.points}</h2>
                <button onClick={this.score}> 1pt </button>
            </div>
        )
    }
}

export default Player;