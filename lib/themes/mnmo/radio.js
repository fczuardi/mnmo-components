import defaultStyles from './styles/radio';
import RadioButton from '../../radio';
import merge from 'lodash/object/merge';

class MnmoRadioButton extends RadioButton {
    render() {
        let p = merge({}, this.props);
        if (p.isBox){
            merge(p.styles, p.styles.box);
        }
        if (p.isItem){
            merge(p.styles, p.styles.item);
        }
        return super.render(p);
    }
}
MnmoRadioButton.defaultProps = {
    checked: false,
    styles: defaultStyles()
};

export default MnmoRadioButton;
