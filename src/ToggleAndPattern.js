// LICENSE : MIT
const React = require("react");
import {matchAnd} from "./utils/match-props";
export default class ToggleAndPattern extends React.Component {
    getFlagNames() {
        return Object.keys(this.props).filter(key => {
            return key !== "children";
        });
    }

    /**
     * get components from `children` that matches key and value with own props.
     * @returns {ReactComponent[]}
     */
    getMatchedComponent() {
        const children = [].concat(this.props.children);
        const flagKeyNames = this.getFlagNames();
        return children.filter(child => {
            // ignore text child
            if (!child.props) {
                return false;
            }
            // all match
            return matchAnd(flagKeyNames, this.props, child.props);
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
        return <div className="TogglePattern ToggleAndPattern">
            {components}
        </div>;
    }
}
