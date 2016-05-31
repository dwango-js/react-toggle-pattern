const assert = require("power-assert");
import React from "react";
import {shallow} from 'enzyme';
import ToggleOrPattern from "../src/ToggleOrPattern";
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
describe('<ToggleOrPattern />', () => {
    it('renders 1 <ComponentX /> components', () => {
        const result = shallow(<ToggleOrPattern isEditing={true}>
            <ComponentX isEditing/>
            <ComponentY/>
        </ToggleOrPattern>);
        assert(result.is(ComponentX));
    });
    it('renders 1 <ComponentY /> components', () => {
        const result = shallow(<ToggleOrPattern isEditing={false}>
            <ComponentX isEditing={true}/>
            <ComponentY isEditing={false}/>
        </ToggleOrPattern>);
        assert(result.is(ComponentY));
    });
    it('renders 0 components', () => {
        const result = shallow(<ToggleOrPattern isEditing={false}>
            <ComponentX isEditing={true}/>
            <ComponentY />
        </ToggleOrPattern>);
        assert(result.node === null);
    });
    it('renders 2 <ComponentX /> components', () => {
        const wrapper = shallow(<ToggleOrPattern isEditing={true}>
            <ComponentX isEditing={true}/>
            <ComponentX isEditing={true}/>
        </ToggleOrPattern>);
        const result = wrapper.find(ComponentX);
        assert(result.length === 2);
        assert.equal(wrapper.html(), `<div class="TogglePattern ToggleOrPattern"><div>Visible</div><div>Visible</div></div>`)
    });
    it('no renders <ComponentY /> components', () => {
        const wrapper = shallow(<ToggleOrPattern isEditing={true}>
            <ComponentY />
        </ToggleOrPattern>);
        const result = wrapper.find(ComponentX);
        assert(result.length === 0);
    });

    it('match any type value', () => {
        const wrapper = shallow(<ToggleOrPattern pattern="one">
            <ComponentX pattern="one"/>
            <ComponentY pattern="two"/>
        </ToggleOrPattern>);
        assert(wrapper.is(ComponentX));

        const symbol = {};
        const wrapper1 = shallow(<ToggleOrPattern pattern={symbol}>
            <ComponentX pattern={symbol}/>
            <ComponentY pattern="two"/>
        </ToggleOrPattern>);
        assert(wrapper1.is(ComponentX));
    });
    it('safe handling mixed text', () => {
        const wrapper = shallow(<ToggleOrPattern pattern={1}>
            <ComponentX pattern={1}/>
            text
            <ComponentY pattern={2}/>
        </ToggleOrPattern>);
        assert(wrapper.is(ComponentX));
    });
    it('render match Or pattern', () => {
        const wrapper = shallow(<ToggleOrPattern pattern1={1} pattern2={2}>
            <ComponentX pattern1={1} pattern2={2}/>
            <ComponentY pattern1={1}/>
        </ToggleOrPattern>);
        const x = wrapper.find(ComponentX);
        assert(x.length === 1);
        const y = wrapper.find(ComponentX);
        assert(y.length === 1);
        assert.equal(wrapper.html(), `<div class="TogglePattern ToggleOrPattern"><div>Visible</div><div>Hidden</div></div>`)
    });
    it('render match Or pattern', () => {
        class FixedBar extends React.Component {
            render() {
                return <div>{this.props.children}</div>
            }
        }
        const Order = {
            High: true,
            Middle: true,
            Low: false
        };
        const wrapper = shallow(<ToggleOrPattern High={Order.High} Middle={Order.Middle} Low={Order.Low}>
            <FixedBar High={true}>High</FixedBar>
            <FixedBar Middle={true}>Middle</FixedBar>
            <FixedBar Low={true}>Low</FixedBar>
            <FixedBar Middle={true}>Middle</FixedBar>
        </ToggleOrPattern>);
        // remove `Low`
        assert.equal(wrapper.html(), `<div class="TogglePattern ToggleOrPattern"><div>High</div><div>Middle</div><div>Middle</div></div>`)
    });
});

