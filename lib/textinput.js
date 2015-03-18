/**
 * A one-line text input wrapped by a styleable container
 * In HTML terms: an input inside a div.
 *
 * @class
 * @param {string} [type='text'] - text or password
 * @param {string} [value] - text value of the input field
 * @param {string} [placeholder] - text placeholder/hint for empty input
 * @param {string} [name] - identifier associated with the value
 * @param {Function} [onChange] - function to call when text change
 * @param {Function} [onBlur] - function to call when the field lose focus
 * @param {Object} [styles] - object containing styling rules
 *
 * @module mnmo-components/textinput
 */
import {PropTypes} from 'react';
import render from './templates/textinput.jsx';

var propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    styles: PropTypes.object
};
var defaultProps = {
    styles: {div: {}, input: {}}
};

class TextInput {
    constructor() {
        this.render = () => render(this.props);
    }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
