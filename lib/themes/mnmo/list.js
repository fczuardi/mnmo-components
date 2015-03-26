import defaultStyles from './styles/list';
import List from '../../list';

class MnmoList extends List {}
MnmoList.defaultProps = {
    styles: defaultStyles()
};

export default MnmoList;
