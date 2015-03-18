/**
 * A container for form grouping user input elements
 *
 * @class
 * @param {string} [legend] - a label for this grouping
 * @param {Object} [styles] - an object containing styling rules
 * @param {Object} [styles.fieldset] - style to be applied on the html fieldset
 * @param {Object} [styles.legend] - style to be applied on the html legend
 * @param {...React.Component} [children] - the elements inside this set
 *
 * @module mnmo-components/fieldset
 */
import {PropTypes} from 'react';
import render from './templates/fieldset.jsx';

var propTypes = {
    legend: PropTypes.string,
    styles: PropTypes.object
};

var defaultProps = {
    legend: null,
    styles: {fieldset: {}, legend: {}}
};

class FieldSet {
    constructor() {
        this.render = () => render(this.props);
    }
}

FieldSet.propTypes = propTypes;
FieldSet.defaultProps = defaultProps;

export default FieldSet;
