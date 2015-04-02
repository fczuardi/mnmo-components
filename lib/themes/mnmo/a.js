import {DOM} from 'react';
import merge from 'lodash/object/merge';
import defaultStyles from './styles/a';

class A {
    render() {
        let props = merge({}, this.props);
        props.style = props.styles.a;
        props.target = 'blank';
        return DOM.a(props);
    }
}
A.defaultProps = {
    styles: defaultStyles()
};

export default A;
