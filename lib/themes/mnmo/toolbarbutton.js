import {Children, DOM} from 'react';
import defaultStyles from './styles/toolbarbutton';
import merge from 'lodash/object/merge';

class ToolbarButton {
    render() {
        let p = merge({}, this.props),
            newChildren = [],
            iconElement;
        Children.forEach(p.children, function(child){
            newChildren.push(child);
        });        p.style = p.styles.button;
        if (p.type === 'menuToggle'){
            p['data-icon'] = 'a';
            merge(p.style, p.styles.menuToggle);
        }
        if (p.type === 'dialogToggle'){
            iconElement = DOM.i({
                key: 'icon',
                'data-icon': p.closed ? 'i' : 'j',
                style: p.styles.dialogToggle.icon
            });
            if (!p.disabled) {
                newChildren.push(iconElement);
            }
            merge(p.style, p.styles.dialogToggle.button);
        }
        return DOM.button(p, newChildren);
    }
}

ToolbarButton.defaultProps = {
    styles: defaultStyles()
};

export default ToolbarButton;