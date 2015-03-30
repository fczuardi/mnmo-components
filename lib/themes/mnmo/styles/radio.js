import shared from './shared';
let w = 89;
let styles = {
    //basic
    div: {},
    input: {
        display: 'none'
    },
    label: {
        cursor: 'pointer'
    },
    checked: {},

    //box type style (like used by captcha answers)
    box: {
        div: {
            display: 'block',
            float: 'left',
            marginLeft: 6,
            width: w,
            height: w,
            borderRadius: shared.input.borderRadius,
            backgroundColor: shared.colors.blue[1]
        },
        input: {},
        label: {
            display: 'table-cell',
            width: w,
            height: w,
            fontFamily: 'Roboto Thin',
            fontSize: 55,
            color: '#fff',
            textAlign: 'center',
            verticalAlign: 'middle'
        },
            checked: {
            div: {
                backgroundColor: shared.colors.blue[0]
            }
        }
    },

    //menuitem style
    item: shared.inputCheckItem
};
export default () => styles;
