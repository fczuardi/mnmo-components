import template from './templates/drawer.jsx';
import merge from 'lodash/object/merge';
const toggleButtonSpace = 50;

var defaultProps = {
    styles: { div: {}, header: {}, title: {}}
};

class Drawer {
    render() {
        let p = merge({}, this.props),
            maxWidth = window.innerWidth - toggleButtonSpace,
            drawerWidth = p.styles.div.width;
        if (p.container) {
            merge(p.styles, p.styles.container);
        }
        if (p.panelsOpened > 0) {
            drawerWidth = p.panelsOpened * (drawerWidth + 2 * p.styles.div.borderWidth);
            p.styles.div.width = drawerWidth;
        }
        if (p.closed) {
            merge(p.styles.div, {marginLeft: -drawerWidth});
        } else {
            //if open menu don't fit the screen width, 
            //open just enough to display the last pannel
            if (drawerWidth > maxWidth) {
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
