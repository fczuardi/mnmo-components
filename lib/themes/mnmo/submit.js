import defaultStyles from './styles/submit';
import Submit from '../../submit';

class MnmoSubmit extends Submit {}
console.log(defaultStyles());
MnmoSubmit.defaultProps = {
    styles: defaultStyles()
};

export default MnmoSubmit;
