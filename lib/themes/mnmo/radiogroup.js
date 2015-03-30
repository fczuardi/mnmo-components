import {DOM} from 'react';

class RadioGroup {
    render() {
        console.log('this.props.children', this.props.children);
        return DOM.div({style: {
                marginLeft: -6
            }}, this.props.children
        );
    }
}

export default RadioGroup;