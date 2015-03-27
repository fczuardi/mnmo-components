/**
 * The primary button of a form
 *
 * @class
 * @module mnmo-components/submit
 */
import render from './templates/submit.jsx';
import merge from 'lodash/object/merge';

var defaultProps = {
    styles: { div:{}, input: {}}
};

class Submit {
    constructor() {
        this.render = () => {
            var p = merge({}, this.props);
            
            //merge disabled styles if the checked property is true
            if (p.disabled){
                merge(p.styles, p.styles.disabled);
            }
            
            return render(p);
        };
    }    
}
Submit.defaultProps = defaultProps;

export default Submit;