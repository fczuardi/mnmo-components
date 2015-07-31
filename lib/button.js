
import render from './templates/button.jsx';
import merge from 'lodash/object/merge';

var defaultProps = {
    styles: { div: {}, input: {}}
};

class Button {
    constructor() {
        this.render = () => {
            var p = merge({}, this.props);

            //merge disabled styles if the checked property is true
            if (p.disabled){
                merge(p.styles, p.styles.disabled);
            }

            //merge disabled styles if the checked property is true
            if (p.inside){
                merge(p.styles, p.styles.inside);
            }
            
            return render(p);
        };
    }
}
Button.defaultProps = defaultProps;

export default Button;
