import React, {Component} from 'react';
import {ToggleAndDisplayPattern as TogglePattern} from "react-toggle-pattern";
import ActiveElement from "./ActiveElement";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pattern: "A",
            patternCorD: "C"
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
        const onClickC = () => {
            this.setState({
                patternCorD: "D"
            });
        };
        const onClickD = () => {
            this.setState({
                patternCorD: "C"
            });
        };
        return (
            <div className="App">
                <div>
                    <h2>Pattern A or B</h2>
                    <TogglePattern pattern={this.state.pattern}>
                        <button pattern={"A"} onClick={onClickA}>
                            AAAAAA
                        </button>
                        <button pattern={"B"} onClick={onClickB}>
                            BBBBBB
                        </button>
                    </TogglePattern>
                </div>
                <div>
                    <h2>Pattern C or D</h2>
                    <TogglePattern pattern={this.state.patternCorD}>
                        <button key="C" pattern={"C"} onClick={onClickC}>
                            CCCCCCC
                        </button>
                        <button key="D" pattern={"D"} onClick={onClickD}>
                            DDDDDDD
                        </button>
                    </TogglePattern>
                </div>
                <ActiveElement />
            </div>
        );
    }
}

export default App;
