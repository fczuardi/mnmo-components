import defaultStyles from './styles/multipicker';
import MultiPicker from '../../multipicker';

class MnmoMultiPicker extends MultiPicker {}

MnmoMultiPicker.defaultProps = {
    styles: defaultStyles()
};

export default MnmoMultiPicker;
