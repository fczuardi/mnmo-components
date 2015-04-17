import shared from './shared';
import merge from 'lodash/object/merge';
const border = '1px solid ' + shared.colors.gray[3];
const styles = {
    title: {
        color: '#000',
        fontSize: 18,
        lineHeight: shared.menu.lineHeight + 'px',
        marginLeft: 20
    },
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

styles.title = merge({}, shared.menu.title, styles.title);

export default () => styles;
