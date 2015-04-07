/**
 * A container for list items
 *
 * @class
 *
 *
 */
import render from './templates/list.jsx';

var defaultProps = {
    styles: { ol: {}}
};

class List {
    constructor() {
        this.render = () => render(this.props);
    }
}

List.defaultProps = defaultProps;

export default List;
