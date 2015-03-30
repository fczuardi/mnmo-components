/**
 * RadioButton: a single radio button with label
 *
 * @class
 * @param {string} id - an id for the input
 * @param {boolean} [checked=false] - whether the radio starts checked
 * @param {Function} [onChange] - a function to be called when the state of
 *                          the html input changes, **will render as disabled
 *                          if the property is undefined**
 * @param {string} [name] - the html name attribute for the input element
 * @param {string | ...React.Component} [children] - the content of the label
 * @param {string} [key]
 * @param {string} [value]
 * @param {Object} [styles] - an object containing styling rules
 * @param {Object} [styles.div] - style to be applied on the html div
 * @param {Object} [styles.input] - style to be applied on the html input
 * @param {Object} [styles.label] - style to be applied on the html label
 * @param {Object} [styles.checked.input] - the object containing styles to be
 *                                          merged on top of of styles.input
 *                                          if p.checked is true
 * @param {Object} [styles.checked.label] - the object containing styles to be
 *                                          merged on top of of styles.label
 *                                          if p.checked is true
 *
 * @module mnmo-components/radio
 */
import template from './templates/radio.jsx';
import merge from 'lodash/object/merge';

var defaultProps = {
    checked: false,
    styles: {div: {}, input: {}, label: {}}
};

class RadioButton {
    render(props) {
        props = props || this.props;
        let p = merge({}, props);

        //merge checked styles if the checked property is true
        if (p.checked){
            merge(p.styles, p.styles.checked);
        }

        //only enable the radio html input element
        //when there is an onChange function set
        p.disabled = (p.onChange === undefined);
        return template(p);
    }
}

RadioButton.defaultProps = defaultProps;

export default RadioButton;