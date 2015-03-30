import defaultStyles from './styles/checkbox';
import Checkbox from '../../checkbox';
import merge from 'lodash/object/merge';

class MnmoCheckbox extends Checkbox {
    render() {
        let p = merge({}, this.props);
        if (p.isItem){
            merge(p.styles, p.styles.item);
        }
        return super.render(p);
    }
}
MnmoCheckbox.defaultProps = {
    checked: false,
    styles: defaultStyles
};

export default MnmoCheckbox;
