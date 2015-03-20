/**
 * The primary button of a form
 *
 * @class
 * @module mnmo-components/submit
 */
 import render from './templates/submit.jsx';

var defaultProps = {
    styles: { div:{}, input: {}}
};

class Submit {
    constructor() {
        this.render = () => render(this.props);
    }    
}
Submit.defaultProps = defaultProps;

export default Submit;