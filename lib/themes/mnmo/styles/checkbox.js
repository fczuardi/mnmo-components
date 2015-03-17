var icon = {
        off: 'url(img/icons/checkbox_unchecked.png)',
        on: 'url(img/icons/checkbox_checked_blue.png)'
    },
    iconWidth = 24,
    fontSize = 17,
    labelMarginLeft = 10,
    letterSpacing = 0,
    lineHeight = 1.428571429,
    paddingTop = iconWidth - fontSize;

//------------------------------------------------------------------------------

export default {
    //hide the native widget
    input: {
        display: 'none'
    },

    //use the icon as background of the label and reserve the space with padding
    label: {
        paddingTop: paddingTop,
        lineHeight: lineHeight,

        //icon
        backgroundImage: icon.off,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        paddingLeft: iconWidth + labelMarginLeft,

        //text label
        fontSize: fontSize,
        letterSpacing: letterSpacing,
        verticalAlign: 'text-bottom'
    },

    checked: {
        input: {
        },
        label: {
            backgroundImage: icon.on
        }
    }
};
