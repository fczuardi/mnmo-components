import shared from './shared';
import merge from 'lodash/object/merge';
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
            // backgroundColor: shared.colors.yellow[1]
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
                // backgroundColor: shared.colors.yellow[0]
                backgroundColor: shared.colors.blue[0]
            }
        }
    },

    //menuitem style
    item: shared.inputCheckItem,

    rowCell: {
        div: {
            display: 'table-cell',
            textAlign: 'center'
        },
        label: merge({}, shared.inputCheckItem.label, {
            width: 'auto'
        }),
        icon: merge({}, shared.inputCheckItem.icon, {
            float: 'none',
            paddingRight: 4
        }),
        checked: merge({}, shared.inputCheckItem.checked)
    }
};
export default () => styles;
