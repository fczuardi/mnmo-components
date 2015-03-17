/**
 * A checkbox widget with custom label and checked/unchecked images
 *
 * @class
 * @param {string} id - an id for the checkbox
 * @param {boolean} [checked=false] - whether the box starts checked
 * @param {Function} [onChange] - a function to be called when the state of
 *                          the html input changes, **will render as disabled
 *                          if the property is undefined**
 * @param {string} [name] - the html name attribute for the input element
 * @param {Object} [styles] - an object containing styling rules
 * @param {Object} [styles.input] - style to be applied on the html input
 * @param {Object} [styles.label] - style to be applied on the html label
 * @param {Object} [styles.checked.input] - the object containing styles to be
 *                                          merged on top of of styles.input
 *                                          if p.checked is true
 * @param {Object} [styles.checked.label] - the object containing styles to be
 *                                          merged on top of of styles.label
 *                                          if p.checked is true
 * @param {string | ...React.Component} [children] - the content of the label
 *
 * @module mnmo-components/checkbox
 */
import {PropTypes} from 'react';
import objectAssign from 'object-assign';
import render from './templates/checkbox.jsx';

var propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    styles: PropTypes.object
};

var defaultProps = {
    checked: false,
    styles: {input: {}, label: {}}
};

class Checkbox {
    constructor() {
        this.render = () => {
            var p = JSON.parse(JSON.stringify(this.props));

            //merge checked styles if the checked property is true
            if (p.checked){
                for (var ruleName in p.styles.checked){
                    objectAssign(
                        p.styles[ruleName],
                        p.styles.checked[ruleName]
                    );
                }
            }
            //only enable the checkbox html input element
            //when there is an onChange function set
            p.disabled = (p.onChange === undefined);

            return render(p);
        };
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
