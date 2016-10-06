const assert = require("power-assert");
import React from "react";
import {shallow} from 'enzyme';
import ToggleAndDisplayPattern from "../src/ToggleAndDisplayPattern";
class ComponentY extends React.Component {
    render() {
        return <div>Hidden</div>
    }
}
class ComponentX extends React.Component {
    render() {
        return <div>Visible</div>
    }
}
describe('<ToggleAndDisplayPattern />', () => {
    it('renders 1 <ComponentX /> components', () => {
        const result = shallow(<ToggleAndDisplayPattern isEditing={true}>
            <ComponentX isEditing/>
            <ComponentY/>
        </ToggleAndDisplayPattern>);
        assert.equal(result.html(), `<span class="TogglePattern ToggleAndDisplayPattern"><div>Visible</div><div>Hidden</div></span>`)
        ;
    });
});