import shared from './shared';
let style = {
    a: {
        color: '#000',
        display: 'block',
        width: '100%',
        border: 'none',
        height: shared.menu.lineHeight
    },
    icon: {
        color: shared.colors.gray[2],
        float: 'right'
    }
};

export default () => style;
