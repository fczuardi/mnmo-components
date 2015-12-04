import template from './templates/drawer.jsx';
import merge from 'lodash/object/merge';

var defaultProps = {
    styles: { div: {}, header: {}, title: {}}
};

class Drawer {
    render() {
        let p = merge({}, this.props);
        if (p.fullHeight){
            merge(p.styles.div, p.styles.fullHeight.div);
        }
        if (p.fullscreen){
            merge(p.styles.div, p.styles.fullscreen.div);
        }
        return template(p);
    }
}

Drawer.defaultProps = defaultProps;

export default Drawer;
