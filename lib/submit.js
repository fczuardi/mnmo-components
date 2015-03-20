/**
 * The primary button of a form
 *
 * @class
 * @module mnmo-components/submit
 */
import render from './templates/submit.jsx';
import objectAssign from 'object-assign';

var defaultProps = {
    styles: { div:{}, input: {}}
};

class Submit {
    constructor() {
        this.render = () => {
            var p = objectAssign({}, this.props);
            //merge disabled styles if the checked property is true
            if (p.disabled){
                p.styles = JSON.parse(JSON.stringify(p.styles));
                for (var ruleName in p.styles.disabled){
                    objectAssign(
                        p.styles[ruleName],
                        p.styles.disabled[ruleName]
                    );
                }
            }
            return render(p);
        };
    }    
}
Submit.defaultProps = defaultProps;

export default Submit;