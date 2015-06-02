import shared from './shared';
const lineHeight = shared.menu.lineHeight;
const borderHeight = 1;
const verticalPadding = 5;
const styles = {
    li: {
        listStyle: 'none',
        borderTop: borderHeight + 'px solid ' + shared.colors.gray[4],
        lineHeight: lineHeight + 'px',
        marginTop: -borderHeight,
        padding: verticalPadding,
        paddingRight: 2 * verticalPadding,
        color: '#000',
        fontFamily: 'Roboto',
        position: 'relative'
    },
    dragHandle: {
        width: 23,
        height: 40,
        position: 'absolute',
        left: -10,
        color: '#ccc',
        fontSize: 20,
        lineHeight: '35px'
    }
};

export default () => styles;
