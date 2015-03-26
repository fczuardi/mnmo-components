import shared from './shared';
const styles = {
    li: {
        borderTop: '1px solid ' + shared.colors.gray[3],
        lineHeight: 2.77 //near 47px
    },
    input: {
        
    },
    label: {
        color: '#000',
        fontFamily: 'Roboto',
        display: 'block',
        width: '90%',
        float: 'left'
    }
};

export default () => styles;