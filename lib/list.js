/**
 * A container for list items
 *
 * @class
 *
 *
 */
import template from './templates/list.jsx';
import merge from 'lodash/object/merge';

var defaultProps = {
    styles: { ol: {}}
};

class List {
    render() {
        let p = merge({}, this.props);
        if (p.bottomSpace === true) {
            merge(p.styles, p.styles.bottomSpace);
        }
        return template(p);
    }
}

List.defaultProps = defaultProps;

export default List;
