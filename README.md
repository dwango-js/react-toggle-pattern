# react-toggle-pattern [![Build Status](https://travis-ci.org/azu/react-toggle-pattern.svg?branch=master)](https://travis-ci.org/azu/react-toggle-pattern)

React Component that provide toggle pattern

## Install

Install with [npm](https://www.npmjs.com/):

    npm install react-toggle-pattern

## Usage

`react-toggle-pattern` provide three components.

### Insert and Remove pattens

- `<TogglePattern />` or pattern. This is same with `<ToggleOrPattern />`
- `<ToggleOrPattern />` or pattern
- `<ToggleAndPattern />` and pattern

Put `<YourComponent />` into `<TogglePattern />`.

```js
import {TogglePattern} from "react-toggle-pattern";
class ToggleButton extends React.Component {
    render(){
        return (
            <TogglePattern isEditing={this.props.isEditing}>
                <LeaveEditingButton isEditing={true} />
                <EnterEditingButton isEditing={false} />
            </TogglePattern>
        );
    }
}
```

It means that

- if `this.props.isEditing` is `true`, show `<LeaveEditingButton />`
- if `this.props.isEditing` is `false`, show `<EnterEditingButton />`
- In the other case, show `null`

### `<TogglePattern />` Interface

- `<TogglePattern anyAttribute=anyValue />`
    - `anyAttribute` is any name.
    - `anyValue` is any type.

`<ToggleOrPattern />` and `<ToggleAndPattern />` has same interface.

### OR AND pattern

#### OR

`<ToggleOrPattern />` filter child components by **OR** matching.

- find component that match with `a` is `true` or `b` is `false`.

```js
<ToggleOrPattern a={true}>
    <LeaveEditingButton a={true} b={false} />
    <EnterEditingButton a={true} />
</ToggleOrPattern>
```

Result to: 

```html
<div class="TogglePattern ToggleOrPattern">
    <LeaveEditingButton a={true} b={false} />
    <EnterEditingButton a={true} />
</div>
```

Both components are **or** match with TogglePattern.

#### AND

`<ToggleAndPattern />` filter child components by **AND** matching.

- find component that match with `a` is `true` and `b` is `false`.

```js
<ToggleAndPattern a={true} b={false}>
    <LeaveEditingButton a={true} b={false} />
    <EnterEditingButton a={true} />
</ToggleAndPattern>
```

Result to:

```html
<LeaveEditingButton a={true} b={false} />
```

`<EnterEditingButton />` is not **and** match with TogglePattern.

### Example

Show component that has truly attribute with `<TogglePattern attribute />`

```js
const TogglePattern = require("react-toggle-pattern").TogglePattern;
// render
<TogglePattern isEditing={true}>
    <ComponentX isEditing/>
    <ComponentY />
</TogglePattern>
```

Result to `<ComponentX />`

----

Show component that match attribute and value with `<TogglePattern attribute=value />`

```js
<TogglePattern isEditing={false}>
    <ComponentX isEditing={true} />
    <ComponentY isEditing={false} />
</TogglePattern>
```

Result to `<ComponentY />`

Also, it is ok that `value` it `string` type.

```js
<TogglePattern pattern="one">
    <ComponentX pattern="one"/>
    <ComponentY pattern="two"/>
</TogglePattern>
```

Result to `<ComponentY />`

-----

Show component**s** that match attribute and value with `<TogglePattern attribute=value />`.

```js
<TogglePattern isEditing={true}>
    <ComponentX isEditing={true} />
    <ComponentX isEditing={true}/>
</TogglePattern>
```

Result to `<div class="TogglePattern ToggleOrPattern"><ComponentX /><ComponentX /></div>`

-----

Not show when not match

```js
<TogglePattern isEditing={false}>
    <ComponentX isEditing={true} />
    <ComponentY />
</TogglePattern>
```

Result to `null`.

------

OR match

```js
<ToggleOrPattern pattern1={1} pattern2={2}>
    <ComponentX pattern1={1} pattern2={2}/>
    <ComponentY pattern1={1}/>
</ToggleOrPattern>
```

Result to `<div class="TogglePattern ToggleOrPattern"><div>Visible</div><div>Hidden</div></div>`.

------

And match

```js
<ToggleAndPattern pattern1={1} pattern2={2}>
    <ComponentX pattern1={1} pattern2={2}/>
    <ComponentY pattern1={1} />
</ToggleAndPattern>
```

Result to `<ComponentX pattern1={1} pattern2={2}/>`.


### Show and Hide pattern

It is an experimental pattern.

- `<ToggleAndDisplayPattern />`

It has same interface `<ToggleAndPattern />`, but it has difference logic.

- It use `hidden` attribute for non-showing element.
    - You should add `[hidden]{ display: none!important; };` to own css.
- It always wrapped children components with `<div class="ToggleAndDisplayPattern">{children}</ToggleAndDisplayPattern>`

**Props**

- `<ToggleAndDisplayPattern />` try to preserve your focus.
    - `<ToggleAndPattern />` missing focus because of inserting and removing.

**Cons**

- Automatically wrap `{this.props.children}` with `div` element.

## Changelog

See [Releases page](https://github.com/azu/react-toggle-pattern/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.
For bugs and feature requests, [please create an issue](https://github.com/azu/react-toggle-pattern/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](http://twitter.com/azu_re)

## License

MIT © azu
