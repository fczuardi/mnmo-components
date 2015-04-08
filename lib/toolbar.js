/**
 * A list of commands
 *
 * @class
 */
import template from './templates/toolbar.jsx';

var defaultProps = {
    styles: { menu: {}}
};

class Toolbar {
    render() {
        return template(this.props);
    }
}

Toolbar.defaultProps = defaultProps;

export default Toolbar;
