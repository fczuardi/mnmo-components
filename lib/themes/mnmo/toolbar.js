import defaultStyles from './styles/toolbar';
import Toolbar from '../../toolbar';

class MnmoToolbar extends Toolbar {}
MnmoToolbar.defaultProps = {
    styles: defaultStyles()
};

export default MnmoToolbar;
