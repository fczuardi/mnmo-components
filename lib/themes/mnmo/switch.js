import defaultStyles from './styles/switch';
import Checkbox from '../../checkbox';
import objectAssign from 'object-assign';
import {Children, DOM} from 'react';

class MnmoSwitch extends Checkbox {
    render (){
        let newChildren = [];
        let newProps = objectAssign({}, this.props);
        
        if (newProps.checked){
            objectAssign(newProps.styles.outerDiv, newProps.styles.checked.outerDiv);
            objectAssign(newProps.styles.innerDiv, newProps.styles.checked.innerDiv);
        }

        //insert 2 div elements after last child
        Children.forEach(newProps.children, function(child){
            newChildren.push(child);
        });
        newChildren.push(DOM.div( {style: newProps.styles.outerDiv},
            DOM.div( {style: newProps.styles.innerDiv})
        ));
        newProps.children  = newChildren;
        return super.render(newProps);
    }
}
MnmoSwitch.defaultProps = {
    checked: false,
    styles: defaultStyles()
};

export default MnmoSwitch;
