const borderRadius = 20;
const switchWidth = 55;
const switchHeight = 34;
const switchHandleWidth = 30;
const styles = {
    div: {
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: switchHeight + 'px'
    },
    input: {
        display: 'none'
    },
    label: {
        cursor: 'pointer',
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
        borderRadius: borderRadius
    },
    checked: {
        input: {
            
        },
        label: {
            
        },
        outerDiv: {
            backgroundColor: '#4dd865'
        },
        innerDiv: {
            left: switchWidth - switchHandleWidth - 2,
        }
    }
};

export default () => styles;
