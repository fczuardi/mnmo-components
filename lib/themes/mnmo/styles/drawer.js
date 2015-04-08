import shared from './shared';
const borderWidth = 2;
const backgroundColor = shared.colors.gray[5];
const styles = {
    //use negative margin-left to hide the drawer
    div: {
        minWidth: 300 - 2 * borderWidth,
        borderRight: borderWidth + 'px solid ' + shared.colors.gray[2],
        borderLeft: borderWidth + 'px solid ' + backgroundColor,
        backgroundColor: backgroundColor,
        height: '100%',
        float: 'left',
        transitionProperty: 'margin-left',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
        transitionDelay: '0s'
    }
};

export default () => styles;
