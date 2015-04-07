import shared from './shared';
const borderRadius = 20;
const switchWidth = 55;
const switchHeight = shared.menu.lineHeight;
const switchHandleWidth = 30;
const styles = {
    input: {
        display: 'none'
    },
    label: {
        cursor: 'pointer'
    },
    outerDiv: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: switchWidth,
        height: switchHeight,
        backgroundColor: '#ccc',
        borderRadius: borderRadius
    },
    innerDiv: {
        cursor: 'pointer',
        width: 30,
        height: 30,
        position: 'relative',
        top: 2,
        left: 2,
        backgroundColor: '#fff',
        borderRadius: borderRadius,
        boxShadow: '-2px 5px 5px 0px rgba(0, 0, 0, 0.1)'
    },
    item: {
        input: {},
        label: {},
        outerDiv: {
            float: 'right'
        },
        innerDiv: {}
    },
    checked: {
        input: {},
        label: {},
        outerDiv: {
            backgroundColor: '#4cd764'
        },
        innerDiv: {
            left: switchWidth - switchHandleWidth - 2
        }
    }
};

export default () => styles;
