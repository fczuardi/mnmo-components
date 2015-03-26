import shared from './shared';
const border = '1px solid ' + shared.colors.gray[2];
const styles = {
    ol: {
        backgroundColor: '#fff',
        borderTop: border,
        borderBottom: border,
        paddingLeft: 20
    }
};

export default () => styles;