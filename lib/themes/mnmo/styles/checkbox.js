import shared from './shared';

var iconWidth = 24,
    padding = 3,
    lineHeight = (iconWidth + (2 * padding)) + 'px',
    labelMarginLeft = 10;

export default {
    div: {},
    input: {
        display: 'none'
    },
    label: {
        cursor: 'pointer',
        lineHeight: lineHeight
    },
    icon: {
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'middle',
        width: iconWidth,
        height: iconWidth,
        borderRadius: iconWidth / 2,
        lineHeight: (iconWidth + padding) +'px',
        backgroundColor: shared.colors.gray[0],
        color: shared.colors.gray[1],
        marginRight: labelMarginLeft
    },

    checked: {
        input: {
        },
        label: {
        },
        icon: {
            backgroundColor: shared.colors.blue[1],
            color: '#fff',
        }
    },
    
    item: shared.inputCheckItem
};
