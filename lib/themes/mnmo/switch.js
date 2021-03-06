import defaultStyles from './styles/switch';
import Checkbox from '../../checkbox';
import merge from 'lodash/object/merge';
import shared from './styles/shared';
import {Children, DOM} from 'react';

class MnmoSwitch extends Checkbox {
    render (){
        let newChildren = [];
        let newProps = merge({}, this.props);

        //merge user passed styles on top of themes' defaults
        newProps.styles = merge(newProps.baseDefaultStyles, newProps.styles);

        //apply item styles if isItem property is true
        //used when the switch is one item of a list group
        //like when inside a drawer menu
        if (newProps.isItem){
            merge(newProps.styles, newProps.styles.item);
        }

        if (newProps.isMiddleSwitch){
            merge(newProps.styles, newProps.styles.middleSwitch);
        }

        //apply checked styles if checked property is true
        if (newProps.checked){
            merge(newProps.styles, newProps.styles.checked);
        }

        let switchButtonAttributes = {style: newProps.styles.innerDiv};
        if (newProps.isMiddleSwitch){
            switchButtonAttributes['data-icon'] = newProps.checked ?
                                                    shared.icons.chevronRight :
                                                    shared.icons.chevronLeft;
        }
        let switchElement = DOM.div( {key: 'o', style: newProps.styles.outerDiv},
            DOM.div( switchButtonAttributes)
        );

        // adds switch divs after 1st child if isMiddleSwitch…
        Children.forEach(newProps.children, function(child, index){
            if (index === 1 && newProps.isMiddleSwitch) {
                newChildren.push(switchElement);
            }
            newChildren.push(child);
        });
        // …or adds switch divs after last child if regular switch
        if (! newProps.isMiddleSwitch) {
            newChildren.push(switchElement);
        }
        
        newProps.children = newChildren;
        return super.render(newProps);
    }
}
MnmoSwitch.defaultProps = {
    checked: false,
    baseDefaultStyles: defaultStyles()
};

export default MnmoSwitch;
