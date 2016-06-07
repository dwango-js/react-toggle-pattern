const assert = require("power-assert");
import React from "react";
import {shallow} from 'enzyme';
import ToggleAndPattern from "../src/ToggleAndPattern";
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
describe('<ToggleAndPattern />', () => {
    it('renders 1 <ComponentX /> components', () => {
        const result = shallow(<ToggleAndPattern isEditing={true}>
            <ComponentX isEditing/>
            <ComponentY/>
        </ToggleAndPattern>);
        assert(result.is(ComponentX));
    });
    it('renders 1 <ComponentY /> components', () => {
        const result = shallow(<ToggleAndPattern isEditing={false}>
            <ComponentX isEditing={true}/>
            <ComponentY isEditing={false}/>
        </ToggleAndPattern>);
        assert(result.is(ComponentY));
    });
    it('renders 0 components', () => {
        const result = shallow(<ToggleAndPattern isEditing={false}>
            <ComponentX isEditing={true}/>
            <ComponentY />
        </ToggleAndPattern>);
        assert(result.node === null);
    });
    it('renders 2 <ComponentX /> components', () => {
        const wrapper = shallow(<ToggleAndPattern isEditing={true}>
            <ComponentX isEditing={true}/>
            <ComponentX isEditing={true}/>
        </ToggleAndPattern>);
        const result = wrapper.find(ComponentX);
        assert(result.length === 2);
        assert.equal(wrapper.html(), `<div class="TogglePattern ToggleAndPattern"><div>Visible</div><div>Visible</div></div>`)
    });
    it('no renders <ComponentY /> components', () => {
        const wrapper = shallow(<ToggleAndPattern isEditing={true}>
            <ComponentY />
        </ToggleAndPattern>);
        const result = wrapper.find(ComponentY);
        assert(result.length === 0);
    });

    it('match any type value', () => {
        const wrapper = shallow(<ToggleAndPattern pattern="one">
            <ComponentX pattern="one"/>
            <ComponentY pattern="two"/>
        </ToggleAndPattern>);
        assert(wrapper.is(ComponentX));

        const symbol = {};
        const wrapper1 = shallow(<ToggleAndPattern pattern={symbol}>
            <ComponentX pattern={symbol}/>
            <ComponentY pattern="two"/>
        </ToggleAndPattern>);
        assert(wrapper1.is(ComponentX));
    });
    it('safe handling mixed text', () => {
        const wrapper = shallow(<ToggleAndPattern pattern={1}>
            <ComponentX pattern={1}/>
            text
            <ComponentY pattern={2}/>
        </ToggleAndPattern>);
        assert(wrapper.is(ComponentX));
    });
    it('render match And pattern', () => {
        const wrapper = shallow(<ToggleAndPattern pattern1={1} pattern2={2}>
            <ComponentX pattern1={1} pattern2={2}/>
            <ComponentY pattern1={1} />
        </ToggleAndPattern>);
        assert(wrapper.is(ComponentX));
    });
});
