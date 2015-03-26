import shared from './shared';
const lineHeight = '47px';
const styles = {
    li: {
        borderTop: '1px solid ' + shared.colors.gray[4],
        lineHeight: lineHeight
    },
    input: {
        // display: 'none'
        float: 'right'
    },
    label: {
        color: '#000',
        fontFamily: 'Roboto',
        lineHeight: 2.77, //near 47px
        display: 'block',
        width: '100%',
        height: lineHeight,
        cursor: 'pointer'
    }
};

export default () => styles;