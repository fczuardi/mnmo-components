import {DOM} from 'react';

class RadioGroup {
    render() {
        return DOM.div({style: {
                marginLeft: -6
            }}, this.props.children
        );
    }
}

export default RadioGroup;
