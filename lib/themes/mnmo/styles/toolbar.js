import shared from './shared';
const styles = {
    menu: {
        position: 'fixed',
        width: '100%',
        lineHeight: shared.menu.lineHeight + 'px',
        padding: 8,
        margin: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: '1px solid #000'
        
    }
};

export default () => styles;