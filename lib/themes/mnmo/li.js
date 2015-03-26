import defaultStyles from './styles/li';
import LI from '../../li';

class MnmoLI extends LI {}
MnmoLI.defaultProps = {
    styles: defaultStyles()
};

export default MnmoLI;
