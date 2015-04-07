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
        fontFamily: 'Roboto'
    }
};

export default () => styles;
