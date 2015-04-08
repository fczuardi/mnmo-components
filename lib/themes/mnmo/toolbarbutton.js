import {DOM} from 'react';
import defaultStyles from './styles/toolbarbutton';
import merge from 'lodash/object/merge';

class ToolbarButton {
    render() {
        let p = merge({}, this.props);
        p.style = p.styles.button;
        if (p.type === 'menuToggle'){
            p['data-icon'] = 'a';
            merge(p.style, p.styles.menuToggle);
        }
        return DOM.button(p);
    }
}

ToolbarButton.defaultProps = {
    styles: defaultStyles()
};

export default ToolbarButton;