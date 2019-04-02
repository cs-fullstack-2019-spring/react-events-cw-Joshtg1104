import React, {Component} from 'react';


class NumberPoints extends Component {
    constructor(props){
        super(props);
        this.state = {points: 0}
    }
    pointNum1 = (e) => {
        console.log(1);
        this.setState({points: this.state.points+1})
    };
    pointNum5 = (e) => {
        console.log(5);
        this.setState({points: this.state.points+5})
    };
    pointNum10 = (e) => {
        console.log(10);
        this.setState({points: this.state.points+10})
    };
    render() {
        return(
            <div>
                <button onClick={this.pointNum1}> 1pt </button>
                <button onClick={this.pointNum5}> 5pt </button>
                <button onClick={this.pointNum10}> 10pt </button>
            </div>
        )
    }

}

export default NumberPoints;