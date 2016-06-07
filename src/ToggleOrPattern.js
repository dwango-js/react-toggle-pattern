// LICENSE : MIT
const React = require("react");
import {matchOr} from "./utils/match-props";
export default class ToggleOrPattern extends React.Component {
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
            return matchOr(flagKeyNames, this.props, child.props);
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
        return <div className="TogglePattern ToggleOrPattern">
            {components}
        </div>;
    }
}
