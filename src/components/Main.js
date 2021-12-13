import React, { Component } from "react";

class Main extends Component {
    state = {
        counter: 0,
    };

    addOne = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };
    
    removeOne = () => {
        if (this.state.counter !== 0) {
        this.setState ({
            counter: this.state.counter - 1
        });
    }
    };

    reset = () => {
        this.setState ({
            counter: 0
        });
    };

    addFive = () => {
        this.setState ({
            counter: this.state.counter +5
        });
    };

    removeFive = () => {
        if (this.state.counter > 4) 
        this.setState ({
            counter: this.state.counter -5
        });
    };

    render() {
        let circleClass = "";

        if (this.state.counter === 0) {
            circleClass = "circle";
        } else if (this.state.counter % 2 === 0) {
            circleClass = "circle even"
        } else {
            circleClass ="circle odd"
        };
        



        return (
            <div className="main">
                <div className="circle-wrapper">
                    <h1 className={circleClass}>{this.state.counter}</h1>
                </div>
                <div className="button-wrapper">
                    <button onClick={this.addOne}>Add one</button>
                    <button onClick={this.removeOne}>Remove one</button>
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.addFive}>Add five</button>
                    <button onClick={this.removeFive}>Remove five</button>
                </div>
            </div>
        );
    }
}

export default Main;
