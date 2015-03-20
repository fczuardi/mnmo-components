var icon = {
        off: 'url(img/icons/checkbox_unchecked.png)',
        on: 'url(img/icons/checkbox_checked_blue.png)'
    },
    iconWidth = 24,
    padding = 3,
    lineHeight = (iconWidth + (2 * padding)) + 'px',
    labelMarginLeft = 10;

//------------------------------------------------------------------------------

export default {
    //hide the native widget
    input: {
        display: 'none'
    },

    //use the icon as background of the label and reserve the space with padding
    label: {
        paddingTop: padding,
        paddingBottom: padding,
        lineHeight: lineHeight,

        //icon
        backgroundImage: icon.off,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        paddingLeft: iconWidth + labelMarginLeft,

    },

    checked: {
        input: {
        },
        label: {
            backgroundImage: icon.on
        }
    }
};
