/**
 * Navigation Drawer
 *
 * @class
 *
 *
 */
import template from './templates/div.jsx';
import merge from 'lodash/object/merge';
import {Component, findDOMNode} from 'react';

var defaultProps = {
    styles: { div: {}}
};

class Drawer extends Component{
    constructor() {
        super();
        this.state = {
            width: null
        };
    }
    componentDidMount() {
        this.setState({
            width: findDOMNode(this).offsetWidth
        });
    }
    render() {
        let p = merge({}, this.props);
        if (p.closed) {
            if (this.state.width !== null){
                merge(p.styles.div, {marginLeft: -this.state.width});
            }
        }
        return template(p);
    }
}

Drawer.defaultProps = defaultProps;

export default Drawer;
