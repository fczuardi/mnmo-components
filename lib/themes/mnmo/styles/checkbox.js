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
        paddingTop: padding,
        paddingBottom: padding,
        paddingLeft: iconWidth + labelMarginLeft,
        lineHeight: lineHeight,
        backgroundImage: 'url(img/icons/checkbox_unchecked.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center'
    },

    checked: {
        input: {
        },
        label: {
            backgroundImage: 'url(img/icons/checkbox_checked_blue.png)'
        }
    },
    
    item: shared.inputCheckItem
};
