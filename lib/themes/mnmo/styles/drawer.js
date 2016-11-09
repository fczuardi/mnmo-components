import shared from './shared';
import merge from 'lodash/object/merge';
// const minWidth = window.innerWidth > 320 ? 320 : 270;
const minWidth = 320;
const borderWidth = 2;
const backgroundColor = shared.colors.gray[5];
const margin = 5;
const rightMargin = 15;
const styles = {
    //use negative margin-left to hide the drawer
    div: {
        width: minWidth - 2 * borderWidth,
        display: 'block',
        // borderWidth: borderWidth,
        // borderStyle: 'solid',
        // borderTopWidth: 0,
        // borderBottomWidth: 0,
        // borderRightColor: shared.colors.gray[2],
        // borderLeftColor: backgroundColor,
        backgroundColor: backgroundColor
    },
    header: {
        textAlign: 'center',
        lineHeight: shared.menu.lineHeight + 'px',
        position: 'relative',
        backgroundColor: shared.colors.gray[6],
        borderBottom: '1px solid ' + shared.colors.gray[2]
    },
    title: {
        fontSize: 16
    },
    close: {
        position: 'absolute',
        top: 5,
        left: margin,
        color: '#ff412f',
        fontSize: 15,
        textDecoration: 'none',
        background: 'none',
        border: 0,
        padding: 0
    },
    save: {
        position: 'absolute',
        top: 5,
        right: rightMargin,
        color: '#ff412f',
        fontSize: 15,
        textDecoration: 'none',
        background: 'none',
        border: 0,
        padding: 0
    },
    fullscreen: {
        div: {
            width: '100%',
            height: '100%'
        }
    },
    fullHeight: {
        div: {
            height: '100%'
        }
    }
};

merge(styles.title, shared.menu.title);

export default () => styles;
