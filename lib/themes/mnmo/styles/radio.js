import shared from './shared';
let styles = {
    div: {
        float: 'left',
        marginLeft: 6
    },
    input: {
        display: 'none'
    },
    label: {
        display: 'table-cell',
        cursor: 'pointer',
        fontFamily: 'Roboto Thin',
        fontSize: 55,
        width: 89,
        height: 89,
        color: '#fff',
        textAlign: 'center',
        verticalAlign: 'middle',
        borderRadius: shared.input.borderRadius,
        backgroundColor: shared.colors.blue[0]
    },
    first: {
        div: {
            marginLeft: 0
        }
    },
    checked: {
        div: {
            
        },
        input: {
            
        },
        label: {
            backgroundColor: shared.colors.blue[1]
        }
    }
};
export default () => styles;