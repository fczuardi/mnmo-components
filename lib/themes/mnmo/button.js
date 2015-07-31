import defaultStyles from './styles/submit';
import Button from '../../button';

class MnmoButton extends Button {}
MnmoButton.defaultProps = {
    styles: defaultStyles()
};

export default MnmoButton;
