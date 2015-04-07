import defaultStyles from './styles/radio';
import shared from './styles/shared';
import RadioButton from '../../radio';
import merge from 'lodash/object/merge';
import {Children, DOM} from 'react';

class MnmoRadioButton extends RadioButton {
    render() {
        let p = merge({}, this.props),
            newChildren = [],
            iconElement;
        //copy any existing label to the newChildren array
        Children.forEach(p.children, function(child){
            newChildren.push(child);
        });
        //apply item styles
        if (p.isItem){
            merge(p.styles, p.styles.item);
        }
        //apply box styles
        if (p.isBox){
            merge(p.styles, p.styles.box);
        }
        //apply checked styles to icon element if checked
        if (p.checked) {
            merge(p.styles.icon, p.styles.checked.icon);
        }
        //custom icon element
        iconElement = DOM.i({
            key: 'check',
            'data-icon': shared.icons.check,
            style: p.styles.icon
        });
        if (p.isItem){
            newChildren.push(iconElement);
        }
        p.children = newChildren;
        return super.render(p);
    }
}
MnmoRadioButton.defaultProps = {
    checked: false,
    styles: defaultStyles()
};

export default MnmoRadioButton;
