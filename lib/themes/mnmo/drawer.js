import defaultStyles from './styles/drawer';
import Drawer from '../../drawer';

class MnmoDrawer extends Drawer {}
MnmoDrawer.defaultProps = {
    styles: defaultStyles()
};

export default MnmoDrawer;
