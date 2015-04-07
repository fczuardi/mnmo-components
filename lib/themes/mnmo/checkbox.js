import defaultStyles from './styles/checkbox';
import shared from './styles/shared';
import Checkbox from '../../checkbox';
import merge from 'lodash/object/merge';
import {Children, DOM} from 'react';

class MnmoCheckbox extends Checkbox {
    render() {
        let newChildren = [],
            p = merge({}, this.props),
            iconElement;
        //copy any existing label to the newChildren array
        Children.forEach(p.children, function(child){
            newChildren.push(child);
        });
        //apply item styles
        if (p.isItem){
            merge(p.styles, p.styles.item);
        }
        //apply checked styles to icon element if checked
        if (p.checked) {
            merge(p.styles.icon, p.styles.checked.icon);
        }
        //items have icon element at the end while regular checkbox
        //have the icon element at the beginning
        iconElement = DOM.i( {
            key: 'check',
            'data-icon': shared.icons.check,
            style: p.styles.icon
        });
        if (p.isItem){
            newChildren.push(iconElement);
        } else {
            newChildren.unshift(iconElement);
        }
        p.children = newChildren;
        return super.render(p);
    }
}
MnmoCheckbox.defaultProps = {
    checked: false,
    styles: defaultStyles
};

export default MnmoCheckbox;
