/**
 * List item
 *
 * @class
 *
 *
 */
import template from './templates/li.jsx';
import {Children, DOM} from 'react';
import merge from 'lodash/object/merge';

var defaultProps = {
    type: null,
    className: null,
    styles: { li: {}, input: {}, label: {}}
};

class LI {
    render() {
        let newChildren = [];
        let p = merge({}, this.props);

        if (p.haveHandle){
            let dragHandle = DOM.a({
                key: 'handle',
                draggable: true,
                'data-icon': 'a',
                className: p.handleClassName,
                style: p.styles.dragHandle
            });
            newChildren.push(dragHandle);
        }

        Children.forEach(p.children, function(child){
            newChildren.push(child);
        });



        p.children = newChildren;

        return template(p);
    }
}

LI.defaultProps = defaultProps;

export default LI;
