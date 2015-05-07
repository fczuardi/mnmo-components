import shared from './shared';
const styles = {
    button: {
        border: 0,
        padding: 0,
        background: 'none',
        marginRight: 10
    },
    menuToggle: {
        lineHeight: shared.menu.lineHeight + 'px',
        width: shared.menu.lineHeight,
        height: shared.menu.lineHeight,
        overflow: 'hidden',
        fontSize: shared.menu.lineHeight,
        float: 'left'
    },
    dialogToggle: {
        button: {
            
        },
        icon: {
            fontSize: 23,
            lineHeight: '23px',
            verticalAlign: 'middle',
            paddingTop: 5,
            color: shared.colors.gray[0],
            marginLeft: 2
        }
    }
};

export default () => styles;