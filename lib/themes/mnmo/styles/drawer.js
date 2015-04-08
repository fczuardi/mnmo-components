import shared from './shared';
const minWidth = 320;
const buttonSpace = 20;
const borderWidth = 2;
const backgroundColor = shared.colors.gray[5];
const styles = {
    //use negative margin-left to hide the drawer
    div: {
        minWidth: minWidth - 2 * borderWidth,
        marginLeft: 0,
        position: 'relative',
        borderRight: borderWidth + 'px solid ' + shared.colors.gray[2],
        borderLeft: borderWidth + 'px solid ' + backgroundColor,
        backgroundColor: backgroundColor,
        height: '100%',
        float: 'left',
        transitionProperty: 'margin-left',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
        transitionDelay: '0s'
    },
    header: {
        textAlign: 'center',
        lineHeight: shared.menu.lineHeight + 'px'
    },
    title: {
        color: '#000',
        fontFamily: 'Roboto Bold',
        fontSize: 16,
        letterSpacing: 0.5,
        margin: 5
    },
    container: {
        div: {
            minWidth: minWidth - buttonSpace,
            borderLeft: 0,
            borderRight: 0
        }
    }
};

export default () => styles;
