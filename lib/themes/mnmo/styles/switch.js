const borderRadius = 20;
const switchWidth = 55;
const switchHandleWidth = 30;
const styles = {
    div: {
        display: 'inline-block',
        verticalAlign: 'middle'    
    },
    input: {
        display: 'none'
    },
    label: {
    },
    outerDiv: {
        width: switchWidth,
        height: 34,
        backgroundColor: '#ccc',
        borderRadius: borderRadius
    },
    innerDiv: {
        width: 30,
        height: 30,
        position: 'relative',
        top: 2,
        left: 2,
        backgroundColor: '#fff',
        cursor: 'pointer',
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
