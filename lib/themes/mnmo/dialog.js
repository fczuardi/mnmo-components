import defaultStyles from './styles/dialog';
import {DOM} from 'react';
import merge from 'lodash/object/merge';

class MnmoDialog {
    render (){
        let style = merge({}, defaultStyles().div);
        style = (this.props.align === 'center') ? 
                    merge(style, defaultStyles().alignCenter) :
                (this.props.align === 'right') ? 
                    merge({}, style, defaultStyles().alignRight) : style;
        if (this.props.fullscreen) {
            merge(style, defaultStyles().fullscreen);
        }
        return DOM.div({style: style},
            this.props.children
        );
    }
}

export default MnmoDialog;
