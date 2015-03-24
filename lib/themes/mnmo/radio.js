import defaultStyles from './styles/radio';
import RadioButton from '../../radio';

class MnmoRadioButton extends RadioButton {}
MnmoRadioButton.defaultProps = {
    checked: false,
    styles: defaultStyles()
};

export default MnmoRadioButton;
