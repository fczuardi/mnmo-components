import defaultStyles from './styles/textinput';
import TextInput from '../../textinput';

class MnmoTextInput extends TextInput {}
MnmoTextInput.defaultProps = {
    checked: false,
    styles: defaultStyles
};

export default MnmoTextInput;
