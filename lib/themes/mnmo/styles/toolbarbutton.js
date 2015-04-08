import shared from './shared';
const styles = {
    button: {
        border: 0,
        padding: 0,
        background: 'none',
        float: 'left'
    },
    menuToggle: {
        lineHeight: shared.menu.lineHeight + 'px',
        width: shared.menu.lineHeight,
        height: shared.menu.lineHeight,
        overflow: 'hidden',
        fontSize: shared.menu.lineHeight
        
    }
};

export default () => styles;