import template from './templates/drawer.jsx';
import merge from 'lodash/object/merge';
import {Component, findDOMNode} from 'react';

var defaultProps = {
    styles: { div: {}, header: {}, title: {}}
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
        if (p.container) {
            merge(p.styles, p.styles.container);
        }
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
