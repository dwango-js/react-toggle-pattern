const assert = require("power-assert");
import React from "react";
import {shallow} from 'enzyme';
import {TogglePattern} from "../src/react-toggle-pattern";
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
describe('<TogglePattern />', () => {
    it('renders 1 <ComponentX /> components', () => {
        const result = shallow(<TogglePattern isEditing={true}>
            <ComponentX isEditing/>
            <ComponentY/>
        </TogglePattern>);
        assert(result.is(ComponentX));
    });
    it('renders 1 <ComponentY /> components', () => {
        const result = shallow(<TogglePattern isEditing={false}>
            <ComponentX isEditing={true}/>
            <ComponentY isEditing={false}/>
        </TogglePattern>);
        assert(result.is(ComponentY));
    });
    it('renders 0 components', () => {
        const result = shallow(<TogglePattern isEditing={false}>
            <ComponentX isEditing={true}/>
            <ComponentY />
        </TogglePattern>);
        assert(result.node === null);
    });
    it('renders 2 <ComponentX /> components', () => {
        const wrapper = shallow(<TogglePattern isEditing={true}>
            <ComponentX isEditing={true}/>
            <ComponentX isEditing={true}/>
        </TogglePattern>);
        const result = wrapper.find(ComponentX);
        assert(result.length === 2);
        assert.equal(wrapper.html(), `<div class="TogglePattern"><div>Visible</div><div>Visible</div></div>`)
    });
    it('no renders <ComponentY /> components', () => {
        const wrapper = shallow(<TogglePattern isEditing={true}>
            <ComponentY />
        </TogglePattern>);
        const result = wrapper.find(ComponentX);
        assert(result.length === 0);
    });

    it('match any type value', () => {
        const wrapper = shallow(<TogglePattern pattern="one">
            <ComponentX pattern="one"/>
            <ComponentY pattern="two"/>
        </TogglePattern>);
        assert(wrapper.is(ComponentX));

        const symbol = {};
        const wrapper1 = shallow(<TogglePattern pattern={symbol}>
            <ComponentX pattern={symbol}/>
            <ComponentY pattern="two"/>
        </TogglePattern>);
        assert(wrapper1.is(ComponentX));
    });
    it('safe handling mixed text', () => {
        const wrapper = shallow(<TogglePattern pattern={1}>
            <ComponentX pattern={1}/>
            text
            <ComponentY pattern={2}/>
        </TogglePattern>);
        assert(wrapper.is(ComponentX));
    });
});
