import defaultStyles from './styles/checkbox';
import Checkbox from '../../checkbox';

class MnmoCheckbox extends Checkbox {}
MnmoCheckbox.defaultProps = {
    checked: false,
    styles: defaultStyles
};

export default MnmoCheckbox;
