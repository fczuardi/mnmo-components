/**
 * List item
 * 
 * @class
 * 
 * 
 */
import render from './templates/li.jsx';

var defaultProps = {
    styles: { li: {}, input: {}, label: {}}
};

class LI {
    constructor() {
        this.render = () => render(this.props);
    }
}

LI.defaultProps = defaultProps;

export default LI;