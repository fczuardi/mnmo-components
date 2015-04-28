import shared from './shared';
const border = '1px solid ' + shared.colors.gray[3];
const styles = {
    title: shared.menu.sectionTitle,
    ol: {
        backgroundColor: '#fff',
        borderTop: border,
        borderBottom: border,
        paddingLeft: 20,
        overflow: 'hidden',
        marginBottom: 1,
        marginTop: -1
    },
    bottomSpace: {
        ol: {
            marginBottom: 33
        }
    }
};

export default () => styles;
