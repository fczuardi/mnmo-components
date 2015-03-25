/**
 * An option selector/picker
 *
 * @class
 * @param {Object} [styles] - an object containing styling rules
 * @param {Object} [styles.div]
 * @param {Object} [styles.select]
 * @param {...React.DOM.option} [children] - option elements to be listed
 *
 * @module mnmo-components/select
 */
import render from './templates/select.jsx';

var defaultProps = {
    styles: {div: {}, select: {}}
};

class Select {
    constructor() {
        this.render = () => {
            if ((this.props.children === undefined) || (this.props.children.length === 0)){
                // console.warn('a Select component without <option> children will render null');
                return null;
            }
            return render(this.props);
        };
    }
}

Select.defaultProps = defaultProps;

export default Select;
