# react-toggle-pattern [![Build Status](https://travis-ci.org/azu/react-toggle-pattern.svg?branch=master)](https://travis-ci.org/azu/react-toggle-pattern)

React Component that provide toggle pattern

## Install

Install with [npm](https://www.npmjs.com/):

    npm install react-toggle-pattern

## Usage

Put `<YourComponent />` into `<TogglePattern />`.

```js
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

### Example

Show component that has truly attribute with `<TogglePattern attribute />`

```js
const TogglePattern = require("react-toggle-pattern");
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

Result to `<div class="TogglePattern"><ComponentX /><ComponentX /></div>`

-----

Not show when not match

```js
<TogglePattern isEditing={false}>
    <ComponentX isEditing={true} />
    <ComponentY />
</TogglePattern>
```

Result to `null`.



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
