import defaultStyles from './styles/submit';
import Submit from '../../submit';

class MnmoSubmit extends Submit {}
MnmoSubmit.defaultProps = {
    styles: defaultStyles()
};

export default MnmoSubmit;
