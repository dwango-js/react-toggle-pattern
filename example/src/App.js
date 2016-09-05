import React, {Component} from 'react';
import {TogglePattern} from "react-toggle-pattern";
import ActiveElement from "./ActiveElement";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pattern: "A"
        }
    }

    render() {
        const onClickA = () => {
            this.setState({
                pattern: "B"
            })
        };
        const onClickB = () => {
            this.setState({
                pattern: "A"
            });
        };
        return (
            <div className="App">
                <TogglePattern pattern={this.state.pattern}>
                    <div pattern={"A"} onClick={onClickA}>
                        <button><p>
                            A
                        </p></button>
                    </div>
                    <div pattern={"B"} onClick={onClickB}>
                        <span>BBB</span>
                        <button>
                            <span>B</span>
                        </button>
                    </div>
                </TogglePattern>
                <ActiveElement />
            </div>
        );
    }
}

export default App;
