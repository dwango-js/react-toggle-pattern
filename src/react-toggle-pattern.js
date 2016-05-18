// LICENSE : MIT
"use strict";
import React, {Component, PropTypes} from 'react';

export default class TogglePattern extends Component {
    getFlagNames() {
        return Object.keys(this.props);
    }

    getUnMatchedComponent() {
        const children = [].concat(this.props.children);
        const flagKeyNames = this.getFlagNames();
        return children.filter(child => {
            const childKeys = Object.keys(child.props);
            return childKeys.some(childKey => {
                return flagKeyNames.indexOf(childKey) == -1;
            });
        });
    };

    getMatchedComponent() {
        const children = [].concat(this.props.children);
        const flagKeyNames = this.getFlagNames();
        return children.filter(child => {
            const childKeys = Object.keys(child.props);
            return childKeys.some(childKey => {
                return flagKeyNames.some(parentKey => {
                    const parentValue = this.props[parentKey];
                    const childValue = child.props[childKey];
                    return childValue === parentValue;
                });
            });
        });
    };

    render() {
        const components = this.getMatchedComponent();
        if (components.length === 0) {
            return null;
        }
        if (components.length === 1) {
            return components[0];
        }
        return <div className="TogglePattern">
            {components}
        </div>;
    }
}
