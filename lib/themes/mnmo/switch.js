import defaultStyles from './styles/switch';
import Checkbox from '../../checkbox';
import merge from 'lodash/object/merge';
import {Children, DOM} from 'react';

class MnmoSwitch extends Checkbox {
    render (){
        let newChildren = [];
        let newProps = merge({}, this.props);

        //merge user passed styles on top of themes' defaults
        newProps.styles = merge(newProps._defaultStyles, newProps.styles);
        
        //apply item styles if isItem property is true
        //used when the switch is one item of a list group
        //like when inside a drawer menu
        if (newProps.isItem){
            merge(newProps.styles, newProps.styles.item);
        }

        //apply checked styles if checked property is true
        if (newProps.checked){
            merge(newProps.styles, newProps.styles.checked);
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
    _defaultStyles: defaultStyles()
};

export default MnmoSwitch;
