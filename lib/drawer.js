/**
 * Navigation Drawer
 * 
 * @class
 * 
 * 
 */
import render from './templates/div.jsx';

var defaultProps = {
    styles: { div: {}}
};

class Drawer {
    constructor() {
        this.render = () => render(this.props);
    }
}

Drawer.defaultProps = defaultProps;

export default Drawer;