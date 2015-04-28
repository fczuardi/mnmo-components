import template from './templates/drawer.jsx';
import merge from 'lodash/object/merge';

var defaultProps = {
    styles: { div: {}, header: {}, title: {}}
};

class Drawer {
    render() {
        let p = merge({}, this.props),
            drawerWidth = p.styles.div.width;
        if (p.container) {
            merge(p.styles, p.styles.container);
        }
        if (p.panelsOpened > 0) {
            drawerWidth = p.panelsOpened * (drawerWidth + 2 * p.styles.div.borderWidth);
            p.styles.div.width = drawerWidth;
        }
        if (p.container){
            merge(p.styles.div, {marginLeft: -drawerWidth});
        }
        if (p.fullscreen){
            merge(p.styles.div, p.styles.fullscreen.div);
        }
        return template(p);
    }
}

Drawer.defaultProps = defaultProps;

export default Drawer;
