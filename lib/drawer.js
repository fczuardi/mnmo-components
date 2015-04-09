import template from './templates/drawer.jsx';
import merge from 'lodash/object/merge';
import {Component, findDOMNode} from 'react';
const toggleButtonSpace = 50;

var defaultProps = {
    styles: { div: {}, header: {}, title: {}}
};

class Drawer extends Component{
    constructor() {
        super();
        this.state = {
            width: null
        };
        this.componentDidMount = this.updateWidthValue.bind(this);
        this.componentDidUpdate = this.updateWidthValue.bind(this);
    }
    updateWidthValue() {
        if (this.state.width !== findDOMNode(this).offsetWidth){
            this.setState({
                width: findDOMNode(this).offsetWidth
            });
        }
    }
    render() {
        let p = merge({}, this.props);
        let maxWidth = window.innerWidth - toggleButtonSpace;
        let drawerWidth = this.state.width;
        if (p.container) {
            merge(p.styles, p.styles.container);
        }
        if (p.closed) {
            if (this.state.width !== null){
                merge(p.styles.div, {marginLeft: -drawerWidth});
            }
        } else {
            //if open menu don't fit the screen width, 
            //open just enough to display the last pannel
            if (this.state.width > maxWidth) {
                merge(p.styles.div, {
                    marginLeft: -drawerWidth + maxWidth
                });
            }
        }
        return template(p);
    }
}

Drawer.defaultProps = defaultProps;

export default Drawer;
