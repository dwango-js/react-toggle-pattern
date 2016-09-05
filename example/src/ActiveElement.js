// LICENSE : MIT
"use strict";
import React, {Component} from 'react';
class ActiveElement extends Component {
    constructor() {
        super();
        this.state = {
            activeElement: null
        };
        this.update = () => {
            this.setState({
                activeElement: document.activeElement.tagName
            });
        }
    }

    componentDidMount() {
        setInterval(this.update, 100);
    }

    render() {
        return (
            <div className="ActiveElement">
                ActiveElement: {this.state.activeElement}
            </div>
        );
    }
}

export default ActiveElement;
