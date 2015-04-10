import {Children, DOM} from 'react';
import shared from './styles/shared';
import merge from 'lodash/object/merge';
import defaultStyles from './styles/a';

class A {
    render() {
        let p = merge({}, this.props),
            newChildren = [];
        p.style = p.styles.a;
        p.target = 'blank';
        //copy any existing label to the newChildren array
        Children.forEach(p.children, function(child){
            newChildren.push(child);
        });
        if (p.type === 'panel'){
            newChildren.push(DOM.i({
                'data-icon': shared.icons.chevronRight,
                style: p.styles.icon
            }
            ));
            p.children = newChildren;
        }
        return DOM.a(p);
    }
}
A.defaultProps = {
    styles: defaultStyles()
};

export default A;
