import shared from './shared';
const styles = {
    title: shared.menu.sectionTitle,
    row: {
        backgroundColor: '#fff',
        width: '100%',
        color: '#000',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        paddingTop: 10,
        boxSizing: 'border-box'
    },
    cell: {
        width: '50%',
        display: 'inline-block',
        padding: 10,
        boxSizing: 'border-box'
    },
    select: {
        width: '100%'
    }
};

export default () => styles;