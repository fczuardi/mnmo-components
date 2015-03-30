import defaultStyles from './styles/radio';
import RadioButton from '../../radio';
import merge from 'lodash/object/merge';

class MnmoRadioButton extends RadioButton {
    render() {
        if (this.props.isBox){
            merge(this.props.styles, this.props.styles.box);
        }
        return super.render(this.props);
    }
}
MnmoRadioButton.defaultProps = {
    checked: false,
    styles: defaultStyles()
};

export default MnmoRadioButton;
