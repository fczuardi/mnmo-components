import shared from './shared';
const minWidth = window.innerWidth > 320 ? 300 : 270;
const borderWidth = 2;
const backgroundColor = shared.colors.gray[5];
const margin = 5;
const styles = {
    //use negative margin-left to hide the drawer
    div: {
        width: minWidth - 2 * borderWidth,
        display: 'block',
        float: 'left',
        marginLeft: 0,
        borderWidth: borderWidth,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightColor: shared.colors.gray[2],
        borderLeftColor: backgroundColor,
        backgroundColor: backgroundColor,
        height: '100%',
        transitionProperty: 'margin-left',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
        transitionDelay: '0s'
    },
    header: {
        textAlign: 'center',
        lineHeight: shared.menu.lineHeight + 'px',
        position: 'relative'
    },
    title: {
        color: '#000',
        fontFamily: 'Roboto Bold',
        fontSize: 16,
        letterSpacing: 0.5,
        margin: margin
    },
    close: {
        position: 'absolute',
        top: 0,
        left: margin,
        color: '#ff412f',
        fontSize: 15,
        textDecoration: 'none',
        background: 'none',
        border: 0,
        padding: 0
        
    },
    container: {
        div: {
            borderLeft: 0,
            borderRight: 0
        }
    }
};

export default () => styles;
