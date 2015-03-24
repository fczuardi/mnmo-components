import shared from './shared';
let w = 89;
let styles = {
    div: {
        display: 'block',
        float: 'left',
        marginLeft: 6,
        width: w,
        height: w,
        borderRadius: shared.input.borderRadius,
        backgroundColor: shared.colors.blue[1]
    },
    input: {
        display: 'none'
    },
    label: {
        display: 'table-cell',
        width: w,
        height: w,
        cursor: 'pointer',
        fontFamily: 'Roboto Thin',
        fontSize: 55,
        color: '#fff',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    first: {
        div: {
            marginLeft: 0
        }
    },
    checked: {
        div: {
            backgroundColor: shared.colors.blue[0]
        },
        input: {
            
        },
        label: {
        }
    }
};
export default () => styles;